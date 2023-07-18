import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, expenses, maxBudget, currency, remaining, dispatch } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const checkBudget = (value) => {
        console.log(totalExpenses, 'j')
        if (value <= maxBudget) {
            if (value < totalExpenses) {
                alert(`You cannot reduce the budget value lower than the spending`);
            } else{
                dispatch({
                    type: 'SET_BUDGET',
                    payload: value,
                });
            }
        }else{
                alert(`The value cannot exceed remaining funds ${currency}` + remaining);
        }
    }

    return (
        <div className='alert alert-secondary'>
            <label>Budget: {currency}</label>
            <input
                required='required'
                type='number'
                id='budget'
                value={budget}
                style={{ size: 10 }}
                onChange={(event) => checkBudget(event.target.value)}
            />
        </div>
    );
};
export default Budget;