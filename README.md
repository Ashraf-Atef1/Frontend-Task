# IO-Tech Task 🚀

A full-stack web application built with **Next.js** frontend and **Strapi** backend, featuring a modern multilingual (Arabic/English) interface with Docker containerization support.

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Development](#development)
- [Production](#production)
- [Testing](#testing)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

This project is a full-stack application that includes:

- **Frontend**: A responsive Next.js application with internationalization support
- **Backend**: A Strapi CMS for content management
- **Docker**: Containerized development and production environments

## 🛠 Tech Stack

### Frontend

- **Next.js 15.5.2** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **next-intl** - Internationalization (i18n) support
- **Redux Toolkit** - State management
- **Radix UI** - Accessible UI components
- **Formik** - Form handling
- **Axios** - HTTP client
- **Jest** - Testing framework

### Backend

- **Strapi 5.23.4** - Headless CMS
- **SQLite** - Database (development)
- **TypeScript** - Type-safe backend development
- **Jest** - Testing framework

### DevOps & Tools

- **Docker & Docker Compose** - Containerization
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Makefile** - Build automation

## ✨ Features

- 🌍 **Multilingual Support** - Arabic and English localization
- 📱 **Responsive Design** - Mobile-first approach
- 🔍 **Search Functionality** - Advanced search capabilities
- 👥 **Team Management** - Team member profiles and management
- 🏢 **Company Profiles** - Company information management
- 🎯 **Hero Sections** - Dynamic hero content
- 📧 **Newsletter Subscription** - Email subscription system
- 🧪 **Comprehensive Testing** - Unit and integration tests
- 🐳 **Docker Support** - Containerized environments
- 🚀 **Production Ready** - Optimized builds and deployment

## 📁 Project Structure

```
.
├── backend/                 # Strapi backend application
│   ├── src/
│   │   ├── api/            # API endpoints
│   │   │   ├── client/     # Client management
│   │   │   ├── company/    # Company profiles
│   │   │   ├── hero/       # Hero sections
│   │   │   ├── subscriber/ # Newsletter subscriptions
│   │   │   └── team-member/# Team member management
│   │   ├── admin/          # Admin panel customization
│   │   └── extensions/     # Strapi extensions
│   ├── config/             # Configuration files
│   ├── database/           # Database migrations
│   ├── public/             # Static assets
│   └── tests/              # Backend tests
│
├── frontend/               # Next.js frontend application
│   ├── src/
│   │   ├── app/            # App Router pages
│   │   ├── components/     # React components
│   │   │   ├── home/       # Home page components
│   │   │   ├── shared/     # Shared components
│   │   │   ├── ui/         # UI components
│   │   │   └── service/    # Service-related components
│   │   ├── lib/            # Utility libraries
│   │   ├── messages/       # i18n message files
│   │   └── types/          # TypeScript type definitions
│   ├── public/             # Static assets
│   └── __tests__/          # Frontend tests
│
├── docker-compose.yml      # Production Docker setup
├── docker-compose.dev.yml  # Development Docker setup
├── Makefile               # Build automation commands
└── README.md              # This file
```

## 📋 Prerequisites

- **Node.js** 18+ and **npm/yarn**
- **Docker** and **Docker Compose** (for containerized setup)
- **Git** for version control

## 🚀 Quick Start

### Using Docker (Recommended)

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd "IO-tech task"
   ```

2. **Start the development environment**

   ```bash
   make dev
   ```

3. **Access the applications**
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend: [http://localhost:1337](http://localhost:1337)
   - Strapi Admin: [http://localhost:1337/admin](http://localhost:1337/admin)

### Manual Setup

1. **Setup Backend**

   ```bash
   cd backend
   yarn install
   yarn develop
   ```

2. **Setup Frontend** (in a new terminal)
   ```bash
   cd frontend
   yarn install
   yarn dev
   ```

## 🔧 Development

### Available Commands

Using Makefile (recommended):

```bash
make help           # Show all available commands
make dev            # Start development environment
make dev-down       # Stop development environment
make prod           # Start production environment
make down           # Stop all services
make logs           # View logs from all services
make build          # Build Docker images
```

### Frontend Development

```bash
cd frontend
yarn dev            # Start development server
yarn build          # Build for production
yarn test           # Run tests
yarn test:watch     # Run tests in watch mode
yarn lint           # Run ESLint
```

### Backend Development

```bash
cd backend
yarn develop        # Start development server
yarn build          # Build for production
yarn test           # Run tests
yarn test:watch     # Run tests in watch mode
```

## 🚀 Production

### Using Docker

```bash
make prod
```

### Manual Deployment

1. **Build Frontend**

   ```bash
   cd frontend
   yarn build
   yarn start
   ```

2. **Build Backend**
   ```bash
   cd backend
   yarn build
   yarn start
   ```

## 🧪 Testing

### Run All Tests

```bash
# Frontend tests
cd frontend && yarn test

# Backend tests
cd backend && yarn test
```

### Test Coverage

```bash
# Frontend coverage
cd frontend && yarn test:coverage

# Backend coverage
cd backend && yarn test:coverage
```

## 📚 API Documentation

The Strapi backend provides:

### Content Types

- **Hero** - Hero section content
- **Company** - Company profile information
- **Team Member** - Team member profiles
- **Client** - Client information
- **Subscriber** - Newsletter subscriptions

### API Endpoints

- `GET /api/heroes` - Fetch hero content
- `GET /api/companies` - Fetch company profiles
- `GET /api/team-members` - Fetch team members
- `POST /api/subscribers` - Subscribe to newsletter

Access the full API documentation at: [http://localhost:1337/documentation](http://localhost:1337/documentation)

## 🌐 Internationalization

The application supports:

- **English (en)** - Default language
- **Arabic (ar)** - RTL support

Language files are located in `frontend/src/messages/`

## 🔧 Environment Variables

### Frontend (.env.local)

```bash
API_BASE_URL=http://localhost:1337
NEXT_PUBLIC_API_URL=http://localhost:1337
```

### Backend (.env)

```bash
HOST=0.0.0.0
PORT=1337
APP_KEYS=your-app-keys
API_TOKEN_SALT=your-api-token-salt
ADMIN_JWT_SECRET=your-admin-jwt-secret
TRANSFER_TOKEN_SALT=your-transfer-token-salt
JWT_SECRET=your-jwt-secret
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Follow TypeScript best practices
- Use ESLint and Prettier for code formatting
- Write tests for new features
- Follow conventional commit messages

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues:

1. Check the [troubleshooting section](#troubleshooting)
2. Look at existing [GitHub Issues](link-to-issues)
3. Create a new issue with detailed information

### Troubleshooting

**Common Issues:**

1. **Port already in use**

   ```bash
   make down  # Stop all services
   make dev   # Restart
   ```

2. **Permission denied (Docker)**

   ```bash
   sudo chmod +x docker-entrypoint.sh
   ```

3. **Node modules issues**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```
