import {Component} from 'react';

class Sum extends Component {
    constructor(){
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    handleChange1(e){
        this.setState({number1: e});
    }

    handleChange2(e){
        this.setState({number2: e});
    }

    calcSum(num1, num2){
        let sum = this.state.sum
        sum = Number(num1) + Number(num2)

        this.setState({
            sum: sum
        })

    }

    render(){
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" placeHolder="Enter First Number" onChange={ (e) => this.handleChange1(e.target.value) } />
                <input className="inputLine" placeHolder="Enter Second Number" onChange={ (e) => this.handleChange2(e.target.value) } />
                <button className="confirmationButton" onClick={ () => {this.calcSum(this.state.number1, this.state.number2)}}>Calculate</button>
                <span className="resultsBox">Sum: {this.state.sum}</span>
            </div>
        )
    }
}

export default Sum