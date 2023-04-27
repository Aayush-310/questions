import * as React from "react";
import * as ReactDOM from 'react-dom';

import { useState, useEffect } from "react";
import axios from "axios";

const NewQuestion = () =>{
    const questionsTags = [
    {label:"Ruby",value:0},
    {label:"Rails",value:1},
    {label:"React",value:2},
    {label:"JS",value:3}


   

]
const [title,setTitle] = useState("")
const [tag, setTag] = useState(questionsTags[0].value)
const handleTitleChange = (event) => {
    setTitle(event.target.value)

}
const handleTagChange = (event => {
    setTag(event.target.value)
})

const submitHandler = (event) =>{
    event.preventDefault()
    console.log({title:title, tag:tag})
    createQuestion();

}
const createQuestion = async () =>{
   try{
    const response = await axios.post(`/api/v1/questions`,{title:title,tag:tag})
console.log(response.data)
   }catch (error){
    console.error(error)
   }

}
    return (<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">Provide your question</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form onSubmit={submitHandler}>
        <div className="modal-body">
         <div className="form-group">
            <label className="form-label mt-3 mb-3">Question</label>
            <input type ="text" className="form-control form-control-lg rounded-0" value={title} onChange={event=>handleTitleChange(event)} name= "title"></input>
            </div>
            <div className="form-group">
            <label className="form-label mt-3 mb-3">Question Tag</label>
            <select className="form-select form-select-lg  rounded-0" value={tag} onChange={handleTagChange} name="tag">{
                questionsTags.map(tag=>(
                    <option key= {tag.value} value = {tag.value}>{tag.label}</option>
                ))
}</select>
            </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" className="btn btn-primary">Submit question</button>
        </div>
        </form>
      </div>
    </div>
  </div>)

}
export default NewQuestion