# api testing with javascript workshop

[#testing4good](https://twitter.com/hashtag/Testing4Good)

In this workshop you will learn how to do automated API testing with Cypress 10.

> Before we start, open this in a new tab and let the container load.

[![Try in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io#https://github.com/nadvolod/cypress-api-testing-22)

## 🧠 You will learn

✅ Common HTTP methods

✅ How to execute web requests

✅ Basic and advanced API automation

😉 And maybe more...

## 🔧 Prerequisites

1. Basic understanding of JavaScript

## 👩‍💻 Technologies you will use

1. Cypress 10
2. JavaScript
3. Gitpod

## Table Of Contents

- Setup
- [API Testing](./docs/API.md)
- [Authentication w/ APIs](https://github.com/nadvolod/js-code/tree/master/atomic-testing)
- [Conclusions](./docs/CONCLUSIONS.md)

## Testing for Good

[#testing4good](https://twitter.com/hashtag/Testing4Good)

### 🌎Testing for Good enables great test automation engineering while shaping a more equitable society.👩‍💻

Today, we're asking for donations for [Environmental Working Group](https://buy.stripe.com/9AQdU42lj9i7bHGcMN)

### [About Environmental Working Group](https://www.ewg.org/)

We're advocates who won't quit. We're scientists that find solutions. We're people trying to make the safest choices for our health. At the Environmental Working Group, we believe that you should have easy access to the information you need to make smart, healthy choices. It’s this belief that inspired our president and co-founder, Ken Cook, to create EWG.  

Since 1993, we've worked tirelessly to protect public health. Whether it's spotlighting harmful industry standards, speaking out against outdated government legislation or empowering consumers with breakthrough education and research, we're in this fight. 

And we're not going anywhere.

👉 While the event is free, Sauce Labs encourages all attendees to 

👉 **[donate](https://buy.stripe.com/9AQdU42lj9i7bHGcMN)** 

Anything helps! 

100% of donations go to support the cause.

## Key

💡 this is a tip

🏋️‍♀️ this is an exercise for you to do

❓ this is a question for us to think and talk about. Try not to scroll beyond this question before we discuss

## Your Instructor: Nikolay Advolodkin

<img src="public/images/family.jpg" alt="api-testing" width="500"/>

- 🏢 I’m a Sr Solutions Architect at Sauce Labs
- 🔭 I’m the founder of [Ultimate QA](https://ultimateqa.com/)
- 🌱 I’m currently working on [Sauce Bindings](https://github.com/saucelabs/sauce_bindings)
- 💬 Ask me about environmentalism, veganism, test automation, and fitness
- 😄 Pronouns: he/him
- ⚡ Fun fact: I'm a vegan that's super pasionate about saving the planet, saving animals, and helping underpriveleged communities
- 📫 Follow me for testing and dev training
  - [JS Testing Newsletter](https://ultimateqa.ck.page/js-testing-tips)
  - [Testing training on Youtube](https://youtube.com/ultimateqa)
  - [LinkedIn for professional connections](https://www.linkedin.com/in/nikolayadvolodkin/)
  - [Twitter for 🔥 Dev quotes](https://twitter.com/Nikolay_A00)

## Our TA!

## ⚙️ Setup

The safest way to ensure that we all have the same environment is for us to [use Gitpod](#gitpod-setup) for our workshop. However, if you are comfortable doing so, you are free to setup the environment on your machine as well.

### Sign up for accounts

1. Free [Sauce account](https://saucelabs.com/sign-up)

---

## Gitpod setup

ℹ️ Gitpod lets you run an entire Dev environment from a browser! You can use this approach if you don't know how to setup a local environment.

1. You should already have started a Gitpod setup in a new tab. The environment setup happens automaticatically. If you didn't, do that now by clicking the button to open in a new tab

[![Try in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io#https://github.com/nadvolod/cypress-api-testing-22)

### ✅ A new tab should open with a Cypress dashboard

### Run tests

Run sanity tests

```bash
npm run test:sanity
```

### ✅👏Environment setup is complete if tests passed

Report any issues to Nikolay Advolodkin

  - [LinkedIn](https://www.linkedin.com/in/nikolayadvolodkin/)
  - [Twitter](https://twitter.com/Nikolay_A00)

---

## Local setup

### 1. Install Node LTS

1.  Use NVM for this installation by [following instructions](https://github.com/nvm-sh/nvm#install--update-script)
    - It should be just a single command to run in our terminal
      - **!Don't forget to restart your terminal!**
    - After installation, confirm install with `nvm --version`
2.  Intall Node 16 with `nvm install --lts`

- Confirm node installation with `node --version` and seeing `v16.x` or similar
- Confirm NVM is set to 16 for default by running the following commands:

```bash
nvm list #will show all versions
nvm use 16 #to use 16
nvm alias default 16.14.x #to set it to the default
```

### 2.Clone and fork the repo

1. Sign up for a free [Github account](https://github.com/)
2. Fork this respository

- Make sure you are logged into Github
- click the Fork in the upper right of the Github.

3. Clone your fork of the repository to your machine. Must have [Git installed](https://git-scm.com/downloads)

```bash
git clone URL_OF_YOUR_FORK
```

4. **Navigate to the directory of where you cloned your repo**

```bash
cd YOUR_FORK_DIR/cypress-api-testing-22
npm install
```

### 4.Follow the rest of the setup instructions

Follow the [same steps](#Run-tests) for running tests.

### 5.Have an IDE installed that can handle NodeJS/JS (We will use [VSCode](https://code.visualstudio.com/Download))

#### ✅👏Congratulations, your local environment is ready!

## Prizes

1. A lucky winner gets a backpack at the end
2. Best student prize
3. A lego set after TfG for someone that fills out feedback form

## Rules of engagement

<img src="https://media.giphy.com/media/CB26wRVi3B9T2/giphy.gif" alt="api-testing" width="500"/>

- I'm here to Serve You, your education, and your experience
- Be kind, respectful, no judgment
- Have fun

