import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import FirstOption from '../src/components/FirstOption'
import '@testing-library/jest-dom/extend-expect'

describe('<FirstOption />', () => {
  it('should display text', () => {
    render(
      <BrowserRouter>
        <FirstOption />
      </BrowserRouter>
    )
    expect(screen.getByText('First Option')).toBeVisible()
  })
})
