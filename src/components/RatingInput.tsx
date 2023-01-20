import React, { useState } from 'react';
import { MdStar } from 'react-icons/md';

const RatingInput: React.FC<{ valueChanged: (stars: number) => void }> = ({
  valueChanged,
}) => {
  const [selectedStar, setSelectedStar] = useState<number[]>([]);
  const [fixed, setFixed] = useState<boolean>(false);

  const check = (starNum: number) => {
    let stars = [];
    for (let num = 1; num <= starNum; num++) {
      stars.push(num);
    }
    setSelectedStar(stars);
    valueChanged(starNum);
  };

  const unCheck = () => {
    if (!fixed) {
      setSelectedStar([]);
    }
  };

  return (
    <div
      onMouseLeave={() => unCheck()}
      className="fs-3"
      onClick={() => setFixed((old) => !old)}
    >
      <MdStar
        color={selectedStar?.includes(1) ? '#FFD700' : '#D3D3D3'}
        onMouseEnter={() => check(1)}
      />
      <MdStar
        color={selectedStar?.includes(2) ? '#FFD700' : '#D3D3D3'}
        onMouseEnter={() => check(2)}
      />
      <MdStar
        color={selectedStar?.includes(3) ? '#FFD700' : '#D3D3D3'}
        onMouseEnter={() => check(3)}
      />
      <MdStar
        color={selectedStar?.includes(4) ? '#FFD700' : '#D3D3D3'}
        onMouseEnter={() => check(4)}
      />
      <MdStar
        color={selectedStar?.includes(5) ? '#FFD700' : '#D3D3D3'}
        onMouseEnter={() => check(5)}
      />
    </div>
  );
};

export default RatingInput;
