import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Main from '../src/components/Main'
import '@testing-library/jest-dom/extend-expect'

describe('<Main />', () => {
  it('can be rendered', () => {
    render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    )
    expect(screen.getByText('React Node Template')).toBeVisible()
  })
})
