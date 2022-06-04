import {Modal, ModalHeader, ModalBody, ModalFooter,} from "reactstrap"
import React, { useState } from 'react';

const initialProduct= {
    productId :"",
    productName :"", 
    productPrice: "",
    productWeigth : "",
    category: "",
    stock : "", 
    creationDate :""
  }

const UpdateForm = ({el, updateModal , setUpdateModal}) => {
    const [product, setProduct] = useState(initialProduct);

   const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  let url= "http://localhost:8080/products/";

   const handleSubmit=()=>{
    const requestInit={
        method: "PUT",
        headers:{'Content-Type' : 'application/json'},
        body: JSON.stringify(product)
    } 
        fetch(url + el.productId ,requestInit)
        .then((res)=> res.json())
        .then((res)=> console.log(res))
      
     
    setUpdateModal(false)
    setProduct(initialProduct)  
   }
   const handleCancel=()=>{
    setUpdateModal(false)
   }

  return (
    <div className="container">
      <div className="row">
        <Modal isOpen={updateModal}>
          <ModalHeader>Inserte los datos</ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="productName"
                placeholder={el.productName}
                onChange={handleChange}
              />
              <br></br>
              <input
                type="number"
                name="productPrice"
                placeholder={el.productPrice}
                onChange={handleChange}
              />
              <br></br>
              <input
                type="number"
                name="productWeigth"
                placeholder={el.productWeigth}
                onChange={handleChange}
              />
              <br></br>
              <input
                type="text"
                name="category"
                placeholder={el.category}
                onChange={handleChange}
              />
              <br></br>
              <input
                type="number"
                name="stock"
                placeholder={el.stock}
                onChange={handleChange}
              />
              <br></br>
              <input
                type="date"
                name="creationDate"
                placeholder={el.creationDate}
                onChange={handleChange}
              />
              <ModalFooter>
                <br></br>
                <input
                  type="reset"
                  value="Cancelar"
                  className="btn btn-danger"
                  onClick={handleCancel}
                ></input>
                <input
                  type="submit"
                  value="Enviar"
                  className="btn btn-primary"
                />
              </ModalFooter>
            </form>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
};

export default UpdateForm;
