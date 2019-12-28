import React, { Component } from 'react'
import '../css/Form.css'

export class PalinForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            option: 'character',
            type: 'character',
        }
    }

    selectChange = event => {
        this.setState({
            option: event.target.value

        },
            () => {
                this.state.option === 'character' ? (
                    this.setState({
                        type: 'character'
                    })) : (

                        this.setState({
                            type: 'number'
                        }))

            }
        )
    }

    Palindrome(input) {

        const valid = 'is a valid palindrome';
        const invalid = 'is an invalid palindrome'
        const convert = input.toString();
        const reverse = convert.split("").reverse().join("");

        input === reverse ? (
            alert(`${input} ${valid}`)
        ) : (
                alert(`${input} ${invalid}`)
            )
    }

    render() {
        const { option, type } = this.state;
        const {selectChange} = this;

        return (
            <div>
                <form onSubmit={() => this.Palindrome(document.getElementById("I").value)}>

                    <label>Select an input: </label>
                    <select
                        value={option}
                        onChange={selectChange}>
                        <option value='character'>Characters</option>
                        <option value='number'>Numbers</option>
                    </select><br />
                    <label>Enter a Palindrome: </label><br />
                    <input id="I" type={type} name='text' /><br />
                    <input type='submit' value='Submit' />
                </form>
            </div>
        )
    }
}

export default PalinForm

