import React, {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import {fetchData} from "../utils/Others";
import DoubleRange from "./DoubleRange";

function Filter(props) {
    const [categories, setCategories] = useState([]);
    const [queryCategories, setQueryCategories] = useState([]);

    useEffect(() => {
        getCategories();
    }, []);

    useEffect(() => {
        setDataByCategories();
    }, [queryCategories]);

    const setDataByCategories = async () => {
        props.filterCategories(queryCategories)
    }

    const getCategories = async () => {
        setCategories(await fetchData('https://fakestoreapi.com/products/categories'))
    }

    const handleCategoriesChange = (e) => {
        if (e.target.checked) {
            setQueryCategories([e.target.id, ...queryCategories]);
        } else {
            setQueryCategories(queryCategories.filter(el => el !== e.target.id));
        }
    }

    const filterByPrice = (range) => {
        props.filterPrice(range)
    }

    return (
        <div className='filterList'>
            <ul>
                <li>
                    <div className='filterItem'>
                        <p>Categories <span>{categories.length}</span></p>
                        <ul>
                            {categories.map(el => <li key={el}>
                                <Form.Check
                                    onChange={handleCategoriesChange}
                                    inline
                                    label={el}
                                    type={'checkbox'}
                                    id={`${el}`}
                                />
                            </li>)}
                        </ul>
                    </div>
                </li>
                <li>
                    <div className='filterItem'>
                        <p>Price</p>
                        <ul>
                            <li>
                                <DoubleRange min={props.minMax.min} max={props.minMax.max}
                                             filterByPrice={filterByPrice}/>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Filter;