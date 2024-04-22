# Sweet Home Server - Backend for Property Management Web Application

Sweet Home Server is the backend component of the Sweet Home web application, responsible for handling data storage, retrieval, and business logic. It is built using Express.js with TypeScript, MongoDB, Mongoose for database management, and various other dependencies for server-side functionalities.

## Features

- **RESTful API**: Provides a RESTful API interface for managing properties.
- **Data Persistence**: Utilizes MongoDB for data storage, ensuring efficient and reliable data persistence.
- **Middleware**: Implements middleware such as CORS for handling cross-origin requests and error handling.
- **Type Safety**: Utilizes TypeScript for type safety throughout the application, reducing runtime errors.
- **Environment Variables**: Uses dotenv for managing environment variables, enhancing security and configurability.

## Usage

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed and running locally or accessible remotely.

### Installation

1. Clone the repository:
   git clone https://github.com/mahdimortuza/sweet-home-server.git

2. Navigate to the project directory:
   cd sweet-home-server

3. Install dependencies:
   npm install

### Configuration

1. Configure environment variables:

   - Create a `.env` file in the root directory.
   - Add necessary environment variables such as MongoDB connection URI, server port, etc.

### Running the Server

- **Development Mode**:
  npm run start:dev

- **Production Mode**:
  npm run build
  npm run start:prod

### Accessing the API

The server will be running at `http://localhost:5000` by default.

## Contributing

Contributions are welcome! Feel free to open issues or pull requests for any improvements or features you'd like to see.
