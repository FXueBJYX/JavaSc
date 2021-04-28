import {combineRduces} from 'redux'
const num=(prevState=0,action)=>{
    console.log(prevState,action);
    switch(action.type){
        case "ADD":
            return prevState+1;
        default:
            return prevState
    }
}