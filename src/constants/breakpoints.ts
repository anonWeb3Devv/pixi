interface Size {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  //   lg: string;
  //   xl: string;
  //   xxl: string;
}

const size: Size = {
  xs: "480px", // for small screen mobile
  sm: "768px", // for mobile screen
  md: "1024px", // for tablets
  lg: "1280px", // for laptops
  //   lg: "1280px", // for laptops
  //   xl: "1440px", // for desktop / monitors
  //   xxl: "1920px", // for big screens
};

export const device = {
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  md: `(max-width: ${size.md})`,
  lg: `(max-width: ${size.lg})`,
  //   lg: `(max-width: ${size.lg})`,
  //   xl: `(max-width: ${size.xl})`,
  //   xxl: `(max-width: ${size.xxl})`,
};

export const mobileFirst = {
  xs: `(min-width: ${size.xs})`,
  sm: `(min-width: ${size.sm})`,
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`,
};
