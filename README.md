
# 🚀 Project Title: Oil-Spill-Detection-Dashboard

## 📌 Overview
This system detects oil spills using SAR (Synthetic Aperture Radar) imagery and autonomously deploys a USV (Unmanned Surface Vehicle) to collect and contain the oil.

## 🧠 Key Features
- ✅ Real-time tracking
- ✅ Web App Integration
- ✅ Admin Dashboard / Data Analytics
- ✅ AI/ML integration

## 🛠️ Technologies Used

### 💻 Frontend
![Next.js](https://img.shields.io/badge/Frontend-Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)

### 🧩 Backend
![Node.js](https://img.shields.io/badge/Backend-Node.js-339933?logo=nodedotjs&logoColor=white)
![Python](https://img.shields.io/badge/Backend-Python-3776AB?logo=python&logoColor=white)

### 🗄️ Database
![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?logo=mongodb&logoColor=white)

### ⚙️ Hardware 
![ESP32](https://img.shields.io/badge/Hardware-ESP32-000000?logo=espressif&logoColor=white)

## 🧩 Available Platforms
- 🌐 Web
- 🚀 Embedded (ESP32)

## ⚙️ System Architecture
> _USV Provide Cleaning and Data To Process_
```mermaid
graph TD
  User -->|UI Input| Frontend
  Frontend -->|API Calls| Backend
  Backend -->|Query| Database
  Backend -->|Control Signals| Hardware
  Hardware -->|Sensor Data| Backend
```

## 📸 Screenshots / Demo

| Dashboard |
|-------------|
| ![image](https://github.com/user-attachments/assets/4cc008c8-ce63-43cf-907d-4d10ed9b01f1)
![image](https://github.com/user-attachments/assets/6bec0c78-384d-48d2-95f7-eff66139cb86)
![image](https://github.com/user-attachments/assets/3dc40c91-f7d4-4957-8097-c6d0182145e0)
![image](https://github.com/user-attachments/assets/b2432ba5-6c5a-426b-8927-1f70454aa19f)
![image](https://github.com/user-attachments/assets/3beb37d4-c52a-4d64-97d6-d47d3b5bfb1f)
![image](https://github.com/user-attachments/assets/53d7dd01-20d7-4bef-871f-14ea7a98a74d)
![image](https://github.com/user-attachments/assets/76356246-1ec5-42b6-a33b-5cc0225f2270)
![image](https://github.com/user-attachments/assets/5b25fb46-9fb0-4dcb-9627-2b113624610c)
![image](https://github.com/user-attachments/assets/1f517855-b5ea-4eb3-acc4-9412314dcf96)
![image](https://github.com/user-attachments/assets/fa04f72f-6d45-4a38-b6f2-422703b4166a)
[image](https://github.com/user-attachments/assets/65db5939-2827-4cd3-8574-c5eef6bef471)
![image](https://github.com/user-attachments/assets/8bcb5fe2-a495-4db7-90e8-58683152c5bf)|

> 📽️ [Demo Video]((https://youtu.be/Yhkxk3OObf8))

## 📱 Installation & Setup

### Prerequisites
- [ ] Node.js (vXX.X.X)
- [ ] ESP32
- [ ] Visual Studio Code

### Setup Steps
```bash
# Clone the repository
git clone https://github.com/Raghavan2005/oil-spill-detection-dashboard.git
cd oil-spill-detection-dashboard

# Install dependencies
npm install         # For Node.js backend

# Start the development server
npm run dev         # or node server.js

```

## 📄 License
This project is licensed under the [MIT License](LICENSE).

