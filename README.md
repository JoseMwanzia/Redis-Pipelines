# Redis Pipelines

In this project, I built a simple command line interface (CLI) for Redis Pipelines.

Redis Pipelining is a technique that helps minimize RTT in Redis interactions by batching commands.

The time taken for the request to travel from the client to the server and back is called the Round Trip Time (RTT).

Redis Pipelines optimise execution of multiple commands in Redis sequenqually.


## Installation

To get started with this project, follow these steps:

NOTE: You need to have [node.js](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs) installed in your local machine for this to work.

1. Clone the repository, you can use http or SSH. You might as well fork it if you preffer. 
```bash
    git clone git@github.com:JoseMwanzia/Redis-Pipelines.git
```

2. Navigate to your repository.
```bash
    cd Redis-Pipelines
```

3. Install Redis dependency on your local machine. Make sure you have Nose.js installed.
```bash
    npm install
```

In ``index.js`` file where ``const redis = new Redis(process.env.REDIS_URL);`` you can opt to remove the ``process.env.redis_url`` to run it localy. 

Then start your redis server with ``redis-server`` in the CMD.

#### Optional Installation
It is highly recommended to use [upstash](https://console.upstash.com/redis) if you are using redis. This is a personal prefference GUI for tracking the cached data in Redis.

1. You need to create an account with [upstash](console.upstash.com/login).
2. Create DB name of your choosing, type = regional, region = choose closest to your users to avoid latency issues.
3. Once logged in, copy the Redis url that starts like this 'redis://default...' (make sure you show the url before copying).
4. Paste the url in your project. Prefferably the .env  file using the variable name REDIS_URL, and rememmber to add an s in 'rediss://default...' this is because we enabled encrypted traffic during the setup for secure websockets.
And you're good to go. 
5. In the dashboard click the 'Data browser' to view your Redis cached data.


## Usage

You can start the project with:
```bash
node index.js
```
in the command line
