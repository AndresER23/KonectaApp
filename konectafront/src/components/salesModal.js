import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import React, { useState, useEffect } from "react";

const initialProduct = { productId: "", productsToSell: "" };
const baseProduct= {
  productId :"",
  productName :"", 
  productPrice: "",
  productWeigth : "",
  category: "",
  stock : "", 
  creationDate :"",
  numOfSold : ""
}
const SalesModal = ({ setSalesModal, salesModal, setCancelSaleStatus }) => {
  const [product, setProduct] = useState(initialProduct);
  const [preexistingProduct, setPreexistingProduct] = useState(baseProduct);
  let url= "http://localhost:8080/products/";

  useEffect(() => {
    fetch(url + product.productId)
    .then((res)=> res.json())
    .then((el)=> setPreexistingProduct(el))

  }, [product.productId]);

  const handleSubmit=()=>{
    if(!preexistingProduct 
      || product.productsToSell<0
      || preexistingProduct.stock-product.productsToSell<0){
        alert("Transaccion cancelada")
        setCancelSaleStatus(true)
        setSalesModal(false)
    }else{
      setPreexistingProduct(preexistingProduct.stock=preexistingProduct.stock-product.productsToSell)
      setPreexistingProduct(preexistingProduct.numOfSold=product.productsToSell)
     const requestInit={
        method: "PUT",
        headers:{'Content-Type' : 'application/json'},
        body: JSON.stringify(preexistingProduct)
    }   
        fetch(url + product.productId,requestInit)
        .then((res)=> res.json())
        .then((res)=> console.log(res))
        setSalesModal(false)
    }
   }
  
  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleCancel = () => {
    setSalesModal(false)
  };

  return (
    <>
      <Modal isOpen={salesModal}>
        <ModalHeader>Producto para vender</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              name="productId"
              placeholder="Id del producto"
              onChange={handleChange}
            />
            <input
              type="number"
              name="productsToSell"
              placeholder="Numero de productos"
              onChange={handleChange}
            />
        <ModalFooter>
          <input
            type="reset"
            value="Cancelar"
            className="btn btn-danger"
            onClick={handleCancel}
          />
          <input type="submit" value="Vender" className="btn btn-primary" />
        </ModalFooter>
        </form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default SalesModal;
