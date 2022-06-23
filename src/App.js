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

// Her şeyden önce terminal açıp npm i yazacakssın bütün kurulması gereken dependencies leri kuracak daha sonra aşağıdakileri adım adım yap
// Başta yapman gereken bir terminalde cd src diyip src klasörüne geçiş yapacaksın daha sonra json-server -p 3500 -w db.json  yazıp enter
// ile sorguyu başlatacaksın. Bu bir json server başlatacak localde daha sonra o çalıştıktan sonra başka terminalde bir önce ki terminali kapamadan npm start diyeceksin

// React admin için gerekli olan bişey hoca sormaz

const dataProvider = jsonServerProvider("http://localhost:3500");

const App = () => {
  // Hooklar

  const [adminUser, setAdminUser] = useState({ username: "", pwd: "" });
  const [studentUser, setStudentUser] = useState({ username: "", pwd: "" });
  const [dersler, setDersler] = useState([]);
  const [ogretmenler, setOgretmenler] = useState([]);
  // Login Form da error yani boş döndüğünde hata yazısını isteyebilir fazla zor sormasın diye basit bişey boş bıraktım .
  const [error, setError] = useState("");

  //  aşağıda axios ile sayfa yüklendiğin solda db.json daki verileri çekip yukarıda ki hooklara atadım ki diğer componentlere sayfalara prop olarak göndereyim

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
    // alltta react router dom ile sayfalar arası ilerleyebiliyorsun hangi yolda (path) te hangi component olduğunu belirtiyor
    <div>
      <Routes>
        <Route>
          {/* Bir altta ki admin yazılı component hazır bir şey aslında dökümantasyondan bakıp yaptığını söylersin sorarsa */}
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
              setError={setError}
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
