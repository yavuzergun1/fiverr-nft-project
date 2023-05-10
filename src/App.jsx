import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./routes/About";
import Faq from "./routes/Faq";
import Contact from "./routes/Contact";
import Account from "./routes/Account/Account";
import MyAccount from "./routes/Account/MyAccount";
import TransActions from "./routes/Account/TransActions";
import Events from "./routes/Account/Events";

function App() {
  return (
    <main className="overflow-x-hidden">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/account" element={<Account />}>
            <Route path="/account/myaccount" element={<MyAccount />} />
            <Route path="/account/mytransactions" element={<TransActions />} />
            <Route path="/account/events" element={<Events />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
