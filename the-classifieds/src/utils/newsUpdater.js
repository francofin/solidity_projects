import axios from 'axios';
require('dotenv').config();


const newsSearchAPI=`${process.env.NEXT_PUBLIC_NEWS_AZURE_ACCESS_KEY}` 
const techNewsSearchURL = `${process.env.NEXT_PUBLIC_NEWS_API_ENDPOINT}q=Technology&count=50&mkt=en-US`;
const economyNewsSearchURL = `${process.env.NEXT_PUBLIC_NEWS_API_ENDPOINT}q=Economy&count=50&mkt=en-US`;

const fetcher = async(url, token) => {
    const res = await axios.get(url, {
        "headers": {
            "Ocp-Apim-Subscription-Key": token,
        }
    });
    console.log("I Ran From Server")
    const data = await res;
    // console.log(res.data)


    return await res.data
}

let techArticleList = fetcher(techNewsSearchURL, newsSearchAPI);

let economyArticleList = fetcher(economyNewsSearchURL, newsSearchAPI)

const updateNews = (url, token) => {
    setInterval(() => {
        let refreshed = true;
        techArticleList = fetcher(url, token)
        
        refreshed = false;
    },  1000 * 60 * 180)
}

const updateEconomyNews = (url, token) => {
    setInterval(() => {
        let refreshed = true;
        economyArticleList = fetcher(url, token)
        
        refreshed = false;
    },  1000 * 60 * 180)
}

updateNews(techNewsSearchURL, newsSearchAPI)
updateEconomyNews(economyNewsSearchURL, newsSearchAPI)

module.exports = {
    techArticleList,
    economyArticleList
};

// export const getNewsArticles = (url, newsSearchAPI) => {

// }