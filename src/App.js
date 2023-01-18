import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nenu from "./components/00-home/menu/menu";
import HelloWorld from "./components/01-hello-world/hello-world";
import HelloReact from "./components/02-hello-react/hello-react";
import Js2x from "./components/03-jsx/js2x";
import Jsx1 from "./components/03-jsx/jsx1";
import Jsx3 from "./components/03-jsx/jsx3";
import Jsx4 from "./components/03-jsx/jsx4";
import Jsx5 from "./components/03-jsx/jsx5";
import Jsx6 from "./components/03-jsx/jsx6";
import Jsx7 from "./components/03-jsx/jsx7";
import Style1 from "./components/04-styles/Style1";
import Style2 from "./components/04-styles/Style2";
import Style3 from "./components/04-styles/Style3";
import Style4 from "./components/04-styles/Style4";
import Clock1 from "./components/05-clock1/Clock1";
import Greetings from "./components/06-props1/greetings";
import Products from "./components/07-props2/Products";
import Clock2 from "./components/08-clock2/Clock2";
import Gallery from "./components/09-image/Gallery";
import Image from "./components/09-image/Image";
import ProfileCard from "./components/10-profile-card/ProfileCard";
import BootstrapDynamic from "./components/11-bootstrap/bootstrap-dynamic";
import Icon from "./components/12-icons/Icon";
import Events from "./components/13-events/Events";
import Header from "./components/14-products/Header";
import Shop from "./components/14-products/Shop";
import State from "./components/15-useState/State";
import Stateless from "./components/15-useState/Stateless";
import Counter from "./components/16-counter/Counter";
import Birthday from "./components/17-birthday/Birthday";
import UseEffect1 from "./components/18-useeffect/UseEffect1";
import UseEffect from "./components/18-useeffect/UseEffect1";
import UseEffect2 from "./components/18-useeffect/UseEffect2";
import Clock3 from "./components/19-clock3/Clock3";
import CountryFilter from "./components/20-country-filter/CountryFilter";
import Scroll from "./components/21-useRef/Scroll";
import UseRef from "./components/21-useRef/UseRef";
import ClassComp from "./components/22-class-type-component/ClassComp";
import UserCards from "./components/23-fetch-users/UserCards";
import Countries from "./components/24-axios-countries/Countries";
import ParentComp from "./components/25-child-to-parent/ParentComp";
import Form1 from "./components/26-forms/Form1";
import Form2 from "./components/26-forms/Form2";
import Form3 from "./components/26-forms/Form3";
import Form4 from "./components/26-forms/Form4";
import Form5 from "./components/26-forms/Form5";
import Form6 from "./components/26-forms/Form6";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container fluid>
        <Row>
          <Col sm={2}>
            <Nenu />
          </Col>
          <Col sm={10}>
            <Routes>
              <Route path="/hello-world" element={<HelloWorld />} />
              <Route path="/hello-react" element={<HelloReact />} />
              <Route path="/jsx1" element={<Jsx1 />} />
              <Route path="/jsx2" element={<Js2x />} />
              <Route path="/jsx3" element={<Jsx3 />} />
              <Route path="/jsx4" element={<Jsx4 />} />
              <Route path="/jsx5" element={<Jsx5 />} />
              <Route path="/jsx6" element={<Jsx6 />} />
              <Route path="/jsx7" element={<Jsx7 />} />
              <Route path="/style1" element={<Style1 />} />
              <Route path="/style2" element={<Style2 />} />
              <Route path="/style3" element={<Style3 />} />
              <Route path="/style4" element={<Style4 />} />
              <Route path="/clock1" element={<Clock1 />} />
              <Route
                path="/clock2"
                element={<Clock2 textColor="#56ff33" bgColor="#0012c3" />}
              />
              <Route path="/clock3" element={<Clock3 />} />
              <Route path="/greetings" element={<Greetings />} />
              <Route path="/products" element={<Products />} />
              <Route path="/image" element={<Image />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route
                path="/profilecard"
                element={
                  <ProfileCard
                    avatar="profile.jpg"
                    name="Ali Gel"
                    location="Turkey, Istanbul"
                    shot="3"
                    followers="23432"
                    following="234"
                  />
                }
              />
              <Route path="/bootstrapdynamic" element={<BootstrapDynamic />} />
              <Route path="/icon" element={<Icon />} />
              <Route path="/events" element={<Events />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/stateless" element={<Stateless />} />
              <Route path="/state" element={<State />} />
              <Route path="/counter" element={<Counter />} />
              <Route path="/birthday" element={<Birthday />} />
              <Route path="/useeffect1" element={<UseEffect1 />} />
              <Route path="/useeffect2" element={<UseEffect2 />} />
              <Route path="/countryfilter" element={<CountryFilter />} />
              <Route path="/useref" element={<UseRef />} />
              <Route path="/scroll" element={<Scroll />} />
              <Route path="/classcomp" element={<ClassComp />} />
              <Route path="/usercards" element={<UserCards />} />
              <Route path="/countries" element={<Countries />} />
              <Route path="/parentcomp" element={<ParentComp />} />
              <Route path="/form1" element={<Form1 />} />
              <Route path="/form2" element={<Form2 />} />
              <Route path="/form3" element={<Form3 />} />
              <Route path="/form4" element={<Form4 />} />
              <Route path="/form5" element={<Form5 />} />
              <Route path="/form6" element={<Form6 />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
};

export default App;
