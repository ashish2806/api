import React, { Component } from 'react';
import axios from '../../../axios';
import './FullPost.css';

class FullPost extends Component {

     state={
         loaddata :{}
    };

    componentDidMount(){
       // console.log(this.props.match.params.id);
        axios.get('registation/'+this.props.match.params.id).then(response=>{
            console.log(response.data);
            this.setState({loaddata : response.data});
        });

        
    }
    render () {
        let post = <p>Please select a Post!</p>;
        if(this.props.match.params.id)
        {

            post = (
                <div className="FullPost">
                <h1>{this.state.loaddata.phone_number}</h1>
                    
                    <p>{this.state.loaddata.email}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>

            );
        }    
        return post;
        
    }
}

export default FullPost;