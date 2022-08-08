import React, { Fragment } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/dracula';

const PrismSyntaxHighlight = ({ children, className }) => {
  const language = className.replace(/language-/gm, '');

  return (
    <Highlight {...defaultProps} code={children} language={language} theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Fragment>
          <span className="absolute top-[0.6rem] right-3 sm:top-[0.9rem] sm:right-4 text-tiny sm:text-xs text-yellow-500 uppercase">
            {language}
          </span>
          <code className={className} style={style}>
            {tokens.slice(0, -1).map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </code>
        </Fragment>
      )}
    </Highlight>
  );
};

export default PrismSyntaxHighlight;
