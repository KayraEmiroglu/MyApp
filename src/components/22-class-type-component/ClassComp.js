import { Component } from "react";


class ClassComp extends Component{

    constructor(props){//propsları burada karsiliyoruz
        
        //propslar extend edilen class'ın constructor'ına gönderilmelidir
        super(props);
    
        this.state={
            message: "Hello World",
            hour:15,
            minute:35
        }
    }

    componentDidMount(){
        console.log("İlk Giriste Calisir");
    }  
    
    componentDidUpdate(prevProps, prevState){
        console.log("Re-render durumunda calisir");

        if(prevState.hour !== this.state.hour){
            console.log("Hour was changed")
        }

    }



    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <h2>{this.state.hour}:{this.state.minute}</h2>

                <button onClick={()=> this.setState({hour:19})}>Set Hour</button>
                <button onClick={()=> this.setState({minute:55})}>Set Minute</button>

            </div>
        )        
    }
 
}

export default ClassComp;