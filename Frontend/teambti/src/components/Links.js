import * as React from "react";

import MentoMenti from "../pages/mentomenti/MentoMenti";
import MentoMentiResult from "../pages/mentomenti/MentoMentiResult";

import Coworking from "../pages/coworking/Coworking";
import CoworkingStart from "../pages/coworking/CoWorkingStart";
import CoWorkingResult from "../pages/coworking/CoWorkingResult";

import Home from "../pages/home/Home";
import Character2 from "../pages/character/Character2";
import Comparision from "../pages/comparison/Comparison";

function Links(props) {
  // const [number, setNumber] = React.useState(0)

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

    const setComparision = (user) => {
        console.log(user);
        setComparisionUser({...user});
        console.log(comparisionUser);
        props.getWork('comparision');
    }

    const getDataMentoMenti = () => {
        props.getWork("mentomentiresult");
    };
    const getDataCoWorking = () => {
        props.getWork("coworkingresult");
    };
    const getDataCoWorkingStart = (number) => {
        if (number == 3) {
            props.getWork("coworking3");
        } else if (number == 5) {
            props.getWork("coworking5");
        } else if (number == 7) {
            props.getWork("coworking7");
        }
    };
    
  switch (props.name) {
    case "mentomenti":
      return <MentoMenti getDataMentoMenti={getDataMentoMenti} />;
    case "mentomentiresult":
      return <MentoMentiResult />;
    case "coworking3":
      return (
        <Coworking getDataCoWorking={getDataCoWorking} questionsNumber={3} />
      );
    case "coworking5":
      return (
        <Coworking getDataCoWorking={getDataCoWorking} questionsNumber={5} />
      );
    case "coworking7":
      return (
        <Coworking getDataCoWorking={getDataCoWorking} questionsNumber={7} />
      );
    case "coworkingresult":
      return <CoWorkingResult />;
    case "coworkingstart":
      return <CoworkingStart getDataCoWorkingStart={getDataCoWorkingStart} />;
    case 'home' :
      return <Home setComparision={setComparision}/>
    case 'character' :
      return <Character2/>
    case 'comparision' :
      return <Comparision other={comparisionUser}/>
    default : 
      return <h4>{props.name}</h4>
  }
}

export default Links;
