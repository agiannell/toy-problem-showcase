import {Component} from 'react';

class EvenAndOdd extends Component {
    constructor(){
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleChange(e){
        this.setState({userInput: e});
    }

    submitNum(){
        const copyUserInput = this.state.userInput.split(',').map(Number);
        const copyEvenArray = this.state.evenArray.slice();
        const copyOddArray = this.state.oddArray.slice();

        for(let i = 0; i < copyUserInput.length; i++){
            if(copyUserInput[i] % 2 === 0){
                copyEvenArray.push(copyUserInput[i]);
            }else{
                copyOddArray.push(copyUserInput[i]);
            }
        }

        this.setState({
            evenArray: copyEvenArray,
            oddArray: copyOddArray
        })
    }

    render(){
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" placeHolder="Enter a string of numbers" onChange={ (e) => this.handleChange(e.target.value) }/>
                <button className="confirmationButton" onClick={ () => {this.submitNum(this.state.userInput)}}>Split</button>
                <span className="resultsBox"> Evens: { JSON.stringify(this.state.evenArray) } </span>
                <span className="resultsBox"> Odds: { JSON.stringify(this.state.oddArray) } </span>
            </div>
        )
    }
}

export default EvenAndOdd