import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap'
const Form3 = () => {
    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        phone:""
    });

  return (
    <Container className="mt-5">
      <Form>
        <Form.Group className='mb-3'>
          <Form.Label>İsim</Form.Label>
          <Form.Control
            type="text"
            placeholder="Adınızı giriniz"
            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Soyisim</Form.Label>
          <Form.Control
            type="text"
            placeholder="Soyadınızı giriniz"
            onChange={(e) => setFormData({...formData, lastName:e.target.value})}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Epostanızı giriniz"
            onChange={(e) => setFormData({...formData, email:e.target.value})}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Telefon</Form.Label>
          <Form.Control
            type="text"
            placeholder="Telefonunuzu giriniz"
            onChange={(e) => setFormData({...formData, phone:e.target.value})}
          />
        </Form.Group>
      </Form>
    </Container>
  )
}
export default Form3