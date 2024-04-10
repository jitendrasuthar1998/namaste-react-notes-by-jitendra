import React,{Component} from 'react';

export default class PureComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            counter:0
        }
    }


    componentDidMount() {
        // setInterval(()=>{
        //     console.log("interval invoked");
        //     this.setState({counter: this.state.counter});
        // }, 3000);
    }
    

    componentDidUpdate(){
        console.log("Component didUpdate invoked");
    }

    render() {
        console.log("Render invoked");
        return (
            <div>
                <p>{this.state.counter}</p>
            </div>
        )
    }
}