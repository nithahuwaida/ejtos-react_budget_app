import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Dropdown from 'react-bootstrap/Dropdown';

const Currency = () => {
    const { dispatch, currency, listCurrency } = useContext(AppContext);
    const changeCurrency = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
    }
    console.log(listCurrency)

    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Currency ({listCurrency.map((value)=>{
                    if(value.id=== currency) return value.name
                } )})
            </Dropdown.Toggle>
            <Dropdown.Menu className='bg-success'>
                {
                    listCurrency.map((value)=> {
                        return <Dropdown.Item key={value.id} onClick={() => changeCurrency(value.id)}>{value.name}</Dropdown.Item>
                    })
                }
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default Currency;