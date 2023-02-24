import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserList from "./component/UserList";
import AddUser from "./component/AddUser";
import EditUser from "./component/EditUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList/>}/>
        <Route path="add" element={<AddUser/>}/>
        <Route path="edit/:id" element={<EditUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
