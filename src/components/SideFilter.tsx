import { selectCart } from '@store/CartSlice';
import React from 'react';
import { Button, Card, Form, FormGroup } from 'react-bootstrap';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

type filterFormType = {
  keyword: string;
  price: string;
  format: string;
  language: string;
};

const SideFilter: React.FC = () => {
  const { register, handleSubmit } = useForm<filterFormType>();
  const cart = useSelector(selectCart);
  const currencyCode: string = cart.currency === 'USD' ? '$' : 'E£';
  const [params, setParams] = useSearchParams();
  const handelFilterSubmit: SubmitHandler<filterFormType> = (inputs) => {
    let newParams = new URLSearchParams();
    if (inputs.keyword) newParams.append('keyword', inputs.keyword);
    if (inputs.language !== 'all')
      newParams.append('language', inputs.language);
    if (inputs.price !== 'all') newParams.append('price', inputs.price);
    if (inputs.format !== 'all') newParams.append('format', inputs.format);
    setParams(newParams);
  };
  return (
    <Card>
      <Card.Header className="bg-white">
        <h5>Filter your search</h5>
      </Card.Header>
      <Card.Body>
        <form onSubmit={handleSubmit(handelFilterSubmit)}>
          <FormGroup>
            <Form.Label className="fw-bold">Keyword</Form.Label>
            <Form.Control {...register('keyword')} />
          </FormGroup>
          <FormGroup className="mt-3">
            <Form.Label className="fw-bold">Language</Form.Label>
            <Form.Select {...register('language')}>
              <option value="all">All</option>
              <option value="arabic">Arabic</option>
              <option value="english">English</option>
              <option value="german">German</option>
              <option value="french">French</option>
              <option value="spanish">Spanish</option>
              <option value="italian">Italian</option>
            </Form.Select>
          </FormGroup>
          <FormGroup className="mt-3">
            <Form.Label className="fw-bold">Price range</Form.Label>
            <Form.Select {...register('price')}>
              <option value="all">All</option>
              <option value="_lt=250">Under {currencyCode}250</option>
              <option value="_gte=250&price_lte=500">
                {currencyCode}250 to {currencyCode}500
              </option>
              <option value="_gt=500">{currencyCode}500+</option>
            </Form.Select>
          </FormGroup>
          <FormGroup className="mt-3">
            <Form.Label className="fw-bold">Format</Form.Label>
            <Form.Select {...register('format')}>
              <option value="all">All</option>
              <option value="paperback">Paperback</option>
              <option value="hardback">Hardback</option>
            </Form.Select>
          </FormGroup>
          <Button variant="primary" className="mt-4 w-100 py-2" type="submit">
            Refine results
          </Button>
        </form>
      </Card.Body>
    </Card>
  );
};

export default SideFilter;
