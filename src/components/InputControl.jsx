
import React, { useEffect, useState } from 'react';

import { Form, Row, Col, Button, Image, Table } from "react-bootstrap";
import { useFieldArray, useFormContext } from "react-hook-form";

import { GrRefresh } from "react-icons/gr";
import { IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { captchaImg } from "../static/index";

import axios from 'axios';

// Text Input
export const InputControl = (
  { lg="6",
    sm="6",
    md="6", 
    xs="12",
    type, 
    text, 
    name, 
    size="sm", 
    isRequired, 
    ...rest}) => {

  const { register, errors } = useFormContext();
  return (
    <Col lg={lg} sm={sm} md={md} xs={xs}>
      <Form.Group className="mb-3">
        <Form.Label>
          {text}
          {isRequired ? <span className="text-danger"> *</span> : null}
        </Form.Label>
        <Form.Control 
          size={size} 
          ref={register} 
          {...rest} 
          type={type} 
          name={name}
        />
        <small className="text-danger">{errors?.[name]?.message}</small>
      </Form.Group>
    </Col>
  )
}
  
// Select box
export function SelectControl(
  { lg="6", 
    sm="6", 
    md="6", 
    size="sm",
    text,
    isRequired, 
    options, 
    name, 
    defaultOption, 
    disable,
    changeEvent=()=>{},
    ...rest }) {
  
  const { register, errors } = useFormContext();

  return(
    <Col md={md} lg={lg} sm={sm}>
      <Form.Group> 
        <Form.Label>
          {text}
          {isRequired ? <span className="text-danger"> *</span> : null}
        </Form.Label>
      
        <Form.Select size={size}
          onChange={(e) => changeEvent(e.target.value)} 
          ref={register} 
          name={name} 
          {...rest} 
          disabled={disable ? true : false} 
        >
          <option value="">{defaultOption}</option>
          {
            options.map(value => (
              <option key={value} value={value.ddlId}>
                {value?.name}
              </option>
            ))
          }
        </Form.Select>
        <br/>
        <small className="text-danger">{errors?.[name]?.message}</small>
      </Form.Group>
    </Col>
  )
}


export const CaptchaImage = ({
  lg="6",
  sm="6",
  md="6", 
  xs="12",
  type, 
  text, 
  name, 
  size="sm", 
  isRequired, 
  ...rest
}) => {

  const { register, errors } = useFormContext();

  const [captchBody, setCaptchBody] = useState("");
  const [bool, setBool] = useState(true);


  useEffect(() => {
    getCaptchaHandler()
  }, [bool])


  const getCaptchaHandler = () => {
    axios
      .get("https://caas.cg.nic.in/service/api/captcha", {
        headers: {
          authkey: "679915",
        },
      })
      .then((response) => {
        let captcha = [];
        captcha.captchaId = response.data.captchaID;
        captcha.captchaContent = response.data.captchaCode;
        captcha.captchaBody = response.data.captchaData;
        captcha.value = "";
        captcha.isValid = false;
        setCaptchBody(captcha);

        sessionStorage.setItem('captch',response.data.captchaID);
        console.log(captcha)
      })
      .catch(err => console.log(err))
  };







  return (
    <Col md={md} lg={lg} sm={sm}>
      <Form.Group> 
        <Form.Label>
          {text}
          {isRequired ? <span className="text-danger"> *</span> : null}
        </Form.Label>
        <Row>
          <Col md={md-3} lg={lg-3} sm={sm-3}>
            <Image 
              src={`data:image/*;base64,${captchBody.captchaBody}`}
              alt="Loading..."

              style={{
                width: 260,
                height: 60
              }}
            />
          </Col>
          <Col md={2} lg={2} sm={2}>
            <IconButton onClick={() => {setBool(!bool)}} style={{border: '1px solid   #dce5ed'}}>
              <GrRefresh/>
            </IconButton>
          </Col>
        </Row>
        <br/>
        <Form.Control 
          size={size} 
          ref={register} 
          {...rest} 
          type={type} 
          name={name}
        />
        <small className="text-danger">{errors?.[name]?.message}</small>
      </Form.Group>
      {/* <br/> */}

      <div className="flex flex-csb mt-2">
        <Form.Group >
          <Form.Check type="checkbox" label="Remaber Me" />
        </Form.Group>
        <Link to="/foget_login">Forget Password</Link>
      </div>
      <br/>
    </Col>
  )
}

export const Submit = ({ lg="12",md="12", sm="12", text="Submit", block=false }) => {
  
  
  
  return (
    <Col lg={lg} md={md} className="flex-c">
     <center className="mt-3">
        <Button type="submit" 
          block={block} 
          style={{
          background:'#162646', 
          border: 'none'}}
        >
          {text}
        </Button>
          &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; 
        <Button 
          block={block} 
          style={{background:'#162646', border: 'none'}}
        >
          Clear
        </Button>
     </center>
    </Col>
  )
}


export const SubmitBlockBtn = ({ lg="12",md="12", sm="12", text="Submit", block=false }) => {
  return (
    <Col lg={lg} md={md}>
      <div className="d-grid gap-2">
        <Button 
          type="submit" 
          block
          size="md"
          style={{
          background:'#162646', 
          border: 'none'}}
        >
          {text}
        </Button>
      </div>
    </Col>
  )
}


