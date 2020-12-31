import React, { useState } from "react";
import Layout from "../../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../../actions";
import { Col, Container, Row, Button } from "react-bootstrap";
import Input from "../../components/Input";
import NewModal from "../../components/NewModal";
function Category() {
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [categoryImage, setCategoryImage] = useState("");
  const [categoryParentId, setCategoryParentId] = useState("");

  const handleClose = () => {
    const form = new FormData();

    form.append("name", categoryName);
    form.append("categoryImage", categoryImage);
    form.append("parentId", categoryParentId);

    setCategoryImage("");
    setCategoryName("");
    setCategoryParentId("");
    // const data = {
    //   categoryName,
    //   categoryImage,
    //   categoryParentId,
    // };
    // console.log(data);
    dispatch(addCategory(form));
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const hideModal = () => {
    setCategoryImage("");
    setCategoryName("");
    setCategoryParentId("");
    setShow(false);
  };
  const renderCategories = (categories) => {
    let displayCategories = [];
    for (let category of categories) {
      displayCategories.push(
        <li key={category.name}>
          {category.name}
          {category.children.length ? (
            <ul>{renderCategories(category.children)}</ul>
          ) : null}
        </li>
      );
    }
    return displayCategories;
  };

  const createCategoryList = (categories, options = []) => {
    for (let category of categories) {
      options.push({ value: category._id, name: category.name });
      if (category.children.length) {
        createCategoryList(category.children, options);
      }
    }
    return options;
  };
  return (
    <Layout sidebar={true}>
      <Container>
        <Row>
          <Col md={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Category</h3>
              <Button variant="primary" onClick={handleShow}>
                Add
              </Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <ul>{renderCategories(category.categories)}</ul>
            <NewModal
              hideModal={hideModal}
              handleClose={handleClose}
              show={show}
              modalTitle="Add New Category"
            >
              <Input
                type="text"
                placeholder="Category Name"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
              />
              <select
                className="form-control"
                value={categoryParentId}
                onChange={(e) => setCategoryParentId(e.target.value)}
              >
                <option>Select category</option>
                {createCategoryList(category.categories).map((option) => {
                  return (
                    <option key={option.value} value={option.value}>
                      {option.name}
                    </option>
                  );
                })}
              </select>
              <Input
                type="file"
                name={categoryImage}
                onChange={(e) => setCategoryImage(e.target.files[0])}
              />
            </NewModal>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default Category;
