import React from 'react'
import {Check} from '@primer/octicons-react'
import {colors} from '../theme'
import CircleOcticon from '../CircleOcticon'
import {render, behavesAsComponent} from '../utils/testing'
import {COMMON, FLEX, LAYOUT} from '../constants'
import {render as HTMLRender, cleanup} from '@testing-library/react'
import {axe, toHaveNoViolations} from 'jest-axe'
import 'babel-polyfill'
expect.extend(toHaveNoViolations)

describe('CircleOcticon', () => {
  behavesAsComponent(CircleOcticon, [COMMON, FLEX, LAYOUT], () => <CircleOcticon icon={Check} />)

  it('renders a <div> with width and height', () => {
    const result = render(<CircleOcticon icon={Check} size={10} />)
    expect(result).toHaveStyleRule('width', '10px')
    expect(result).toHaveStyleRule('height', '10px')
  })

  it('should have no axe violations', async () => {
    const {container} = HTMLRender(<CircleOcticon icon={Check} size={10} />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
    cleanup()
  })

  it('renders {borderRadius: 50%}', () => {
    expect(render(<CircleOcticon icon={Check} />)).toHaveStyleRule('border-radius', '50%')
  })

  it('respects the bg prop', () => {
    expect(render(<CircleOcticon icon={Check} bg="red.5" />)).toHaveStyleRule('background-color', colors.red[5])
  })

  it('has a default size', () => {
    const result = render(<CircleOcticon icon={Check} />)
    expect(result).toHaveStyleRule('width', '32px')
    expect(result).toHaveStyleRule('height', '32px')
  })
})
