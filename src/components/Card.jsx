import React from 'react'

const Card = ({quoteRandom,colorRandom,clickButton}) => {



  return (
    <article className='card' style={{color:colorRandom}}>
        <p className='card-q'>{quoteRandom.quote}</p>
        <p className='author'>{quoteRandom.author}</p>
        <button className='card-btn' style={{color:colorRandom}} onClick={clickButton}> &#62;</button>
    </article>
  )
}

export default Card