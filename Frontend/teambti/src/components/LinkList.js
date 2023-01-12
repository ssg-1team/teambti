import * as React from "react";
import Assignment from "../pages/assignment/Assignment";
import AssignmentResult from "../pages/assignment/AssignmentResult";
import Home from "../pages/home/Home";

function LinkList(props) {
    
    switch (props.name){
        case 'assignment' :
            return <Assignment/>
        case 'assignmentResult' : 
            return <AssignmentResult/>
        case 'home' :
            return <Home />
        default : 
            return <h4>{props.name}</h4>
    }
}

export default LinkList;
