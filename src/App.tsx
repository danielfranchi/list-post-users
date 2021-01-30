import React from 'react';
import axios from 'axios';

import {User} from './types/App'
import {Post} from './types/Post'

import './App.css';

function App() {

  const [user, setUser] = React.useState([])
  const [id, setId] = React.useState(0)
  const [post, setPost] = React.useState([])

  React.useEffect(() =>{
    axios.get('https://jsonplaceholder.typicode.com/users/')
        .then(resposta => setUser(resposta.data))

  }, [])

 
  React.useEffect(() =>{
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .then(resposta => setPost(resposta.data)) 
  }, [id])
  

  return (
    <div>
      {user !== null && user.map((iten: User) =>(
        <React.Fragment key={iten.id}>
          <ul key={iten.id}>
            <li onClick={() => setId(iten.id)}>{iten.name} {iten.id}</li>
          </ul>
        </React.Fragment> 
      ))}

      <hr/>

      <div>
        {post !== null && post.map((iten: Post) =>(
          <React.Fragment key={iten.id}>
            <ul>
              <li><h1>{iten.userId} - {iten.title}</h1></li>
              <li><p>{iten.body}</p></li>
            </ul>
          </React.Fragment>
        ))}
      </div>
      
    </div>

  );
}

export default App;
