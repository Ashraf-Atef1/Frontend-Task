.PHONY: help build up down logs clean dev dev-down prod

help: ## Show this help message
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Targets:'
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  %-15s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

build: ## Build all Docker images
	docker-compose build

up: prod ## Start production environment

prod: ## Start production environment
	docker-compose up -d --build

down: ## Stop all services
	docker-compose down

dev: ## Start development environment
	docker-compose -f docker-compose.dev.yml up --build

dev-down: ## Stop development environment
	docker-compose -f docker-compose.dev.yml down

logs: ## View logs from all services
	docker-compose logs -f

logs-backend: ## View backend logs
	docker-compose logs -f backend

logs-frontend: ## View frontend logs
	docker-compose logs -f frontend

restart: ## Restart all services
	docker-compose restart

restart-backend: ## Restart backend service
	docker-compose restart backend

restart-frontend: ## Restart frontend service
	docker-compose restart frontend

clean: ## Clean up containers, volumes, and images
	docker-compose down -v --rmi all
	docker system prune -f

status: ## Show status of all containers
	docker-compose ps

shell-backend: ## Open shell in backend container
	docker exec -it io-tech-backend sh

shell-frontend: ## Open shell in frontend container
	docker exec -it io-tech-frontend sh
