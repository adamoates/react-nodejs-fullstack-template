# Backend

Node.js + Express backend API server.

## Setup

```bash
cd backend
npm install
cp .env.example .env  # Configure environment variables
```

## Development

```bash
npm run dev      # Start development server with hot reload
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run linter
npm test         # Run tests
```

## API Endpoints

- `GET /api/health` - Health check endpoint
- `GET /api` - Welcome message

## Project Structure

```
backend/
├── src/
│   ├── server.ts          # Main server file
│   ├── controllers/       # Request handlers (to be added)
│   ├── services/          # Business logic (to be added)
│   ├── routes/            # API routes (to be added)
│   └── middleware/        # Express middleware (to be added)
├── package.json
└── tsconfig.json
```
