import {Modal,ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import React, { useState, useEffect } from 'react';

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

const SalesTable = ({setSalesTable,salesTable}) => {

    const [products, setProducts] = useState(baseProduct);

    let url= "http://localhost:8080/products/sales"

    useEffect(() => {
        fetch(url)
        .then((res)=> res.json())
        .then((el)=> setProducts(el))
    
      }, []);

    const handleClose = ()=>{
        setSalesTable(false)
    }

    return (  
        <>
        <Modal isOpen={salesTable}>
            <ModalHeader>
                <h2>Productos vendidos</h2>
            </ModalHeader>
            <ModalBody>
            <table className='table'>
                <thead className='thead-dark'>
                    <tr>
                        <td>Id</td>
                        <td>Nombre</td>
                        <td>Cantidad Vendida</td>
                    </tr>
                </thead>
                <tbody>
                {products.length > 0 ? (
              products.map((el) => (
                <tr key={el.productId}>
                  <td>{el.productId}</td>
                  <td>{el.productName}</td>
                  <td>{el.numOfSold}</td>            
                </tr>
              ))
            ) : (
              <tr className="text-center">
                <td colSpan="8" >No existen registros</td>
              </tr>
            )}
                </tbody>
            </table>
            <ModalFooter>
            <input
            type={'button'}
            value="Cerrar"
            className='btn btn-danger'
            onClick={handleClose}
            ></input>
            </ModalFooter>
            
            </ModalBody>
            
        </Modal>
        </>
     );
}
 
export default SalesTable;