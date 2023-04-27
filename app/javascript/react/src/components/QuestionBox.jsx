import * as React from "react";
import * as ReactDOM from 'react-dom';
import { useState } from "react";
import axios from 'axios';
const QuestionBox = (props)=>{
    const [likeCount,setLikeCount] = useState(props.question.likes_count)
    const [dislikeCount,setDislikeCount] = useState(props.question.dislikes_count)
    const handleLike= async ()=>{
        const response = await axios.put(`/api/v1/questions/${props.question.id}/update_counter`, { count_for: "like" });
        setLikeCount(response.data.likes_count);
    }
    const handleDislike= async ()=>{
        const response = await axios.put(`/api/v1/questions/${props.question.id}/update_counter`, { count_for: "dislike" });
        setDislikeCount(response.data.dislikes_count);
    }
    const handleDelete = async (id) => {
        try {
          const response = await fetch(`/api/v1/questions/${props.question.id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          if (!response.ok) {
            throw new Error('Failed to delete question');
          }
          // remove the question from the list of questions in the parent component
          // you can do this by passing a callback function to the QuestionBox component as a prop and calling it here
        //   onDelete();
        } catch (error) {
          console.error(error);
        }
      };
      

    return(
<div className="card rounded-0 mt-3" >
                <div className="card-body">
                    <h4 className="card-tag lead"><span className="badge bg-primary">{props.question.tag}</span></h4>
                    <h5 className="card-title">{props.question.title}</h5>
                    <div className="row">
                        <div className="col-md-4">
                    <button className="btn btn-primary" onClick={handleLike}>
                            Like <span className="badge badge-light">{
                        likeCount>0 ?
                        <span className="badge bg-primary">{likeCount}</span>:""
                    }</span>                                     
                    </button>
                    </div>
                    <div className="col-md-4">
                    <button className="btn btn-primary" onClick={handleDislike}>
                            Dislike <span className="badge badge-light">{
                        dislikeCount>0 ?
                        <span className="badge bg-primary">{dislikeCount}</span>:""
                    }</span>                                     
                    </button>
                    </div>
                    <div className="col-md-4">
                    <button className="btn btn-secondary" onClick={handleDelete}>
                            Delete <span className="badge badge-light"></span>                                     
                    </button>
                    </div>
                    </div>
                </div>
            </div>)
}
export default QuestionBox;







