# 🏋️ PoseNet Fitness Tracker  

<p align="center">
  <img src="https://img.shields.io/badge/Status-Live-brightgreen?style=for-the-badge&logo=vercel&logoColor=white" />
  <img src="https://img.shields.io/badge/p5.js-ED225D?style=for-the-badge&logo=p5dotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/ml5.js-ffca28?style=for-the-badge" />
  <img src="https://img.shields.io/badge/TensorFlow.js-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white" />
  <img src="https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
  <img src="https://img.shields.io/badge/Deployment-Render-46E3B7?style=for-the-badge&logo=render&logoColor=white" />
</p>  

---

## 🌐 Live Demo  

👉 **[Click here to try the app](https://posture-detection-ml-web-app.onrender.com)**  

---

## ❓ Problem Statement  

Poor posture during exercise leads to:  
- ❌ Increased risk of injuries  
- ❌ Ineffective workout performance  
- ❌ Lack of real-time correction for home workouts  

**Solution →** A **browser-based posture detection system** using PoseNet to analyze movements in real-time, giving **instant feedback**, rep counting, and charts for progress tracking.  

---

## 🔎 Overview  

- Detects **17 body keypoints** in real-time using PoseNet (ml5.js wrapper over TensorFlow.js).  
- Supports multiple **exercise modes** → Squats, Push-ups, Jumping Jacks, Hand Raises.  
- **Counts repetitions** and **estimates calories** burned.  
- Displays **user height** in cm & ft.  
- Modern **UI with Dark/Light mode**.  
- **Progress visualization** using Chart.js.  
- **Runs entirely in browser** (no backend needed).  

---

## 💡 Applications  

- 🏠 **Home Fitness** – Track workouts without expensive equipment  
- 🏫 **Education** – Teach correct posture in physical training sessions  
- 🏥 **Healthcare** – Rehab patients can monitor posture remotely  
- 📊 **Sports Analytics** – Performance tracking for athletes  

---

🧠 Model Making Process

PoseNet Architecture (Pre-trained by Google):

Detects 17 body keypoints (head, shoulders, elbows, wrists, hips, knees, ankles).

Lightweight → Runs directly in-browser without extra installation.

ml5.js Integration:

Built on TensorFlow.js → simplifies ML in the browser.

Real-time skeleton overlay on a p5.js canvas.

Custom Exercise Logic:

Uses angle thresholds and keypoint distances for recognition.

Built-in repetition counter.

Basic calorie estimation formula.

Visualization Layer:

Animated real-time canvas feedback.

Chart.js graphs to track reps & calories.

Responsive design for desktop + mobile.

📊 Results

✅ Real-time exercise recognition in-browser
✅ Accurate repetition counts (tested on 4 basic exercises)
✅ Responsive UI works on desktop & mobile
✅ Progress tracking with charts & live feedback

🚀 Deployment

Hosted on Render → static deployment for HTML, CSS & JS.

Works directly in any browser (no server setup required).

Live Demo: 🔗 PoseNet Fitness Tracker

🛠 Tech Stack & Tools

Frontend → HTML5, CSS3, JavaScript (Vanilla)

Canvas & Interactivity → p5.js

Machine Learning → ml5.js (PoseNet), TensorFlow.js

Visualization → Chart.js

Deployment → Render

📂 Project File Structure
PoseNet-Fitness-Tracker/
│── index.html        # Main entry file
│── style.css         # Styling (UI, responsiveness, themes)
│── script.js         # Core JavaScript logic
│── /assets           # Images, icons, fonts
│── /models           # Pre-trained PoseNet model (ml5.js)
│── README.md         # Documentation

🖥 Run Locally

1️⃣ Clone the repo

git clone https://github.com/your-username/PoseNet-Fitness-Tracker.git
cd PoseNet-Fitness-Tracker


2️⃣ Open in browser

open index.html   # or simply double click


✅ That’s it! → No server or backend required 🎉

📦 Requirements

Any modern browser (Chrome / Edge / Firefox)

Webcam access enabled

Internet connection (to load ml5.js & TensorFlow.js)

🤖 About PoseNet

Pre-trained deep learning model from Google.

Detects single or multiple human poses in real-time.

Works in-browser → lightweight, no GPU needed.

Powered by TensorFlow.js & integrated with ml5.js for simplicity.

🔮 Future Improvements

✨ Add voice feedback (“Keep your back straight!”, “Good rep!”)
📱 Create a mobile-first app version
💪 Add more exercises (lunges, yoga poses, planks)
📊 Session history & performance dashboard
👥 Multi-user detection → group workouts

👤 Author

Dibyendu Karmahapatra

🌐 Portfolio → [Your Portfolio Link]

💼 LinkedIn → [Your LinkedIn Profile]

🐙 GitHub → [Your GitHub Profile]

⭐ Contribute

Contributions are always welcome! 🚀

Fork the repo

Create a feature branch

Commit your changes

Open a Pull Request 🎉
Fork this repo

Create a new branch

Submit a PR 🚀
