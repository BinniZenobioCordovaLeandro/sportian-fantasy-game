import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import { Button } from './button'

describe('Button', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  it('renders correctly', () => {
    renderer.create(
      <Button
        onClick={() => {
          // do nothing
        }} children="Button"
      />
    )
  })
})
