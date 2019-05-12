// Libs
import React from 'react'
import {render, cleanup} from 'react-testing-library'

// Components
import TagListItem from '../../tag-list-item/tag-list-item'

describe('TagListItem', () => {

  afterEach(cleanup)

  it('should exist', () => {
    const {container} = render(<TagListItem/>)

    expect(container.firstChild.classList.contains('tag-list-item')).toBe(true)
  })

  it('should show properly the name defined', () => {
    render(<TagListItem name="tag 10"/>).getByText('tag 10');
  })

  it('should show properly the amount defined', () => {
    render(<TagListItem count="999"/>) .getByText('999');
  })
})
