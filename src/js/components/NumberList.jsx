import React from 'react';

const NumberList = (props) => {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map(
        number => <li key={number.toString()}>{number}</li>,
      )}
    </ul>
  );
};

NumberList.propTypes = {
  numbers: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
};

export default NumberList;
