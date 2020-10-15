import React, {useState, useContext} from 'react';
import {
  Card, CardImg,CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, InputGroup,
  InputGroupAddon,
  Input, Col, Form 
} from 'reactstrap';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {ProductContext} from '../ProductContext';

const ProductList = ({currentProducts}) => {
  
  const [search, setSearch] = useState('');
  const [products, setProducts] = useContext(ProductContext);
  const [initialValueProducts] = useState(products)

    
  const updateSearch = (event) => {
    setProducts(initialValueProducts)
    setSearch(event.target.value)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    setProducts(products.filter(
      (product) => {
        return product.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      }
    ))
  }

  return(
    <Container>
      <Form onSubmit={handleSearch}>
        <InputGroup style={{marginBottom: "5rem"}}>
          <Input 
            placeholder="Search..." 
            value={search}
            onChange={updateSearch}
          />
          <InputGroupAddon addonType="append"><Button color="dark" ><FontAwesomeIcon icon={faSearch}/></Button></InputGroupAddon>
        </InputGroup>
      </Form>
      <Row>
        {currentProducts.map(product => (
          <Col key={product.id} className="col-12 col-md-3 mb-4">
            <Card className="bg-dark text-light shadow">
              <CardImg
                className="card_img" 
                top 
                src={product.image} 
                alt="Card image cap" 
              />
              <CardBody>
                <CardTitle>{product.name}</CardTitle>
                <CardSubtitle>${product.price}</CardSubtitle>
                <Link className="btn btn-primary mt-2" to={`/item/${product.id}`}>View Item</Link>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default ProductList;