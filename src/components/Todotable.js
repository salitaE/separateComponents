import React from 'react';
import '../App.css';

export default function Todotable(props) {
    return(
        <div>
            <h3 style={{ textAlign: "left", paddingLeft: "10px" }}>Add to do: </h3>
            <div className= "wrapper tHead">
            <label>Date </label>
            <input type="date" name="date" value={props.lisaaTodo.date} onChange={props.inputChanged} />
            <label>Description</label>
            <input type="text" name="desc" value={props.lisaaTodo.desc} onChange={props.inputChanged} />
            <input type="submit" value="Add" />
            </div>
        </div>
    )
}