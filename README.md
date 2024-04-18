
# Basic REST-API



## Description

This project is a simple REST API developed with Node.js, Express, and TypeScript. It is designed to manage educational course data, supporting CRUD operations—Create (POST), Read (GET), Update (PUT), and Delete (DELETE). Course resources are stored locally in the "db.json" file, without using an external database.

Data validation is performed through Zod, ensuring that only correct data is processed by the API. To maintain high standards of quality and reliability, the project is equipped with a suite of automated tests. These tests, provided by our teacher, verify that each endpoint operates as expected, conforming to the typical behaviors associated with CRUD operations.


## API Endpoints

GET /api/courses

Retrieves a list of all available courses.

POST /api/courses

Adds a new course to the collection

GET /api/courses/:id

Fetches a course by ID.

PUT /api/courses/:id

Updates an existing course identified by id.

DELETE /api/courses/:id

Removes the course from the collection by ID.

## Setup Instructions

Clone the repository:

           git clone https://github.com/plugga-tech/express-api-ts-CatAvadani.git
   
Navigate to the project directory: 

          cd express-api-ts-CatAvadani

Install dependencies: 
      
          npm install

Start the development server: 
         
         npm run dev

Open http://localhost:3000 with your browser to see the result.


