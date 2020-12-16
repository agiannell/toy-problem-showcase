import {Component} from 'react';

class FilterString extends Component {
    constructor(){
        super();

        this.state = {
            unfilteredArray: ['Ahsoka', 'This', 'is', 'the', 'Ahsoka', 'Way', 'Ahsoka'],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(e){
        this.setState({userInput: e});
    }

    removeString(input){
        const unfilteredArray = this.state.unfilteredArray;
        
        const filteredArray = unfilteredArray.filter(e => e !== input);

        this.setState({
            filteredArray: filteredArray
        })
    }

    render(){
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleBox">Original: {JSON.stringify(this.state.unfilteredArray)}</span>
                <input className="inputLine" placeHolder="Enter String" onChange={(e) => this.handleChange(e.target.value)} />
                <button className="confirmationButton" onClick={() => {this.removeString(this.state.userInput)}}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterString