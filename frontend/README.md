# Frontend

React 19 + TypeScript + Vite frontend application.

## Setup

```bash
cd frontend
npm install
cp .env.example .env  # Configure environment variables
```

## Development

```bash
npm run dev      # Start development server (http://localhost:5173)
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run linter
npm test         # Run tests
```

## Features

- ⚡️ Vite for fast development and building
- ⚛️ React 19 with TypeScript
- 🎨 ESLint for code quality
- 🧪 Vitest for testing

## Project Structure

```
frontend/
├── src/
│   ├── App.tsx           # Main App component
│   ├── main.tsx          # Entry point
│   ├── components/       # Reusable components (to be added)
│   ├── pages/            # Page components (to be added)
│   ├── hooks/            # Custom hooks (to be added)
│   └── assets/           # Static assets
├── public/               # Public static files
├── index.html            # HTML template
└── vite.config.ts        # Vite configuration
```
