import React, { useEffect, useState } from 'react'
import Newsitems from './Newsitems';

export default function NewsBoard({category}) {
  const [articles,setArticles] = useState([]);
  useEffect(()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=60d1825fb162445dbf14809c4a2bb93e`
    fetch(url).then(response=>response.json()).then(data=> setArticles(data.articles));
  },[category])
  return (
    <div>
   <h2 className='text-center'>Latest <span className='badge bg-success'>News</span></h2>
    {articles.map((news,index)=>{
      return <Newsitems key={index} title={news.title} discreption={news.discreption} src={news.urlToImage} url={news.url}/>
    })}

    </div>
  )
}
