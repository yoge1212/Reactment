import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";
import Sponsors from "./components/Pages/Sponsors";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";

class App extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = { currentPage: 0, currentPageName: "" };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(index, indexName) {
    this.setState({ currentPage: index, currentPageName: indexName });
  }

  Router(param) {
    switch (param.PageRoute) {
      case 0:
        return (
          <Home />
        );
      case 1:
        return (
          <Sponsors currentpage={param.PageRoute}/>
        );
      case 2:
        return (
          <About currentpage={param.PageRoute}/>

        );
      case 3:
        return (
          <Contact currentpage={param.PageRoute} />
        );
      default:
        return <div>An error occured.</div>;
    }
  }

  render() {
    console.log("User has selected page ", this.state.currentPageName);
    //console.log("Render Method is Working. Redered successfully! I think?")

    return (
      <>
        <Navbar
          fixed={true}
          items={["Home", "Sponsors", "About", "Contact us"]}
          onPageChange={this.handlePageChange}
          currentPage={this.state.currentPage}
        />
        <this.Router PageRoute={this.state.currentPage} />
      </>
    );
  }
}

const sum = list => {
  let result = 0;
  for (let i = 1; i < list.length; i++) {
    result += list[i];
  }
  return result;
};

export default App;
export { sum };
