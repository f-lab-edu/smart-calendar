import { css, CSSProperties } from 'styled-components'

type TJustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'inherit'
  | 'initial'

type TAlignItems =
  | 'stretch'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'initial'
  | 'inherit'

type TFlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse' | 'initial' | 'inherit'

export const mixin = {
  flexSet: (
    justifyContent: TJustifyContent = 'center',
    alignItems: TAlignItems = 'center',
    flexDirection: TFlexDirection = 'row',
  ) => css`
    display: flex;
    flex-direction: ${flexDirection};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
  `,

  fontSet: (color = '#000000', size = '16px', weight = 'normal') =>
    css`
      color: ${color};
      font-size: ${size};
      font-weight: ${weight};
    `,

  marginSet: (marginTop = 0, marginRight = 0, marginBottom = 0, marginLeft = 0) => css`
    margin: ${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px;
  `,

  paddingSet: (paddingTop = 0, paddingRight = 0, paddingBottom = 0, paddingLeft = 0) => css`
    padding: ${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px;
  `,

  borderSet: (width = 1, style = 'solid', color = '#000000') => {
    return css`
      border: ${width}px ${style} ${color};
    `
  },

  boxShadow: (background = 'white', boxShadow = '') => {
    return css`
      background: ${background};
      box-shadow: ${boxShadow};
    `
  },
}

// export const Size = {
//   large: css`
//     width: 350px;
//     height: 50px;
//   `,
//   medium: css`
//     width: 150px;
//     height: 40px;
//   `,
//   small: css`
//     width: 50px;
//     height: 30px;
//   `,
// }

// export const Color = {
//   blue: css`
//     background: rgb(7, 100, 245);
//   `,
// }

// export const override: CSSProperties = {
//   marginLeft: '100%',
// }
