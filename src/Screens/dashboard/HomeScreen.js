
import { Teams } from "../../Components/teams/Teams";
import styles from "./homeScreen.module.css";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
const HomeScreen=({isLogged})=>{
    let navigate = useNavigate()
    useEffect(()=>{
        if(!isLogged) {
        navigate("/")
        }
    }, [])
    
    return<>
    {isLogged && <>
    <Teams competition="SUMO" />
    <Teams competition="Formula" />
    <Teams competition="Rally" />
    <Teams competition="Entrepreneurial" />
    <Teams competition="CAO" />
    <Teams competition="Junior" />
    <Teams competition="carwars" />
    </>
    }
    {!isLogged && <div className={styles.erreur}> you are not authorised !!!</div>}
    </>
}
export default HomeScreen;







// import { Teams } from "../../Components/teams/Teams";
// import axios from 'axios';
// import React from "react";

// export default class HomeScreen extends React.Component{
    
//     state = {
//         persons: []
//       }
      
//       componentDidMount() {
//         axios.get(`http://localhost:5000/participant/teams/med2`)
//           .then(res => {
//             const persons = res.data;
//             console.log(persons);
//             this.setState({ persons });
//           })
//       }
      
//     render(){
//         return<>
    
//     <Teams competition="competition1" />
//     <Teams competition="competition2" />
//     <Teams competition="competition3" />
//     <Teams competition="competition4" />
//     </>
//     }
    
// }
