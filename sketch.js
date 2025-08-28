let video;
let poseNet;
let poses = [];

let repCount = 0;
let calories = 0;
let heightEstimate = 0;

let up = false;
let mode = "squats";

// Chart.js reference
let repsChart;
let chartData = {
  labels: [],
  datasets: [{
    label: "Reps Over Time",
    data: [],
    borderColor: "#6c63ff",
    backgroundColor: "rgba(108,99,255,0.3)",
    fill: true,
    tension: 0.3
  }]
};

// ---------- Setup ----------
function setup() {
  let canvas = createCanvas(640, 480);
  canvas.parent("canvas-container");

  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on("pose", results => poses = results);

  // Chart init
  let ctx = document.getElementById("repsChart").getContext("2d");
  repsChart = new Chart(ctx, {
    type: "line",
    data: chartData,
    options: {
      responsive: true,
      plugins: {
        legend: { labels: { color: "#fff" } }
      },
      scales: {
        x: { ticks: { color: "#fff" } },
        y: { ticks: { color: "#fff" } }
      }
    }
  });

  // Mode selector
  document.getElementById("mode-select").addEventListener("change", e => {
    mode = e.target.value;
    repCount = 0;
    calories = 0;
    updateDashboard();
  });

  // Dark mode toggle
  document.getElementById("dark-toggle").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
      document.body.style.background = "#f5f5f5";
      document.body.style.color = "#111";
    } else {
      document.body.style.background = "#111";
      document.body.style.color = "#fff";
    }
  });
}

function modelReady() {
  console.log("PoseNet Ready");
}

// ---------- Draw Loop ----------
function draw() {
  image(video, 0, 0, width, height);

  if (poses.length > 0) {
    let pose = poses[0].pose;

    drawKeypoints(pose);
    drawSkeleton(poses[0]);

    // Rep counting logic
    if (mode === "squats") {
      trackSquats(pose);
    } else if (mode === "pushups") {
      trackPushups(pose);
    } else if (mode === "jumpingjacks") {
      trackJumpingJacks(pose);
    } else if (mode === "handraises") {
      trackHandRaises(pose);
    }

    // Height estimation (head to ankle)
    if (pose.nose && pose.leftAnkle) {
      heightEstimate = dist(pose.nose.x, pose.nose.y, pose.leftAnkle.x, pose.leftAnkle.y);
    }
  }

  updateDashboard();
}

// ---------- Dashboard Update ----------
function updateDashboard() {
  // Convert px → cm → feet
  let cmPerPixel = 170 / 480; // approx conversion ratio
  let heightCm = heightEstimate * cmPerPixel;
  let heightFeet = heightCm / 30.48;

  document.getElementById("rep-count").textContent = repCount;
  document.getElementById("calories").textContent = calories.toFixed(1);
  document.getElementById("height").textContent =
    `${Math.round(heightCm)} cm (${heightFeet.toFixed(2)} ft)`;

  // Chart update every second
  if (repsChart && frameCount % 60 === 0) {
    chartData.labels.push(repsChart.data.labels.length + 1);
    chartData.datasets[0].data.push(repCount);
    repsChart.update();
  }
}

// ---------- Advanced Pose Helpers with Finger Tips ----------
function drawKeypoints(pose) {
  for (let kp of pose.keypoints) {
    if (kp.score > 0.2) {
      // Pulsing glow
      noStroke();
      fill(255, 0, 0, 180);
      ellipse(kp.position.x, kp.position.y, 18 + sin(frameCount * 0.2) * 4);
      fill(255, 0, 0);
      ellipse(kp.position.x, kp.position.y, 10);

      // Special highlight for head (nose)
      if (kp.part === "nose") {
        fill(0, 200, 255, 120);
        ellipse(kp.position.x, kp.position.y, 40);
      }
    }
  }

  // ---- Simulated finger tips (extend from wrists) ----
  if (pose.leftWrist && pose.leftElbow) {
    drawFingerTip(pose.leftElbow, pose.leftWrist);
  }
  if (pose.rightWrist && pose.rightElbow) {
    drawFingerTip(pose.rightElbow, pose.rightWrist);
  }
}

function drawFingerTip(elbow, wrist) {
  // Vector from elbow → wrist
  let dx = wrist.x - elbow.x;
  let dy = wrist.y - elbow.y;

  // Extend beyond wrist (~40% of vector length)
  let tipX = wrist.x + dx * 0.4;
  let tipY = wrist.y + dy * 0.4;

  // Draw glowing fingertip
  noStroke();
  fill(0, 255, 100, 180);
  ellipse(tipX, tipY, 14 + sin(frameCount * 0.3) * 3);
  fill(0, 255, 100);
  ellipse(tipX, tipY, 8);
}

function drawSkeleton(poseObj) {
  for (let [a, b] of poseObj.skeleton) {
    let col;

    // Color coding by body part
    if (["leftShoulder", "rightShoulder", "leftHip", "rightHip"].includes(a.part) ||
        ["leftShoulder", "rightShoulder", "leftHip", "rightHip"].includes(b.part)) {
      col = color(255); // torso = white
    } else if (a.part.includes("Wrist") || b.part.includes("Wrist") ||
               a.part.includes("Elbow") || b.part.includes("Elbow")) {
      col = color(0, 255, 255); // arms = cyan
    } else {
      col = color(200, 100, 255); // legs = violet
    }

    // Neon glow effect (two strokes)
    stroke(red(col), green(col), blue(col), 100);
    strokeWeight(12);
    line(a.position.x, a.position.y, b.position.x, b.position.y);

    stroke(col);
    strokeWeight(5);
    line(a.position.x, a.position.y, b.position.x, b.position.y);
  }
}

// ---------- Exercise Tracking ----------
function trackSquats(pose) {
  if (pose.leftKnee && pose.leftHip) {
    let kneeY = pose.leftKnee.y;
    let hipY = pose.leftHip.y;

    if (kneeY < hipY && !up) {
      up = true;
      repCount++;
      calories += 0.32;
    } else if (kneeY > hipY) {
      up = false;
    }
  }
}

function trackPushups(pose) {
  if (pose.leftWrist && pose.leftShoulder) {
    let wristY = pose.leftWrist.y;
    let shoulderY = pose.leftShoulder.y;

    if (wristY < shoulderY && !up) {
      up = true;
      repCount++;
      calories += 0.29;
    } else if (wristY > shoulderY) {
      up = false;
    }
  }
}

function trackJumpingJacks(pose) {
  if (pose.leftWrist && pose.rightWrist && pose.leftAnkle && pose.rightAnkle) {
    let handsApart = dist(pose.leftWrist.x, pose.leftWrist.y, pose.rightWrist.x, pose.rightWrist.y) > 250;
    let legsApart = dist(pose.leftAnkle.x, pose.leftAnkle.y, pose.rightAnkle.x, pose.rightAnkle.y) > 150;

    if (handsApart && legsApart && !up) {
      up = true;
      repCount++;
      calories += 0.20;
    } else if (!handsApart || !legsApart) {
      up = false;
    }
  }
}

function trackHandRaises(pose) {
  if (pose.leftWrist && pose.nose) {
    let wristY = pose.leftWrist.y;
    let noseY = pose.nose.y;

    if (wristY < noseY && !up) {
      up = true;
      repCount++;
      calories += 0.15;
    } else if (wristY > noseY) {
      up = false;
    }
  }
}
