// Resources
import './button.scss'

// Libs
import React, {memo} from 'react'
import PropTypes from 'prop-types'

function Button({onClick, text}) {
  return (
    <button type="button" onClick={onClick} className="tg-button">{text}</button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
}
Button.defaultProps = {}

export default memo(Button)
