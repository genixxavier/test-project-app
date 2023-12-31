import React from 'react'
import styled from 'styled-components'

const Article = ({articleInfo, className}) => {
  return (
    <article className={className}>
        <img src={articleInfo.social_image} alt='img' />
        <div>
            <h3>{articleInfo.title}</h3>
            <a href={articleInfo.url} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
    </article>
  )
}

export default styled(Article)`
    border-radius: 12px;
    background-color: white;
    color: black;
    box-shadow: 0px 0px 12px rgba(0,0,0,0.1);
    border: 1px solid #e6e6e6;
    width: min(300px, 100%);
    img{
        max-width: 100%;
    }
    div{
        padding: 2em;
    }
`