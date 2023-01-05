import React from 'react';

import { VisibilityContext } from 'react-horizontal-scrolling-menu';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';

function Arrow({
  children,
  disabled,
  onClick,
}: {
  children: React.ReactNode;
  disabled: boolean;
  onClick: VoidFunction;
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="border-0 bg-white"
      style={{
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        right: '1%',
        opacity: disabled ? '0' : '0.8',
        userSelect: 'none',
      }}
    >
      {children}
    </button>
  );
}

export function LeftArrow() {
  const {
    isFirstItemVisible,
    scrollToItem,
    visibleElements,
    initComplete,
    getPrevElement,
  } = React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !initComplete || (initComplete && isFirstItemVisible)
  );
  React.useEffect(() => {
    // NOTE: detect if whole component visible
    if (visibleElements.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleElements]);

  return (
    <Arrow
      disabled={disabled}
      onClick={() => scrollToItem(getPrevElement(), 'smooth', 'start')}
    >
      <BiLeftArrow />
    </Arrow>
  );
}

export function RightArrow() {
  const { isLastItemVisible, scrollToItem, visibleElements, getNextElement } =
    React.useContext(VisibilityContext);

  // console.log({ isLastItemVisible });
  const [disabled, setDisabled] = React.useState(
    !visibleElements.length && isLastItemVisible
  );
  React.useEffect(() => {
    if (visibleElements.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleElements]);

  return (
    <Arrow
      disabled={disabled}
      onClick={() => scrollToItem(getNextElement(), 'smooth', 'end')}
    >
      <BiRightArrow />
    </Arrow>
  );
}
