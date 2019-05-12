// Resources
import './text-field.scss';

// Libs
import React, {memo} from 'react';
import PropTypes from 'prop-types';

function TextField({value}) {
  return (
    <div className="tg-text-field">
      <input defaultValue={value} type="text" className="tg-text-field__input"/>
    </div>
  );
}

TextField.propTypes = {
  value: PropTypes.string,
};
TextField.defaultProps = {};

export default memo(TextField);
