# Stage 1: Build the application
FROM node:22-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package manager files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Install pnpm
RUN npm install -g pnpm

# Install build dependencies
RUN apk add --no-cache python3 make g++

# Install dependencies
RUN pnpm install

# Copy the rest of the application
COPY . .

# Build the application
RUN pnpm build

# Stage 2: Production image
FROM node:22-alpine

# Set the working directory
WORKDIR /app

# Copy the built application from the build stage
COPY --from=build /app/.output ./.output
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json


# Expose the port the app runs on
EXPOSE 3000

# Set the host to 0.0.0.0
ENV HOST=0.0.0.0

# Set the command to run the application
CMD ["node", ".output/server/index.mjs"]
