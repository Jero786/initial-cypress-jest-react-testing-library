// Libs
import React from 'react'
import {render, cleanup, fireEvent} from 'react-testing-library'
import sinon from 'sinon'

// Components
import TaggingForm from '../../tagging-form/tagging-form'

describe('TaggingForm', () => {

  afterEach(cleanup)

  it('should exist', () => {
    const {container} = render(<TaggingForm/>)

    expect(container.querySelector('.tg-tagging-form')).toBeDefined()
  })

  it('should contain a input that allow add new tags', () => {
    const {container} = render(<TaggingForm/>)

    expect(container.querySelector('.tg-tagging-form__input')).toBeDefined()
  })

  it('should contain a input button that allow perform clicks on it', () => {
    const {container} = render(<TaggingForm/>)

    expect(container.querySelector('.tg-tagging-form__submit')).toBeDefined()
  })

  it('should contain a list of tags', () => {
    const {container} = render(<TaggingForm/>)

    expect(container.querySelector('.tg-tagging-form__list')).toBeDefined()
  })

  it('should be able to display a list of tags defined by parameters', () => {
    const tags = [
      {
        name: 'tag 1',
        count: '1',
      },
      {
        name: 'tag 2',
        count: '10',
      },
    ]
    const {container} = render(<TaggingForm tags={tags}/>)

    expect(container.querySelectorAll('.tag-list-item')).toHaveLength(2)
  })

  it('should be able to handler onSubmit click handler', () => {
    const spy = sinon.spy()
    const {container} = render(<TaggingForm onSubmit={spy}/>)

    fireEvent.click(container.querySelector('button'))

    expect(spy.calledOnce).toBe(true)
  })

  it('should be able to select an existing tag', () => {
    const tags = [
      {
        name: 'tag 1',
        count: '1',
      },
      {
        name: 'tag 2',
        count: '10',
      },
    ]
    const {container} = render(<TaggingForm tags={tags} indexActive={1}/>)

    expect(container.querySelector('.tg-list__item.is-active')).not.toBeNull()
  })

  it('should be able to show existing tag selected', () => {
    const tags = [
      {
        id: 1,
        name: 'tag 1',
        count: '1',
      },
      {
        id: 2,
        name: 'tag 2',
        count: '10',
      },
      {
        id: 3,
        name: 'tag 3',
        count: '10',
      },
    ]
    const selectedTagsId = [1, 3]
    const {container} = render(<TaggingForm tags={tags} selectedTagsId={selectedTagsId}/>)

    expect(container.querySelectorAll('.tg-tagging-form__selected-list .tg-chip')).toHaveLength(2)
    expect(container.querySelectorAll('.tg-tagging-form__selected-list .tg-chip .tg-chip__text')[0].innerHTML).toBe('tag 1')
    expect(container.querySelectorAll('.tg-tagging-form__selected-list .tg-chip .tg-chip__text')[1].innerHTML).toBe('tag 3')
  })

  it('should be able to click tag clicked to perform delete operation', () => {
    const spy = sinon.spy()
    const tags = [
      {
        id: 1,
        name: 'tag 1',
        count: '1',
      },
      {
        id: 2,
        name: 'tag 2',
        count: '10',
      },
      {
        id: 3,
        name: 'tag 3',
        count: '10',
      },
    ]
    const selectedTagsId = [1, 3]
    const {container} = render(
      <TaggingForm
        tags={tags}
        selectedTagsId={selectedTagsId}
        onClickChip={spy}
      />,
    )
    const firstChipSelected = container.querySelector('.tg-tagging-form__selected-list .tg-chip')

    fireEvent.click(firstChipSelected)

    expect(spy.calledOnce).toBe(true)
    expect(spy.withArgs(1).calledOnce).toBe(true)
  })
})
