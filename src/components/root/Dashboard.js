import React from "react";
import { Row, Col } from "reactstrap";
import ProductList from "../products/ProductList";
import CategoryList from "../categories/CategoryList";

const Dashboard = () => {
  return (
    <div>
      <Row>
        <Col md="3">
          <CategoryList />
        </Col>
        <Col md="9">
         <ProductList/>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;