import * as React from "react";
import Assignment from "../pages/assignment/Assignment";
import AssignmentResult from "../pages/assignment/AssignmentResult";
import Home from "../pages/home/Home";
import Character2 from "../pages/character/Character2";

function Links(props) {

    
    const [number, setNumber] = React.useState(0)

    const getData = (number) => {
        setNumber(number);
        console.log(number);
        props.getWork('assignmentResult');
    }
    
    switch (props.name){
        case 'home' :
            return <Home />
        case 'assignment' :
            return <Assignment number={number} getData={getData} />
        case 'assignmentResult' : 
            return <AssignmentResult/>
        case 'character' :
            return <Character2/>
        default : 
            return <h4>{props.name}</h4>
    }
}

export default Links;
