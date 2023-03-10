import BookType from '@objTypes/BookType';
import React, { MouseEventHandler } from 'react';
import { Card } from 'react-bootstrap';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { LeftArrow, RightArrow } from './Arrows';
import BookCard from './BookCard';

interface HorizontalScrollCardInterface {
  header: string;
  data: Array<BookType>;
}

const HorizontalScrollCard: React.FC<HorizontalScrollCardInterface> = ({
  header,
  data,
}) => {
  return (
    <Card>
      <Card.Header className="bg-white">
        <h5>{header}</h5>
      </Card.Header>
      <Card.Body className="hiddenScroll">
        <ScrollMenu
          LeftArrow={<LeftArrow />}
          RightArrow={<RightArrow />}
          scrollContainerClassName="hiddenScroll"
        >
          {data.map((book, index) => (
            <BookCard key={index} book={book} />
          ))}
        </ScrollMenu>
      </Card.Body>
    </Card>
  );
};

export default HorizontalScrollCard;
