// Resources
import './list.scss';

// Libs
import React, {memo} from 'react'
import PropTypes from 'prop-types'

function List({children, indexActive = -1}) {
  return (
    <ul className="tg-list">
      {
        React.Children.map(children, (itemList, index) => {
          return (
            <li className={`tg-list__item${index === indexActive ? ' is-active' : ''}`}>
              {itemList}
            </li>
          );
        })
      }
    </ul>
  )
}

List.propTypes = {
  children: PropTypes.array,
  indexActive: PropTypes.number,
}
List.defaultProps = {}

export default memo(List)
