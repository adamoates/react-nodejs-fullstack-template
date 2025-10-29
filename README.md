# Full Stack React + Node.js Template

A comprehensive template for building full-stack applications with React 19, Vite, TypeScript, and Node.js/Express backend.

## Features

- ✅ **React 19** with TypeScript
- ✅ **Vite** for fast development and building
- ✅ **Node.js + Express** backend (ready to implement)
- ✅ **Comprehensive CLAUDE.md** - Complete documentation for Claude Code
- ✅ **Production-ready deployment guide** (Linode, Docker, Serverless)
- ✅ **MCP server recommendations** for enhanced development
- ✅ **ESLint** configuration
- ✅ **Full stack project structure** (monorepo ready)

## Quick Start

```bash
# 1. Use this template
Click "Use this template" button on GitHub

# 2. Clone your new repository
git clone https://github.com/yourusername/your-project.git
cd your-project

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
```

## What's Included

### CLAUDE.md Documentation

This template includes a **comprehensive CLAUDE.md file** (2,500+ lines) that provides:

- **Quick Reference Card** - Most common commands
- **MCP Server Setup** - 15+ recommended MCP servers with installation commands
- **Complete Deployment Guide** - Production-ready Linode deployment (1,000+ lines)
- **Alternative Platforms** - Docker and Serverless options
- **Development Workflows** - How to add features, components, API endpoints
- **Testing Strategy** - Unit, integration, and E2E testing
- **Security Checklist** - Production security best practices
- **Troubleshooting** - Common issues and solutions
- **And much more...**

### Project Structure

```
/
├── frontend/          # React frontend (to be created)
├── backend/           # Node.js backend (to be created)
├── shared/            # Shared types and utilities (to be created)
├── CLAUDE.md          # ⭐ Comprehensive Claude Code documentation
├── README.md          # This file
├── package.json       # Root package.json
└── .gitignore         # Git ignore rules
```

## Customization

### 1. Update CLAUDE.md

Replace placeholders in `CLAUDE.md`:

- `[PROJECT_NAME]` - Your project name
- `[PROJECT_DESCRIPTION]` - Brief description
- `[YOUR_LINODE_ACCOUNT_EMAIL]` - If using Linode
- `[YOUR_DATACENTER]` - Your preferred datacenter location
- Other `🔧 CUSTOMIZE` markers throughout

### 2. Install MCP Servers

Follow the MCP Server Configuration section in `CLAUDE.md` to install recommended servers:

```bash
# Essential servers
claude mcp add --npm @modelcontextprotocol/server-github npx -y @modelcontextprotocol/server-github
claude mcp add --npm @modelcontextprotocol/server-git npx -y @modelcontextprotocol/server-git
# ... and more
```

### 3. Setup Project Structure

Create your monorepo structure:

```bash
# Create directories
mkdir -p frontend backend shared

# Initialize frontend (example with Vite)
cd frontend
npm create vite@latest . -- --template react-ts

# Initialize backend
cd ../backend
npm init -y
# Install backend dependencies
npm install express cors dotenv
npm install -D typescript @types/node @types/express ts-node nodemon
```

## Documentation

All documentation for working with Claude Code is in **CLAUDE.md**. This includes:

- Development commands and workflows
- Deployment procedures (Linode, Docker, Serverless)
- Testing strategies
- Security best practices
- Common development tasks
- Troubleshooting guide

## Technologies

### Current (Minimal Template)

- React 19.1.1
- Vite 7.1.7
- TypeScript ~5.9.3
- ESLint 9

### Recommended Stack (See CLAUDE.md)

- **Frontend:** React + Vite + TypeScript + React Router + TanStack Query
- **Backend:** Node.js + Express + TypeScript + Prisma/TypeORM
- **Database:** PostgreSQL (Linode Managed or self-hosted)
- **Deployment:** Linode VPS with PM2 + Nginx
- **Testing:** Vitest/Jest + Playwright
- **Styling:** Tailwind CSS + shadcn/ui + Magic UI

## Deployment

See the **Deployment section in CLAUDE.md** for:

- Complete Linode VPS deployment guide (step-by-step)
- Docker containerization
- Serverless deployment (Vercel + Railway)
- CI/CD with GitHub Actions
- Monitoring and maintenance
- Scaling strategies

## Contributing

See `CLAUDE.md` → Common Development Tasks for:

- Adding new features
- Creating API endpoints
- Building UI components
- Writing tests

## License

MIT

## Template Info

**Version:** 1.1.0
**Last Updated:** 2025
**Template Purpose:** Full-stack React + Node.js with comprehensive Claude Code documentation

---

**⭐ Star this template if you find it useful!**
