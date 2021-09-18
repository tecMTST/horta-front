// tema do styled components com as cores e tamanhos que precisamos

// mesmos breakpoints que o bootstrap usa
const breakpoints = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px',
}

const tema = {
  colors: {
    main: "#0D560F",
    body: "#000000",
    dark: "#606060",
    white: "#fff",
    status: {
      danger: "#F27979",
      caution: "#F2C279",
      fine: "#79F2EB",
      lowLight: "#597DB4"
    }
  },
  fontSizes: {
    body: "1.5rem", // 24px se a base for 16 pixels
    title: "2.66rem", // 48px
    default: "1rem",
    footer: "2.125rem",
  },
  mediaqueries: {
    smUp: `@media (min-width: ${breakpoints.sm})`,
    smDown: `@media (max-width: ${breakpoints.sm})`,
    mdUp: `@media (min-width: ${breakpoints.md})`,
    mdDown: `@media (max-width: ${breakpoints.md})`,
    lgUp: `@media (min-width: ${breakpoints.lg})`,
    lgDown: `@media (max-width: ${breakpoints.lg})`,
    xlUp: `@media (min-width: ${breakpoints.xl})`,
    xlDown: `@media (max-width: ${breakpoints.xl})`,
    xxlUp: `@media (min-width: ${breakpoints.xxl})`,
    xxlDown: `@media (max-width: ${breakpoints.xxl})`,
  }
}

export default tema;
