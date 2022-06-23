import { Routes, Route } from "react-router-dom";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import {
  DersCreate,
  DersEdit,
  DersList,
  OgrenciEdit,
  OgrenciCreate,
  OgrenciList,
  OgretmenList,
  OgretmenCreate,
  OgretmenEdit,
} from "./Components/index";
import api from "./api/axios";
import { LoginPage } from "./Pages/login/Login";
import { useEffect, useState } from "react";
import Student from "./Pages/Student/Student";

const dataProvider = jsonServerProvider("http://localhost:3500");

const App = () => {
  const [adminUser, setAdminUser] = useState({ username: "", pwd: "" });
  const [studentUser, setStudentUser] = useState({ username: "", pwd: "" });
  const [dersler, setDersler] = useState([]);
  const [ogretmenler, setOgretmenler] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseAdminUser = await api.get("/adminuser");
        const responseStudentUser = await api.get("/studentuser");
        const responseDersler = await api.get("/dersler");
        const responseOgretmenler = await api.get("/ogretmenler");
        setAdminUser(responseAdminUser.data);
        setStudentUser(responseStudentUser.data);
        setDersler(responseDersler.data);
        setOgretmenler(responseOgretmenler.data);
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          console.log(`Error: ${error.message}`);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Routes>
        <Route>
          <Route
            path="/*"
            element={
              <Admin dataProvider={dataProvider}>
                <Resource
                  name="ogrenciler"
                  list={OgrenciList}
                  create={OgrenciCreate}
                  edit={OgrenciEdit}
                />
                <Resource
                  name="dersler"
                  list={DersList}
                  create={DersCreate}
                  edit={DersEdit}
                />
                <Resource
                  name="ogretmenler"
                  list={OgretmenList}
                  create={OgretmenCreate}
                  edit={OgretmenEdit}
                />
              </Admin>
            }
          />
        </Route>
        <Route
          path="/login"
          element={
            <LoginPage
              studentUser={studentUser}
              adminUser={adminUser}
              error={error}
            />
          }
        />
        <Route
          path="/ogrenci"
          element={<Student dersler={dersler} ogretmenler={ogretmenler} />}
        />
      </Routes>
    </div>
  );
};

export default App;
