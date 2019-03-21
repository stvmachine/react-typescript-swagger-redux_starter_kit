import * as styledComponents from 'styled-components'
import { ThemedStyledComponentsModule } from 'styled-components'
import { myTheme } from './'

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<any>

export { css, createGlobalStyle, keyframes, ThemeProvider }
export default styled
