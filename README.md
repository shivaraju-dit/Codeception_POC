# Codeception_POC

CodeceptJS is a testing framework. But unlike other testing tools for JavaScript, it uses most popular JS libraries to drive your browser and adds high-level API on top of them.CodeceptJS is a Meta Test framework with various helpers

## **Installation**

•**Initialise the project :**

     npm init –y

•**Install pupeteer :**

     npm install codeceptjs puppeteer --save-dev

•**Initialise Codecept:**

     npx codeceptjs init

•**What helpers do you want to use?**

    Choose the helper e.g. Puppeteer

•**Create a Test :**

    npx codeceptjs gt - Give a file name

**Run the tests in steps wise**

    npx codeceptjs run --steps

**Generate mochawesome reports**

    npx codeceptjs run --reporter mochawesome
