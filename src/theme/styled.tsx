import * as styledComponents from 'styled-components'
import { ThemedStyledComponentsModule, DefaultTheme } from 'styled-components'

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<DefaultTheme>

export { css, createGlobalStyle, keyframes, ThemeProvider }
export default styled
