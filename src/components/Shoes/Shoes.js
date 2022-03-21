import React from 'react';
import { add, multiply } from '../../Utilitis/calculate';

const Shoes = () => {
    const num1 = 146;
    const num2 = 855;
    const result = multiply(num1, num2)
    const sum = add(num1, num2)
    return (
        <div>
            <h1>This is shoe compo</h1>
            <h3>result : {result}</h3>
            <h3>sum : {sum}</h3>
        </div>
    );
};

export default Shoes;