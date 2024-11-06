const Redis = require('ioredis');
require('dotenv').config()

// Connect to redis
const redis = new Redis(process.env.REDIS_URL);

(async () => {
    // Initialize pipeline
    const pipeline = redis.pipeline();

    // Add or update player score
    pipeline.zadd('game-leaderboard', 350, 'Eve', (err, response) => {
        if (err) throw err;
        console.log(`Number of elements added: ${response}`);
    })

    // Get the players with scores and more requests
    pipeline.zrevrange('game-leaderboard', 0, -1, 'WITHSCORES')
    pipeline.get('mykey')
    pipeline.hget('user:1', 'username')

    // retrieve response
    const response = await pipeline.exec()

    // console.log(response.map(([error, result]) => result));
    console.log(response.map(([error, response]) => {return response}));
    redis.quit()
})()


