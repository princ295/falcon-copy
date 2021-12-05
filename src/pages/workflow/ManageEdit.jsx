import { useEffect, useState } from "react";
import CardBlock from "../../components/CardBlock";
import { SelectControl, Submit } from "../../components/InputControl";
import { FormControl } from "../../context/FormControl";
import { GlobalApi } from "../../utils/globalApi";
import DashboardLayout from "../DashboardLayout";

const ManageEdit = () => {


  const [district, setDistrict] = useState([]);
  const [office, setOffice] = useState([]);
  const [module, setModule] = useState([]);


  useEffect(()=>{
    getDistrict();
    getOffice();
    getModule();
  })


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


  const handleDistrictChange = () => {}


  return (
    <DashboardLayout>

      <CardBlock title="Module Stage Edit">

    <FormControl>
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

          <Submit/>
        </FormControl>


      </CardBlock>
    </DashboardLayout>
  );
}
 
export default ManageEdit;