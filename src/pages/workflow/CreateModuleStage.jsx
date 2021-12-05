import { MDBDataTable } from "mdbreact";
import { useState, useEffect } from "react";
import CardBlock from "../../components/CardBlock";
import { SelectControl, Submit } from "../../components/InputControl";
import ModalBlock from "../../components/ModalBlock";
import { FormControl } from "../../context/FormControl";
import { GlobalApi } from "../../utils/globalApi";
import DashboardLayout from "../DashboardLayout";

const CreateModuleStage = () => {

  const [district, setDistrict] = useState([]);
  const [office, setOffice] = useState([]);
  const [module, setModule] = useState([]);
  const [stage, setStage] = useState([]);
  const [status, setStatus] = useState([]);





  useEffect(() => {
    getDistrict();
    getModule();
    getStage();
    getStatus();
  },[])

  // const getState = () => {
  //   alert('Get State Method Cll')
  //   GlobalApi.getState()
  //   .then(_res => {
  //     let _row = []
  //     console.log(_res)
  //     _res.forEach((item, i) =>
  //       _row.push({
  //         sno: i + 1,
  //         ddlId: item.value,
  //         name: item.name,
  //       })
  //     );
  //     setState(_row);
  //   })
  //   .catch(err => console.log(err))
  // }


  const getDistrict = (district=22) => {
    GlobalApi.getDistrict(district)
    .then(_res => {
      let _row = [];
      _res.forEach((item, i) =>
        _row.push({
          sno: i + 1,
          ddlId: item.value,
          name: item.name,
        })
      );
      setDistrict(_row)
    })
    .catch()
  }


  const getOffice = (e) => {
    GlobalApi.getOffice({
      state: 22,
      district: e
    })
    .then(_res => {
      let _row = [];
      // do something with JSON response data
      _res.forEach((item, i) =>
        _row.push({
          sno: i + 1,
          ddlId: item.value,
          name: item.name,
        })
      );
      setOffice(_res)
    })
    .catch(err => {})
  }



  const getModule = () => {
    GlobalApi.getModule()
    .then(_res => {
      let _row = [];
      _res.forEach((item, i) =>
      _row.push({
        sno: i + 1,
        ddlId: item.value,
        name: item.name,
      }))
      setModule(_row)
    }) 
    .catch(err => console.log())
  }


  const getStage = () => {
    GlobalApi.getStage()
    .then(_res => {
      let _row = []
      _res.forEach((item, i) =>
      _row.push({
        sno: i + 1,
        ddlId: item.value,
        name: item.name,
      }));
      setStage(_row)
    })
    .catch(err => {})
  }


  const getStatus = () => {
    GlobalApi.getStatus()
    .then(_res => {
      let _row = [];
      _res.forEach((item, i) =>
      _row.push({
        sno: i + 1,
        value: item.value,
        name: item.name,
      }));
      setStatus(_row)
    })
    .catch(err => {})
  }


  const getOfficeStage = () => {}


  const handleDistrictChange = (e) => {
    getOffice(e)
  }


  return (
    <DashboardLayout>
      <CardBlock title="Create Module Stage">


      <FormControl>
        <SelectControl 
          name="officeId"
          defaultOption="Chhattisgarh"
          text="State Name" 
          isRequired
          options={[]} 
          lg={4}
          md={4}
          size="md"
          _value="22"
          disable={true}
        />

        <SelectControl 
          name="officeId"
          defaultOption="----Select----"
          text="District Name" 
          isRequired
          options={district} 
          lg={4}
          md={4}
          size="md"
          changeEvent={handleDistrictChange}
        />

        <SelectControl 
          name="officeId"
          defaultOption="----Select----"
          text="Office Name" 
          isRequired
          options={office} 
          lg={4}
          md={4}
          size="md"
        />

        <SelectControl 
          name="officeId"
          defaultOption="----Select----"
          text="Module Name" 
          isRequired
          options={module} 
          lg={4}
          md={4}
          size="md"
        />


        <SelectControl 
          name="officeId"
          defaultOption="----Select----"
          text="Stage Name " 
          isRequired
          options={stage} 
          lg={4}
          md={4}
          size="md"
        />

        <SelectControl 
          name="officeId"
          defaultOption="----Select----"
          text="Status" 
          isRequired
          options={status} 
          lg={4}
          md={4}
          size="md"
        />

        <SelectControl 
          name="officeId"
          defaultOption="----Select----"
          text="Multiple Officer in This Stage " 
          isRequired
          options={[]} 
          lg={4}
          md={4}
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
          <Submit text="Update"/>
        </FormControl>

      </ModalBlock>

    </DashboardLayout>
  );
}
 
export default CreateModuleStage;