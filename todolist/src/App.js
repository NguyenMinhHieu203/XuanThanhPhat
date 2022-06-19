import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  //Tạo một todo mặc định
  const [toDo, setToDo] = useState([
    {name: "do homework", status: "New"},
    {name: "feed the dog", status: "New"},
    {name: "go camping", status: "New"}
  ]);

  //Lấy ra giá trị người dùng nhập vào
  const [name, setName] = useState("");
  const [nameSearch, setNameSearch] = useState("");

  //Thêm hoặc sửa todo
  const [indexEdit, setIndexEdit] = useState("");
  const addSaveTask = () => {
    const newToDo = [...toDo];
    if(indexEdit === "") {
      let task = {
        name: name,
        status: "New"
      }
      newToDo.push(task);
    }
    else
    {
      const newToDo = [...toDo];
      newToDo[indexEdit].name = name;
    }
    setToDo(newToDo);
    setIndexEdit("");
    setName("");
  }

  //Sửa nội dung của todo
  const handleEdit = (index) => {
    setIndexEdit(index);
    const preContent = toDo[index].name;
    setName(preContent);
  }
  //Xóa todo 
  const handleDelete = (index) => {
    const newToDo = [...toDo];
    newToDo.splice(index, 1);
    setToDo(newToDo);
  }

  //Đặt giá trị cho status
  const handleNew = (index) => {
    
    const newToDo = [...toDo];
    newToDo[index].status = "New";
    setToDo(newToDo);
  }

  const handleDepending = (index) => {
    const newToDo = [...toDo];
    newToDo[index].status = "Depending";
    setToDo(newToDo);
  }

  const handleComplete = (index) => {
    const newToDo = [...toDo];
    newToDo[index].status = "Complete";
    setToDo(newToDo);
  }

  const handleSort = () => {
    let newToDo = [...toDo]
    newToDo.sort((a, b) => a.name.localeCompare(b.name));
    setToDo(newToDo);
  }

  const handleSearch = () => {
    const newToDo = [...toDo].filter((element) => element.name.includes(nameSearch));
    setToDo(newToDo);
  }

  return (
    <div className='container'>
      <h1>Todos</h1>
      <div className='container1'>
        <div className='littlecontainer'><p>Add a task</p></div>
        <div className='item'><p>item</p></div>
        <input placeholder='What do you wants to do?' className='inputTodo' value = {name} onChange={(e) => setName(e.target.value)}></input>
        <div className='note'><p>Enter what you want to procastinate</p></div>
        <button className='buttonTodo' onClick={() => addSaveTask()}>{indexEdit === "" ? "Submit" : "SaveEdit"}</button>
      </div>
      <div className='container2'>
        <div className='littlecontainer'><div className='title'><p>Task</p></div><div className='operation'><input placeholder='Search' className='inputSearch' value = {nameSearch} onChange={(e) => setNameSearch(e.target.value)}></input><button className='buttonSearch' onClick = {() => handleSearch()}>Search</button><button className='buttonSort' onClick = {() => handleSort()}>Sort</button></div></div>
        <table>
            <thead>
              <tr>
                <th>Items</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead> 
            <tbody>
                {toDo.map((element, index) => {
                  return (
                    <tr key={index}>
                      <td>{element.name}</td>
                      <td>{element.status}</td>
                      <td>
                        <button className='buttonStatus' onClick={() => handleNew(index)}>New</button>
                        <button className='buttonStatus' onClick={() => handleDepending(index)}>Depending</button>
                        <button className='buttonStatus' onClick={() => handleComplete(index)}>Complete</button>
                        <button className='buttonStatus' onClick={() => handleEdit(index)}>Edit</button>
                        <button className='buttonDelete' onClick={() => handleDelete(index)}>Delete</button>
                      </td>
                    </tr>
                  )
                })}
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default App;
