// Libs
import React from 'react'
import {render, cleanup} from 'react-testing-library'

// Components
import List from '../../list/list'

describe('List', () => {

  afterEach(cleanup)

  test('should exist', () => {
    const TaggingList = (
      <List/>
    )

    const {container} = render(TaggingList)

    expect(container.firstChild.classList.contains('tg-list')).toBe(true)
  })

  it('should contain two child elements', () => {
    const TaggingList = (
      <List>
        <div>item 1</div>
        <div>item 2</div>
      </List>
    )

    const {container} = render(TaggingList)

    expect(container.querySelectorAll('.tg-list__item').length === 2).toBeTruthy()
  })

  it('should be able to defined an active item selected', () => {
    const TaggingList = (
      <List indexActive={1}>
        <div>item 1</div>
        <div>item 2</div>
      </List>
    )

    const {container} = render(TaggingList)

    expect(container.querySelectorAll('.tg-list__item')[1].classList.contains('is-active')).toBe(true)
  })
})
