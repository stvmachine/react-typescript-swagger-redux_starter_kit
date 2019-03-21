import React, { Component } from "react"
import styled from "styled-components"

interface Props {
  count?: number
}

interface TitleProps {
  readonly isActive: boolean
}

const Title = styled.h1<TitleProps>`
  color: ${props =>
    props.isActive ? props.theme.colors.main : props.theme.colors.secondary};
`

export default class Header extends React.Component<Props> {
  static defaultProps: Props = {
    count: 10,
  }

  render() {
    return <Title isActive>{this.props.count}</Title>
  }
}
