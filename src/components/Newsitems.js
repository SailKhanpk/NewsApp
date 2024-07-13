import React from 'react'

export default function Newsitems({title, discreption, src, url}) {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-4 py-2 px-2 " style={{width: '18em'}}>
  <img src={src} style={{height:"150px",width:"270px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,45)}</h5>
    <p className="card-text">{discreption?discreption.slice(0,85):"there is no discreption for this article"}</p>
    <a href={url} className="btn btn-success">Read More</a>
  </div>
</div>
  )
}
