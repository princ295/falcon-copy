import axios from "axios";
import { MDBDataTable } from "mdbreact";
import { useEffect, useState } from "react";
import CardBlock from "../../components/CardBlock";
import { InputControl, Submit } from "../../components/InputControl";
import ModalBlock from "../../components/ModalBlock";
import { FormControl } from "../../context/FormControl";
import WithHoc from "../../hoc/withHoc";
import { newEntryTable } from "../../static";
import DashboardLayout from "../DashboardLayout";

import { Button } from "react-bootstrap";

const CreateModule = () => {

  const [data, setData] = useState([]);


  const getModuleData = () => {
    axios.get(process.env.REACT_APP_ENDPOINT+`common/getmodulelist`)
    .then((_res) => {
      let rows = [];
      _res.data.forEach((item, i) =>
        rows.push({
          sno: i + 1,
          value: item.value,
          name: item.name,
          nameHindi: item.type,
          edit: (
            <Button
              variant="outline-success"
              size="sm"  
              onClick={() => { console.log('Hello World..........') } }
            >
              {/* <i className="fas fa-pen fa-xs"></i> */}
              Edit
            </Button>
          ),
        })
      )
      setData(rows)
    })
    .catch(res=> console.log(res))
  }

  useEffect(() => {
    getModuleData()
  },[])

  const tableData = {
    columns: newEntryTable,
    row: data
  }



  return (
    <DashboardLayout>
      <CardBlock title="New Module Entry">
        <FormControl>
          {JSON.stringify(data)}
          <InputControl 
            type="text"
            text="Module Name"
            name="stageName"
            isRequired
            placeholder="Enter Module Name"
            lg={6}
            md={6}
            size="md"
          />

          <InputControl 
            type="text"
            text="Module Name (Hindi)"
            name="stageName"
            isRequired
            placeholder="Enter Module Name (Hindi)"
            lg={6}
            md={6}
            size="md"
          />

          <Submit />
        </FormControl>

        <MDBDataTable
          responsive
          hover
          id="table"
          data={tableData}
          paging={true}
          sortable={false}
        />
      </CardBlock>

      <ModalBlock>
        <FormControl>
          
          <InputControl 
            type="text"
            text="Module Name"
            name="stageName"
            isRequired
            placeholder="Enter Module Name"
            lg={6}
            md={6}
            size="md"
          />

          <InputControl 
            type="text"
            text="Module Name (Hindi)"
            name="stageName"
            isRequired
            placeholder="Enter Module Name (Hindi)"
            lg={6}
            md={6}
            size="md"
          />

          <Submit text="Update"/>
        </FormControl>

      </ModalBlock>


    </DashboardLayout>
  );
}
 
export default WithHoc(CreateModule, {padding: false});