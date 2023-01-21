import { logoutUser, selectUser, userSlice } from '@store/UserSlice';
import AuthUtils from '@utils/AuthUtils.class';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  FormCheck,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

type changePasswordInput = {
  password: string;
  passwordConfirmation: string;
};

const AccountPage: React.FC = () => {
  const [hidden, setHidden] = useState<boolean>(true);
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<changePasswordInput>();

  useEffect(() => {
    if (!user.email || user.email === '') {
      navigate('/auth');
    }
  }, [user.email]);

  const ChangePasswordHandler = async (inputs: changePasswordInput) => {
    if (user.email) {
      await AuthUtils.changePassword(user.email, inputs.password);
      toast.success('Password changed successfully');
    }
  };

  const logout = () => {
    dispatch(logoutUser({}));
    navigate('/');
  };

  return (
    <Container className="py-3">
      <Row>
        <Col>
          <Button onClick={logout} variant="link">
            Log out
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Header className="bg-white pb-0">
              <h3>Change password</h3>
            </Card.Header>
            <Card.Body>
              <form onSubmit={handleSubmit(ChangePasswordHandler)}>
                <FormGroup className="my-3">
                  <FormLabel>Password</FormLabel>
                  <FormControl
                    type={hidden ? 'password' : 'text'}
                    {...register('password', {
                      required: {
                        value: true,
                        message: 'Password is required',
                      },
                      minLength: { value: 8, message: 'Min length is 8' },
                    })}
                  />
                </FormGroup>
                {errors.password && (
                  <Alert variant="danger">
                    {errors.password?.message?.toString()}
                  </Alert>
                )}
                <FormGroup className="my-3">
                  <FormLabel>Confirm password</FormLabel>
                  <FormControl
                    type={hidden ? 'password' : 'text'}
                    {...register('passwordConfirmation', {
                      required: {
                        value: true,
                        message: 'Please confirm password',
                      },
                      validate: (value) => value === getValues('password'),
                    })}
                  />
                </FormGroup>
                {errors.passwordConfirmation &&
                  errors.passwordConfirmation?.type !== 'validate' && (
                    <Alert variant="danger">
                      {errors.passwordConfirmation?.message?.toString()}
                    </Alert>
                  )}
                {errors.passwordConfirmation &&
                  errors.passwordConfirmation?.type === 'validate' && (
                    <Alert variant="danger">Password does not match</Alert>
                  )}
                <FormGroup className="my-3">
                  <FormCheck>
                    <FormCheck.Input
                      defaultChecked={false}
                      onChange={() => setHidden((old) => !old)}
                    />
                    <FormCheck.Label>Show password</FormCheck.Label>
                  </FormCheck>
                </FormGroup>
                <Button className="mt-3" variant="primary" type="submit">
                  Change
                </Button>
              </form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AccountPage;
