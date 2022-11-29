import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render }from '@testing-library/react'
import Footer from './Footer'

test('renders content', () => {
    const component = render(<Footer />)
    expect(component.container).toHaveTextContent('Fabricio Marchetti')
    expect(true).toBe(true)
})
