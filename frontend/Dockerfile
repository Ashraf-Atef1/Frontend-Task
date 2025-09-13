# Builder Stage
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

# Production Stage 

FROM node:20-alpine AS production

WORKDIR /app

COPY --from=builder /app/package*.json ./

RUN npm ci --only=production

# Copy the built artifacts from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/.env .env
COPY --from=builder /app/next.config.ts .

# Set the environment variables (if needed)
ENV NODE_ENV=production

EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000 || exit 1

CMD ["npm", "start"]