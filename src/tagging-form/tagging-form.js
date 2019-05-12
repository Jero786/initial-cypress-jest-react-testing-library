// Resources
import './tagging-form.scss'

// Libs
import React, {memo} from 'react'
import PropTypes from 'prop-types'

// Components
import TextField from '../text-field/text-field'
import Button from '../button/button'
import List from '../list/list'
import TaggingListItem from '../tag-list-item/tag-list-item'
import Chip from '../chip/chip'

function TaggingForm({
                       onSubmit = () => {
                       },
                       tags = [],
                       indexActive = -1,
                       selectedTagsId = [],
                       onClickChip = () => {
                       },
                     }) {
  return (
    <section className="tg-tagging-form">
      <div className="tg-tagging-form__input">
        <TextField/>
      </div>
      <div className="tg-tagging-form__submit">
        <Button text="+" onClick={onSubmit}/>
      </div>
      <div className="tg-tagging-form__selected-list">
        {getSelectedTagsEl(selectedTagsId, tags, onClickChip)}
      </div>
      <div className="tg-tagging-form__list">
        <List indexActive={indexActive}>
          {getTagsEl(tags)}
        </List>
      </div>
    </section>
  )
}

TaggingForm.propTypes = {
  tags: PropTypes.array,
  onSubmit: PropTypes.func,
  indexActive: PropTypes.number,
  selectedTagsId: PropTypes.array,
  onClickChip: PropTypes.func,
}

TaggingForm.defaultProps = {}

function getSelectedTagsEl(
  selectedTagsId = [],
  tags = [],
  onClickChip = () => {
  },
) {
  
  return (
    selectedTagsId.map(selectedTagId => {
      const tagTarget = tags.find(tag => tag.id === selectedTagId)
      return (
        <Chip
          key={`key-chip-id-${selectedTagId}`}
          text={tagTarget.name}
          iconSrc="close-icon"
          onClick={onClickChip}
          id={selectedTagId}
        />
      )
    })
  )
}

function getTagsEl(tags = []) {
  return (
    tags.map((tag, index) =>
      <TaggingListItem
        key={`tag-index-${tag.name}-index-${index}`}
        count={tag.count}
        name={tag.name}
      />,
    )
  )
}

export default memo(TaggingForm)
