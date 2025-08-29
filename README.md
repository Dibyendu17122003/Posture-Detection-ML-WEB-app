<h1 align="center">🏋️‍♂️ PoseNet Fitness Tracker</h1>

<p align="center">
  <i>A modern AI-powered web app that tracks exercises in real-time using <b>PoseNet</b> (via <code>ml5.js</code>, <code>p5.js</code>, and <code>TensorFlow.js</code>)</i>
</p>

<p align="center">
  <a href="https://posture-detection-ml-web-app.onrender.com"><img src="https://img.shields.io/badge/Live-Demo-32CD32?style=for-the-badge&logo=githubpages&logoColor=white" /></a>
  <a href="https://github.com/your-username/PoseNet-Fitness-Tracker"><img src="https://img.shields.io/github/stars/your-username/PoseNet-Fitness-Tracker?style=for-the-badge&logo=github&color=yellow" /></a>
  <a href="https://github.com/your-username/PoseNet-Fitness-Tracker/fork"><img src="https://img.shields.io/github/forks/your-username/PoseNet-Fitness-Tracker?style=for-the-badge&logo=github&color=blue" /></a>
  <img src="https://img.shields.io/github/license/your-username/PoseNet-Fitness-Tracker?style=for-the-badge&color=blueviolet" />
</p>

---

## 🚀 Live Demo
🔗 **[Click here to try the app](https://posture-detection-ml-web-app.onrender.com)** — Works directly in-browser, no installation needed.

---

## ❓ Problem Statement  
Staying fit at home is challenging without a personal trainer. Most fitness apps lack **real-time posture correction** and rely on manual input.  
👉 **Goal**: Build a **web-based AI Fitness Tracker** that detects exercise posture using **PoseNet** and provides **instant feedback** with real-time visualization.

---

## 📖 Overview  
✅ Detects body posture using **PoseNet**  
✅ Tracks exercise repetitions & calories burned  
✅ Works **100% in-browser** → no installation required  
✅ Provides **visual + data feedback** (charts, overlays, counters)  
✅ Mobile & desktop friendly  

---

## 🔄 Workflow  

<div align="center">
  
```text
[ WebCam Input ] → [ PoseNet Model (ml5.js) ] → [ Keypoints Detection (17 joints) ]
        ↓
   [ Exercise Logic: reps, calories, feedback ]
        ↓
[ Real-time Overlay + Charts + User Dashboard ]
</div>
🧠 Model Making Process
<details> <summary>📌 Expand to view details</summary>

PoseNet Architecture (by Google)

Pre-trained deep learning model

Detects 17 body keypoints (elbows, shoulders, knees, etc.)

Lightweight → Runs in real-time inside a browser

ml5.js + p5.js Integration

Provides simple PoseNet API in JavaScript

Real-time visualization with p5.js canvas

Skeleton & keypoints overlay

Custom Exercise Logic

Threshold-based angle & distance detection

Repetition counter with live feedback

Calorie estimation formula

Visualization Layer

Canvas overlays (green/red posture lines)

Animated Chart.js graphs for reps & calories

</details>
📊 Results

✅ Real-time exercise recognition in-browser

✅ Accurate repetition counts (tested with 4 exercises)

✅ Works on desktop & mobile browsers

✅ Charts & dashboard for progress tracking

🚀 Deployment

Hosted on Render → static deployment

Uses only HTML, CSS, JS → No backend server required

Accessible from any device with a webcam

🔗 Live App: PoseNet Fitness Tracker

🛠 Tech Stack & Tools
Category	Technology
Frontend	HTML5, CSS3, JavaScript
ML Model	PoseNet (via TensorFlow.js)
ML Wrapper	ml5.js
Visualization	p5.js, Chart.js
Deployment	Render (Static Hosting)
📂 Project File Structure
PoseNet-Fitness-Tracker/
│── index.html        # Main HTML entry point
│── style.css         # Responsive + Modern UI styles
│── script.js         # Core JS logic (PoseNet + counters)
│── /assets           # Icons, images
│── /models           # PoseNet (loaded via ml5.js CDN)
│── README.md         # Documentation
💻 Run Locally
# Clone the repo
git clone https://github.com/your-username/PoseNet-Fitness-Tracker.git
cd PoseNet-Fitness-Tracker

# Open directly in browser
open index.html   # Or double click file
📦 Requirements

Any modern browser (Chrome/Edge/Firefox)

Webcam access enabled

Internet connection (loads PoseNet + ml5.js from CDN)

🤖 About PoseNet

PoseNet is a Google pre-trained deep learning model that estimates human poses in real-time.

Detects 17 body keypoints

Supports single & multi-person detection

Works directly in browser using TensorFlow.js

🔮 Future Improvements

🎤 Add voice feedback → "Great job!", "Keep your back straight!"

📱 Create mobile app (PWA) version

🧠 Add more exercises (lunges, yoga, planks)

📊 Store session history & progress dashboard

👥 Multi-user mode (track 2+ people at once)

👤 Author

Dibyendu Karmahapatra

<p align="center"> <a href="https://github.com/your-username"><img src="https://img.shields.io/badge/GitHub-Profile-181717?style=for-the-badge&logo=github" /></a> <a href="https://www.linkedin.com/in/your-linkedin"><img src="https://img.shields.io/badge/LinkedIn-Profile-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" /></a> <a href="https://your-portfolio.com"><img src="https://img.shields.io/badge/Portfolio-Website-FF4088?style=for-the-badge&logo=google-chrome&logoColor=white" /></a> </p> <p align="center"> ⭐ Star this repo if you found it helpful &nbsp; | &nbsp; 🍴 Fork it to build your own </p>
🤝 Contributing

Pull requests are welcome!

Fork the repo

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit changes (git commit -m 'Add amazing feature')

Push to the branch (git push origin feature/AmazingFeature)

Open a PR

📜 License

This project is licensed under the MIT License.
See LICENSE
 for details.
