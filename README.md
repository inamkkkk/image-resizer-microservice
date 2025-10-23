# Image Resizer Microservice

A simple microservice for resizing images using Node.js and Express.

## Features

*   Resizes images to specified width and height.
*   Uses `sharp` for image processing.
*   Provides error handling for invalid input.

## Requirements

*   Node.js (>= 14)
*   npm or yarn

## Installation

1.  Clone the repository:

    
    git clone <repository_url>
    cd image-resizer-microservice
    

2.  Install dependencies:

    
    npm install
    

    or

    
    yarn install
    

## Configuration

*   Set environment variables:
    *   `PORT`: The port the server will listen on (default: 3000).
    *   `UPLOAD_DIR`: The directory where uploaded images will be stored (default: uploads).

## Running the service


node server.js


## Usage

Send a POST request to `/resize` with the image file in the `image` field and the desired width and height in the `width` and `height` fields. Example:


curl -X POST \
  http://localhost:3000/resize \
  -F image=@image.jpg \
  -F width=200 \
  -F height=200


The response will be a JSON object with the path to the resized image.

## API Endpoints

*   `POST /resize`: Resizes the image.

## Error Handling

*   Returns a 400 status code for invalid input (e.g., missing image, invalid width/height).
*   Returns a 500 status code for server errors.
