import React, { Component } from "react";
import Logo from "../Logo";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
          <section class="flex items-center justify-between flex-wrap p-4 ml-8">
            <Logo/>
          </section>
    )}
}

export default Navbar;
