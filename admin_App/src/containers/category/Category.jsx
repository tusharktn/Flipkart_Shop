import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import { useDispatch } from "react-redux";
import { getAllCategories } from "../../actions";
function Category() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);
  return <Layout sidebar={true}>Category</Layout>;
}

export default Category;
