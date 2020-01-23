// sizes
const size = {
  small: "666px",
  smallBreak1: "390px",
  smallBreak2: "490px",
  landscape: "414px",
  medium: "768px",
  hero: "900px",
  large: "960px",
  jumbo: "1280px",
}

// devices
export const device = {
  small: `(max-width: ${size.small})`,
  smallBreak1: `(min-width: ${size.smallBreak1})`,
  smallBreak2: `(min-width: ${size.smallBreak2})`,
  landscape: `(max-height: ${size.landscape}) and (orientation: landscape)`,
  medium: `(min-width: ${size.medium})`,
  hero: `(min-width: ${size.hero})`,
  large: `(min-width: ${size.large})`,
  jumbo: `(min-width: ${size.jumbo})`,
}
