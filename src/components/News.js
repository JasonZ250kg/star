import React, { Component } from "react";
import Ticker from "react-ticker";

class News extends Component {
  render() {
    return (
      <Ticker mode="smooth" speed={10}>
        {({ index }) => (
          <>
            <div style={{ height: 25, fontSize: 18 }}>向中国航天人致敬！</div>
          </>
        )}
      </Ticker>
    );
  }
}
export default News;
