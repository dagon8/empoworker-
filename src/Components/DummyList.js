import { React } from 'react'
import data from "./DummyListData.json"

// this files search the search and filter functionality
// currently it only works with DummyListData.json
// TODO: Configure it to work with the wageTheft Companies

function List(props) {
    //create a new array by filtering the original array
    const filteredData = data.filter((el) => {
        //if no input then return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.text.toLowerCase().includes(props.input)
        }
    })
    return (
        <ul>
            {filteredData.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    )
}

export default List