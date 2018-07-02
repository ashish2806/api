import React, { Component } from 'react';
import Posts from './posts/posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';
import { Route,Link } from 'react-router-dom';
import './Blog.css';

class Blog extends Component {
    

    render () { 

        
        return (
            <div className="Blog">
               
               <header>
                   <nav>
                   <ul>
                       <li><Link to="/home">home</Link></li>
                       <li><Link to={{
                           pathname: '/new-post',
                           hash:'#submit',
                           search:'?id=4'
                       }}>post</Link></li>
                   </ul>
                   </nav>
               </header>
                <Route path="/home" exact  component={Posts} />
                <Route path="/new-post" exact  component={NewPost} />
                <Route path="/:id" exact  component={FullPost} />
                
            </div>
        );
    }
}

export default Blog;