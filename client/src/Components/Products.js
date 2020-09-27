import React, {useContext, useState} from 'react';
import {
  Card, CardImg,CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, InputGroup,
  InputGroupAddon,
  Input, Col 
} from 'reactstrap';
import {ProductContext} from '../ProductContext';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Products = ({currentProducts}) => {
  
  const [products] = useContext(ProductContext);
  const [search, setSearch] = useState('');

  const updateSearch = (event) => {
    setSearch(event.target.value)
    console.log(search)
  }

  let filteredProducts = currentProducts.filter(
    (product) => {
      return product.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    }
  )

  return(
    <Container>
      <InputGroup style={{marginBottom: "5rem"}}>
        <Input 
          placeholder="Search by typing..." 
          value={search}
          onChange={updateSearch}
        />
        <InputGroupAddon addonType="append"><Button color="dark" disabled><FontAwesomeIcon icon={faSearch}/></Button></InputGroupAddon>
      </InputGroup>
      <Row>
        {filteredProducts.map(product => (
          <Col className="col-12 col-md-3 mb-4 text-muted">
            <Card>
              <CardImg
                className="card_img" 
                top 
                src={product.image} 
                alt="Card image cap" 
              />
              <CardBody>
                <CardTitle>{product.name}</CardTitle>
                <CardSubtitle>${product.price}</CardSubtitle>
                <Link className="btn btn-primary" to={`/item/${product.id}`}>View Item</Link>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Products;