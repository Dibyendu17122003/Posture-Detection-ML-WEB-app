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
📊 User Output (Reps Count, Calories, Progress Charts, Mode Info)
