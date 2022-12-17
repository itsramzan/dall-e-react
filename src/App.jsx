import React from "react";
import Header from "components/Header";
import Main from "components/Main";
import Footer from "components/Footer";

const App = () => {
  return (
    <div className="min-h-screen w-11/12 max-w-5xl mx-auto grid grid-rows-[auto,auto,1fr,auto]">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
