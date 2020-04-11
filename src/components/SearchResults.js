import React from 'react'
import {ListGroup, Button} from 'react-bootstrap'
import "../styles/searchResults.css";


export default function SearchResults(props) {
    const results = props.results.map(
        result => 
        <ListGroup.Item action>
            {result.title}<Button style={{float:"right"}} onClick={()=>{props.callback(result, 1)}}>Select</Button>
        </ListGroup.Item>
    )
    if(props.hide){
        return null
    }
    else{
    return (
        <div>
            <ListGroup>
            {results}
            </ListGroup>
        </div>
    )
    }
}
