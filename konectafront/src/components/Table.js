import FormProduct from "./FormProduct";
import UpdateForm from "./UpdateForm";
import React, { useState } from "react";

const initialProduct= {
  productId: "",
  productName :"", 
  productPrice: "",
  productWeigth : "",
  category: "",
  stock : "", 
  creationDate :""
}
const Table = ({ product, products, setListUpdated }) => {
  let url = "http://localhost:8080/products/";
  const [updateModal, setUpdateModal] = useState();
  const [especificProduct, setEspecificProduct] = useState(initialProduct);
  const handleDelete = (id) => {
    const requestInit = {
      method: "DELETE",
    };

    fetch(url + id, requestInit);

    setListUpdated(true);
  };

  const handleUpdate = () => {
    setUpdateModal(true);
  };

  return (
    <>
      <div className="container col-md-9 mt-5">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">Peso</th>
              <th scope="col">Categoria</th>
              <th scope="col">Stock</th>
              <th scope="col">Fecha Creacion</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((el) => (
                <tr key={el.productId}>
                  <td>{el.productId}</td>
                  <td>{el.productName}</td>
                  <td>{el.productPrice}</td>
                  <td>{el.productWeigth}</td>
                  <td>{el.category}</td>
                  <td>{el.stock}</td>
                  <td>{el.creationDate}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        handleDelete(el.productId);
                      }}
                    >
                      Eliminar
                    </button>
                    <button
                      className="btn btn-secondary"
                      onClick={() => {
                        handleUpdate()
                        setEspecificProduct(el)
                      }}
                    >
                      Editar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="text-center">
                <td colSpan="8" >No existen registros</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div>
      {
      setUpdateModal ? (
        <UpdateForm
          el={especificProduct}
          updateModal={updateModal}
          setUpdateModal={setUpdateModal}
        ></UpdateForm>
      ) : (
        setUpdateModal(false)
      )
    }
      </div>
    </>
  );
};

export default Table;
