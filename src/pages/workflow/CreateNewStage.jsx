
import { MDBDataTable } from "mdbreact";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CardBlock from "../../components/CardBlock";
import { InputControl, Submit } from "../../components/InputControl";
import ModalBlock from "../../components/ModalBlock";
import { FormControl } from "../../context/FormControl";
import { fethStateData } from "../../store/ducks/Global/actionCreator";
import { GlobalApi } from "../../utils/globalApi";
import DashboardLayout from "../DashboardLayout";

const CreateNewStage = () => {





  return (
    <DashboardLayout>
      <CardBlock title="New Stage Entry">
      <FormControl>
          {/* {JSON.stringify(data)} */}
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
          // data={tableData}
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
 
export default CreateNewStage;