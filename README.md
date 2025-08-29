# 🏋️‍♂️ PoseNet Fitness Tracker – AI Powered Posture Detection  

![License](https://img.shields.io/github/license/your-username/PoseNet-Fitness-Tracker?color=blueviolet)  
![Stars](https://img.shields.io/github/stars/your-username/PoseNet-Fitness-Tracker?style=social)  
![Forks](https://img.shields.io/github/forks/your-username/PoseNet-Fitness-Tracker?style=social)  
![Issues](https://img.shields.io/github/issues/your-username/PoseNet-Fitness-Tracker)  
![PRs](https://img.shields.io/github/issues-pr/your-username/PoseNet-Fitness-Tracker?color=green)  
![Made With](https://img.shields.io/badge/Made%20with-ml5.js%20%7C%20p5.js%20%7C%20TensorFlow.js-orange)  

---

## 🔗 Live Demo  
👉 [**PoseNet Fitness Tracker (Hosted on Render)**](https://posture-detection-ml-web-app.onrender.com)  

Experience **real-time AI-powered posture detection** right in your browser. 🚀  

---

## ❓ Problem Statement  
In today’s fitness culture, people often work out without proper posture, leading to **injuries, reduced performance, and lack of progress tracking**.  
Traditional fitness apps lack **real-time feedback** and **AI integration**, leaving users guessing about their form.  

---

## 📖 Overview  
The **PoseNet Fitness Tracker** solves this by using **PoseNet ML model (via TensorFlow.js + ml5.js)** to detect **17 body keypoints** and provide:  
- ✅ **Real-time posture correction**  
- ✅ **Repetition counting**  
- ✅ **Calorie estimation**  
- ✅ **Interactive visual feedback**  

All within your **web browser** – no external software or installation required.  

---

## 🔄 Workflow  

```plaintext
📸 Webcam Input
   ⬇
🧠 PoseNet Model (ml5.js + TensorFlow.js)
   ⬇
📍 Keypoint Detection (17 body landmarks)
   ⬇
📏 Exercise Logic (Angles, Thresholds, Repetition Counter, Calorie Burn)
   ⬇
🎨 UI Updates (Overlay Skeleton, Real-time Feedback, Graphs via Chart.js)
   ⬇
🧠 Model Making Process
PoseNet Architecture

Pre-trained by Google

Detects 17 keypoints (nose, eyes, shoulders, elbows, wrists, hips, knees, ankles)

Lightweight → Runs in-browser with TensorFlow.js

ml5.js + p5.js Integration

ml5.js: Simple API for PoseNet

p5.js Canvas: Real-time skeleton overlay

TensorFlow.js: Optimized deep learning model execution in-browser

Custom Exercise Logic

Angle calculations between keypoints

Threshold-based posture recognition

Automated rep counter

Calorie estimation based on activity

Visualization Layer

Skeleton overlay on live camera feed

Chart.js: Beautiful dynamic graphs

Real-time alerts and feedback

📊 Results

✅ Detects exercises in real-time
✅ Works directly in the browser
✅ Accurate repetition counting (tested on push-ups, squats, jumping jacks, sit-ups)
✅ Progress tracking with graphs
✅ Cross-platform compatibility (mobile + desktop)
🚀 Deployment

Hosting: Render (Static Deployment)

No server required → Just HTML + CSS + JS

Works on any modern browser with webcam access

🔗 Live Demo: PoseNet Fitness Tracker

🛠 Tech Stack & Tools
Category	Tools & Frameworks
Frontend	HTML5, CSS3, JavaScript
Machine Learning	PoseNet (TensorFlow.js), ml5.js
Graphics/Canvas	p5.js
Visualization	Chart.js
Hosting	Render
Version Control	Git & GitHub
📂 Project File Structure
PoseNet-Fitness-Tracker/
│── index.html        # Main entry point
│── style.css         # Styling (Dark/Light, Responsive Design)
│── script.js         # Core JS logic (PoseNet + Exercise Tracker)
│── /assets           # Icons, images
│── /models           # ml5.js PoseNet model
│── README.md         # Documentation

🖥 Run Locally
1️⃣ Clone Repo
git clone https://github.com/your-username/PoseNet-Fitness-Tracker.git
cd PoseNet-Fitness-Tracker

2️⃣ Open in Browser

Simply open index.html → That’s it! 🎉
(No server required, runs directly in-browser 🚀)

📦 Requirements

Modern Browser (Chrome / Firefox / Edge)

Webcam Access

Internet (to load ml5.js, TensorFlow.js)

🤖 About PoseNet

Developed by Google for human pose estimation

Detects 17 body keypoints in real time

Single & Multi-person detection

Optimized for in-browser use via TensorFlow.js

Enables fitness, gaming, AR/VR, and gesture recognition apps

🔮 Future Improvements

✨ Add voice feedback: “Great job!”, “Straighten your back!”
📱 Build a Progressive Web App (PWA)
🧘 Add more workouts (Lunges, Planks, Yoga poses)
📊 Save session history + Dashboard analytics
👥 Enable multi-user tracking
🎮 Gamification (leaderboards, AI fitness challenges)

👤 Author

Dibyendu Karmahapatra

🌐 Portfolio

💼 LinkedIn

🐙 GitHub

⭐ Contribute

Fork the repo 🍴

Create a new branch 🌿

Submit a PR 🔥




📜 License

This project is licensed under the MIT License – feel free to use, modify, and contribute.
📊 User Output (Reps Count, Calories, Progress Charts, Mode Info)
