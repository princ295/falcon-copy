
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import CreateModule from "./pages/workflow/CreateModule";
import RouterOutlate from "./router";
import { fethStateData } from "./store/ducks/Global/actionCreator";

function App() {


  const dispatch = useDispatch();
  const history = useHistory();




  return (
  <>
    <RouterOutlate />
  </>
  );
}

export default App;
