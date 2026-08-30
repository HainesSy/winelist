# Base image with Node and Playwright browser dependencies pre-installed
FROM mcr.microsoft.com/playwright:v1.49.0-noble

WORKDIR /app

# Copy package specifications
COPY package*.json ./

# Install production dependencies
RUN npm ci

# Copy full application source code
COPY . .

# Build Vite client production assets
RUN npm run build

# Expose server port (Koyeb sets PORT environment variable)
ENV PORT=8000
EXPOSE 8000

# Start background sync server
CMD ["node", "server/sync-server.js"]
