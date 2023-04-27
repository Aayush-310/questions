import * as React from "react";
import * as ReactDOM from 'react-dom/client';
import QuestionList from "./QuestionList";
const Welcome = ()=>{
return (<div className="container">
<QuestionList/>
</div>)
}
const root  = ReactDOM.createRoot(document.getElementById("welcome"))
root.render(<React.StrictMode>
<Welcome/>
</React.StrictMode>)
// document.addEventListener("DOMContentLoaded",()=>{
//     ReactDOM.render(<Welcome/>,document.getElementById('welcome'))
// })
export default Welcome;