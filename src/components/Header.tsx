import React, { Component } from 'react'
import styled from 'styled-components'

interface Props {
  count?: number
}

interface TitleProps {
  readonly isActive: boolean
}

const Title = styled.h1<TitleProps>`
  color: ${({ isActive, theme: { colors } }) =>
    isActive ? colors.main : colors.secondary};
`

export default class Header extends Component<Props> {
  static defaultProps: Props = {
    count: 10,
  }

  render() {
    return <Title isActive>{this.props.count}</Title>
  }
}
