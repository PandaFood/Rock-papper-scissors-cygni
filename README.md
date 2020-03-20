# Rock Paper Scissors Cygni Home Assignment

Home assignment from cygni. By Jonathan Brorsson

[Specification](/docs/specifications.pdf)


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You need ```Node.js``` and ```npm``` installed to run this project.

### Installing

To install all depencencies, run

```
npm install
```

## Running the program
After installing the prerequisites, you can start the program with
```
npm start
```

### Usage
After its started, you can talk to the program using http as specified in the [api documentation](/docs/api.md), with any program, such as
#### postman
POST to ```localhost:3000/api/games/``` with example body
``` 
{
	"name": "Jonathan"
}
```

#### powershell
Using the same example as above with powershell, in a terminal, write
```
curl -Method Post -Body '{ "name": "Jonathan" }' http://localhost:3000/api/games/
```

## Running the tests

To run all the tests, run the command `npm test`

## Built With

* [Express](https://expressjs.com/) - The web framework
* [Chai](https://www.chaijs.com/) - The test framework
* [npm](https://www.npmjs.com/) - Dependency Management


## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc

