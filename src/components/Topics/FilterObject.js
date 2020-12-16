import {Component} from 'react';

class FilterObject extends Component {

    constructor(){
        super();
        this.state = {
            unFilteredArray: [
                {
                    name: 'Anthony',
                    age: 33,
                    sportsTeam: 'Chargers'
                },
                {
                    name: 'Justin',
                    age: 31,
                    hobby: 'Ultimate Frisbee'
                },
                {
                    name: 'Aaron',
                    age: 36,
                    musicalInst: 'Drums'
                },
                {
                    name: 'Eddie',
                    age: 38,
                    sportsTeam: 'Vikings'
                },
                {
                    name: 'Sydney',
                    age: 30,
                    pet: 'Pickles'
                },
            ],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(e){
        this.setState({userInput: e});
    }

    filterTheObjects(input){
        const copyArr = this.state.unFilteredArray.slice();
        const copyFilteredArr = this.state.filteredArray.slice()

        for (let i = 0; i < copyArr.length; i++){
            for(let key in copyArr[i]){
                if(key === input){
                    copyFilteredArr.push(copyArr[i]);
                }
            }
        }

        this.setState({
            filteredArray: copyFilteredArr
        })
    }

    render(){
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input className="inputLine" placeHolder="Enter Property Name" onChange={(e) => this.handleChange(e.target.value)} />
                <button className="confirmationButton" onClick={() => {this.filterTheObjects(this.state.userInput)}}>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}

export default FilterObject