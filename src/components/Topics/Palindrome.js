import {Component} from 'react';

class Palindrome extends Component {
    constructor(){
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    handleChange(e){
        this.setState({userInput: e});
    }

    palindromeTest(input){
        let palindrome = this.state.palindrome
        let tempArr1 = []
        let tempArr2 = []
        const testArr = Object.assign([], input)

        for(let i = 0; i < testArr.length; i++){
            tempArr1.push(testArr[i]);
        }

        for(let j = testArr.length - 1; j >= 0; j--){
            tempArr2.push(testArr[j]);
        }

        if(JSON.stringify(tempArr1) === JSON.stringify(tempArr2)){
            palindrome = 'true';
        }else{
            palindrome = 'false';
        }
        
        this.setState({
            palindrome: palindrome
        })
    }

    render(){
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" placeHolder="Enter Word" onChange={ (e) => this.handleChange(e.target.value) } />
                <button className="confirmationButton" onClick={ () => {this.palindromeTest(this.state.userInput)}}>Submit</button>
                <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome