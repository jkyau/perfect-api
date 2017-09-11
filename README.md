## Table of Contents  
* [Walmart Labs Assignment](#walmart-labs-assignment)  
* [Getting Started](#getting-started)  
* [Testing](#testing) 
  * [How to test](#how-to-test) 
  * [Testing with AVA](#testing-with-ava)   
* [Theoretical Next Steps](#next-steps)   

<a name="walmart-labs-assignment"></a>
## Walmart Labs Assignment
- [x] Create a simple node.js API server
- [x] Use Hapi.js to create a web server for your API
- [x] Have 1 endpoint that returns a list of your favorite movies (at least 10) and a URL to an image for the movie poster.

<a name="getting-started"></a>
## Getting Started
To start the server run the following commands in the commandline. 
```
Git clone https://github.com/jkyau/walmart-api.git
cd walmart-api
npm install
node server.js
```
Go to http://localhost:8001/v1/api/movies and the response should be the following:
```
  {
    "id": 1,
    "title": "The Mighty Ducks",
    "description": "A self-centered Minnesota lawyer is sentenced to community service coaching a rag tag youth hockey team.",
    "image_url": "https://images-na.ssl-images-amazon.com/images/M/MV5BYzdkMGUxYTMtNWU0YS00MmMwLWI4ZDYtNTgyN2IzZjNlMzYxXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SY1000_CR0,0,666,1000_AL_.jpg"
  },
  {
    "id": 2,
    "title": "D2: The Mighty Ducks",
    "description": "Gordon Bombay is forced to withdraw from the minor hockey league with a knee injury. Much to his surprise, he is given the job of coach of Team USA Hockey for the Junior Goodwill Games in ...",
    "image_url": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA1YjVjZWQtZTNkYS00NTA2LThhODUtZTI1MzIwMWRjNWMzXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    "id": 3,
    "title": "D3: The Mighty Ducks",
    "description": "The unruly team of hockey misfits grows up a bit and receives scholarships to a prestigious prep school, where they take on the snotty varsity team.",
    "image_url": "https://images-na.ssl-images-amazon.com/images/M/MV5BNWMyZmNkNTMtYTZlMi00MmQ5LWE4NWQtMzVjZWZhNmU1Yjc1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    "id": 4,
    "title": "The Big Green",
    "description": "A teacher on exchange from England is placed in an underachieving Texan school, where she coaches the children in soccer, improving their self esteem and leading to unexpected success.",
    "image_url": "https://images-na.ssl-images-amazon.com/images/M/MV5BMDc4OGRiNzAtZWUyZi00NGQxLTk5ZTgtMDIyYTc4NmZkODQ3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    "id": 5,
    "title": "Little Giants",
    "description": "Misfits form their own opposing team to an elite peewee football team, coached by the elite team coach's brother.",
    "image_url": "https://images-na.ssl-images-amazon.com/images/M/MV5BNTBlNGFmNTktZGJlZi00ZWNkLWI0MGItNjhhNjQyNWM1MmVlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    "id": 6,
    "title": "Angels in the Outfield",
    "description": "When a boy prays for a chance to have a family if the California Angels win the pennant, angels are assigned to make that possible.",
    "image_url": "https://images-na.ssl-images-amazon.com/images/M/MV5BZDE1MWU1ZDQtOTg3YS00MTEwLTkxNjItMDQzY2UxMThjYmZkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    "id": 7,
    "title": "Rookie of the Year",
    "description": "When an accident miraculously gives a boy an incredibly powerful pitching arm, he becomes a major league pitcher for the Chicago Cubs.",
    "image_url": "https://images-na.ssl-images-amazon.com/images/M/MV5BZGJhODAwNDQtNGY0My00ZDA4LTgwOTMtMTA5NzdhZTQ0YmIwXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    "id": 8,
    "title": "The Sandlot",
    "description": "In the summer of 1962, a new kid in town is taken under the wing of a young baseball prodigy and his rowdy team, resulting in many adventures.",
    "image_url": "https://images-na.ssl-images-amazon.com/images/M/MV5BODllYjM1ODItYjBmOC00MzkwLWJmM2YtMjMyZDU3MGJhNjc4L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    "id": 9,
    "title": "The Little Rascals",
    "description": "Alfalfa is wooing Darla and his \"He-Man-Woman-Hating\" friends attempt to sabotage the relationship.",
    "image_url": "https://images-na.ssl-images-amazon.com/images/M/MV5BYWE1MzdmNmMtNWQwZS00MTVkLTk3MDMtYzVkOWZlOTczMDIwXkEyXkFqcGdeQXVyNjg4NzYzMzA@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    "id": 10,
    "title": "Blank Check",
    "description": "A young boy inadvertently gains possession of a check for one million dollars, which he proceeds to spend, unaware that the gangsters it belongs to are in pursuit.",
    "image_url": "https://images-na.ssl-images-amazon.com/images/M/MV5BYzdkMGUxYTMtNWU0YS00MmMwLWI4ZDYtNTgyN2IzZjNlMzYxXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SY1000_CR0,0,666,1000_AL_.jpg"
  }
]
```
Or you can use curl via the command line. 
```
curl http://localhost:8001/v1/api/movies
```
<a name="testing"></a>
## Testing
<a name="how-to-test"></a>
### How to test
You'll need to install [AVA](https://github.com/avajs/ava) to run the test and simply run `npm test`.
```
npm install --global ava
npm test
```
The results should look like this: 
![ScreenShot](https://user-images.githubusercontent.com/194873/29955781-128bc556-8e97-11e7-8369-9634b1d55821.png)
Getting code coverage is easy. You'll need to install [nyc](https://github.com/istanbuljs/nyc) and run the following into your commandline:
```
npm install --global nyc
nyc ava
```
The results should look like this: 
![ScreenShot](https://user-images.githubusercontent.com/194873/29955782-12a932b2-8e97-11e7-9a55-0240c107cdda.png)

<a name="testing-with-ava"></a>
### Testing with AVA
Hapi.js is one of my favorite JavaScript server frameworks. It's easy to test, which makes us more inclined to write tests. I like to use the [AVA](https://github.com/avajs/ava) package for testing. There are lots of other test harnesses, such as Mocha or Jasmine, which produce similar results. I chose AVA because it's simple, fast, and can run tests concurrently.

<a name="next-steps"></a>
## Theoretical Next Steps
* Fetch results from a DB
* Pagination 
* Authentication
* Continuous Integration on Travis CI 
