# 🎂 Birthday Countdown Website

A beautiful, interactive countdown website for her 22nd birthday on September 21, 2025! Built with React and Vite, featuring stunning animations, a flipping calendar effect, and a pink theme.

## ✨ Features

- **⏰ Real-time Countdown**: Days, hours, minutes, and seconds remaining
- **🎨 Beautiful Pink Theme**: Elegant gradient backgrounds and animations
- **🔄 Flipping Calendar Animation**: Smooth flip effect when numbers change
- **💝 Special Birthday Quotes**: Heartwarming messages for her special day
- **🎉 Birthday Message**: Special celebration screen when countdown reaches zero
- **✨ Floating Hearts**: Animated background elements
- **📱 Responsive Design**: Works perfectly on all devices
- **🚀 Vercel Ready**: Optimized for deployment

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone or download the project**
   ```bash
   # If you have git installed
   git clone <repository-url>
   cd Countdown
   
   # Or simply extract the downloaded files
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🌐 Deployment to Vercel

### Option 1: Vercel CLI (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts** and your site will be live!

### Option 2: Vercel Dashboard

1. **Push to GitHub** (if using git)
2. **Go to [vercel.com](https://vercel.com)**
3. **Import your repository**
4. **Deploy automatically**

## 🎨 Customization

### Change Birthday Date
Edit `src/App.jsx` line 25:
```javascript
const birthdayDate = new Date('2025-09-21T00:00:00')
```

### Modify Quotes
Edit the quotes in `src/App.jsx` around line 40-50.

### Change Colors
Modify CSS variables in `src/index.css`:
```css
:root {
  --primary-pink: #ff69b4;
  --secondary-pink: #ff1493;
  /* ... other colors */
}
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── CountdownTimer.jsx      # Main countdown with flip animation
│   ├── BirthdayMessage.jsx     # Birthday celebration screen
│   ├── FloatingHearts.jsx      # Background floating hearts
│   └── *.css                   # Component styles
├── App.jsx                     # Main application component
├── App.css                     # Main app styles
├── main.jsx                    # React entry point
└── index.css                   # Global styles
```

## 🎯 Key Features Explained

### Flipping Calendar Effect
The countdown timer uses CSS 3D transforms to create a realistic flipping effect when numbers change, similar to a physical calendar.

### Responsive Design
Built with mobile-first approach, ensuring perfect display on all devices from phones to desktops.

### Performance Optimized
- Efficient React hooks usage
- CSS animations for smooth performance
- Minimal JavaScript for countdown logic

## 🌟 Special Features

- **Opening Animation**: Smooth fade-in and slide effects
- **Interactive Elements**: Hover effects and smooth transitions
- **Background Animations**: Gradient shifts and sparkle effects
- **Confetti Celebration**: Special effects when birthday arrives
- **Progress Bar**: Visual representation of time remaining

## 🎉 Perfect for

- Birthday surprises
- Anniversary countdowns
- Special event countdowns
- Romantic gestures
- Any celebration countdown

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 🤝 Contributing

Feel free to customize this project for your own special occasions! The code is well-commented and easy to modify.

## 📄 License

This project is open source and available under the MIT License.

---

**Made with ❤️ for her special day! 🎂✨**
