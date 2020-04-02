import React, { useState, useEffect } from "react";
import { forwardRef } from "react";
import MaterialTable from "material-table";
import Button from "@material-ui/core/Button";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import Addcustomer from "./Addcustomer";
import moment from "moment";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

export default function Trainingslist() {
  const [trainings, setTrainings] = useState([]);

  useEffect(() => fetchData(), []);

  //GET
  const fetchData = () => {
    fetch("https://customerrest.herokuapp.com/api/trainings")
      .then(response => response.json())
      .then(data => setTrainings(data.content));
    console.log("test");
  };

  //DELETE DELETE THE Training
  const deleteTraining = link => {
    if (window.confirm("Are you sure you want to delete?"))
      fetch(link, { method: "DELETE" })
        .then(res => fetchData())
        .catch(err => console.error(err));
  };

  //POST ADD NEW CUSTOMER
  const saveTraining = trainings => {
    fetch("https://customerrest.herokuapp.com/api/trainings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(trainings)
    })
      .then(res => fetchData())
      .catch(err => console.error(err));
  };

  //Put edit customer
  const updateTraining = (trainings, link) => {
    fetch(link, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(trainings)
    })
      .then(res => fetchData())
      .catch(err => console.error(err));
  };

  const columns = [
    { title: "activity", field: "activity" },
    { title: "duration", field: "duration" },
    { title: "date", field: "date" },
    {}
  ];

  return (
    <div>
      <MaterialTable
        data={trainings}
        columns={columns}
        icons={tableIcons}
        title="Trainings"
        actions={[
          {
            icon: DeleteOutline,
            tooltip: "Delete Training",
            onClick: (event, rowData) => deleteTraining(rowData.links[1].href)
          }
        ]}
        //MUOKKAUSTOIMINNALLISUUS
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                {
                  const data = trainings;
                  const index = data.indexOf(oldData);
                  data[index] = newData;
                  updateTraining(newData, newData.links[1].href);
                  console.log("newData: ", index);
                }
              }, 600);
            })
        }}
      />
    </div>
  );
}

// installing materialUI library
