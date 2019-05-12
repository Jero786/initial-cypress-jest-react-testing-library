// Libs
import React from 'react'
import {render, cleanup} from 'react-testing-library'

// Components
import TextField from '../../text-field/text-field'

describe('TextField', () => {

  afterEach(cleanup)

  test('should exist', () => {
    const {container} = render(<TextField/>)

    expect(container.firstChild.classList.contains('tg-text-field')).toBe(true)
  })

  test('should be able to devine a value', () => {
     const {container} = render(<TextField value="some value"/>)

    expect(container.querySelector('input').value).toBe('some value')
  })
})
