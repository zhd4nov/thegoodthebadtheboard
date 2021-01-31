import { memo } from 'react';

const Button = ({ bg, children }) => (
  <button
    type="button"
    className={`px-5 py-1 ml-5 bg-${bg}-600 text-white font-bold hover:bg-${bg}-800 rounded`}
  >
    {children}
  </button>
);

Button.defaultProps = {
  bg: 'purple',
};

export default memo(Button);
