import Nav from '@components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import { ProSidebarProvider } from 'react-pro-sidebar';
import Footer from '@components/Footer';
import HorizontalScrollCard from '@components/HorizontalScrollCard';
import TextCard from '@components/TextCard';
import { Col, Row, Container } from 'react-bootstrap';

function App() {
  const testData = [
    {
      title: 'Living the Chateau Dream',
      img: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/8418/9781841885377.jpg',
      author: 'Angel Strawbridge',
      price: '1789.92',
      rating: 3,
      btn: {
        text: 'Add to basket',
        click: () =>
          alert(
            'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/8418/9781841885377.jpg'
          ),
      },
    },
    {
      title: 'Living the Chateau Dream',
      img: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/8418/9781841885377.jpg',
      author: 'Angel Strawbridge',
      price: '1789.92',
      rating: 3,
      btn: {
        text: 'Add to basket',
        click: () =>
          alert(
            'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/8418/9781841885377.jpg'
          ),
      },
    },
    {
      title: 'Living the Chateau Dream',
      img: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/8418/9781841885377.jpg',
      author: 'Angel Strawbridge',
      price: '1789.92',
      rating: 3,
      btn: {
        text: 'Add to basket',
        click: () =>
          alert(
            'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/8418/9781841885377.jpg'
          ),
      },
    },
    {
      title: 'Living the Chateau Dream',
      img: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/8418/9781841885377.jpg',
      author: 'Angel Strawbridge',
      price: '1789.92',
      rating: 3,
      btn: {
        text: 'Add to basket',
        click: () =>
          alert(
            'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/8418/9781841885377.jpg'
          ),
      },
    },
    {
      title: 'Living the Chateau Dream',
      img: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/8418/9781841885377.jpg',
      author: 'Angel Strawbridge',
      price: '1789.92',
      rating: 3,
      btn: {
        text: 'Add to basket',
        click: () =>
          alert(
            'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/8418/9781841885377.jpg'
          ),
      },
    },
    {
      title: 'Living the Chateau Dream',
      img: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/8418/9781841885377.jpg',
      author: 'Angel Strawbridge',
      price: '1789.92',
      rating: 3,
      btn: {
        text: 'Add to basket',
        click: () =>
          alert(
            'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/8418/9781841885377.jpg'
          ),
      },
    },
    {
      title: 'Living the Chateau Dream',
      img: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/8418/9781841885377.jpg',
      author: 'Angel Strawbridge',
      price: '1789.92',
      rating: 3,
      btn: {
        text: 'Add to basket',
        click: () =>
          alert(
            'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/8418/9781841885377.jpg'
          ),
      },
    },
    {
      title: 'Living the Chateau Dream',
      img: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/8418/9781841885377.jpg',
      author: 'Angel Strawbridge',
      price: '1789.92',
      rating: 3.5,
      btn: {
        text: 'Add to basket',
        click: () =>
          alert(
            'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/8418/9781841885377.jpg'
          ),
      },
    },
    {
      title: 'Living the Chateau Dream',
      img: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/8418/9781841885377.jpg',
      author: 'Angel Strawbridge',
      price: '1789.92',
      rating: 3,
      btn: {
        text: 'Add to basket',
        click: () =>
          alert(
            'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/8418/9781841885377.jpg'
          ),
      },
    },
  ];
  return (
    <div className="App">
      <ProSidebarProvider>
        <Nav />
      </ProSidebarProvider>
      <Container fluid>
        <Row>
          <Col>
            <TextCard
              link={{ text: 'Great Books for children', location: '#' }}
              icon="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/content/Childrens_Books.png"
            />
          </Col>
          <Col>
            <TextCard
              link={{ text: 'Our Bookmarks', location: '#' }}
              icon="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/content/Childrens_Books.png"
            />
          </Col>

          <Col>
            <TextCard
              link={{ text: 'Our Bookmarks', location: '#' }}
              icon="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/content/Childrens_Books.png"
            />
          </Col>
          <Col>
            <TextCard
              link={{ text: 'Our Bookmarks', location: '#' }}
              icon="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/content/Childrens_Books.png"
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <TextCard
              link={{ text: 'Great Books for children', location: '#' }}
            />
          </Col>
          <Col>
            <TextCard
              link={{ text: 'Great Books for children', location: '#' }}
            />
          </Col>
          <Col>
            <TextCard
              link={{ text: 'Great Books for children', location: '#' }}
            />
          </Col>
        </Row>
      </Container>
      <HorizontalScrollCard
        header="New and recent home and garden books"
        data={testData}
      />
      <Footer />
    </div>
  );
}

export default App;
