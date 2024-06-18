# Use an official Node.js LTS image as the base
FROM node:lts-alpine as build-stage

# Set working directory inside the image
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml to the working directory
COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Build the SolidJS application
RUN pnpm run build

# Stage 2: Use a lightweight Node.js image for serving the application
FROM node:lts-alpine

# Set working directory inside the image
WORKDIR /app

# Copy the built app from the previous stage
COPY --from=build-stage /app/dist ./dist

# Install serve to run the application
RUN npm install -g serve

# Set the command to run when the container starts
CMD ["serve", "-s", "dist", "-l", "3000"]

# Expose the port that the app runs on
EXPOSE 3000