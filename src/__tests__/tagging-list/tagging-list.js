// Libs
import React from 'react'
import {render, cleanup} from 'react-testing-library'

// Components
import HomePage from '../../home/home-page'

describe('home page', () => {

  afterEach(cleanup)

  test('Should display properly the home page title', () => {
    const {getByText, container} = render(<HomePage/>)

    getByText('THIS IS A HOME PAGE')
    expect(container.firstChild.classList.contains('home-page')).toBe(true);
  });
})
