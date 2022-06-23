import { Routes, Route, useNavigate } from "react-router-dom";
import { Admin, Resource, defaultTheme } from "react-admin";
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

const dataProvider = jsonServerProvider("http://localhost:3500");

const theme = {
  ...defaultTheme,
  palette: {
    mode: "dark",
  },
};

const App = () => {
  const [adminUser, setAdminUser] = useState({ username: "", pwd: "" });
  const [studentUser, setStudentUser] = useState({ username: "", pwd: "" });
  const [error, setError] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate("/login");
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseAdminUser = await api.get("/adminuser");
        setAdminUser(responseAdminUser.data);
        const responseStudentUser = await api.get("/studentuser");
        setStudentUser(responseStudentUser.data);
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
              <Admin theme={theme} dataProvider={dataProvider}>
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
        <Route>
          <Route
            path="/login"
            element={
              <LoginPage
                studentUser={studentUser}
                adminUser={adminUser}
                error={error}
                setLoggedIn={setLoggedIn}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
