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
import LiveEvents from "./routes/Account/LiveEvents";
import ClosedEvents from "./routes/Account/ClosedEvents";
import MyTrade from "./routes/Account/MyTrade";

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
            <Route path="/account/liveevents" element={<LiveEvents />} />
            <Route path="/account/closedevents" element={<ClosedEvents />} />
            <Route path="/account/mytrade" element={<MyTrade />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
