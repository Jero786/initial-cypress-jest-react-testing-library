// Resources
import './tag-list-item.scss';

// Libs
import React, {memo} from 'react';
import PropTypes from 'prop-types';

function TagListItem({name, count}) {
  return (
    <div className="tag-list-item">
      <span className="tag-list-item__name">{name}</span>
      <span className="tag-list-item__count">{count}</span>
    </div>
  );
}

TagListItem.propTypes = {
  name: PropTypes.string,
  count: PropTypes.string,
};
TagListItem.defaultProps = {};

export default memo(TagListItem);
