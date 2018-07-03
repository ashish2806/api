import React, { Component } from 'react';
import axios1 from '../../../axios';
import { Link,Redirect } from 'react-router-dom';
import Post from '../../../components/Post/Post';
class Posts extends Component
{
    state ={
        posts : [],
        setId : null,
        redirect : false
    }
    componentDidMount(){
        if(sessionStorage.getItem("userData")){
            axios1.get('registation')
                .then(response=>{
                        this.setState({posts:response.data});
                    //console.log(response.data);
                });
        }else{
               this.setState({redirect : true}); 
        }    
    }

    logoutHandler(){
        sessionStorage.setItem("userData","");
        sessionStorage.clear();
    }
    showpostHandler(id){
            this.setState({setId : id});
    }

    render () { 

        if(this.state.redirect){
            return <Redirect to='login'/>
        }
        const post = this.state.posts.map((post,i)=>{
            return (
                <Link to={ '/'+post.id} key={i} >
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