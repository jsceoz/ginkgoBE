import redis from 'redis'
const redisClient = redis.createClient();

export function initActivityCache(actId) {
    redisClient.hset(actId, 'viewCount', 0);
    redisClient.hset(actId, 'viewCountToday', 0);
    redisClient.hset(actId, 'itemCount', 0);
    redisClient.hset(actId, 'itemCountToday', 0);
}

export function incViewCount(actId) {
    redisClient.hincrby(actId, 'viewCount', 1);
    redisClient.hincrby(actId, 'viewCountToday', 1);
}

export function incItemCount(actId) {
    redisClient.hincrby(actId, 'ItemCount', 1);
    redisClient.hincrby(actId, 'ItemCountToday', 1);
}


