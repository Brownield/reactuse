import { useRef } from 'react';

import { useHover } from './useHover';

const Demo = () => {
  const hoverRef = useRef<HTMLDivElement>(null);
  const isHover = useHover(hoverRef, () => console.log('callback'));

  return (
    <div ref={hoverRef}>
      The current div is <code>{isHover ? 'hovered' : 'unhovered'}</code>
    </div>
  );
};

export default Demo;
