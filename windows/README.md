This repository shows a set up for continuous integration with Travis CI, using intern to run the tests.

# Set Up
You need to install chromium before running the tests locally. Running ``npm install`` should take care of all the other dependencies.

# The Tests
## Functional Tests
The file ``tests/functional/index.js`` covers the file ``index.html``.

## Unit Tests
The fili ``tests/unit/math.js`` covers the file ``math.js``.

# Running Tests Locally
The configuration for local tests can be found in ``test/internLocal.js``.

To run tests locally use ``npm test`` this will run a linter over the tests and the application code. It well then start ``chromedriver`` and run the defined functional and unit tests. Note that the starting and stopping of ``chromedriver`` isn't very robust.

# Continuous Integration
The configuration for cloud tests can be found in ``test/internCloud.js``. These are run whenever one pushes to the repository. Errors can be found on the Travis CI website. Note that we use a trial browserstack account, as this account runs out you need to create a new trial account.

# More Information
* [Travis CI](https://travis-ci.org)
* [Intern](https://theintern.github.io)
* [Intern tutorial](https://github.com/theintern/intern-tutorial)
