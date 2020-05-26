# Atix Code Challenge

Blockchain implementation writing the operations to a CSV file using JavaScript and Node.

## Setup

Fisrt install the neccesary packages using `npm` or `yarn`, using one of the following commands:

    $ yarn
    $ npm install

Second, run the application using one of the following commands:

    $ yarn start
    $ npm start

Or, run the application using one of the following commands for development purposes:

    $ yarn develop
    $ npm run develop

## Code quality

This project is `lint` and `prettier` using the community standard configuration of ESLint.

To format your code using [Prettier](https://prettier.io/) run the following command in the root directory:

    $ npx prettier --write "**/*.{js,json,jsx}"

## How to test?

We recommend testing using [Postman](https://www.postman.com/), if you need help sending a `POST` request you could follow this [guide](https://learning.postman.com/docs/postman/sending-api-requests/requests/).

Once you are ready, just try sending a `POST` request with the following data in `JSON` format to `localhost:8080/service/logger`:

    {
        "data": PLACE_HERE_WHEREVER_TEXT_YOU_WANT_TO_WRITE_ON_THE_FILE
    }

## Errors?

Remember checking if the folder `shared` is already created on the root directory, the `CSV` will be place inside.

## Licence

MIT

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
