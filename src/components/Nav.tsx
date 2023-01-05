import React, { useState } from 'react';
import { BiCompass, BiHeart, BiRocket, BiSearch } from 'react-icons/bi';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import {
  RiAccountCircleFill,
  RiHome2Fill,
  RiMailLine,
  RiShoppingBasket2Fill,
} from 'react-icons/ri';
import { MdOutlineKeyboardArrowDown, MdMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';
import { Button, Col } from 'react-bootstrap';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import logo from '@assets/images/logo.svg';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from 'react-pro-sidebar';

const Nav = () => {
  const { collapseSidebar } = useProSidebar();

  const showHandler = (): void => {};
  return (
    <nav>
      <Container fluid>
        <Row className={`${styles.top_bar} d-none d-xl-flex`}>
          <Col className="left">
            <Link to="/" className={`${styles.link_group} pe-3 me-2`}>
              <RiHome2Fill className={styles.icon} />
            </Link>
            <Link className={`${styles.link_group} me-2`} to="/">
              <RiMailLine className={styles.icon} />
              <span className="p-2">Contact us</span>
            </Link>
            <Link className={styles.link_group} to="/">
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
            <Link to="/" className={`${styles.link_group} me-2`}>
              <BiHeart className={styles.icon} />
              <span className="p-2">Wishlist</span>
            </Link>
            <Link to="/" className={`${styles.link_group} me-2`}>
              <RiAccountCircleFill className={styles.icon} />
              <span className="p-2">Sign in/join</span>
            </Link>
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
                  <span>$0</span>
                </div>
                <div className="d-flex align-center">
                  <span className="me-2">0</span>
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
              />
              <Button
                variant="primary"
                className={`${styles.search_btn} py-2 px-xl-5 px-3 mx-xl-2`}
              >
                <span className="d-none d-xl-inline">Search</span>
                <BiSearch className="d-inline d-xl-none" />
              </Button>
              <button
                className={`${styles.search_btn_advanced} px-5 rounded ms-xl-0 ms-2 d-none d-md-inline`}
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
                      <Link to="/" className={styles.item}>
                        Category 1
                      </Link>
                      <Link to="/" className={styles.item}>
                        Category 2
                      </Link>
                      <Link to="/" className={styles.item}>
                        Category 3
                      </Link>
                      <Link to="/" className={styles.item}>
                        Category 4
                      </Link>
                      <Link to="/" className={styles.item}>
                        Category 5
                      </Link>
                      <Link to="/" className={styles.item}>
                        Category 6
                      </Link>
                      <Link to="/" className={styles.item}>
                        Category 7
                      </Link>
                      <Link to="/" className={styles.item}>
                        Category 8
                      </Link>
                    </div>
                  </Col>
                  <Col className={styles.dropCol}>
                    <h4 className={styles.colHeader}>Top Categories</h4>
                    <Row>
                      <Col className="d-flex flex-column">
                        <Link to="/" className={styles.item}>
                          Category 1
                        </Link>
                        <Link to="/" className={styles.item}>
                          Category 2
                        </Link>
                        <Link to="/" className={styles.item}>
                          Category 3
                        </Link>
                        <Link to="/" className={styles.item}>
                          Category 4
                        </Link>
                        <Link to="/" className={styles.item}>
                          Category 5
                        </Link>
                        <Link to="/" className={styles.item}>
                          Category 6
                        </Link>
                        <Link to="/" className={styles.item}>
                          Category 7
                        </Link>
                        <Link to="/" className={styles.item}>
                          Category 8
                        </Link>
                      </Col>
                      <Col className="d-flex flex-column">
                        <Link to="/" className={styles.item}>
                          Category 4
                        </Link>
                        <Link to="/" className={styles.item}>
                          Category 5
                        </Link>
                        <Link to="/" className={styles.item}>
                          Category 6
                        </Link>
                        <Link to="/" className={styles.item}>
                          Category 7
                        </Link>
                        <Link to="/" className={styles.item}>
                          Category 8
                        </Link>
                        <Link to="/" className={styles.item}>
                          Category 4
                        </Link>
                        <Link to="/" className={styles.item}>
                          Category 5
                        </Link>
                        <Link to="/" className={styles.item}>
                          Category 6
                        </Link>
                        <Link to="/" className={styles.item}>
                          Category 7
                        </Link>
                        <Link to="/" className={styles.item}>
                          Category 8
                        </Link>
                        <Link to="/" className={styles.item}>
                          Category 4
                        </Link>
                        <Link to="/" className={styles.item}>
                          Category 5
                        </Link>
                        <Link to="/" className={styles.item}>
                          Category 6
                        </Link>
                        <Link to="/" className={styles.item}>
                          Category 7
                        </Link>
                        <Link to="/" className={styles.item}>
                          Category 8
                        </Link>
                      </Col>
                    </Row>
                  </Col>
                  <Col className={styles.dropCol}>
                    <h4 className={styles.colHeader}>Top Categories</h4>
                    <div className=" d-flex flex-column">
                      <Link to="/" className={styles.item}>
                        Category 1
                      </Link>
                      <Link to="/" className={styles.item}>
                        Category 2
                      </Link>
                      <Link to="/" className={styles.item}>
                        Category 3
                      </Link>
                      <Link to="/" className={styles.item}>
                        Category 4
                      </Link>
                      <Link to="/" className={styles.item}>
                        Category 5
                      </Link>
                      <Link to="/" className={styles.item}>
                        Category 6
                      </Link>
                      <Link to="/" className={styles.item}>
                        Category 7
                      </Link>
                      <Link to="/" className={styles.item}>
                        Category 8
                      </Link>
                    </div>
                  </Col>
                  <Col className={styles.dropCol}>
                    <h4 className={styles.colHeader}>Top Categories</h4>
                    <div className=" d-flex flex-column">
                      <Link to="/" className={styles.item}>
                        Category 1
                      </Link>
                      <Link to="/" className={styles.item}>
                        Category 2
                      </Link>
                      <Link to="/" className={styles.item}>
                        Category 3
                      </Link>
                      <Link to="/" className={styles.item}>
                        Category 4
                      </Link>
                      <Link to="/" className={styles.item}>
                        Category 5
                      </Link>
                      <Link to="/" className={styles.item}>
                        Category 6
                      </Link>
                      <Link to="/" className={styles.item}>
                        Category 7
                      </Link>
                      <Link to="/" className={styles.item}>
                        Category 8
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Dropdown.Menu>
            </Dropdown>
            <Link className="me-3" to="/">
              Bestsellers
            </Link>
            <Link className="me-3" to="/">
              Coming Soon
            </Link>
            <Link className="me-3" to="/">
              New Releases
            </Link>
          </Col>
          <Col
            md={{ span: 2 }}
            className="d-flex align-center justify-content-end"
          >
            <Dropdown className="menu-hover">
              <Dropdown.Toggle className={styles.menu_link}>
                <span>$ USD</span>
                <span className="ps-2">
                  <MdOutlineKeyboardArrowDown />
                </span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <ul>
                  <li>EG</li>
                  <li>SU</li>
                  <li>MM</li>
                  <li>EE</li>
                  <li>LL</li>
                </ul>
              </Dropdown.Menu>
            </Dropdown>

            <div
              className={` ${styles.cart} d-flex align-center justify-content-center px-3`}
            >
              <div className={`${styles.total_price} pe-3 me-3`}>
                <span>$0</span>
              </div>
              <div className="d-flex align-center">
                <span className="me-2">0</span>
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

      <Sidebar defaultCollapsed collapsedWidth="0px" className="border-0">
        <Menu>
          <SubMenu label="Account & Help">
            <MenuItem>
              <RiHome2Fill className={styles.icon} /> Home
            </MenuItem>
            <MenuItem>
              <RiMailLine className={styles.icon} />
              <span className="p-2">Contact us</span>
            </MenuItem>
            <MenuItem>
              <HiOutlineExclamationCircle className={styles.icon} />
              <span className="p-2">Help</span>
            </MenuItem>
            <SubMenu label="$ USD">
              <MenuItem>EG</MenuItem>
              <MenuItem>SU</MenuItem>
              <MenuItem>MM</MenuItem>
              <MenuItem>EE</MenuItem>
              <MenuItem>LL</MenuItem>
            </SubMenu>
          </SubMenu>
          <SubMenu label="Shop">
            <SubMenu label="Categories"></SubMenu>
            <MenuItem>Bestsellers</MenuItem>
            <MenuItem>Coming Soon</MenuItem>
            <MenuItem>New Releases</MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </nav>
  );
};

export default Nav;
