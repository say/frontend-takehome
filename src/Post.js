import React from 'react'


function Post(props) {
  let d = new Date(props.post.created * 1000)
  let yyyy = d.getFullYear()
  let mm = ('0' + (d.getMonth() + 1)).slice(-2)
  let dd = ('0' + d.getDate()).slice(-2)

  return (
    <article>
      <a href={"https://reddit.com" + props.post.permalink} target="_blank">
        </a>
        <h3> {props.post.title} </h3>
        <img alt="" src={props.post.thumbnail}/>
        <p key={props.post.title}> Dates: {`${mm}/${dd}/${yyyy}`} </p>
        <p> Upvotes: {props.post.ups}</p>
        <a target="_blank" href={`//www.reddit.com${props.post.permalink}`}> link:{`www.reddit.com${props.post.permalink}`}</a>
     
      
    </article>
  )
}

export default Post
