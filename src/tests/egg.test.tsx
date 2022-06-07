import { render, screen } from '@testing-library/react'
import Egg from 'src/pages/egg'

describe('Egg', () => {
  it('renders an egg', () => {
    render(<Egg />)
    expect(screen.getByText('THIS IS AN EGG 🥚🥚🥚🥚')).toBeVisible()
  })
})
