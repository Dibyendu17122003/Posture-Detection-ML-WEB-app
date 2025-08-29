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
  A[🎥 Webcam Input] --> B[🧠 PoseNet Model (ml5.js)]
  B --> C[📍 Keypoint Detection (17 body points)]
  C --> D[🏋️ Exercise Logic (Reps, Calories, Height)]
  D --> E[🖥️ UI Updates (Overlay, Feedback, Charts)]
  E --> F[✅ User Output: Counts + Graph + Mode Info]


Create a new branch

Submit a PR 🚀
