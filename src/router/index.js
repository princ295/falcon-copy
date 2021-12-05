import React, { Suspense } from "react";


import { Switch, Route } from "react-router-dom";
import CreateModule from "../pages/workflow/CreateModule";


import CreateNewStage from "../pages/workflow/CreateNewStage";
import CreateModuleStage from "../pages/workflow/CreateModuleStage";
import ManageWorkFlow from "../pages/workflow/ManageWorkFlow";

import ManageEdit from "../pages/workflow/ManageEdit";
import ManageModuleStage from "../pages/workflow/ManageModuleStage";

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

          <Route path="/manage_module_stage" component={ManageModuleStage}/>
          <Route path="/manage_edit" component={ManageEdit}/>
          <Route path="/manage_work_flow" component={ManageWorkFlow}/>

        </Switch>
      {/* </Suspense> */}
    </React.Fragment>
  );
}
 
export default RouterOutlate;