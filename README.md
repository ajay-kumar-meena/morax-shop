# E-Commerce Project

This is a full-stack e-commerce project built with React for the frontend and Node.js for the backend. It uses Redux Toolkit and Redux Thunks for state management on the frontend. The backend provides RESTful APIs for user authentication, product management, and order processing. The environment is fully configurable using `.env` files.

## Table of Contents

- [Installation](#installation)
- [Frontend](#frontend)
- [Backend](#backend)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [License](#license)

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <repository-folder>

2. **Start command npm install**

3. **setup environment variables**
# MongoDB URI for connecting to the database
MONGO_URI="mongodb://localhost:27017" && "MONGO_ATLAS_URI"

# Port for backend server (default: 3000)
PORT=3000 

# JWT secret key for user authentication
JWT_SECRET="masdfjlksjdf"

# Cloudinary credentials for image uploads
CLOUDINARY_CLOUD_NAME=""
CLOUDINARY_API_KEY=""
CLOUDINARY_API_SECRET=""

# Set environment mode (development or production)
NODE_ENV=DEVELOPMENT

# URL of the frontend client (for CORS)
CLIENT_URL=http://localhost:5173 && "SERVER_URL"

# Razorpay credentials for payment gateway integration
RAZORPAY_API_KEY=""
RAZORPAY_API_SECRET=""
