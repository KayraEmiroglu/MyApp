import React from 'react'
import { Card, Button } from 'react-bootstrap'

const Product = (props) => {

    const {image, desc, title, price} =props;

    const addToCart = () => {
        alert(`${title} added to cart`)
    }

  return (
    <Card className='h-100'>
      <Card.Img variant="top" src={require(`./images/${image}`)} />
      <Card.Body className="text-center d-flex flex-column justify-content-between"><Card.Title className='fs-2'>{title}</Card.Title>
        <Card.Subtitle>{desc}</Card.Subtitle>
        <Card.Text className='fs-3 text-info'><strong>${price}</strong></Card.Text>
        <Button variant="warning" onClick={addToCart}>Add to cart</Button>
      </Card.Body>
    </Card>
  )
}

export default Product
