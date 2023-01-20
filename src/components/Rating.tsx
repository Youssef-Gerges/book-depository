import BookType from '@objTypes/BookType';
import BookUtils from '@utils/BookUtils.class';
import React from 'react';
import { MdStar, MdStarHalf } from 'react-icons/md';

const Rating: React.FC<{ book: BookType; showRating: boolean }> = ({
  book,
  showRating = false,
}) => {
  const ratingNumber = new Number(BookUtils.calcRating(book.reviews)).toFixed(
    1
  );
  const renderRating = () => {
    let rate = Number.parseFloat(ratingNumber);
    let stars = [];
    for (let i = 0; i < 5; i++) {
      if (rate >= 1) {
        stars.push(<MdStar color="#FFD700" key={i} />);
      } else if (rate >= 0.5) {
        stars.push(<MdStarHalf color="#FFD700" key={i} />);
      } else {
        stars.push(<MdStar color="#D3D3D3" key={i} />);
      }
      rate--;
    }
    return stars;
  };
  return (
    <div>
      <p className="m-0 p-0">
        {renderRating()}
        {'  '}
        {showRating && ratingNumber} ({book.reviews?.length ?? 0}
        {showRating && ' ratings'})
      </p>
    </div>
  );
};

export default Rating;
