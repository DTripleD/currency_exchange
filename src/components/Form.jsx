import React from 'react';
import { useDispatch } from 'react-redux';
import { exchangeOperation } from 'redux/operations';

export const Form = () => {
  const dispatch = useDispatch();

  const handleForm = event => {
    event.preventDefault();
    console.log(event.currentTarget.elements.currency.value);
    const { currency } = event.currentTarget.elements;
    const [amount, from, , to] = currency.value.split(' ');
    console.log({ amount, from, to });
    dispatch(exchangeOperation({ amount, from, to }));
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <label>
          Enter currency
          <input name="currency" type="text" placeholder="15 USD in UAH" />
        </label>
        <button type="submit">Exchange</button>
      </form>
    </div>
  );
};
