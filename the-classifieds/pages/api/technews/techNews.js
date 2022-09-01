import _forEach from 'lodash/forEach'
import _get from 'lodash/get'
import _isNil from 'lodash/isNil'
import _pick from 'lodash/pick'
import axios from 'axios'
import cache from '@utils/middleware/cache';

import { StatusCodes } from 'http-status-codes'


 


const SEARCH_URI = process.env.NEXT_PUBLIC_NEWSCATCHER_SEARCH_URL;
const CACHE_MAX_AGE_IN_S = process.env.NEXT_PUBLIC_CACHE_MAX_AGE_IN_S;

console.log(SEARCH_URI)

const searchHandler = async (req, res) => {
  const cacheKey = encodeURIComponent(req.url)
  console.log(req);

  const cacheHeaderKeys = [
    'x-rapidapi-key',
    'x-rapidapi-host'
  ]
 
  if (!_isNil(req.cache) && req.cache.has(cacheKey)) {
    const { headers, data } = req.cache.get(cacheKey)
    console.log('here in if block', headers)
    console.log('here in if data', data)
    res.setHeader('Cache-Control', `public,max-age=${CACHE_MAX_AGE_IN_S}`)
    res.setHeader('X-Cache', 'HIT')
    _forEach(cacheHeaderKeys, cacheHeaderKey => {
      res.setHeader(cacheHeaderKey, headers[cacheHeaderKey])
    })
  
    return res.json(data)
  }
 
  
    const { status, headers, data } = await axios.get(`${SEARCH_URI}`, {
      params: {
        q: 'NFT',
        lang:'en',
        media:'True'
      },
      headers: {
        'x-rapidapi-host':`${process.env.NEXT_PUBLIC_NEWS_API_HOST_VALUE}`,
        'x-rapidapi-key': `${process.env.NEXT_PUBLIC_NEWS_BLOG_API_KEY}`
      }
    })

    
    
    console.log('here in try status', status)
    console.log('here in try data', data)

    try {
    if (status === StatusCodes.OK) {

      if (!_isNil(req.cache)) {
        req.cache.set(cacheKey, {
          headers: _pick(headers, cacheHeaderKeys),
          data
        })
      }
      res.setHeader('Cache-Control', 'no-cache')
      res.setHeader('X-Cache', 'MISS')
      console.log('here in try block', headers)
      console.log('here in try block for res', req.headers['x-rapidapi-host'])
      _forEach(cacheHeaderKeys, cacheHeaderKey => {
        res.setHeader(cacheHeaderKey, req.headers[cacheHeaderKey])
      })
      return res.json(data)
    } else {
      return res.status(status).json(data)
    }
  } catch (error) {
    const { status, data } = _get(error, 'response', {})
    console.log("From Error", error)
 
    return res.status(status).json(data)
  }
 
}
 
export default cache(searchHandler)