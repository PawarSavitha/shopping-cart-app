# Use the official Node.js image.
FROM node:16 AS build

# Set the working directory.
WORKDIR /app

# Install dependencies.
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install

# Copy source code and build the app.
COPY frontend/ ./
RUN npm run build

# Serve the app using Nginx.
FROM nginx:alpine

# Copy build artifacts to the Nginx directory.
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80.
EXPOSE 80

# Start Nginx.
CMD ["nginx", "-g", "daemon off;"]
