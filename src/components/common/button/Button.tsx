import { memo } from 'react';

const Button = ({ label, bg }) => (
  <button
    type="button"
    className={`py-1 px-2 bg-${bg}-600 text-white font-bold hover:text-yellow-200 hover:bg-${bg}-800`}
  >
    {label}
  </button>
);

Button.defaultProps = {
  label: 'Push button',
  bg: 'green',
};

export default memo(Button);
