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

## 🔄 Workflow  

```mermaid
flowchart TD
  A[Webcam Input] --> B[PoseNet Model (ml5.js)]
  B --> C[Keypoint Detection (17 body points)]
  C --> D[Exercise Logic (Reps, Calories, Height)]
  D --> E[UI Updates (Overlay, Feedback, Charts)]
  E --> F[User Output: Counts + Graph + Mode Info]
🧠 Model Making Process

PoseNet Architecture (pre-trained by Google):

Detects 17 body keypoints

Lightweight → Works in-browser

ml5.js Integration:

Simplifies PoseNet use in p5.js canvas

Real-time skeleton overlay

Custom Exercise Logic:

Thresholds for angles & keypoint distances

Repetition counter

Calorie estimation

Visualization Layer:

Animated canvas feedback

Chart.js graphs for reps

📊 Results

✅ Real-time exercise recognition in-browser

✅ Accurate repetition counts (tested with 4 exercises)

✅ Responsive UI works on desktop & mobile

✅ Graph-based progress tracking

🚀 Deployment

Hosted on Render → static hosting for HTML/CSS/JS

Works directly on any browser (no installation required)

🔗 Live URL → PoseNet Fitness Tracker

🛠 Tech Stack & Tools

Frontend → HTML5, CSS3, JavaScript (Vanilla)

Canvas & Interactivity → p5.js

Machine Learning → ml5.js (PoseNet), TensorFlow.js

Visualization → Chart.js

Hosting → Render
Project File Structure
PoseNet-Fitness-Tracker/
│── index.html        # Main entry file
│── style.css         # UI Styling (dark/light, responsiveness)
│── script.js         # Core JS logic
│── /assets           # Images, icons
│── /models           # PoseNet model (loaded via ml5.js)
│── README.md         # Documentation

🖥 Run Locally

Clone the repo

git clone https://github.com/your-username/PoseNet-Fitness-Tracker.git
cd PoseNet-Fitness-Tracker


Open in browser

open index.html   # or just double click


That’s it! No server required 🚀

📦 Requirements

Any modern browser (Chrome/Edge/Firefox)

Webcam access enabled

Internet connection (to load ml5.js & TensorFlow.js)

🤖 About PoseNet

PoseNet is a pre-trained ML model from Google that detects human body keypoints in real-time.

Supports single & multi-person pose detection.

Works in-browser using TensorFlow.js, making it lightweight and fast.

🔮 Future Improvements

🎤 Add voice feedback (“Great job!”, “Keep your back straight!”)

📱 Build a mobile-first app version

🧠 Add more exercises (Lunges, Planks, Yoga poses)

⏳ Session history & performance dashboard

👥 Multi-user detection (for group workouts)

👤 Author

Dibyendu Karmahapatra

🌐 Portfolio: [Your Portfolio Link]

💼 LinkedIn: [Your LinkedIn Profile]

🐙 GitHub: [Your GitHub Profile]

⭐ Contribute

Contributions are welcome! 🎉

Fork this repo

Create a new branch

Submit a PR 🚀
