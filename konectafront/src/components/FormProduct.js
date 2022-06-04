import {Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap"

const initialProduct= {
    productId: "",
    productName :"", 
    productPrice: "",
    productWeigth : "",
    category: "",
    stock : "", 
    creationDate :""
  }

const FormProduct = ({ product, setProduct, modal, setModal}) => {
  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };
  let url= "http://localhost:8080/products";

  const handleSubmit=()=>{
    const requestInit={
        method: "POST",
        headers:{'Content-Type' : 'application/json'},
        body: JSON.stringify(product)
    }

        fetch(url,requestInit)
        .then((res)=> res.json())
        .then((res)=> console.log(res))
      
     
    setModal(false)
    setProduct(initialProduct)  
  }

    const handleCancel=()=>{
        setModal(false)
    }
  return (
    <>  
    <Modal isOpen={modal}>
        <ModalHeader className="text-center d-flex align-items-center justify-content-center">
            <h4>Inserte los datos</h4>
        </ModalHeader>
        <ModalBody className="text-center">
      <form onSubmit={handleSubmit}>
        <label htmlFor="productName">Nombre del producto</label>
        <br></br>
        <input type="text" name="productName" placeholder="Nombre" onChange={handleChange} />
        <br></br>
        <label htmlFor="productPrice">Precio</label>
        <br></br>
        <input type="number" name="productPrice" placeholder="Precio" onChange={handleChange}/>
        <br></br>
        <label htmlFor="productWeigth">Peso</label>
        <br></br>
        <input type="number" name="productWeigth" placeholder="Peso" onChange={handleChange} />
        <br></br>
        <label htmlFor="category">Categoria</label>
        <br></br>
        <input type="text" name="category" placeholder="Categoria" onChange={handleChange}/>
        <br></br>
        <label htmlFor="stock">Stock</label>
        <br></br>
        <input type="number" name="stock" placeholder="Stock" onChange={handleChange}/>
        <br></br>
        <label htmlFor="creationDate">Fecha de Creacion</label>
        <br></br>
        <input type="date" name="creationDate" placeholder="Fecha de creación" onChange={handleChange}/>
        <ModalFooter>
        <br></br>
        <input type="reset" value="Cancelar" className="btn btn-danger" onClick={handleCancel}></input>
        <input type="submit" value="Enviar" className="btn btn-primary"/>
        </ModalFooter>
      </form>
      </ModalBody>
      </Modal>
    </>
  );
};

export default FormProduct;
