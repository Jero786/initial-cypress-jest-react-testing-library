// Libs
import React from 'react'
import {render, cleanup, fireEvent} from 'react-testing-library'
import sinon from 'sinon'

// Components
import HighLighterText from '../../highlighter-text/highlighter-text'

describe('HighLighterText', () => {

  afterEach(cleanup)

  it('should exist', () => {
    const {container} = render(<HighLighterText/>)

    expect(container.firstChild.classList.contains('tg-highlighter-text')).toBe(true)
  })

  it('should be able to define a specific text', () => {
    render(<HighLighterText>some lorem ipsum</HighLighterText>).getByText('some lorem ipsum')
  })


  it('should be able to display a single highlighted text starting range from zero', () => {
    const highlights = [
      {indexOf: 0, highlightedText: 'some'},
    ]
    const {container} = render(<HighLighterText highlights={highlights}>some lorem ipsum</HighLighterText>)

    const highlighters = container.querySelectorAll('.is-highlighted')
    expect(highlighters).toHaveLength(1)
    expect(highlighters[0].innerHTML).toBe('some')
  })

  it('should be able to display a several highlighted text starting range until end position', () => {
    const highlights = [
      {indexOf: 2, highlightedText: 'me lo'},
      {indexOf: 10, highlightedText: ' ip'},
    ]
    const {container} = render(<HighLighterText highlights={highlights}>some lorem ipsum</HighLighterText>)

    const highlighters = container.querySelectorAll('.is-highlighted')
    expect(highlighters).toHaveLength(2)
    expect(highlighters[0].innerHTML).toBe('me lo')
    expect(highlighters[1].innerHTML).toBe(' ip')
  })

  it('should be able to handler text selection', () => {
    const spy = sinon.spy()

    const {container} = render(<HighLighterText onHighlightText={spy}>some lorem ipsum</HighLighterText>)

    simulateTextSelectionAndMouseUp(container)

    //expect(spy.calledOnce).toBe(true)
    //expect(spy.withArgs().calledOnce).toBe('some lorem ipsum')

    // turn of
    //window.getSelection().removeAllRanges()
  })

  function simulateTextSelectionAndMouseUp(container) {
    const innerContainer = container.querySelector('.tg-highlighter-text')
    //const range = document.createRange()
    //range.selectNode(container)
    //window.getSelection().addRange(range)
    fireEvent.mouseUp(innerContainer)
  }

})
