import React from "react";
import { useState, useEffect} from 'react';
import Post from './Post'
import index from './index.css'
import Subreddit from './Subreddit'
function App() {
  const [post, setPost] = useState([])
  const [subreddit, setSubreddit] = useState('web')
  const [community, setCommunity] = useState([])


  useEffect(() => {
    fetch("https://www.reddit.com/.json")
    .then(res => {
      if(res.status != 200){
        console.log("we have an error")
      }
      res.json().then(data => {
        if(data != null){
          let postData = data.data.children
          console.log('this is postData', postData)
           setPost(postData)
           postData.map((x) => {
             if(community.indexOf(x.data.subreddit) == -1){
               setCommunity(community.push(x.data.subreddit))
             }
             console.log(x.data.subreddit)
             console.log('this is community',community)
             } 
           )
        }
      })
    })
  
  }, [subreddit])

  return (
    <div className="App">
      <header className="header">
        <input type="text" className="input" value={subreddit} onChange={e => setSubreddit(e.target.value)}/>
      </header>
    <div>
      {
      (community[0] != null) ? community.map((group, index) => 
      <Subreddit key={index} content={group}/>
      ): ''
      } 
      </div>
     <div className="posts">
       { 
       (post != null) ? post.map((post, index) =>
     
        <Post key={index} post= {post.data} />) : ''
       }

     </div>
    </div>
  );
}

export default App;
