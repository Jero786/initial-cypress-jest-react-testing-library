// Resources
import './highlighter-text.scss'

// Libs
import React, {memo} from 'react'
import PropTypes from 'prop-types'
import dompurify from 'dompurify'
import {getWindowsSelectionText} from '../utils'

function onHighlighterText(onHighlightText) {
  const highlightedText = getWindowsSelectionText()
  if (onHighlightText) {
    onHighlightText(highlightedText)
  }
}

function HighLighterText({
                           children: text,
                           highlights = [],
                           onHighlightText = () => {
                           },
                         }) {

  const nonHighlighters = highlights.length === 0
  if (nonHighlighters) {
    return (
      <div className="tg-highlighter-text">
        {text}
      </div>
    )
  }

  // Need to sort highlight text in order to know which highlight text should be shifted first
  const highlighterSort = highlights.sort((a, b) => a.indexOf - b.indexOf)
  let indexHighLight = 0
  let indexJumperHighlight = 0
  let newText = ''

  while (highlighterSort[indexHighLight] !== undefined) {
    const highlight = highlighterSort[indexHighLight]
    const highlightText = highlight.highlightedText
    const highlightIndexOf = highlight.indexOf
    const end = highlightIndexOf + highlightText.length

    const beforeText = text.substring(indexJumperHighlight, highlightIndexOf)
    const middleText = text.substring(highlightIndexOf, end)

    indexJumperHighlight = end

    // override the same text with the new span highlighter html
    newText += `${beforeText}<span class="is-highlighted">${middleText}</span>`

    indexHighLight++ // calculate next one
    const isLastIteration = highlighterSort[indexHighLight] === undefined
    if (isLastIteration) {
      // enter here means add remaining left text
      newText += text.substring(end, text.length)
    }
  }
  // avoid most commons xss attacks
  const sanitizedText = dompurify.sanitize(newText)

  return (
    <div className="tg-highlighter-text"
         onMouseUp={onHighlighterText.bind(this, onHighlightText)}
         dangerouslySetInnerHTML={{__html: sanitizedText}}
    />
  )

}

HighLighterText.propTypes = {
  children: PropTypes.any,
  highlights: PropTypes.array,
  onHighlightText: PropTypes.func,
}

HighLighterText.defaultProps = {}

export default memo(HighLighterText)
