// Libs
import React from 'react'
import {render, cleanup, fireEvent} from 'react-testing-library'
import sinon from 'sinon'

// Components
import Chip from '../../chip/chip'

describe('Chip', () => {

  afterEach(cleanup)

  it('should exist', () => {
    const {container} = render(<Chip/>)

    expect(container.firstChild.classList.contains('tg-chip')).toBe(true)
  })

  it('should able to define a text', () => {
    render(<Chip text="some text"/>).getByText(/some text/)
  })

  it('should be able to response a click event', () => {
    const spy = sinon.spy()
    const {container} = render(<Chip onClick={spy} />)

    fireEvent.click(container.querySelector('.tg-chip'))

    expect(spy.calledOnce).toBe(true)

  })

  it('should be able to response a click event with metadata', () => {
    const spy = sinon.spy()
    const {container} = render(<Chip onClick={spy} id={123}/>)

    fireEvent.click(container.querySelector('.tg-chip'))

    expect(spy.withArgs(123).calledOnce).toBe(true)
  })

  it('should be able to have an icon', () => {
    const {container} = render(<Chip iconSrc="/some/img/src"/>)

    expect(container.querySelector('.tg-chip__icon')).not.toBeNull()
  })
})
