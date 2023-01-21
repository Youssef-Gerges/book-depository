import logo from '@assets/images/logo.svg';
import { changeCurrency, selectCart } from '@store/CartSlice';
import { selectUser } from '@store/UserSlice';
import React, { useRef } from 'react';
import { Button, Col } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import { BiCompass, BiHeart, BiRocket, BiSearch } from 'react-icons/bi';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { MdMenu, MdOutlineKeyboardArrowDown } from 'react-icons/md';
import {
  RiAccountCircleFill,
  RiHome2Fill,
  RiMailLine,
  RiShoppingBasket2Fill,
} from 'react-icons/ri';
import {
  Menu,
  MenuItem,
  Sidebar,
  SubMenu,
  useProSidebar,
} from 'react-pro-sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useTotalCartCount from 'src/hooks/useTotalCartCount';
import useTotalCartPrice from 'src/hooks/useTotalCartPrice';
import styles from './Nav.module.css';
import useGetCategories from 'src/hooks/useGetCategories';

const Nav: React.FC = () => {
  const { collapseSidebar } = useProSidebar();
  const searchInput = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const cart = useSelector(selectCart);
  const totalCartPrice = useTotalCartPrice();
  const totalCartCount = useTotalCartCount();
  const categories = useGetCategories();

  const setEGP = (): void => {
    dispatch(changeCurrency('EGP'));
    toast.success('Currency changed to EGP.');
    navigate(0);
  };

  const setUSD = (): void => {
    dispatch(changeCurrency('USD'));
    toast.success('Currency changed to USD.');
    navigate(0);
  };

  const handleSearch = () => {
    navigate('/shop?keyword=' + searchInput.current?.value);
  };

  return (
    <nav>
      <Container fluid>
        <Row className={`${styles.top_bar} d-none d-xl-flex`}>
          <Col className="left">
            <Link to="/" className={`${styles.link_group} pe-3 me-2`}>
              <RiHome2Fill className={styles.icon} />
            </Link>
            <Link className={styles.link_group} to="/help">
              <HiOutlineExclamationCircle className={styles.icon} />
              <span className="p-2">Help</span>
            </Link>
          </Col>
          <Col className={styles.delivery_link}>
            <Link to="free-delivery" className={`${styles.link_group} px-3`}>
              <BiRocket className={styles.icon} />
              <span className="p-2">FREE DELIVERY WORLDWIDE</span>
            </Link>
          </Col>
          <Col className="right d-inline-flex justify-content-end">
            <Link to="/" className={`${styles.link_group} me-2`}>
              <BiCompass className={styles.icon} />
              <span className="p-2">Order Status</span>
            </Link>
            <Link to="/wishlist" className={`${styles.link_group} me-2`}>
              <BiHeart className={styles.icon} />
              <span className="p-2">Wishlist</span>
            </Link>
            {user.email ? (
              <Link to="/account" className={`${styles.link_group} me-2`}>
                <RiAccountCircleFill className={styles.icon} />
                <span className="p-2">Account</span>
              </Link>
            ) : (
              <Link to="/auth" className={`${styles.link_group} me-2`}>
                {user.email}
                <RiAccountCircleFill className={styles.icon} />
                <span className="p-2">Sign in/join</span>
              </Link>
            )}
          </Col>
        </Row>
        <Row
          className={`${styles.middle_bar} py-2 align-items-center flex-md-column gap-2 flex-xl-row`}
        >
          <Col xl={2} className="flex-row d-flex justify-content-between">
            <div className="d-flex flex-column align-items-center justify-content-center d-xl-none">
              <MdMenu
                className={`${styles.toggleIcon}`}
                onClick={() => collapseSidebar()}
              />
            </div>
            <img src={logo} alt="book depository" className={styles.logo} />
            <div className="d-flex flex-column align-items-center justify-content-center d-xl-none">
              <div
                className={` ${styles.cart} d-flex align-center justify-content-center px-3  `}
              >
                <div className={`${styles.total_price} pe-3 me-3`}>
                  <span>
                    {totalCartPrice?.amount} {cart.currency}
                  </span>
                </div>
                <div
                  className="d-flex align-center"
                  onClick={() => navigate('/cart')}
                >
                  <span className="me-2">{totalCartCount}</span>
                  <span className={styles.cart_icon}>
                    <RiShoppingBasket2Fill className="icon" />
                  </span>
                </div>
              </div>
            </div>
          </Col>

          <Col className="search d-flex align-center justify-content-center w-full">
            <InputGroup>
              <InputGroup.Text
                id="basic-addon1"
                className={`${styles.search_icon} d-none d-xl-inline`}
              >
                <BiSearch />
              </InputGroup.Text>
              <Form.Control
                aria-describedby="basic-addon1"
                className={styles.search_input}
                placeholder="Search for book by keyword / title / author / ISBN"
                ref={searchInput}
              />
              <Button
                variant="primary"
                className={`${styles.search_btn} py-2 px-xl-5 px-3 mx-xl-2`}
                onClick={handleSearch}
              >
                <span className="d-none d-xl-inline">Search</span>
                <BiSearch className="d-inline d-xl-none" />
              </Button>
              <button
                className={`${styles.search_btn_advanced} px-5 rounded ms-xl-0 ms-2 d-none d-md-inline`}
                onClick={() => navigate('/shop')}
              >
                Advanced Search
              </button>
            </InputGroup>
          </Col>
        </Row>
        <Row className={`${styles.bottom_bar} d-xl-flex d-none`}>
          <Col className="menu d-flex align-center">
            <Dropdown className="menu-hover">
              <Dropdown.Toggle className={styles.menu_link}>
                <span>Shop by category</span>
                <span className="icon">
                  <MdOutlineKeyboardArrowDown />
                </span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Row className={styles.dropMenu}>
                  <Col className={styles.dropCol}>
                    <h4 className={styles.colHeader}>Top Categories</h4>
                    <div className=" d-flex flex-column">
                      {categories?.map((category, index) => (
                        <Link
                          to={`/categories/${category.id}`}
                          className={styles.item}
                          key={index}
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  </Col>
                </Row>
              </Dropdown.Menu>
            </Dropdown>
            <Link className="me-3" to="/new-releases">
              New Releases
            </Link>
          </Col>
          <Col
            md={{ span: 2 }}
            className="d-flex align-center justify-content-end"
          >
            <Dropdown className="menu-hover">
              <Dropdown.Toggle className={styles.menu_link}>
                <span>{cart.currency}</span>
                <span className="ps-2">
                  <MdOutlineKeyboardArrowDown />
                </span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <ul className={styles.price_drop}>
                  {cart.currency === 'USD' ? (
                    <li onClick={setEGP}>EGP</li>
                  ) : (
                    <li onClick={setUSD}>USD</li>
                  )}
                </ul>
              </Dropdown.Menu>
            </Dropdown>

            <div
              className={` ${styles.cart} d-flex align-center justify-content-center px-3`}
            >
              <div className={`${styles.total_price} pe-3 me-3`}>
                <span>
                  {totalCartPrice?.amount} {cart.currency}
                </span>
              </div>
              <div
                className={`d-flex align-center ${styles.cart_count}`}
                onClick={() => navigate('/cart')}
              >
                <span className="me-2">{totalCartCount}</span>
                <span className={styles.cart_icon}>
                  <RiShoppingBasket2Fill className="icon" />
                </span>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center text-center d-xl-none">
          <Col className={styles.delivery_link}>
            <Link to="free-delivery" className={`${styles.link_group} px-3`}>
              <BiRocket className={styles.icon} />
              <span className="p-2">FREE DELIVERY WORLDWIDE</span>
            </Link>
          </Col>
        </Row>
      </Container>

      <Sidebar
        defaultCollapsed
        collapsedWidth="0px"
        className="border-0 position-fixed bg-white"
        style={{ zIndex: '10000' }}
      >
        <Menu>
          <SubMenu label="Account & Help">
            <MenuItem>
              <RiHome2Fill className={styles.icon} /> Home
            </MenuItem>
            <MenuItem href="/help">
              <HiOutlineExclamationCircle className={styles.icon} />
              <span className="p-2">Help</span>
            </MenuItem>
            <SubMenu label={cart.currency}>
              {cart.currency === 'USD' ? (
                <MenuItem onClick={setEGP}>EGP</MenuItem>
              ) : (
                <MenuItem onClick={setUSD}>USD</MenuItem>
              )}
            </SubMenu>
          </SubMenu>
          <SubMenu label="Shop">
            <SubMenu label="Categories">
              {categories?.map((category, index) => {
                return (
                  <MenuItem href={`/categories/${category.id}`} key={index}>
                    {category.name}
                  </MenuItem>
                );
              })}
            </SubMenu>
            <MenuItem href="/new-releases">New Releases</MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </nav>
  );
};

export default Nav;
