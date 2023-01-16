import HorizontalScrollCard from '@components/HorizontalScrollCard';
import Sidebar from '@components/Sidebar';
import TextCard from '@components/TextCard';
import { addItemToCart } from '@store/CartSlice';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import useAllReadingLists from 'src/hooks/useAllReadingLists';
import useBooksByLanguage from 'src/hooks/useBooksByLanguage';
import useRecentlyBooks from 'src/hooks/useRecentlyBooks';

const HomePage: React.FC = () => {
  const readingLists = useAllReadingLists();
  const dispatch = useDispatch();
  const { books: spanishBooks, loading: langLoading } =
    useBooksByLanguage('Tajik');
  const { books: recentlyBooks, loading: recentLoading } = useRecentlyBooks(10);

  const languageSideBar = [
    { text: 'Books in Spanish', link: '/books?lang=Spanish' },
    { text: 'Books in German', link: '/books?lang=German' },
    { text: 'Books in English', link: '/books?lang=English' },
    { text: 'Books in Arabic', link: '/books?lang=Arabic' },
  ];

  const addToCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    dispatch(
      addItemToCart({
        id: Number.parseInt(e.currentTarget.dataset.product ?? ''),
        price: Number.parseInt(e.currentTarget.dataset.price ?? ''),
      })
    );
    toast.success('Book added to cart.');
  };

  return (
    <Container fluid={true} className="mt-4">
      {recentLoading || langLoading ? (
        <h3 className="d-flex align-items-center justify-content-center">
          loading...
        </h3>
      ) : (
        <Row className="d-flex flex-md-row flex-column-reverse">
          <Col md={3} xs={12}>
            <Sidebar
              header={{ text: 'Best Ever Book Lists' }}
              body={readingLists}
              cName="mt-md-0 mt-2"
            />
            <Sidebar
              header={{ text: 'Books By Language' }}
              body={languageSideBar}
              cName="mb-4 mt-2"
            />
          </Col>
          <Col md={9} xs={12}>
            <Row className="mb-4">
              <Col>
                <HorizontalScrollCard
                  header="Recently Added"
                  data={recentlyBooks}
                  btn={{
                    text: 'Add to cart',
                    click: addToCart,
                  }}
                />
              </Col>
            </Row>

            <Row>
              <Col>
                <TextCard
                  link={{
                    text: 'Crime Books',
                    location: '/reading-lists/crime-books',
                  }}
                />
              </Col>
              <Col>
                <TextCard
                  link={{
                    text: 'Children Books',
                    location: '/reading-lists/children-books',
                  }}
                />
              </Col>
              <Col>
                <TextCard
                  link={{
                    text: 'Graphic Books',
                    location: '/reading-lists/graphic-books',
                  }}
                />
              </Col>
            </Row>

            <Row className="mb-4 mt-2">
              <Col>
                <TextCard
                  link={{
                    text: 'Fiction Books',
                    location: '/reading-lists/fiction-books',
                  }}
                />
              </Col>
            </Row>

            <Row className="mb-4">
              <Col>
                <HorizontalScrollCard
                  header="Books in Tajik"
                  data={spanishBooks}
                  btn={{
                    text: 'Add to cart',
                    click: addToCart,
                  }}
                />
              </Col>
            </Row>
            <Row className="mb-4">
              <Col>
                <TextCard
                  link={{
                    text: 'Computer Books',
                    location: '/categories/computer-books',
                  }}
                  icon="https://img.icons8.com/office/512/monitor.png"
                />
              </Col>
              <Col>
                <TextCard
                  link={{
                    text: 'Children Books',
                    location: '/categories/children-books',
                  }}
                  icon="https://img.icons8.com/ios/512/children.png"
                />
              </Col>
              <Col>
                <TextCard
                  link={{
                    text: 'Children Books',
                    location: '/categories/music-books',
                  }}
                  icon="https://img.icons8.com/ios/512/aipods-pro-max.png"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default HomePage;
