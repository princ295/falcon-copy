import React, { Suspense } from "react";


import { Switch, Route } from "react-router-dom";
import CreateModule from "../pages/workflow/CreateModule";


import CreateNewStage from "../pages/workflow/CreateNewStage";
import CreateModuleStage from "../pages/workflow/CreateModuleStage";

const RouterOutlate = () => {
  return (
    <React.Fragment>
      {/* <Suspense fallback={
        <div>
          loading.....
        </div>
      }> */}
        <Switch>
          <Route path={["/","/create_module"]} component={CreateModule} exact/>
          <Route path="/create_new_stage" component={CreateNewStage}/>
          <Route path="/create_module_stage" component={CreateModuleStage}/>
        </Switch>
      {/* </Suspense> */}
    </React.Fragment>
  );
}
 
export default RouterOutlate;