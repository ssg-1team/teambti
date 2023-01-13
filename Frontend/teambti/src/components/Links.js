import * as React from "react";
import Assignment from "../pages/assignment/Assignment";
import AssignmentResult from "../pages/assignment/AssignmentResult";
import Home from "../pages/home/Home";
import Character2 from "../pages/character/Character2";
import Comparision from "../pages/comparison/Comparison";

function Links(props) {

    const [number, setNumber] = React.useState(0)
    const [comparisionUser, setComparisionUser] = React.useState(
        {
            content : "",
            e_id : 0,
            m_id : 0, 
            mbti : "",
            name : "",
            position : "",
            t_id : 0,
        }
    );

    const getData = (number) => {
        setNumber(number);
        console.log(number);
        props.getWork('assignmentResult');
    }

    const setComparision = (user) => {
        console.log(user);
        setComparisionUser({...user});
        console.log(comparisionUser);
        props.getWork('comparision');
    }

    switch (props.name){
        case 'home' :
            return <Home setComparision={setComparision}/>
        case 'assignment' :
            return <Assignment number={number} getData={getData} />
        case 'assignmentResult' : 
            return <AssignmentResult/>
        case 'character' :
            return <Character2/>
        case 'comparision' :
            return <Comparision other={comparisionUser}/>
        default : 
            return <h4>{props.name}</h4>
    }
}

export default Links;
