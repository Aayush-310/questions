import * as React from "react";
import * as ReactDOM from 'react-dom/client';

const EmptyQuestionMessage = (props) => {
    return (<div>
        <div className="alert mt-5 alert-danger alert-warning alert-dismissible fade show" role="alert">
  <strong>Damnn!!</strong> No questions with the tag {props.tagname}
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
        </div>)
}
export default EmptyQuestionMessage