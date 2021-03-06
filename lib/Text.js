import React from 'react';
import PropTypes from 'prop-types';
import mapChildrenRecursively from './mapChildrenRecursively';
import escapeWs from './escapeWs';

const Text = (props) => {
  const themeLookup = Object.assign({},
    Text.defaultProps.themeLookup,
    props.themeLookup
  );
  const styledKeys = [];
  Object.keys(props).forEach((key) => {
    if (['themeLookup', 'children'].includes(key)) return;
    if (props[key]) styledKeys.push(key);
  });
  const styles = Object.assign(
    {},
    ...styledKeys.map((key) => themeLookup[key])
  );
  return <span style={styles}>
    {
      mapChildrenRecursively(props.children, (child) => {
        if (!child.type && !child.props) {
          return [escapeWs(String(child)), false];
        } else {
          return [child, false];
        }
      })
    }
  </span>;
};

Text.propTypes = {
  themeLookup: PropTypes.shape({
    bold: PropTypes.object.isRequired,
    dim: PropTypes.object.isRequired,
    italic: PropTypes.object.isRequired,
    underline: PropTypes.object.isRequired,
    strikethrough: PropTypes.object.isRequired,
    black: PropTypes.object.isRequired,
    red: PropTypes.object.isRequired,
    green: PropTypes.object.isRequired,
    yellow: PropTypes.object.isRequired,
    blue: PropTypes.object.isRequired,
    magenta: PropTypes.object.isRequired,
    cyan: PropTypes.object.isRequired,
    white: PropTypes.object.isRequired,
    gray: PropTypes.object.isRequired,
    blackBright: PropTypes.object.isRequired,
    redBright: PropTypes.object.isRequired,
    greenBright: PropTypes.object.isRequired,
    yellowBright: PropTypes.object.isRequired,
    blueBright: PropTypes.object.isRequired,
    magentaBright: PropTypes.object.isRequired,
    cyanBright: PropTypes.object.isRequired,
    whiteBright: PropTypes.object.isRequired,
    bgBlack: PropTypes.object.isRequired,
    bgRed: PropTypes.object.isRequired,
    bgGreen: PropTypes.object.isRequired,
    bgYellow: PropTypes.object.isRequired,
    bgBlue: PropTypes.object.isRequired,
    bgMagenta: PropTypes.object.isRequired,
    bgCyan: PropTypes.object.isRequired,
    bgWhite: PropTypes.object.isRequired,
    bgBlackBright: PropTypes.object.isRequired,
    bgRedBright: PropTypes.object.isRequired,
    bgGreenBright: PropTypes.object.isRequired,
    bgYellowBright: PropTypes.object.isRequired,
    bgBlueBright: PropTypes.object.isRequired,
    bgMagentaBright: PropTypes.object.isRequired,
    bgCyanBright: PropTypes.object.isRequired,
    bgWhiteBright: PropTypes.object.isRequired
  }),
  bold: PropTypes.bool,
  dim: PropTypes.bool,
  italic: PropTypes.bool,
  underline: PropTypes.bool,
  strikethrough: PropTypes.bool,
  black: PropTypes.bool,
  red: PropTypes.bool,
  green: PropTypes.bool,
  yellow: PropTypes.bool,
  blue: PropTypes.bool,
  magenta: PropTypes.bool,
  cyan: PropTypes.bool,
  white: PropTypes.bool,
  gray: PropTypes.bool,
  blackBright: PropTypes.bool,
  redBright: PropTypes.bool,
  greenBright: PropTypes.bool,
  yellowBright: PropTypes.bool,
  blueBright: PropTypes.bool,
  magentaBright: PropTypes.bool,
  cyanBright: PropTypes.bool,
  whiteBright: PropTypes.bool,
  bgBlack: PropTypes.bool,
  bgRed: PropTypes.bool,
  bgGreen: PropTypes.bool,
  bgYellow: PropTypes.bool,
  bgBlue: PropTypes.bool,
  bgMagenta: PropTypes.bool,
  bgCyan: PropTypes.bool,
  bgWhite: PropTypes.bool,
  bgBlackBright: PropTypes.bool,
  bgRedBright: PropTypes.bool,
  bgGreenBright: PropTypes.bool,
  bgYellowBright: PropTypes.bool,
  bgBlueBright: PropTypes.bool,
  bgMagentaBright: PropTypes.bool,
  bgCyanBright: PropTypes.bool,
  bgWhiteBright: PropTypes.bool
};

Text.defaultProps = {
  themeLookup: {
    bold: { fontWeight: 'bold' },
    dim: { opacity: 0.5 },
    italic: { fontStyle: 'italic' },
    underline: { textDecoration: 'underline' },
    strikethrough: { textDecoration: 'line-through' },
    black: { color: '#000000' },
    red: { color: '#990000' },
    green: { color: '#00A600' },
    yellow: { color: '#999900' },
    blue: { color: '#0000B2' },
    magenta: { color: '#B200B2' },
    cyan: { color: '#00A6B2' },
    white: { color: '#BFBFBF' },
    gray: { color: '#666666' },
    blackBright: { color: '#666666' },
    redBright: { color: '#E50000' },
    greenBright: { color: '#00D900' },
    yellowBright: { color: '#E5E500' },
    blueBright: { color: '#0000FF' },
    magentaBright: { color: '#E500E5' },
    cyanBright: { color: '#00E5E5' },
    whiteBright: { color: '#E5E5E5' },
    bgBlack: { backgroundColor: '#000000' },
    bgRed: { backgroundColor: '#990000' },
    bgGreen: { backgroundColor: '#00A600' },
    bgYellow: { backgroundColor: '#999900' },
    bgBlue: { backgroundColor: '#0000B2' },
    bgMagenta: { backgroundColor: '#B200B2' },
    bgCyan: { backgroundColor: '#00A6B2' },
    bgWhite: { backgroundColor: '#BFBFBF' },
    bgBlackBright: { backgroundColor: '#666666' },
    bgRedBright: { backgroundColor: '#E50000' },
    bgGreenBright: { backgroundColor: '#00D900' },
    bgYellowBright: { backgroundColor: '#E5E500' },
    bgBlueBright: { backgroundColor: '#0000FF' },
    bgMagentaBright: { backgroundColor: '#E500E5' },
    bgCyanBright: { backgroundColor: '#00E5E5' },
    bgWhiteBright: { backgroundColor: '#E5E5E5' }
  },
  bold: false,
  dim: false,
  italic: false,
  underline: false,
  strikethrough: false,
  black: false,
  red: false,
  green: false,
  yellow: false,
  blue: false,
  magenta: false,
  cyan: false,
  white: false,
  gray: false,
  blackBright: false,
  redBright: false,
  greenBright: false,
  yellowBright: false,
  blueBright: false,
  magentaBright: false,
  cyanBright: false,
  whiteBright: false,
  bgBlack: false,
  bgRed: false,
  bgGreen: false,
  bgYellow: false,
  bgBlue: false,
  bgMagenta: false,
  bgCyan: false,
  bgWhite: false,
  bgBlackBright: false,
  bgRedBright: false,
  bgGreenBright: false,
  bgYellowBright: false,
  bgBlueBright: false,
  bgMagentaBright: false,
  bgCyanBright: false,
  bgWhiteBright: false
};

export default Text;
