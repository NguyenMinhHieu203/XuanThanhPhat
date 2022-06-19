import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  // Lấy dữ liệu người dùng nhập vào.
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [options, setOptions] = useState("Nam");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const [idEdit, setIdEdit] = useState("");

  // Lấy dữ liệu có trên API và in ra cửa số trình duyệt.
  const [Forms, setForms] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/api/forms").then((res) => setForms(res.data));
  }, [Forms]);

  // Tạo ra một người dùng mới hoặc thay đổi dữ liệu người dùng.
  const addSaveUser = () => {
    if (idEdit === "") {
      if (firstname === "" || lastname === "" || email === "" || date === ""
        || username === "" || password === "" || passwordConfirmation === "") {
        alert("Dữ liệu không được để trống");
      }
      else if (passwordConfirmation !== password) {
        alert("Mật mã đã nhập không khớp");
      }
      else {
        let data = {
        firstName: firstname,
        lastName: lastname,
        email: email,
        birth: date,
        gender: options,
        userName: username,
        password: password
        };
        axios.post("http://localhost:8080/api/forms", data).then((res) => alert("Thành Công"));
        setFirstName("");
        setLastName("");
        setEmail("");
        setDate("");
        setOptions("Male");
        setUsername("");
        setPassword("");
        setPasswordConfirmation("");
      }
    }
    else {
      const change = {
        firstName: firstname,
        lastName: lastname,
        email: email,
        birth: date,
        gender: options,
        userName: username,
        password: password
      }
      axios.patch(`http://localhost:8080/api/forms/${idEdit}`, change);
      setFirstName("");
      setLastName("");
      setEmail("");
      setDate("");
      setOptions("Male");
      setUsername("");
      setPassword("");
      setPasswordConfirmation("");
      setIdEdit("");
    }
  }

  // Thay đổi dữ liệu người dùng.
  const handleEdit = (id) => {
    setIdEdit(id);
    axios.get(`http://localhost:8080/api/forms/${id}`).then((res) => setFirstName(res.data.firstName));
    axios.get(`http://localhost:8080/api/forms/${id}`).then((res) =>setLastName(res.data.lastName));
    axios.get(`http://localhost:8080/api/forms/${id}`).then((res) => setEmail(res.data.email));
    axios.get(`http://localhost:8080/api/forms/${id}`).then((res) => setDate(res.data.birth));
    axios.get(`http://localhost:8080/api/forms/${id}`).then((res) => setOptions(res.data.gender));
    axios.get(`http://localhost:8080/api/forms/${id}`).then((res) => setUsername(res.data.userName));
    axios.get(`http://localhost:8080/api/forms/${id}`).then((res) => setPassword(res.data.password));
    axios.get(`http://localhost:8080/api/forms/${id}`).then((res) => setPasswordConfirmation(res.data.password));
  }

  // Xóa người dùng khỏi danh sách.
  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/api/forms/${id}`);
  }
  return (
    <div>
      <div className='container1'>
        <h2>Register</h2>
        <div className='name'>
          <input placeholder='First name' value={firstname} onChange={(e) => setFirstName(e.target.value)}></input>
          <input placeholder='Last name' value={lastname} onChange={(e) => setLastName(e.target.value)}></input>
        </div>
        <input placeholder='Email' className='email' type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <div className='date_gender'>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)}></input>
          <select onChange={(e) => setOptions(e.target.value)}>
            <option value="Nam">Male</option>
            <option value="Nữ">Fermale</option>
            <option value="Khác">Other</option>
          </select>
        </div>
        <input placeholder='Username' className='username' value={username} onChange={(e) => setUsername(e.target.value)}></input>
        <div className='password'>
          <input placeholder='Password' type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
          <input placeholder='Password confirmation' type="password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}></input>
        </div>
        <div className='checkbox'>
          <input type="checkbox"></input>
          <p>Remember me</p>
        </div>
        <button className='signup' onClick={() => addSaveUser()}>{idEdit === "" ? "Sign up" : "SaveEdit"}</button>
      </div>
      <div className='container2'>
        <div>
          <div className='operation'>
            <input placeholder='Search' className='inputSearch' value={search} onChange={(e) => setSearch(e.target.value)}></input>
            <select onChange={(e) => setFilter(e.target.value)} className='filter'>
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
              <option value="Khác">Khác</option>
            </select>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Họ và tên</th>
              <th>Mã nhân viên</th>
              <th>Email</th>
              <th>Ngày sinh</th>
              <th>Giới tính</th>
              <th>Username</th>
              <th>Mật khẩu</th>
              <th>Tác vụ</th>
            </tr>
          </thead>
          <tbody>
            {Forms.filter((element) => {
              if(search === " ")
              {
                return element;
              }
              else if(element.firstName.includes(search) || element.lastName.includes(search))
              {
                return element;
              }
            }).filter((element) => {
              if(filter === "")
              {
                return element;
              }
              if(element.gender.includes(filter))
              {
                return element;
              }
            }).sort((a, b) => a.birth.localeCompare(b.birth)).map((element, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{`${element.firstName} ${element.lastName}`}</td>
                  <td>{element.id}</td>
                  <td>{element.email}</td>
                  <td>{element.birth}</td>
                  <td>{element.gender}</td>
                  <td>{element.userName}</td>
                  <td>{element.password}</td>
                  <td>
                    <button className='btn-edit' onClick={() => handleEdit(element.id)}>Edit</button>
                    <button className='btn-delete' onClick={() => handleDelete(element.id)}>Delete</button>
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