import React from "react";
import Form from 'react-bootstrap/Form';
function Sort(props) {
    const sortHandle = (e) => {
        props.sortData(e.target.value);
    }
    return(
        <div className="sortBlock">
            <Form.Select aria-label="sortSelect" onChange={sortHandle}>
                <option disabled={true} selected>Sorting</option>
                <option value="desc">From cheap to expensive</option>
                <option value="asc">From expensive to cheap</option>
                <option value="rating">By rating</option>
            </Form.Select>
        </div>
    )
}

export default Sort;