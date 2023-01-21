import AuthUtils from '@utils/AuthUtils.class';
import React, { useState } from 'react';
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from 'react-bootstrap';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { signIn } from 'src/store/UserSlice';
import styles from './AuthPage.module.css';
import useGuest from 'src/hooks/useGuest';

type joinFormValues = {
  joinEmail: string;
  name: string;
  joinPassword: string;
};

type signFormValues = {
  signEmail: string;
  signPassword: string;
};

const AuthPage: React.FC = () => {
  useGuest();
  const [signHidden, setSignHidden] = useState<boolean>(true);
  const [joinHidden, setJoinHidden] = useState<boolean>(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register: joinRegister,
    handleSubmit: joinHandler,
    formState: { errors: joinErrors },
  } = useForm<joinFormValues>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signFormValues>();

  const signSubmitHandler: SubmitHandler<signFormValues> = async (
    formData: signFormValues
  ) => {
    if (await AuthUtils.signUser(formData.signEmail, formData.signPassword)) {
      dispatch(signIn(formData.signEmail));
      toast.success('Signed in successfully ☺');
      navigate('/');
    } else {
      toast.error('Wrong email or password 🙄');
    }
  };
  const joinSubmitHandler: SubmitHandler<joinFormValues> = (
    formData: joinFormValues
  ) => {
    AuthUtils.createUser(
      formData.joinEmail,
      formData.joinPassword,
      formData.name
    )
      .then((res) => {
        dispatch(signIn(formData.joinEmail));
        toast.success('account created successfully ☺');
        navigate('/');
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <Container fluid className="my-2">
      <Card className="py-4">
        <Container>
          <Row>
            <Col xs={5}>
              <h5>Sign in</h5>
              <a href="#" className={styles.forgotLink}>
                Forgot password?
              </a>
              <Form onSubmit={handleSubmit(signSubmitHandler)}>
                <Form.Control
                  placeholder="Email"
                  className="mb-3"
                  {...register('signEmail', {
                    required: { value: true, message: 'Email is required' },
                    pattern: {
                      value:
                        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])+$/i,
                      message: 'Enter a valid email.',
                    },
                  })}
                />
                {errors.signEmail && (
                  <Alert variant="danger">
                    {errors.signEmail?.message?.toString()}
                  </Alert>
                )}
                <Form.Group>
                  <Form.Control
                    placeholder="Password"
                    className="mb-2"
                    type={signHidden ? 'password' : 'text'}
                    {...register('signPassword', {
                      required: {
                        value: true,
                        message: 'Password is required.',
                      },
                    })}
                  />
                  {errors.signPassword && (
                    <Alert variant="danger">
                      {errors.signPassword?.message?.toString()}
                    </Alert>
                  )}
                  <Form.Group className="mb-4">
                    <Form.Check
                      checked={!signHidden}
                      label="Show password"
                      onChange={() => {
                        setSignHidden((old) => !old);
                      }}
                    />
                  </Form.Group>
                </Form.Group>
                <Button type="submit" variant="primary" className="w-100">
                  Sign in
                </Button>
              </Form>
            </Col>
            <Col xs={{ offset: 2, span: 5 }}>
              <h5>Join</h5>
              <Form onSubmit={joinHandler(joinSubmitHandler)}>
                <Form.Control
                  placeholder="Email"
                  type="email"
                  className="mb-3"
                  {...joinRegister('joinEmail', {
                    required: { value: true, message: 'Email is required' },
                    pattern: {
                      value:
                        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])+$/i,
                      message: 'Enter a valid email.',
                    },
                  })}
                />
                {joinErrors.joinEmail && (
                  <Alert variant="danger">
                    {joinErrors.joinEmail?.message?.toString()}
                  </Alert>
                )}
                <Form.Control
                  placeholder="Name"
                  type="text"
                  className="mb-3"
                  {...joinRegister('name', {
                    required: {
                      value: true,
                      message: 'Name is required.',
                    },
                  })}
                />
                {joinErrors.name && (
                  <Alert variant="danger">
                    {joinErrors.name?.message?.toString()}
                  </Alert>
                )}
                <Form.Group>
                  <Form.Control
                    placeholder="password"
                    type={joinHidden ? 'password' : 'text'}
                    className="mb-2"
                    {...joinRegister('joinPassword', {
                      required: {
                        value: true,
                        message: 'Password is required.',
                      },
                      minLength: {
                        value: 8,
                        message: 'Min length is 8.',
                      },
                    })}
                  />
                  {joinErrors.joinPassword && (
                    <Alert variant="danger">
                      {joinErrors.joinPassword?.message?.toString()}
                    </Alert>
                  )}
                  <Form.Group className="mb-4">
                    <Form.Check
                      label="Show password"
                      onChange={() => setJoinHidden((old) => !old)}
                      checked={!joinHidden}
                    />
                  </Form.Group>
                </Form.Group>
                <Button variant="primary" className="w-100" type="submit">
                  Create your account
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Card>
    </Container>
  );
};

export default AuthPage;
