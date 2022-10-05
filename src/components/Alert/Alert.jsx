import PropTypes from 'prop-types';
// import cn from 'classnames';

import css from './Alert.module.css';

export const Alert = ({ variant, children }) => {
  return <p className={`alert, ${variant}`}>{children}</p>;
};

/* <p className={`alert 
        ${variant} 
        ${outlined ? "outlined" : ""}
        ${textCenter ? "textCenter" : ""}
    `}>
  {children}
</p> */

Alert.propTypes = {
  variant: PropTypes.string.isRequired,
  outlined: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  textCenter: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  children: PropTypes.node,
};
