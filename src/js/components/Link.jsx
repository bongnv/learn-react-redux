import React from 'react';

const Link = (props) => {
  console.log(props);
  if (props.active) {
    return <span>{props.children}</span>;
  }

  return (
    <a
      href=""
      onClick={(e) => {
        e.preventDefault();
        props.onClick();
      }}
    >
      {props.children}
    </a>
  );
};

Link.propTypes = {
  active: React.PropTypes.bool.isRequired,
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
};

export default Link;
