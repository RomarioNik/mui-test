import React, { useState } from 'react';
import css from './RadioGroup.module.css';
import sprite from '../../img/sprite-icon.svg';

const RadioGroup = () => {
  const [topping, setTopping] = useState('star');

  console.log(topping);

  const onOptionChange = e => {
    setTopping(e.target.value);
  };

  return (
    <div className={css.radio}>
      <label htmlFor="regular">
        <input
          className={css.input}
          type="radio"
          name="topping"
          value="star"
          id="regular"
          checked={topping === 'star'}
          onChange={onOptionChange}
        />
        <svg width="68" height="68" className={`${css.icon}`}>
          <use xlinkHref={`${sprite}#star`} />
        </svg>
      </label>

      <label htmlFor="medium">
        <input
          className={css.input}
          type="radio"
          name="topping"
          value="lightning"
          id="medium"
          checked={topping === 'lightning'}
          onChange={onOptionChange}
        />
        <svg width="68" height="68" className={css.icon}>
          <use xlinkHref={`${sprite}#lightning`} />
        </svg>
      </label>
    </div>
  );
};

export default RadioGroup;
