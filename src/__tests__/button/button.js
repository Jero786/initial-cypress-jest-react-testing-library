// Libs
import React from 'react'
import {render, cleanup, fireEvent} from 'react-testing-library'
import sinon from 'sinon';

// Components
import Button from '../../button/button';

describe('Button', () => {

  afterEach(cleanup)

  it('should exist', () => {
    const {container} = render(<Button/>)

    expect(container.firstChild.classList.contains('tg-button')).toBe(true)
  })

  it('should be able to set a text', () => {
    render(<Button text="some text"/>).getByText('some text');
  })

  it('should able to onClick the button', () => {
    const spy = sinon.spy();
    const { container } = render(<Button onClick={spy}/>);

    fireEvent.click(container.querySelector('button'));

    expect(spy.calledOnce).toBe(true);
  })

})
