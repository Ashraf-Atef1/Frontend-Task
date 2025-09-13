# Docker Setup for IO-Tech Task

This repository contains Docker configurations for both the frontend (Next.js) and backend (Strapi) applications.

## Prerequisites

- Docker
- Docker Compose

## Project Structure

```
├── backend/
│   ├── Dockerfile              # Production Dockerfile for Strapi backend
│   ├── Dockerfile.dev          # Development Dockerfile for Strapi backend
│   └── .dockerignore
├── frontend/
│   ├── Dockerfile              # Production Dockerfile for Next.js frontend
│   ├── Dockerfile.dev          # Development Dockerfile for Next.js frontend
│   └── .dockerignore
├── docker-compose.yml          # Production Docker Compose
└── docker-compose.dev.yml      # Development Docker Compose
```

## Quick Start

### Production Environment

1. **Build and run the applications:**

   ```bash
   docker-compose up --build
   ```

2. **Run in detached mode:**

   ```bash
   docker-compose up -d --build
   ```

3. **Access the applications:**
   - Frontend: http://localhost:3000
   - Backend (Strapi): http://localhost:1337
   - Strapi Admin Panel: http://localhost:1337/admin

### Development Environment

1. **Build and run the development setup:**

   ```bash
   docker-compose -f docker-compose.dev.yml up --build
   ```

2. **Run in detached mode:**
   ```bash
   docker-compose -f docker-compose.dev.yml up -d --build
   ```

The development setup includes:

- Hot reloading for both frontend and backend
- Volume mounts for live code editing
- Development-optimized configurations

## Environment Variables

### Backend (Strapi)

Create a `.env` file in the `backend` directory or update the environment variables in `docker-compose.yml`:

```env
HOST=0.0.0.0
PORT=1337
APP_KEYS=your-app-key-1,your-app-key-2
API_TOKEN_SALT=your-api-token-salt
ADMIN_JWT_SECRET=your-admin-jwt-secret
TRANSFER_TOKEN_SALT=your-transfer-token-salt
JWT_SECRET=your-jwt-secret
ENCRYPTION_KEY=your-encryption-key
```

**Important:** Replace the default values with secure, randomly generated strings for production use.

### Frontend (Next.js)

Create a `.env.local` file in the `frontend` directory:

```env
API_BASE_URL=http://localhost:1337
```

For Docker production, the API_BASE_URL is automatically set to communicate with the backend container.

## Docker Commands

### Build specific service

```bash
# Build only backend
docker-compose build backend

# Build only frontend
docker-compose build frontend
```

### View logs

```bash
# View logs for all services
docker-compose logs

# View logs for specific service
docker-compose logs backend
docker-compose logs frontend

# Follow logs in real-time
docker-compose logs -f
```

### Stop services

```bash
# Stop all services
docker-compose down

# Stop and remove volumes
docker-compose down -v
```

### Restart services

```bash
# Restart all services
docker-compose restart

# Restart specific service
docker-compose restart backend
```

## Data Persistence

The setup includes Docker volumes for:

- **backend_uploads**: Strapi uploaded files
- **backend_db**: Strapi database (SQLite)

These volumes ensure data persistence across container restarts.

## Health Checks

Both applications include health checks:

- **Backend**: Checks Strapi health endpoint
- **Frontend**: Checks Next.js application availability

Health checks ensure containers are properly running and can help with service dependencies.

## Troubleshooting

### Common Issues

1. **Port conflicts**: Ensure ports 3000 and 1337 are not in use by other applications
2. **Permission issues**: On Linux/macOS, you might need to adjust file permissions
3. **Build failures**: Clear Docker cache with `docker system prune -a`

### Logs and Debugging

```bash
# View detailed build logs
docker-compose build --no-cache --progress=plain

# Inspect container
docker exec -it io-tech-backend sh
docker exec -it io-tech-frontend sh

# Check container status
docker-compose ps
```

### Reset Everything

```bash
# Stop all containers and remove everything
docker-compose down -v --rmi all
docker system prune -a
```

## Security Notes

- The Dockerfiles use non-root users for better security
- Environment variables should be properly secured in production
- Consider using Docker secrets for sensitive data in production environments
- Update the default Strapi keys and secrets before deploying to production

## Performance Optimization

- Multi-stage builds reduce final image size
- .dockerignore files exclude unnecessary files
- Production images use only necessary dependencies
- Health checks help with proper load balancing
