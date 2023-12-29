import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { addTask, filterTasks } from "../redux/features/tasks/tasksSlice";
import { useDispatch, useSelector } from "react-redux";

const Problem1 = () => {
  const { register, handleSubmit } = useForm();
  const [show, setShow] = useState("all");

  // using redux
  const dispatch = useDispatch();
  const { filteredTasks } = useSelector((state) => state.tasks);

  const onSubmit = (data) => {
    dispatch(addTask(data));
  };

  const handleShowByStatus = (status) => {
    setShow(status);
    dispatch(filterTasks({ status }));
  };

  // using loacl storage
  // const [formData, setFormData] = useState([]);

  // useEffect(() => {
  //   const storedData = JSON.parse(localStorage.getItem("formData"));
  //   if (storedData) {
  //     setFormData(storedData);
  //   }
  // }, []);

  // const onSubmit = (data) => {
  //   const updatedFormData = [...formData, data];
  //   setFormData(updatedFormData);
  //   localStorage.setItem("formData", JSON.stringify(updatedFormData));
  //   reset();
  // };

  // const filterAndSortData = () => {
  //   let sortedData = [...formData];

  //   sortedData.sort((a, b) => {
  //     const statusOrder = { active: 1, completed: 2, pending: 3, archive: 4 };
  //     return statusOrder[a.status] - statusOrder[b.status];
  //   });

  //   return sortedData;
  // };

  // const handleShowByStatus = (status) => {
  //   setShow(status === "all" ? "all" : status);
  // };

  // const renderFilteredData = () => {
  //   const filteredAndSortedData =
  //     show === "all"
  //       ? filterAndSortData()
  //       : formData.filter((item) => item.status === show);

  //   return (
  //     <>
  //       {filteredAndSortedData.map((item, index) => (
  //         <tr key={index}>
  //           <td>{item.name}</td>
  //           <td>{item.status}</td>
  //         </tr>
  //       ))}
  //     </>
  //   );
  // };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="row gy-2 gx-3 align-items-center mb-4"
          >
            <div className="col-auto">
              <input
                {...register("name")}
                type="text"
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="col-auto">
              <input
                {...register("status")}
                type="text"
                className="form-control"
                placeholder="Status"
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleShowByStatus("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleShowByStatus("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleShowByStatus("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredTasks?.map((task, index) => (
                <tr key={index}>
                  <td>{task.name}</td>
                  <td>{task.status}</td>
                </tr>
              ))}
              {/* {renderFilteredData()} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
