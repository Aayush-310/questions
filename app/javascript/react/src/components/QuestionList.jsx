import * as React from "react";
import * as ReactDOM from 'react-dom';
import QuestionBox from "./QuestionBox";
import { useState, useEffect } from "react";
import EmptyQuestionMessage from "./EmptyQuestionMessage";
import Loader from "./Loader";
import NewQuestion from "./NewQuestion";
const QuestionList = () => {

    const questionsTags = [{label:"All",value:0},
    {label:"Ruby",value:1},
    {label:"Rails",value:2},
    {label:"React",value:3},
    {label:"JS",value:4}
]
   
    const [questionList,setQuestionList]=useState([])
    const [selectedOption,setSelectedOption]=useState(questionsTags[0].value) 
    const [showAlert,setShowAlert] = useState(false)
    const [showLoader,setShowLoader]= useState(true)

    //fetching data
    const questionUrl = "http://127.0.0.1:3000/api/v1/questions"
    const fetchQuestionList = () => { 
        setShowLoader(false)
        fetch(questionUrl)
        .then((response)=>
        response.json())
        .then((data)=>{
        console.log(data)
        setQuestionList(data)
        if (data.length == 0){
            setShowAlert(true)
            setShowLoader(true)
        }
        else{
            setShowAlert(false)
        }
    });};
    useEffect(()=>{
        fetchQuestionList()
        setShowLoader(false)
    },[])

    const updateSelectedItem = (event)=>{
        setShowLoader(false)
setQuestionList([])
setSelectedOption(event.target.value)
fetch(questionUrl + `?tags=${questionsTags[event.target.value].label}`)
        .then((response)=>
        response.json())
        .then((data)=>{
        console.log(data)
        setQuestionList(data)
        if (data.length == 0){
            setShowAlert(true)
        }
        
    })

    }
    
    // const questionList =[
    //     {
    //         id:1,
    //         title:"How to check if a key is present in a hash?",
    //         tag:"Ruby",
    //     },
    //     {id:2,
    //         title:"What is the difference between strings and symbols?",
    //         tag:"Ruby",
    //     },
    //     {id:3,
    //         title:"What happens if you add two same keys in a hash?",
    //         tag:"Ruby",
    //     },
    //     {id:4,
    //         title:"How to check if two hashes are identical?",
    //         tag:"Ruby",
    //     },
    //     {id:5,
    //         title:"How to combine two hashes in ruby?",
    //         tag:"Ruby",
    //     },
    //     {id:6,
    //         title:"How to get unique keys from two hashes in ruby?",
    //         tag:"Ruby",
    //     },
    //     {id:7,
    //         title:"What does the hash_key?,key?,member? and inlcude? methods in hash?",
    //         tag:"Ruby",
    //     },
    //     {id:8,
    //         title:"What are blocks in ruby?",
    //         tag:"Ruby",
    //     },
    //     {id:9,
    //         title:"Does the order of keys matter in comparing two hashes in ruby?",
    //         tag:"Ruby",
    //     },
    // ]
    return (<div className="row">
        <div className="col-lg-10 mx-auto">
            <p className="lead fw-bold" >Filter question by Tags</p> 
<button type="button" className="btn btn-primary mt-3 mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Contribute Question
</button>
            <select className="form-select form-select-lg" value={selectedOption} onChange={event=>updateSelectedItem(event)}>
                {
                    questionsTags.map(tag=>(
                        <option key = {tag.value} value= {tag.value}>{tag.label}</option>

                    ))
                }
            </select>
            { questionList.length > 0 ? 
            questionList.map((question)=>
            <QuestionBox question = {question} key={question.id}/>):<Loader showLoader = {showLoader}/>
            }
            {
                showAlert &&  <EmptyQuestionMessage tagname = {questionsTags[selectedOption].label}/>
            }
            
        </div>
        <NewQuestion/>
    </div>)
}
export default QuestionList;