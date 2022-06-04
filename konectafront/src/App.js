import React, { useState, useEffect } from "react";

import "./App.css";
import FormProduct from "./components/FormProduct";
import Table from "./components/Table";
import Navbar from "./components/Navbar";
import SalesModal from "./components/salesModal";
import SalesTable from "./salesTable";


const initialProduct = {
  productId: "",
  productName: "",
  productPrice: "",
  productWeigth: "",
  category: "",
  stock: "",
  creationDate: "",
};

function App() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(initialProduct);
  const [listUpdated, setListUpdated] = useState(false);
  const [modal, setModal] = useState(false);
  const [salesModal, setSalesModal] = useState(false);
  const [salesTable, setSalesTable] = useState(false);
  let url = "http://localhost:8080/products";

  useEffect(() => {
    const initialGet = () => {
      fetch(url)
        .then((res) => res.json())
        .then((res) => setProducts(res));
    };
    initialGet();
    setListUpdated(false);
  }, [listUpdated]);

  const handleModal = () => {
    setModal(true);
  };

  const handleSalesModal = () => {
    setSalesModal(true);
  };

  const handleSaleTable = () =>{
      setSalesTable(true)
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <button
              className="btn btn-primary col-md-9 m-0-auto mt-3"
              onClick={handleSalesModal}
            >
              Modulo de ventas
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Table
            product={product}
            products={products}
            setListUpdated={setListUpdated}
          ></Table>
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <button
                  className="btn btn-success col-md-9 m-0-auto mt-5"
                  onClick={handleModal}
                >
                  Agregar nuevo producto
                </button>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <button
                  className="btn btn-secondary col-md-9 m-0-auto mt-5"
                  onClick={handleSaleTable}
                >
                  Ver productos con ventas
                </button>
              </div>
            </div>
          </div>
          {setModal ? (
            <FormProduct
              product={product}
              setProduct={setProduct}
              setModal={setModal}
              modal={modal}
            />
          ) : (
            setModal(false)
          )}
          {setSalesModal ? (
            <SalesModal
              setSalesModal={setSalesModal}
              salesModal={salesModal}
            ></SalesModal>
          ) : (
            setSalesModal(false)
          )}
          {
            setSalesTable? (
              <SalesTable
              setSalesTable={setSalesTable}
              salesTable={salesTable}
              ></SalesTable>
            ) : setSalesTable(false)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
