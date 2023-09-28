import React from "react";
import Button from "./components/ui/Button";
import StudentList from "./components/StudentList";

function App() {

  const studentList = [
    {id: 1, name: 'Amantur'},
    {id: 2, name: 'Aidana'},
    {id: 3, name: 'Azis'},
    {id: 4, name: 'Ulan'},
  ]
  return (
    <div>
      <Button>Delete Todo</Button>
      <Button>App Todo</Button>
      <Button>Add List</Button>
      <StudentList students={studentList}/>
      {/* StudentList(studentList) */}
    </div>
  );
}

export default App;
