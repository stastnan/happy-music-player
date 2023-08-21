export const breakpoints = {
  sm: 460, //for small mobiles
  md: 768, //for tablets and big mobiles
  lg: 1280, //for big tablets and laptops
  xl: 1920, //for large screens
};

export const device = {
  sm: `@media (max-width: ${breakpoints.sm}px)`,
  md: `@media (max-width: ${breakpoints.md}px)`,
  lg: `@media (max-width: ${breakpoints.lg}px)`,
  xl: `@media (max-width: ${breakpoints.xl}px)`,
};
