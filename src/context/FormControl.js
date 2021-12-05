import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Row } from "react-bootstrap";

// using react hook form context  api
export const FormControl = ({ 
  defaultValues,
  validationSchema, 
  children, 
  callBack
  }) => {
  
  const methods = useForm({ 
    defaultValues: defaultValues,
    resolver: yupResolver(validationSchema),
  });

  // send data to callback one 
  const onSubmit = data => {callBack(data); methods.reset()};

  return (
    <FormProvider {...methods} >
      <form 
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <Row>
          {children}
        </Row>
      </form>
    </FormProvider>
  );
}


