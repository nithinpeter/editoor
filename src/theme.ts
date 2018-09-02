const { colors } = require('@atlaskit/theme');

// tslint:disable:object-literal-sort-keys
const BlackTheme = {
  C0: colors.DN0,
  C10: colors.DN10,
  C20: colors.DN20,
  C30: colors.DN30,
  C40: colors.DN40,
  C50: colors.DN50,
  C60: colors.DN60,
  c70: colors.DN70,
  C80: colors.DN80,
  C90: colors.DN90,
  C100: colors.DN100,
  C200: colors.DN200,
  C300: colors.DN300,
  C400: colors.DN400,
  C500: colors.DN500,
  C600: colors.DN600,
  C700: colors.DN700,
  C800: colors.DN800,
  C900: colors.DN900,
};
// tslint:enable:object-literal-sort-keys
export const getTheme = (): typeof BlackTheme => BlackTheme;

const DEFAULT_GRID_SIZE = 8;
export const gridSize = () => DEFAULT_GRID_SIZE;
