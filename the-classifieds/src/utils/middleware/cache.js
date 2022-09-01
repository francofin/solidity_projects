import LRU from 'lru-cache'


 
const CACHE_MAX_SIZE = parseInt(process.env.NEXT_PUBLIC_CACHE_MAX_SIZE);
const CACHE_MAX_AGE_IN_S = process.env.NEXT_PUBLIC_CACHE_MAX_AGE_IN_S;
 
const context = {
  cache: new LRU({
    max: CACHE_MAX_SIZE,
    maxAge: CACHE_MAX_AGE_IN_S * 1000
  })
}
 
const cache = handler => (req, res) => {
  req.cache = context.cache
 
  return handler(req, res)
}
 
export default cache