# CLAUDE.md

> **📝 Template Instructions:** Replace [PROJECT_NAME], [PROJECT_DESCRIPTION], and customize sections marked with 🔧 for your specific project needs.

> **📁 Project Structure Note:** This template assumes a monorepo structure with separate `frontend/`, `backend/`, and `shared/` directories. If using a single project structure, adjust file paths in code examples accordingly.

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Table of Contents

- [Quick Reference Card](#quick-reference-card)
- [Project Overview](#project-overview)
- [Quick Start](#quick-start)
- [Initial Setup](#initial-setup)
- [Development Commands](#development-commands)
- [Project Structure](#project-structure)
- [Technology Stack](#technology-stack)
- [Common Development Tasks](#common-development-tasks)
- [Testing](#testing)
- [Code Style & Patterns](#code-style--patterns)
- [Error Handling](#error-handling)
- [Performance Considerations](#performance-considerations)
- [Security Checklist](#security-checklist)
- [Troubleshooting](#troubleshooting)
- [Deployment](#deployment)
  - [Deployment Overview](#deployment-overview)
  - [Platform: Linode (Recommended)](#deployment-platform-linode-recommended)
  - [Alternative Platforms](#alternative-platforms)
- [Continuous Integration](#continuous-integration)
- [Additional Resources](#additional-resources)
- [Getting Help](#getting-help)
- [Changelog](#changelog)

---

## Quick Reference Card

**Most Common Commands:**

```bash
npm install              # Install all dependencies
npm run dev             # Start full stack dev servers
npm run dev:frontend    # Frontend only (port 5173)
npm run dev:backend     # Backend only (port 3000)
npm run build           # Build for production
npm run test            # Run all tests
npm run lint:fix        # Fix linting issues
npm run db:migrate      # Run database migrations
```

**First Time Setup:**

```bash
npm install && cp .env.example .env && npm run db:migrate && npm run dev
```

**Deployment Commands (Production):**

```bash
./scripts/deploy-linode.sh    # Deploy to production
ssh deploy@LINODE_IP          # SSH into server
pm2 status                     # Check app status
pm2 logs backend              # View logs
sudo systemctl status nginx   # Check nginx
sudo certbot renew            # Renew SSL certificate
```

---

## Project Overview

**🔧 CUSTOMIZE THIS SECTION**

**Project Name:** [PROJECT_NAME]

**Description:** [PROJECT_DESCRIPTION]

**Tech Stack:** React 19 + Vite + TypeScript frontend | Node.js + Express backend

**Key Features:**

- [Feature 1]
- [Feature 2]
- [Feature 3]

**Live URLs:**

- Frontend: [URL or "Not deployed"]
- Backend API: [URL or "Not deployed"]
- Documentation: [URL or "See README.md"]

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Configure environment
cp .env.example .env
# Edit .env with your settings

# 3. Setup database (if applicable)
npm run db:migrate

# 4. Start development servers
npm run dev
```

**Access Points:**

- Frontend: <http://localhost:5173>
- Backend: <http://localhost:3000>
- API Docs: <http://localhost:3000/api-docs> (if enabled)

---

## Initial Setup

### Install Dependencies

```bash
npm install
```

### MCP Server Configuration

> **💡 Tip:** Install MCP servers as needed. Start with Essentials, add others based on project requirements.

**Installation Best Practices:**

- Install **Essential** servers first (GitHub, Git, Filesystem)
- Add **Security** servers before committing code (Socket.dev, NPM)
- Install **UI/UX** servers when starting frontend work
- Add **Testing** servers when writing tests
- Only install servers with API keys when you have the keys ready

**Verify Installation:**

```bash
# List installed MCP servers
claude mcp list

# Test a specific server
claude mcp test <server-name>
```

#### ✅ Essential (Install First)

**Version Control & Repository Management:**

```bash
# GitHub - Issues, PRs, repository operations
claude mcp add --npm @modelcontextprotocol/server-github npx -y @modelcontextprotocol/server-github

# Git - Local git operations
claude mcp add --npm @modelcontextprotocol/server-git npx -y @modelcontextprotocol/server-git

# Filesystem - Secure file operations
claude mcp add --npm @modelcontextprotocol/server-filesystem npx -y @modelcontextprotocol/server-filesystem
```

#### 🛡️ Security & Quality (Highly Recommended)

```bash
# Socket.dev - Security scanning of dependencies
claude mcp add --transport http socket https://mcp.socket.dev/

# NPM - Package search and dependency management
claude mcp add --npm mcp-server-npm npx -y mcp-server-npm
```

#### 🎨 UI/UX (Install When Building UI)

```bash
# Magic UI - Animated components and effects (⏱️ 1 min setup)
claude mcp add --npm @magicuidesign/mcp npx -y @magicuidesign/mcp

# shadcn/ui - Component library browser (⏱️ 1 min setup)
claude mcp add --npm shadcn-ui-mcp-server npx -y shadcn-ui-mcp-server

# Figma - Design-to-code workflows (⏱️ 5 min setup, requires Figma access token)
# Setup: https://help.figma.com/hc/en-us/articles/8085703771159
claude mcp add --npm @figma/mcp npx -y @figma/mcp
```

#### 🧪 Testing & Automation (Install When Adding Tests)

```bash
# Puppeteer - Browser automation and E2E testing
claude mcp add --npm @modelcontextprotocol/server-puppeteer npx -y @modelcontextprotocol/server-puppeteer

# Playwright - Modern web testing
claude mcp add --npm @executeautomation/playwright-mcp-server npx -y @executeautomation/playwright-mcp-server
```

#### 🌐 Web & API Access

```bash
# Fetch - HTTP requests and web resources (⏱️ 1 min setup)
claude mcp add --npm @modelcontextprotocol/server-fetch npx -y @modelcontextprotocol/server-fetch

# Brave Search - Documentation lookup (⏱️ 3 min setup, requires Brave API key)
# Get API key: https://brave.com/search/api/
claude mcp add --npm @modelcontextprotocol/server-brave-search npx -y @modelcontextprotocol/server-brave-search

# Firecrawl - Intelligent web scraping (⏱️ 5 min setup, requires API key)
# Get API key: https://www.firecrawl.dev/
claude mcp add --npm @mendableai/firecrawl-mcp npx -y @mendableai/firecrawl-mcp

# Browserbase - Browser automation (⏱️ 5 min setup, requires API key)
# Get API key: https://www.browserbase.com/
claude mcp add --npm @browserbasehq/mcp-server-browserbase npx -y @browserbasehq/mcp-server-browserbase
```

#### 🧠 Productivity

```bash
# Memory - Persistent context across Claude Code sessions
claude mcp add --npm @modelcontextprotocol/server-memory npx -y @modelcontextprotocol/server-memory

# Sequential Thinking - Complex architectural decisions
claude mcp add --npm @modelcontextprotocol/server-sequential-thinking npx -y @modelcontextprotocol/server-sequential-thinking
```

#### 🗄️ Database (Install Based on Your Database)

```bash
# PostgreSQL
claude mcp add --npm @modelcontextprotocol/server-postgres npx -y @modelcontextprotocol/server-postgres

# SQLite
claude mcp add --npm @modelcontextprotocol/server-sqlite npx -y @modelcontextprotocol/server-sqlite
```

---

## Development Commands

### Running the Full Stack Application

```bash
npm run dev
```

Runs both frontend and backend concurrently in development mode

### Frontend Only

```bash
npm run dev:frontend
```

Starts the Vite development server with Hot Module Replacement (HMR) at <http://localhost:5173>

### Backend Only

```bash
npm run dev:backend
```

Starts the Node.js/Express backend server with hot reload at <http://localhost:3000>

### Building for Production

```bash
npm run build              # Build both frontend and backend
npm run build:frontend     # Build frontend only
npm run build:backend      # Build backend only
```

### Testing

```bash
npm run test               # Run all tests
npm run test:frontend      # Run frontend tests
npm run test:backend       # Run backend tests
npm run test:e2e           # Run end-to-end tests
npm run test:watch         # Run tests in watch mode
npm run test:coverage      # Generate coverage report
```

### Linting & Formatting

```bash
npm run lint               # Lint all code
npm run lint:frontend      # Lint frontend only
npm run lint:backend       # Lint backend only
npm run lint:fix           # Auto-fix linting issues
npm run format             # Format code with Prettier
npm run format:check       # Check formatting without changes
```

### Database Operations

**🔧 CUSTOMIZE IF USING A DATABASE**

```bash
npm run db:migrate         # Run database migrations
npm run db:seed            # Seed database with test data
npm run db:reset           # Reset database (migrate + seed)
npm run db:studio          # Open database GUI (Prisma Studio)
```

---

## Project Structure

```
/
├── frontend/                    # React frontend application
│   ├── src/
│   │   ├── components/         # Reusable React components
│   │   │   ├── ui/            # UI primitives (buttons, inputs, etc.)
│   │   │   ├── layout/        # Layout components (Header, Footer, Sidebar)
│   │   │   └── features/      # Feature-specific components
│   │   ├── pages/             # Page components (routes)
│   │   ├── hooks/             # Custom React hooks
│   │   ├── services/          # API client services
│   │   │   └── api.ts         # Axios/fetch client configuration
│   │   ├── store/             # State management (Redux/Zustand/Context)
│   │   ├── types/             # TypeScript type definitions
│   │   ├── utils/             # Utility functions
│   │   ├── assets/            # Static assets (images, icons, fonts)
│   │   ├── styles/            # Global styles and theme
│   │   ├── App.tsx            # Root component
│   │   ├── main.tsx           # Application entry point
│   │   └── vite-env.d.ts      # Vite type declarations
│   ├── public/                # Public static assets
│   ├── index.html             # HTML entry point
│   ├── vite.config.ts         # Vite configuration
│   ├── tsconfig.json          # TypeScript configuration
│   └── package.json           # Frontend dependencies
│
├── backend/                    # Node.js backend application
│   ├── src/
│   │   ├── controllers/       # Request handlers
│   │   ├── services/          # Business logic
│   │   ├── models/            # Database models (Prisma/TypeORM/Mongoose)
│   │   ├── routes/            # API route definitions
│   │   │   ├── api/          # API v1 routes
│   │   │   └── index.ts      # Route aggregation
│   │   ├── middleware/        # Express middleware
│   │   │   ├── auth.ts       # Authentication middleware
│   │   │   ├── error.ts      # Error handling middleware
│   │   │   └── validation.ts # Request validation
│   │   ├── config/            # Configuration files
│   │   │   ├── database.ts   # Database configuration
│   │   │   ├── env.ts        # Environment variables
│   │   │   └── cors.ts       # CORS configuration
│   │   ├── utils/             # Utility functions
│   │   ├── types/             # TypeScript type definitions
│   │   ├── validators/        # Request validation schemas (Zod/Joi)
│   │   ├── app.ts             # Express app setup
│   │   └── server.ts          # Server entry point
│   ├── prisma/                # Database schema (if using Prisma)
│   │   ├── schema.prisma     # Database schema definition
│   │   ├── migrations/       # Database migrations
│   │   └── seed.ts           # Database seed data
│   ├── tests/                 # Backend tests
│   │   ├── unit/             # Unit tests
│   │   ├── integration/      # Integration tests
│   │   └── fixtures/         # Test data
│   ├── tsconfig.json          # TypeScript configuration
│   └── package.json           # Backend dependencies
│
├── shared/                     # Shared code between frontend and backend
│   ├── types/                 # Shared TypeScript types
│   │   ├── user.ts           # User type definitions
│   │   ├── api.ts            # API request/response types
│   │   └── index.ts          # Type exports
│   ├── constants/             # Shared constants
│   ├── utils/                 # Shared utility functions
│   └── validators/            # Shared validation schemas
│
├── tests/                      # End-to-end tests
│   ├── e2e/                   # E2E test specs (Playwright/Cypress)
│   ├── fixtures/              # Test fixtures
│   └── playwright.config.ts   # Playwright configuration
│
├── scripts/                    # Build and deployment scripts
│   ├── setup.sh              # Initial project setup
│   ├── deploy.sh             # Deployment script
│   └── seed-db.ts            # Database seeding script
│
├── .claude/                    # Claude Code configuration
│   └── settings.local.json   # Local Claude settings (git-ignored)
│
├── .github/                    # GitHub configuration
│   └── workflows/            # GitHub Actions CI/CD
│       ├── ci.yml            # Continuous Integration
│       └── deploy.yml        # Deployment workflow
│
├── docker/                     # Docker configuration
│   ├── frontend.Dockerfile   # Frontend container
│   ├── backend.Dockerfile    # Backend container
│   └── nginx.conf            # Nginx configuration for production
│
├── CLAUDE.md                   # This file - Claude Code project documentation
├── README.md                   # Project documentation for humans
├── package.json                # Root package.json (monorepo scripts)
├── .env.example                # Environment variables template
├── .gitignore                  # Git ignore rules
├── docker-compose.yml          # Docker Compose configuration
└── tsconfig.json               # Root TypeScript configuration
```

### Key Architectural Decisions

**Frontend (React + Vite + TypeScript):**

- Component-based architecture with feature folders
- Centralized API client in `services/`
- Type-safe API calls using shared types
- State management isolated in `store/`

**Backend (Node.js + Express + TypeScript):**

- Layered architecture: Routes → Controllers → Services → Models
- Middleware for cross-cutting concerns (auth, validation, errors)
- Database ORM (Prisma/TypeORM) for type-safe queries
- RESTful API design with versioning (`/api/v1`)

**Shared Code:**

- Common TypeScript types ensure type safety across the stack
- Shared validation schemas prevent duplication
- Constants and utilities used by both frontend and backend

**Testing Strategy:**

- Unit tests for business logic (backend services, frontend utils)
- Integration tests for API endpoints
- E2E tests for critical user flows
- Component tests for complex UI components

**🔧 Add Project-Specific Decisions:**

```markdown
### [Your Decision Title]
- Why: [Reasoning]
- Alternative considered: [What you didn't choose]
- Trade-offs: [Pros/cons]
```

---

## Technology Stack

### Frontend

- **React 19.1.1** - UI library with concurrent features
- **Vite 7.1.7** - Build tool with HMR (not Create React App or webpack)
- **TypeScript ~5.9.3** - Type safety
- **React Router** - Client-side routing
- **Axios / TanStack Query** - API communication and caching
- **Zustand / Redux Toolkit** - State management (choose one)
- **Tailwind CSS / styled-components** - Styling (choose one)
- **shadcn/ui + Magic UI** - Component libraries (optional)
- **ESLint + Prettier** - Code quality

**🔧 Update based on your choices**

### Backend

- **Node.js 18+** - Runtime environment
- **Express** - Web framework
- **TypeScript ~5.9.3** - Type safety
- **Prisma / TypeORM / Mongoose** - Database ORM (choose one)
- **PostgreSQL / MongoDB / SQLite** - Database (choose one)
- **Zod / Joi** - Request validation (choose one)
- **JWT / Passport** - Authentication (choose one)
- **Jest / Vitest** - Testing framework (choose one)
- **ESLint + Prettier** - Code quality

**🔧 Update based on your choices**

### DevOps & Tooling

- **Docker** - Containerization (optional)
- **GitHub Actions** - CI/CD pipeline (or alternative)
- **Playwright / Cypress** - E2E testing (choose one)
- **Prettier** - Code formatting
- **Husky** - Git hooks (optional)
- **Commitlint** - Commit message linting (optional)

**🔧 Update based on your choices**

---

## TypeScript Configuration

The project uses TypeScript with a monorepo project references setup:

**Root Configuration:**

- `tsconfig.json` - Root configuration that references frontend, backend, and shared configs
- Enables project references for faster builds and better IDE support

**Frontend Configuration:**

- `frontend/tsconfig.json` - Frontend TypeScript configuration
- Configured for React and DOM types
- Strict mode enabled for type safety

**Backend Configuration:**

- `backend/tsconfig.json` - Backend TypeScript configuration
- Configured for Node.js environment
- Enables decorators if using TypeORM or similar

**Shared Configuration:**

- `shared/tsconfig.json` - Shared code TypeScript configuration
- Used by both frontend and backend
- Pure type definitions and utilities

---

## Environment Variables

### Environment Files Overview

**Environment-specific configuration files:**

```
.env.example          # Template file (committed to git)
.env                  # Backend development (git-ignored)
.env.local           # Local overrides (git-ignored)
.env.production      # Production values (git-ignored, deployed separately)
.env.test            # Test environment (git-ignored)
frontend/.env.local  # Frontend development (git-ignored)
```

**Setup Process:**

1. Copy `.env.example` to `.env`
2. Fill in your development values
3. Never commit `.env` files with secrets

### Frontend (.env.local)

**🔧 CUSTOMIZE THESE VARIABLES**

**Development:**

```bash
VITE_API_URL=http://localhost:3000/api
VITE_API_TIMEOUT=30000
VITE_ENV=development

# Add your project-specific variables
# VITE_STRIPE_PUBLIC_KEY=pk_test_...
# VITE_GOOGLE_MAPS_KEY=AIza...
```

**Production:**

```bash
VITE_API_URL=https://api.yourdomain.com/api
VITE_API_TIMEOUT=30000
VITE_ENV=production

# Use production keys
# VITE_STRIPE_PUBLIC_KEY=pk_live_...
```

### Backend (.env)

**🔧 CUSTOMIZE THESE VARIABLES**

**Development:**

```bash
NODE_ENV=development
PORT=3000
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
JWT_SECRET=dev-secret-change-in-production
JWT_EXPIRES_IN=7d
CORS_ORIGIN=http://localhost:5173

# Add your project-specific variables
# STRIPE_SECRET_KEY=sk_test_...
# AWS_ACCESS_KEY_ID=...
# SENDGRID_API_KEY=...
```

**Production:**

```bash
NODE_ENV=production
PORT=3000
DATABASE_URL="postgresql://user:password@prod-host:5432/dbname"
JWT_SECRET=strong-random-secret-minimum-32-chars
JWT_EXPIRES_IN=1d
CORS_ORIGIN=https://yourdomain.com

# Use production credentials
# STRIPE_SECRET_KEY=sk_live_...
```

**Security Notes:**

- ⚠️ Never commit `.env` files with real secrets
- ✅ Use strong, randomly generated secrets in production
- ✅ Rotate secrets regularly
- ✅ Use different secrets for each environment
- ✅ Store production secrets in secure vault (AWS Secrets Manager, etc.)

---

## API Documentation

**🔧 CUSTOMIZE API ENDPOINTS**

The backend API follows RESTful conventions:

**Base URL:** `http://localhost:3000/api/v1`

**Common Endpoints:**

- `GET /api/v1/health` - Health check
- `POST /api/v1/auth/login` - User login
- `POST /api/v1/auth/register` - User registration
- `GET /api/v1/users` - List users (authenticated)
- `GET /api/v1/users/:id` - Get user by ID

**🔧 Add your project endpoints here**

**Response Format:**

```typescript
{
  success: boolean;
  data?: any;
  error?: string;
  message?: string;
}
```

**🔧 Customize response format if different**

---

## Common Development Tasks

### Adding a New Feature

1. **Create feature branch:**

```bash
   git checkout -b feature/feature-name
```

2. **Add shared types** (if needed):

```typescript
   // shared/types/feature.ts
   export interface FeatureData {
     id: string;
     name: string;
   }
```

3. **Create API endpoint:**

```typescript
   // backend/src/routes/api/feature.ts
   // backend/src/controllers/feature.ts
   // backend/src/services/feature.ts
```

4. **Add frontend component:**

```typescript
   // frontend/src/components/features/Feature/
```

5. **Write tests:**

```bash
   npm run test:backend -- feature
   npm run test:frontend -- Feature
```

6. **Commit and push:**

```bash
   git add .
   git commit -m "feat: add feature description"
   git push origin feature/feature-name
```

### Adding a New API Endpoint

1. **Define types** in `shared/types/api.ts`
2. **Create validator** in `backend/src/validators/`
3. **Create service** in `backend/src/services/` (business logic)
4. **Create controller** in `backend/src/controllers/` (request handling)
5. **Add route** in `backend/src/routes/api/`
6. **Write integration tests** in `backend/tests/integration/`
7. **Update API docs** in this file

### Adding a New UI Component

1. **Create component file:**

```typescript
   // frontend/src/components/[ui|features]/ComponentName.tsx
   import type { ComponentProps } from './types';
   
   export interface ComponentNameProps extends ComponentProps {
     // props
   }
   
   export function ComponentName({ ...props }: ComponentNameProps) {
     // implementation
   }
```

2. **Add styles** (if using CSS modules or styled-components)

3. **Write component tests:**

```typescript
   // frontend/src/components/ComponentName.test.tsx
```

4. **Add to Storybook** (if using)

### Debugging

**Frontend:**

- Use React DevTools + Vite source maps
- Check console for errors and warnings
- Use Network tab to inspect API calls
- Add breakpoints in browser DevTools

**Backend:**

- Use `DEBUG=* npm run dev:backend` for verbose logging
- Add `debugger` statements and run with `node --inspect`
- Check backend console logs
- Use Postman/Insomnia to test endpoints directly

**Database:**

- Use Prisma Studio: `npm run db:studio`
- Check migration status: `npm run db:status`
- View query logs (enable in ORM config)

### Database Changes

**Adding a New Model:**

1. **Update schema:**

```prisma
   // prisma/schema.prisma
   model NewModel {
     id        String   @id @default(cuid())
     name      String
     createdAt DateTime @default(now())
   }
```

2. **Create migration:**

```bash
   npx prisma migrate dev --name add-new-model
```

3. **Update seed** (if needed):

```typescript
   // prisma/seed.ts
```

4. **Add types to shared:**

```typescript
   // shared/types/new-model.ts
```

**🔧 Adjust for your ORM (TypeORM, Mongoose, etc.)**

---

## Testing

### Test Strategy Overview

**When to use each type of test:**

| Test Type       | What to Test                       | When to Use                          | Speed    | Example                            |
| --------------- | ---------------------------------- | ------------------------------------ | -------- | ---------------------------------- |
| **Unit**        | Individual functions, utilities    | Pure logic, calculations, formatters | ⚡ Fast   | `formatDate()`, `calculateTotal()` |
| **Integration** | API endpoints, database operations | Multiple components working together | 🐢 Medium | `POST /api/users` with DB          |
| **E2E**         | Complete user flows                | Critical user journeys               | 🐌 Slow   | Login → Dashboard → Checkout       |
| **Component**   | React components in isolation      | Complex UI components                | ⚡ Fast   | `<PaymentForm />` rendering        |

**Test Pyramid Rule:**

- 70% Unit tests (fast, many)
- 20% Integration tests (medium speed, moderate)
- 10% E2E tests (slow, few but critical)

### Test Structure

```
tests/
├── unit/           # Pure function tests, utilities
├── integration/    # API endpoint tests
├── e2e/           # User flow tests (Playwright/Cypress)
└── fixtures/      # Test data and mocks
```

### Writing Tests

**Unit Test Example:**

```typescript
// backend/tests/unit/utils/date-formatter.test.ts
import { formatDate } from '@/utils/date-formatter';

describe('formatDate', () => {
  it('formats date correctly', () => {
    const result = formatDate(new Date('2024-01-15'));
    expect(result).toBe('January 15, 2024');
  });
});
```

**Integration Test Example:**

```typescript
// backend/tests/integration/routes/users.test.ts
import request from 'supertest';
import app from '@/app';

describe('GET /api/v1/users', () => {
  it('returns list of users', async () => {
    const response = await request(app)
      .get('/api/v1/users')
      .set('Authorization', `Bearer ${token}`);
    
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
  });
});
```

**E2E Test Example:**

```typescript
// tests/e2e/login.spec.ts
import { test, expect } from '@playwright/test';

test('user can login', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await page.fill('[name="email"]', 'user@example.com');
  await page.fill('[name="password"]', 'password');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL('/dashboard');
});
```

### Running Specific Tests

```bash
# Frontend
npm run test:frontend -- ComponentName   # Test specific component
npm run test:frontend -- --watch         # Watch mode

# Backend
npm run test:backend -- --grep "pattern"  # Test with pattern
npm run test:backend -- users.test.ts    # Test specific file

# E2E
npm run test:e2e -- --headed             # Run with visible browser
npm run test:e2e -- --debug              # Debug mode
npm run test:e2e -- tests/e2e/login.spec.ts  # Specific test file
```

### Test Coverage

```bash
npm run test:coverage          # Generate coverage report
open coverage/index.html       # View coverage report
```

**Coverage Thresholds (🔧 CUSTOMIZE):**

- Statements: 80%
- Branches: 75%
- Functions: 80%
- Lines: 80%

**Configure in:**

- Jest: `jest.config.js` → `coverageThreshold`
- Vitest: `vitest.config.ts` → `test.coverage.thresholds`

```javascript
// Example Jest configuration
module.exports = {
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 75,
      functions: 80,
      lines: 80
    }
  }
};
```

---

## Code Style & Patterns

### Component Structure (Frontend)

```typescript
// Preferred component structure
import { useState, useEffect } from 'react';
import type { ComponentProps } from './types';

// Types first
export interface MyComponentProps extends ComponentProps {
  title: string;
  onSubmit: (data: FormData) => void;
}

// Component
export function MyComponent({ title, onSubmit }: MyComponentProps) {
  // 1. Hooks
  const [isLoading, setIsLoading] = useState(false);
  
  // 2. Derived state
  const isDisabled = isLoading || !title;
  
  // 3. Effects
  useEffect(() => {
    // side effects
  }, []);
  
  // 4. Event handlers
  const handleSubmit = async () => {
    setIsLoading(true);
    await onSubmit(data);
    setIsLoading(false);
  };
  
  // 5. Render
  return (
    <div>
      <h2>{title}</h2>
      <button onClick={handleSubmit} disabled={isDisabled}>
        Submit
      </button>
    </div>
  );
}
```

### API Endpoint Pattern (Backend)

```typescript
// routes/api/resource.ts
import { Router } from 'express';
import { authenticate } from '@/middleware/auth';
import { validate } from '@/middleware/validation';
import { createResourceSchema } from '@/validators/resource';
import * as resourceController from '@/controllers/resource';

const router = Router();

router.post('/resources', 
  authenticate,                      // 1. Auth middleware
  validate(createResourceSchema),    // 2. Validation
  resourceController.create          // 3. Controller
);

export default router;

// controllers/resource.ts
export const create = async (req, res, next) => {
  try {
    const resource = await resourceService.create(req.body, req.user);
    res.json({ success: true, data: resource });
  } catch (error) {
    next(error);  // Error handling middleware
  }
};

// services/resource.ts (business logic)
export const create = async (data, user) => {
  // validation, business rules, database operations
  return await db.resource.create({ data });
};
```

### Naming Conventions

**Files:**

- Components: `PascalCase.tsx` (e.g., `BudgetDashboard.tsx`)
- Utilities: `kebab-case.ts` (e.g., `date-formatter.ts`)
- Test files: `*.test.ts` or `*.spec.ts`
- Type files: `*.types.ts` or just `.ts` in `types/` folder

**Code:**

- Components: `PascalCase` (`BudgetDashboard`)
- Functions/variables: `camelCase` (`calculateTotal`)
- Hooks: `camelCase` with `use` prefix (`useAuth`)
- Types/Interfaces: `PascalCase` (`UserProfile`)
- Constants: `UPPER_SNAKE_CASE` (`MAX_RETRY_ATTEMPTS`)
- Enum values: `PascalCase` (`Status.Active`)

**Directories:**

- `kebab-case` for all directories

---

## Error Handling

### Frontend Error Boundaries

```typescript
// src/components/ErrorBoundary.tsx
import { Component, type ReactNode } from 'react';

export class ErrorBoundary extends Component
  { children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: any) {
    console.error('Error caught:', error, info);
    // Log to error tracking service (Sentry, etc.)
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong. Please refresh the page.</div>;
    }
    return this.props.children;
  }
}
```

### Backend Error Responses

**Consistent error format:**

```typescript
{
  success: false,
  error: "ERROR_CODE",           // Machine-readable
  message: "Human readable message",
  details?: [...],               // Validation errors, etc.
  statusCode: 400
}
```

**Error codes (🔧 CUSTOMIZE):**

- `VALIDATION_ERROR` - Invalid input (400)
- `UNAUTHORIZED` - Not authenticated (401)
- `FORBIDDEN` - Not authorized (403)
- `NOT_FOUND` - Resource not found (404)
- `CONFLICT` - Resource conflict (409)
- `INTERNAL_ERROR` - Server error (500)

---

## Performance Considerations

### Frontend

**Code Splitting:**

```typescript
// Lazy load routes
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Settings = lazy(() => import('./pages/Settings'));

// Wrap in Suspense
<Suspense fallback={<Loading />}>
  <Routes>
    <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
</Suspense>
```

**Memoization:**

```typescript
// Expensive calculations
const expensiveValue = useMemo(() => 
  calculateComplexValue(data), 
  [data]
);

// Callback functions passed as props
const handleClick = useCallback(() => {
  // handler logic
}, [dependencies]);
```

**List Virtualization:**

```typescript
// For long lists (1000+ items)
import { FixedSizeList } from 'react-window';
```

**Bundle Analysis:**

```bash
npm run build -- --analyze  # If configured in vite.config.ts
```

### Backend

**Database:**

- Index frequently queried fields
- Use `select` to limit returned fields
- Batch operations when possible
- Use pagination for large datasets

**Caching:**

```typescript
// In-memory cache for expensive operations
const cache = new Map();
const getCached = async (key, fetchFn, ttl = 60000) => {
  if (cache.has(key)) {
    const { value, expires } = cache.get(key);
    if (Date.now() < expires) return value;
  }
  const value = await fetchFn();
  cache.set(key, { value, expires: Date.now() + ttl });
  return value;
};
```

**Rate Limiting:**

```typescript
// Express rate limit middleware
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use('/api/', limiter);
```

---

## Security Checklist

**🔧 REVIEW AND IMPLEMENT**

### Input Validation

- [ ] Validate all user inputs (frontend & backend)
- [ ] Sanitize data before database queries
- [ ] Use parameterized queries (prevent SQL injection)
- [ ] Validate file uploads (type, size, content)

### Authentication & Authorization

- [ ] Hash passwords with bcrypt (12+ rounds minimum)
- [ ] Implement JWT with reasonable expiration
- [ ] Use HTTP-only cookies for tokens
- [ ] Implement refresh token rotation
- [ ] Add rate limiting on auth endpoints

### Network Security

- [ ] Use HTTPS in production (redirect HTTP)
- [ ] Implement CORS properly (not `*` in production)
- [ ] Set secure HTTP headers (use helmet.js)
- [ ] Implement CSRF protection
- [ ] Use environment variables for secrets

### Database Security

- [ ] Use connection pooling
- [ ] Encrypt sensitive data at rest
- [ ] Regular automated backups
- [ ] Principle of least privilege for DB users
- [ ] Audit logs for sensitive operations

### Dependencies

- [ ] Audit dependencies regularly (`npm audit`)
- [ ] Use Socket.dev MCP for security scanning
- [ ] Keep dependencies updated
- [ ] Review dependency licenses

### API Security

- [ ] Implement request size limits
- [ ] Add timeout configurations
- [ ] Rate limiting per endpoint
- [ ] API versioning strategy
- [ ] Logging and monitoring

---

## Troubleshooting

### Common Issues

#### Port Already in Use

```bash
# Find process using port 3000
lsof -ti:3000

# Kill process
lsof -ti:3000 | xargs kill -9

# Or use different port
PORT=3001 npm run dev:backend
```

#### Database Connection Issues

**Symptoms:** Connection timeout, authentication failed

**Solutions:**

```bash
# Check if database is running
# PostgreSQL:
pg_isready

# Check DATABASE_URL in .env
cat .env | grep DATABASE_URL

# Reset database
npm run db:reset

# Check database logs
# PostgreSQL: /usr/local/var/log/postgres.log
```

#### Frontend Not Loading / Blank Page

**Solutions:**

```bash
# Clear Vite cache
rm -rf frontend/node_modules/.vite
rm -rf frontend/dist

# Check console for errors (F12 in browser)

# Verify VITE_API_URL in .env.local
cat frontend/.env.local

# Ensure backend is running
curl http://localhost:3000/api/health
```

#### Type Errors After Updating Shared Types

```bash
# Rebuild TypeScript project references
npm run build -- --force

# Or rebuild specific workspace
cd shared && npm run build
cd frontend && npm run build

# Restart TypeScript server in VS Code
# Cmd+Shift+P > "TypeScript: Restart TS Server"
```

#### Module Not Found Errors

```bash
# Reinstall dependencies
rm -rf node_modules frontend/node_modules backend/node_modules
npm install

# Clear npm cache
npm cache clean --force
npm install
```

#### Tests Failing

```bash
# Run tests with verbose output
npm run test -- --verbose

# Run specific test file
npm run test -- path/to/test.ts

# Clear test cache
npm run test -- --clearCache

# Update snapshots
npm run test -- -u
```

### Debug Mode

**Frontend:**

```bash
# Enable React DevTools profiler
localStorage.setItem('debug', '*');

# View source maps in production
# Set in vite.config.ts: build.sourcemap = true
```

**Backend:**

```bash
# Enable debug logging
DEBUG=* npm run dev:backend

# Node.js inspector
node --inspect backend/src/server.ts

# Then open chrome://inspect in Chrome
```

---

## Deployment

### Deployment Overview

This section provides comprehensive deployment guidance for taking your application from development to production.

**Deployment Checklist:**

- [ ] Choose deployment platform (Linode recommended for full control)
- [ ] Purchase domain name
- [ ] Setup production environment variables
- [ ] Configure database (managed or self-hosted)
- [ ] Setup SSL certificates
- [ ] Configure monitoring and logging
- [ ] Setup automated backups
- [ ] Test deployment in staging environment
- [ ] Configure CI/CD pipeline
- [ ] Document rollback procedures

**Recommended Stack:**

- **Server:** Linode VPS (full control, predictable pricing)
- **Process Manager:** PM2 (Node.js apps)
- **Reverse Proxy:** Nginx (static files + API proxy)
- **Database:** PostgreSQL (Linode Managed or self-hosted)
- **SSL:** Let's Encrypt (free, auto-renewing)
- **Monitoring:** PM2 + Netdata + Linode Metrics
- **CI/CD:** GitHub Actions

---

### Deployment Platform: Linode (Recommended)

**🔧 PRIMARY DEPLOYMENT PLATFORM**

#### Why Linode

**Selected Platform: Linode (Akamai Cloud Computing)**

**Why we chose Linode:**

- **Predictable pricing** - Simple, transparent billing with no surprise costs
- **Full control** - Traditional VPS with root access for custom configurations
- **Performance** - NVMe SSD storage, AMD EPYC processors, 40 Gbps network
- **Developer-friendly** - Clean API, excellent documentation, straightforward UI
- **Flexibility** - Can host full stack on single server or scale with Kubernetes
- **Cost-effective** - Better price/performance than AWS/GCP for our scale
- **Reliable** - 99.9% uptime SLA, daily backups available
- **Global** - Data centers worldwide for low latency

**Pricing Tier:** Linode 4GB - $24/month (recommended starting point)

**Account:** [YOUR_LINODE_ACCOUNT_EMAIL]

---

#### Linode Configuration

**🔧 CUSTOMIZE BASED ON YOUR NEEDS**

**Production Server:**

- **Plan:** Linode 4GB Dedicated CPU
- **Specs:** 2 CPU cores, 4GB RAM, 80GB SSD, 4TB transfer
- **Cost:** $24/month
- **Location:** [YOUR_DATACENTER] (e.g., Newark, NJ or closest to users)

**Database Server (if separate):**

- **Option A:** Linode Managed Database (PostgreSQL)
  - **Cost:** Starting at $15/month
  - **Includes:** Automatic backups, high availability, updates
- **Option B:** Self-hosted on same Linode
  - **Cost:** Included in server cost
  - **Setup:** Manual PostgreSQL installation

**Staging/Development:**

- **Plan:** Linode 2GB Shared (Nanode)
- **Cost:** $5/month
- **Purpose:** Testing deployments before production

---

#### Initial Server Setup

**1. Create Linode Instance**

**Via Linode Cloud Manager:**

```
1. Login to https://cloud.linode.com
2. Click "Create" → "Linode"
3. Choose:
   - Distribution: Ubuntu 22.04 LTS
   - Region: [Your region]
   - Plan: Linode 4GB Dedicated CPU
   - Label: production-app-server
   - Root Password: [Strong password]
   - SSH Keys: [Add your public key]
4. Click "Create Linode"
```

**Via Linode CLI:**

```bash
# Install Linode CLI
pip3 install linode-cli

# Configure
linode-cli configure

# Create Linode
linode-cli linodes create \
  --type g6-dedicated-2 \
  --region us-east \
  --image linode/ubuntu22.04 \
  --label production-app-server \
  --root_pass 'YOUR_SECURE_PASSWORD' \
  --authorized_keys "$(cat ~/.ssh/id_rsa.pub)"
```

**2. Initial Server Configuration**

**Connect to server:**

```bash
# Get your Linode's IP
linode-cli linodes list

# SSH into server
ssh root@YOUR_LINODE_IP
```

**Run initial setup script:**

```bash
# Update system
apt update && apt upgrade -y

# Create deploy user
adduser deploy
usermod -aG sudo deploy

# Setup SSH for deploy user
mkdir -p /home/deploy/.ssh
cp ~/.ssh/authorized_keys /home/deploy/.ssh/
chown -R deploy:deploy /home/deploy/.ssh
chmod 700 /home/deploy/.ssh
chmod 600 /home/deploy/.ssh/authorized_keys

# Configure firewall
ufw allow OpenSSH
ufw allow 80/tcp
ufw allow 443/tcp
ufw --force enable

# Install Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt-get install -y nodejs

# Install PM2 for process management
npm install -g pm2

# Install nginx for reverse proxy
apt install -y nginx

# Install certbot for SSL
apt install -y certbot python3-certbot-nginx

# Install PostgreSQL (if self-hosting database)
apt install -y postgresql postgresql-contrib
```

---

#### Application Deployment

**Deployment Strategy: Git + PM2**

**On your local machine, prepare repository:**

```bash
# Ensure .gitignore includes
echo "node_modules/
.env
*.log
dist/
build/" >> .gitignore

# Commit and push
git add .
git commit -m "Prepare for deployment"
git push origin main
```

**On Linode server:**

```bash
# Switch to deploy user
su - deploy

# Clone repository
cd /var/www
sudo mkdir -p /var/www
sudo chown deploy:deploy /var/www
git clone https://github.com/yourusername/yourproject.git app
cd app

# Install dependencies
npm install

# Create production environment file
nano .env
```

**Production `.env` file:**

```bash
NODE_ENV=production
PORT=3000
DATABASE_URL="postgresql://user:password@localhost:5432/production_db"
JWT_SECRET=your-super-secure-production-secret-min-32-chars
JWT_EXPIRES_IN=1d
CORS_ORIGIN=https://yourdomain.com

# Add your other production variables
```

**Build the application:**

```bash
# Build frontend
npm run build:frontend

# Build backend
npm run build:backend
```

---

#### PM2 Process Management

**Create PM2 ecosystem file (`ecosystem.config.js`):**

```javascript
module.exports = {
  apps: [
    {
      name: 'backend',
      script: './backend/dist/server.js',
      instances: 2,
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      error_file: './logs/backend-error.log',
      out_file: './logs/backend-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      max_memory_restart: '500M'
    }
  ]
};
```

**Start application with PM2:**

```bash
# Start app
pm2 start ecosystem.config.js

# Save PM2 configuration
pm2 save

# Setup PM2 to start on system boot
pm2 startup systemd
# Run the command it outputs

# Monitor
pm2 status
pm2 logs
pm2 monit
```

**Useful PM2 commands:**

```bash
pm2 list                # List all processes
pm2 restart backend     # Restart specific app
pm2 reload backend      # Zero-downtime reload
pm2 stop backend        # Stop app
pm2 delete backend      # Remove from PM2
pm2 logs backend        # View logs
pm2 logs backend --lines 100  # Last 100 lines
```

---

#### Nginx Reverse Proxy

**Create Nginx configuration:**

```bash
sudo nano /etc/nginx/sites-available/yourapp
```

**Nginx config (`/etc/nginx/sites-available/yourapp`):**

```nginx
# Backend API
upstream backend {
    server localhost:3000;
    keepalive 64;
}

server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    # Redirect HTTP to HTTPS (uncomment after SSL is setup)
    # return 301 https://$server_name$request_uri;

    # Frontend (static files)
    root /var/www/app/frontend/dist;
    index index.html;

    # Frontend routes
    location / {
        try_files $uri $uri/ /index.html;
    }

    # API proxy
    location /api {
        proxy_pass http://backend;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

**Enable site:**

```bash
# Create symlink
sudo ln -s /etc/nginx/sites-available/yourapp /etc/nginx/sites-enabled/

# Test configuration
sudo nginx -t

# Reload nginx
sudo systemctl reload nginx
```

---

#### SSL Certificate Setup

**Using Let's Encrypt (Free SSL):**

```bash
# Obtain certificate
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Certbot will automatically:
# 1. Obtain certificate
# 2. Modify nginx config for HTTPS
# 3. Setup auto-renewal

# Test auto-renewal
sudo certbot renew --dry-run

# Certificate will auto-renew via cron job
```

**After SSL setup, update Nginx config:**
The HTTPS server block is automatically added by Certbot. Uncomment the redirect line in the HTTP block.

---

#### Database Setup

**Option A: Linode Managed Database (Recommended)**

**Via Linode Cloud Manager:**

```
1. Click "Databases" → "Create Database Cluster"
2. Choose:
   - Database Engine: PostgreSQL 14
   - Region: [Same as your Linode]
   - Plan: Dedicated 4GB ($15/month)
   - Label: production-db
3. Click "Create Database"
4. Wait for provisioning (~10-15 minutes)
5. Get connection details from dashboard
```

**Via Linode CLI:**

```bash
linode-cli databases postgresql-create \
  --label production-db \
  --region us-east \
  --type g6-dedicated-2 \
  --engine postgresql/14
```

**Configure application:**

```bash
# Update .env with managed database URL
DATABASE_URL="postgresql://linpostgres:PASSWORD@HOST:PORT/postgres?sslmode=require"
```

**Benefits:**

- ✅ Automatic backups (daily)
- ✅ High availability
- ✅ Automatic updates
- ✅ Monitoring included
- ✅ Separate from app server

**Option B: Self-Hosted PostgreSQL**

**Install and configure:**

```bash
# Switch to postgres user
sudo -u postgres psql

# Create database and user
CREATE DATABASE production_db;
CREATE USER app_user WITH ENCRYPTED PASSWORD 'strong-password';
GRANT ALL PRIVILEGES ON DATABASE production_db TO app_user;
\q

# Configure PostgreSQL for local connections
sudo nano /etc/postgresql/14/main/pg_hba.conf
# Add: local   all   app_user   md5

# Restart PostgreSQL
sudo systemctl restart postgresql
```

**Update .env:**

```bash
DATABASE_URL="postgresql://app_user:strong-password@localhost:5432/production_db"
```

**Setup backups:**

```bash
# Create backup script
sudo nano /usr/local/bin/backup-db.sh
```

**Backup script (`/usr/local/bin/backup-db.sh`):**

```bash
#!/bin/bash
BACKUP_DIR="/var/backups/postgresql"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
mkdir -p $BACKUP_DIR

sudo -u postgres pg_dump production_db | gzip > $BACKUP_DIR/backup_$TIMESTAMP.sql.gz

# Keep only last 7 days
find $BACKUP_DIR -name "backup_*.sql.gz" -mtime +7 -delete
```

**Schedule daily backups:**

```bash
# Make executable
sudo chmod +x /usr/local/bin/backup-db.sh

# Add to crontab
sudo crontab -e
# Add: 0 2 * * * /usr/local/bin/backup-db.sh
```

---

#### Domain Configuration

**In your domain registrar (Namecheap, GoDaddy, Cloudflare, etc.):**

**Add DNS A records:**

```
A Record:
Host: @
Value: YOUR_LINODE_IP
TTL: 300

A Record:
Host: www
Value: YOUR_LINODE_IP
TTL: 300
```

**Using Linode DNS (optional but recommended):**

```bash
# Add domain to Linode
linode-cli domains create --domain yourdomain.com --type master

# Add A records
linode-cli domains records-create DOMAIN_ID \
  --type A \
  --name @ \
  --target YOUR_LINODE_IP

linode-cli domains records-create DOMAIN_ID \
  --type A \
  --name www \
  --target YOUR_LINODE_IP
```

**Update nameservers at registrar to Linode's:**

```
ns1.linode.com
ns2.linode.com
ns3.linode.com
ns4.linode.com
ns5.linode.com
```

---

#### Deployment Automation

**Create deployment script (`scripts/deploy-linode.sh`):**

```bash
#!/bin/bash

set -e  # Exit on error

echo "🚀 Deploying to Linode production server..."

# Configuration
SERVER="deploy@YOUR_LINODE_IP"
APP_DIR="/var/www/app"

echo "📦 Building application locally..."
npm run build

echo "📤 Uploading to server..."
rsync -avz --delete \
  --exclude 'node_modules' \
  --exclude '.git' \
  --exclude '.env' \
  ./ $SERVER:$APP_DIR/

echo "🔧 Installing dependencies on server..."
ssh $SERVER "cd $APP_DIR && npm ci --only=production"

echo "🏗️  Building on server..."
ssh $SERVER "cd $APP_DIR && npm run build"

echo "♻️  Restarting application..."
ssh $SERVER "cd $APP_DIR && pm2 reload ecosystem.config.js"

echo "🧹 Cleaning up old builds..."
ssh $SERVER "cd $APP_DIR && find logs/ -name '*.log' -mtime +7 -delete"

echo "✅ Deployment complete!"
echo "🌐 Application running at: https://yourdomain.com"

# Run health check
echo "🏥 Running health check..."
sleep 5
curl -f https://yourdomain.com/api/health || echo "⚠️  Health check failed!"
```

**Make executable:**

```bash
chmod +x scripts/deploy-linode.sh
```

**Deploy:**

```bash
./scripts/deploy-linode.sh
```

---

#### Automated Deployment with GitHub Actions

**Create `.github/workflows/deploy-linode.yml`:**

```yaml
name: Deploy to Linode

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3

    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'

    - name: Install dependencies
      run: npm ci

    - name: Run tests
      run: npm test

    - name: Build application
      run: npm run build

    - name: Deploy to Linode
      env:
        SSH_PRIVATE_KEY: ${{ secrets.SSH_PRIVATE_KEY }}
        SERVER_IP: ${{ secrets.SERVER_IP }}
      run: |
        mkdir -p ~/.ssh
        echo "$SSH_PRIVATE_KEY" > ~/.ssh/deploy_key
        chmod 600 ~/.ssh/deploy_key

        rsync -avz -e "ssh -i ~/.ssh/deploy_key -o StrictHostKeyChecking=no" \
          --exclude 'node_modules' \
          --exclude '.git' \
          ./ deploy@$SERVER_IP:/var/www/app/

        ssh -i ~/.ssh/deploy_key -o StrictHostKeyChecking=no deploy@$SERVER_IP << 'EOF'
          cd /var/www/app
          npm ci --only=production
          npm run build
          pm2 reload ecosystem.config.js
        EOF
```

**Setup GitHub Secrets:**

```
1. Generate deploy SSH key:
   ssh-keygen -t ed25519 -f ~/.ssh/linode_deploy -C "github-actions"

2. Add public key to server:
   ssh-copy-id -i ~/.ssh/linode_deploy.pub deploy@YOUR_LINODE_IP

3. Add to GitHub Secrets:
   - SSH_PRIVATE_KEY: Content of ~/.ssh/linode_deploy
   - SERVER_IP: Your Linode IP address
```

---

#### Monitoring & Maintenance

**Install monitoring tools:**

```bash
# Install htop for resource monitoring
sudo apt install htop

# Install netdata for real-time monitoring
bash <(curl -Ss https://my-netdata.io/kickstart.sh)
```

**Access Netdata dashboard:**

- URL: `http://YOUR_LINODE_IP:19999`
- Setup firewall: `sudo ufw allow 19999/tcp`
- Or use SSH tunnel: `ssh -L 19999:localhost:19999 deploy@YOUR_LINODE_IP`

**Linode Cloud Monitoring:**

```
1. In Linode Cloud Manager → Select your Linode
2. Click "Monitoring" tab
3. View CPU, Network, Disk IO metrics
4. Setup email alerts for high usage
```

**PM2 Monitoring:**

```bash
# Real-time monitoring
pm2 monit

# Check status
pm2 status

# View logs
pm2 logs

# Flush logs
pm2 flush
```

---

#### Backups

**Enable Linode Backups:**

```
1. Cloud Manager → Select Linode → Backups tab
2. Enable Backups ($2/month for 4GB Linode)
3. Configure backup schedule
```

**Benefits:**

- Daily, weekly, and biweekly snapshots
- 7-14 day retention
- One-click restore
- Backs up entire server

**Manual Backup Script:**

```bash
# Create backup script
sudo nano /usr/local/bin/backup-app.sh
```

**Backup script (`/usr/local/bin/backup-app.sh`):**

```bash
#!/bin/bash
BACKUP_DIR="/var/backups/app"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
APP_DIR="/var/www/app"

mkdir -p $BACKUP_DIR

# Backup application files
tar -czf $BACKUP_DIR/app_$TIMESTAMP.tar.gz \
    --exclude='node_modules' \
    --exclude='logs' \
    $APP_DIR

# Backup database (if self-hosted)
sudo -u postgres pg_dump production_db | gzip > $BACKUP_DIR/db_$TIMESTAMP.sql.gz

# Keep only last 7 days
find $BACKUP_DIR -name "app_*.tar.gz" -mtime +7 -delete
find $BACKUP_DIR -name "db_*.sql.gz" -mtime +7 -delete

echo "Backup completed: $TIMESTAMP"
```

**Schedule backups:**

```bash
sudo chmod +x /usr/local/bin/backup-app.sh
sudo crontab -e
# Add: 0 3 * * * /usr/local/bin/backup-app.sh
```

---

#### Security Best Practices

**Firewall configuration:**

```bash
# Check status
sudo ufw status

# Only allow necessary ports
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

**Fail2ban (prevent brute force):**

```bash
# Install
sudo apt install fail2ban

# Configure
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
sudo nano /etc/fail2ban/jail.local

# Enable for SSH and nginx
# Start service
sudo systemctl enable fail2ban
sudo systemctl start fail2ban
```

**Keep system updated:**

```bash
# Enable automatic security updates
sudo apt install unattended-upgrades
sudo dpkg-reconfigure -plow unattended-upgrades
```

---

#### Cost Breakdown

**Monthly Costs:**

- Production Linode (4GB): $24/month
- Managed Database (optional): $15/month
- Linode Backups (optional): $2/month
- Domain name: ~$12/year
- **Total: ~$41/month (with managed DB) or ~$26/month (self-hosted DB)**

**Scaling costs:**

- Upgrade to 8GB Linode: $48/month
- Separate database server: +$24/month
- Load balancer: $10/month
- Object Storage: $5/month for 250GB

---

### Alternative Platforms

#### Docker (Any Host)

**Benefits:**

- Portable across any hosting provider
- Consistent development and production environments
- Easy scaling and orchestration
- Isolated dependencies

**Basic Docker Compose Setup:**

**Create `docker-compose.yml`:**

```yaml
version: '3.8'

services:
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    ports:
      - "80:80"
    depends_on:
      - backend
    environment:
      - VITE_API_URL=http://backend:3000/api

  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    depends_on:
      - database
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://user:password@database:5432/dbname
      - JWT_SECRET=${JWT_SECRET}

  database:
    image: postgres:14-alpine
    volumes:
      - postgres_data:/var/lib/postgresql/data
    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
      - POSTGRES_DB=dbname

volumes:
  postgres_data:
```

**Frontend Dockerfile:**

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**Backend Dockerfile:**

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["node", "dist/server.js"]
```

**Deploy:**

```bash
docker-compose up -d
```

---

#### Serverless (Budget Option)

**Best for:** Smaller apps, low traffic, minimal infrastructure management

**Recommended Services:**

**Frontend:**

- **Vercel** (Recommended)
  - Free tier: Generous limits
  - Automatic deployments from Git
  - Built-in CDN
  - Zero config for Vite/React

- **Netlify** (Alternative)
  - Similar to Vercel
  - Better for static sites

**Backend:**

- **Railway** (Recommended)
  - Easy Node.js deployments
  - Generous free tier
  - Built-in PostgreSQL
  - $5/month after free tier

- **Render** (Alternative)
  - Free tier available
  - Auto-deploy from Git
  - Managed databases

**Database:**

- **Supabase** - PostgreSQL + Auth + Storage
  - Generous free tier
  - $25/month pro tier

- **PlanetScale** - Serverless MySQL
  - Free tier: 5GB storage
  - Excellent scaling

**Example: Vercel + Railway Setup**

**1. Deploy Frontend to Vercel:**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd frontend
vercel

# Production deployment
vercel --prod
```

**2. Deploy Backend to Railway:**

```bash
# Install Railway CLI
npm i -g @railway/cli

# Login
railway login

# Initialize project
cd backend
railway init

# Deploy
railway up
```

**Cost:** $0-15/month depending on usage

---

### Post-Deployment

#### Monitoring Strategy

**What to Monitor:**

- Server resources (CPU, memory, disk)
- Application performance (response times, errors)
- Database performance (query times, connections)
- User analytics (page views, errors)
- Security (failed logins, unusual traffic)

**Tools:**

- **Linode Metrics** - Built-in server monitoring
- **PM2 Plus** - Application monitoring ($15/month)
- **Sentry** - Error tracking (free tier available)
- **Google Analytics** - User analytics
- **UptimeRobot** - Uptime monitoring (free)

#### Maintenance Schedule

**Daily:**

- Check application health (`pm2 status`)
- Review error logs (`pm2 logs`)
- Monitor server resources (Netdata dashboard)

**Weekly:**

- Review security logs
- Check disk space (`df -h`)
- Update dependencies if needed
- Review performance metrics

**Monthly:**

- Update system packages (`apt update && apt upgrade`)
- Review and rotate logs
- Test backup restoration
- Review costs and optimize
- Security audit (`sudo lynis audit system`)

**Quarterly:**

- Update major dependencies
- Performance optimization review
- Database optimization (vacuum, reindex)
- SSL certificate check (auto-renewed, but verify)
- Disaster recovery drill

#### Scaling Strategy

**When to Scale:**

- CPU consistently above 70%
- Memory usage above 80%
- Response times increasing
- Database slow queries
- Disk space running low

**Vertical Scaling (Upgrade Server):**

```bash
# In Linode Cloud Manager
1. Power down Linode
2. Click "Resize"
3. Select larger plan
4. Click "Resize Linode"
5. Power back on
```

**Horizontal Scaling (Multiple Servers):**

1. **Load Balancer:** Linode NodeBalancer ($10/month)
2. **Multiple App Servers:** Clone Linode, setup PM2 cluster
3. **Separate Database:** Linode Managed Database
4. **CDN:** Cloudflare (free) for static assets
5. **Object Storage:** Linode Object Storage for uploads

**Database Scaling:**

- Add read replicas (Linode Managed DB)
- Connection pooling (PgBouncer)
- Query optimization and indexing
- Consider caching layer (Redis)

---

### Rollback Procedures

**Application Rollback:**

```bash
# SSH into server
ssh deploy@YOUR_LINODE_IP

# Navigate to app directory
cd /var/www/app

# View git history
git log --oneline -10

# Rollback to previous commit
git checkout COMMIT_HASH

# Rebuild
npm ci --only=production
npm run build

# Reload app
pm2 reload ecosystem.config.js
```

**Database Rollback:**

```bash
# Restore from backup
sudo -u postgres pg_restore -d production_db /var/backups/postgresql/backup_20240115_020000.sql.gz

# Or if you have migration system
npm run db:migrate:rollback
```

**Full Server Restore:**

1. In Linode Cloud Manager → Backups tab
2. Select backup snapshot
3. Click "Restore to this Linode"
4. Confirm restoration

---

## Continuous Integration

**🔧 CONFIGURE .github/workflows/ci.yml**

Typical CI pipeline:

1. Install dependencies
2. Run linting
3. Run type checking
4. Run tests
5. Build application
6. Deploy (if main branch)

---

## Additional Resources

**🔧 ADD PROJECT-SPECIFIC LINKS**

- [Project Repository](https://github.com/username/project)
- [API Documentation](https://api.example.com/docs)
- [Design System](https://www.figma.com/file/...)
- [Project Wiki](https://github.com/username/project/wiki)
- [Issue Tracker](https://github.com/username/project/issues)

### Learning Resources

- [React Docs](https://react.dev/)
- [Vite Guide](https://vite.dev/guide/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)

---

## Project-Specific Notes

**🔧 ADD IMPORTANT PROJECT-SPECIFIC INFORMATION**

### Known Issues

- [Issue description and workaround]

### Roadmap

- [ ] Feature 1
- [ ] Feature 2

### Team Conventions

- [Team-specific conventions]

### Dependencies Notes

- [Why certain dependencies were chosen]
- [Known version constraints]

---

## Getting Help

**🔧 CUSTOMIZE CONTACT INFO**

- Check the [README.md](./README.md) for general project info
- Review [GitHub Issues](https://github.com/username/project/issues)
- Ask in [Team Chat/Slack/Discord]
- Contact maintainers: [email/contact info]

---

## Changelog

> **📝 For detailed commit history:** `git log --oneline --graph -- CLAUDE.md` or [view on GitHub](https://github.com/username/project/commits/main/CLAUDE.md)

This section tracks significant changes to **this documentation file**. For project code changes, see git history or consider creating a separate `CHANGELOG.md`.

**🔧 CUSTOMIZE - Update this table when making significant changes to CLAUDE.md**

| Date         | Version | Changes                                                | Author |
| ------------ | ------- | ------------------------------------------------------ | ------ |
| [YYYY-MM-DD] | 1.1.0   | Comprehensive Deployment Section Overhaul              | [NAME] |
|              |         | - Added complete Linode deployment guide (1000+ lines) |        |
|              |         | - Server setup, PM2, Nginx, SSL configuration          |        |
|              |         | - Database setup (managed & self-hosted options)       |        |
|              |         | - Automated deployment with GitHub Actions             |        |
|              |         | - Monitoring, backups, security best practices         |        |
|              |         | - Alternative platforms (Docker, Serverless)           |        |
|              |         | - Post-deployment, scaling, rollback procedures        |        |
|              |         | - Added deployment commands to Quick Reference         |        |
|              |         | - Updated Table of Contents with subsections           |        |
| [YYYY-MM-DD] | 1.0.0   | Initial CLAUDE.md template creation                    | [NAME] |
|              |         | - Added comprehensive MCP server setup guide           |        |
|              |         | - Included troubleshooting section                     |        |
|              |         | - Added security checklist                             |        |

### Quick Git Commands for This File

```bash
# View history of CLAUDE.md
git log --oneline -- CLAUDE.md

# See who last edited specific sections
git blame CLAUDE.md

# View changes in last commit
git show HEAD:CLAUDE.md

# Compare with version from 1 week ago
git diff HEAD@{1.week.ago} -- CLAUDE.md
```

**Note:** For project code changes and version releases, consider creating a separate `CHANGELOG.md` file following [Keep a Changelog](https://keepachangelog.com/) format.

---

**Last Updated:** [DATE]
**Template Version:** 1.1.0
**Maintained by:** [TEAM/PERSON NAME]
