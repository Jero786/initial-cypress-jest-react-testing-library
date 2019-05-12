// Resources
import './chip.scss'

// Libs
import React, {memo} from 'react'
import PropTypes from 'prop-types'

function Chip({text, onClick, iconSrc, id}) {

  let imgEl
    , textEl

  if (iconSrc) {
    imgEl = (<span className="tg-chip__icon"><img src={iconSrc}/></span>)
  }

  if (text) {
    textEl = (<span className="tg-chip__text">{text}</span>)
  }

  return (
    <div className="tg-chip"
         onClick={id ? onClickWithMetadata.bind(this, onClick, id) : onClick}>{imgEl}{textEl}</div>
  )
}

Chip.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  iconSrc: PropTypes.string,
  id: PropTypes.any,
}

Chip.defaultProps = {}


function onClickWithMetadata(onClick, id) {
  if (onClick) {
    onClick(id)
  }
}

export default memo(Chip)
