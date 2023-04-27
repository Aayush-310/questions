import * as React from "react";
import * as ReactDOM from 'react-dom/client';

const Loader = (props) =>{
    return (<div className="mt-5">
        {!props.showLoader ? 
    <div className=" mt-5 spinner-grow" role="status">
<span className="visually-hidden">Loading...</span>
</div>:""
}
    </div>)
}
export default Loader;