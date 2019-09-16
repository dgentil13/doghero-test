# Use an Node runtime as a parent image
FROM node:alpine

# Set the working directory to /app
RUN mkdir -p /usr/app/server
WORKDIR /usr/app/server

# Copy the current directory contents into the container at /app
COPY ["package.json", "package-lock.json*", "./"]

# Install any needed packages specified in package.json
RUN apk --no-cache add --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers autoconf automake make nasm python git && \
  npm install --quiet node-gyp -g && npm install
# Copy the the rest of directory contents
COPY . .

# Make port 8000 available to the world outside this container
EXPOSE 8000

# Define environment variable
ENV PORT 8000
ENV MONGODB_URI mongodb://mongo:27017/doghero-test

# Run app.py when the container launches
CMD ["npm", "start"]