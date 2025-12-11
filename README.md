# RingBrain AI - Frontend

A modern landing page and admin panel for RIWI's educational platform, built with React, Vite, and Tailwind CSS.

## 🚀 Features

### Landing Page
- **Modern Design**: Purple/blue gradient theme with smooth animations
- **Hero Section**: Eye-catching introduction with statistics and dual CTAs
- **Statistics Cards**: Display key metrics (5,000+ graduates, 300+ partner companies)
- **Programs Showcase**: Three main programs with detailed descriptions
- **Dynamic Registration Form**: Two-column layout with ISA benefits
- **Partners Section**: Display of partner companies
- **Success Stories**: Student testimonials with ratings
- **Final CTA**: Conversion-focused call-to-action
- **Complete Footer**: Links, contact info, and social media

### Admin Panel
- **Secure Authentication**: Protected routes with hardcoded credentials
- **Dashboard**: Statistics overview and quick actions
- **Form Data Manager**: Complete CRUD interface for managing all form fields
  - Document types
  - Genders
  - Study schedules
  - Occupations
  - Education levels
  - Departments
  - Socioeconomic strata
  - Programming levels
  - Agreement types
- **Analytics**: Placeholder for future metrics and charts
- **Responsive Design**: Works seamlessly on desktop and mobile

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **React Hook Form** - Form validation and management
- **Yup** - Schema validation
- **Lucide React** - Icon library
- **Axios** - HTTP client

## 📋 Prerequisites

- Node.js 16+ and npm
- Git

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/RingBrain-AI/RingBrain-AI-Front.git
   cd RingBrain-AI-Front
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## ⚙️ Configuration

### Backend API Endpoints

Configure your backend endpoints in `src/config/api.config.js`:

```javascript
export const API_CONFIG = {
  // Endpoint to fetch form data (select options)
  FORM_DATA_ENDPOINT: 'https://your-api.com/form-data',
  
  // Endpoint to submit registration form
  SUBMIT_FORM_ENDPOINT: 'https://your-api.com/registration',
};
```

### Expected Backend Response Format

**Form Data Endpoint (GET)**:
```json
{
  "documentTypes": [
    { "value": "cc", "label": "Cédula de Ciudadanía" }
  ],
  "genders": [
    { "value": "masculino", "label": "Masculino" }
  ],
  // ... other fields
}
```

**Form Submission Endpoint (POST)**:
Accepts the complete form data object and should return a success response.

## 🔐 Admin Panel Access

### Default Credentials
- **URL**: `/admin`
- **Email**: `admin@riwi.io`
- **Password**: `riwi2025`

> ⚠️ **Important**: Change these credentials in production! Update them in `src/context/AuthContext.jsx`

### Admin Routes
- `/admin/login` - Login page
- `/admin/dashboard` - Main dashboard
- `/admin/form-data` - Form data management
- `/admin/analytics` - Analytics (placeholder)

## 📁 Project Structure

```
RingBrain-AI-Front/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Hero.jsx
│   │   ├── Stats.jsx
│   │   ├── Programs.jsx
│   │   ├── Companies.jsx
│   │   ├── Testimonials.jsx
│   │   ├── FinalCTA.jsx
│   │   ├── Footer.jsx
│   │   ├── RegistrationForm.jsx
│   │   └── ProtectedRoute.jsx
│   ├── pages/               # Page components
│   │   └── admin/
│   │       ├── Login.jsx
│   │       ├── AdminLayout.jsx
│   │       ├── Dashboard.jsx
│   │       ├── FormDataManager.jsx
│   │       └── Analytics.jsx
│   ├── context/             # React contexts
│   │   └── AuthContext.jsx
│   ├── services/            # API services
│   │   └── api.js
│   ├── config/              # Configuration files
│   │   └── api.config.js
│   ├── utils/               # Utility functions
│   │   └── constants.js
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # App entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind configuration
└── README.md                # This file
```

## 🎨 Design System

### Colors
- **Primary Purple**: `#8b5cf6` (purple-600)
- **Primary Blue**: `#3b82f6` (blue-600)
- **Accent Green**: `#10b981` (green-600)
- **Accent Orange**: `#f97316` (orange-600)
- **Background**: `#f9fafb` (gray-50)

### Gradients
- **Main Gradient**: `from-purple-600 via-purple-500 to-blue-600`
- Used in: Hero, Login, CTAs, Admin sidebar

### Custom CSS Classes
- `.gradient-bg` - Purple to blue gradient background
- `.gradient-text` - Purple to blue gradient text
- `.btn-primary` - White button with purple text
- `.btn-secondary` - Outlined white button
- `.icon-circle` - Circular icon container
- `.card` - White card with shadow

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start dev server (port 5173)

# Build
npm run build        # Build for production

# Preview
npm run preview      # Preview production build

# Lint
npm run lint         # Run ESLint
```

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### Deploy to Vercel/Netlify

1. Connect your GitHub repository
2. Set build command to `npm run build`
3. Set publish directory to `dist`
4. Deploy!

### Environment Variables (Optional)

Create a `.env` file for custom API URL:

```env
VITE_API_URL=https://your-backend-api.com/api
```

### Docker Deployment

1. **Build the image**
   ```bash
   docker build -t ringbrain-front .
   ```

2. **Run the container**
   ```bash
   docker run -d -p 80:80 ringbrain-front
   ```

3. **Access the application**
   Open `http://localhost` in your browser.

## 🔄 Dynamic Form Data

The registration form dynamically loads options from the backend. If the backend is unavailable, it falls back to local constants in `src/utils/constants.js`.

### Managing Form Fields in Admin Panel

1. Navigate to `/admin/form-data`
2. Select the field to edit
3. Add, edit, or delete options
4. Click "Guardar Todos los Cambios" to save

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Code Style

- Use English for all variable names, function names, and comments
- Use Spanish only for user-facing text (landing page and admin UI)
- Follow React best practices and hooks conventions
- Use Tailwind CSS utility classes
- Keep components small and focused

## 🐛 Troubleshooting

### Port already in use
```bash
# Change port in vite.config.js or kill the process using port 5173
```

### Build errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Form not submitting
- Check that `API_CONFIG.SUBMIT_FORM_ENDPOINT` is correctly configured
- Verify backend API is running and accessible
- Check browser console for errors

## 📄 License

This project is proprietary and confidential.

## 👥 Authors

**RingBrain AI Team**

---

For more information, visit [RIWI](https://riwi.io)
