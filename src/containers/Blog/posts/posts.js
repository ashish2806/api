import React, { Component } from 'react';
import axios1 from '../../../axios';
import { Link } from 'react-router-dom';
import Post from '../../../components/Post/Post';
class Posts extends Component
{
    state ={
        posts : [],
        setId : null,
    }
    componentDidMount(){
        axios1.get('registation')
            .then(response=>{
                    this.setState({posts:response.data});
                   //console.log(response.data);
            });
    }

    showpostHandler(id){
            this.setState({setId : id});
    }

    render () { 

        const post = this.state.posts.map((post,i)=>{
            return (
                <Link to={'/'+post.id} key={i} >
            <Post 
            title={post.phone_number} 
            author={post.phone_number} 
            
            clicked={() =>this.showpostHandler(post.id)}/>
            </Link>
        )
        });
        return (
            <div>
                <section className="Posts">
                    
                    {post}
                </section>
                
            </div>
        );
    }
}

export default Posts;