import { memo } from 'react';

const Logo = (): JSX.Element => (
  <div className="flex items-center">
    <div className="flex justify-center items-center bg-purple-200 h-12 w-12 rounded">
      <span className="text-black">logo</span>
    </div>
    <span className="pl-5 text-x-purple text-2xl">name</span>
  </div>
);

export default memo(Logo);
