import React from "react";
import App, { Container } from "next/app";

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    console.log("_app.js:getInitialProps");

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
      pageProps.user = {
        id: 999,
        userFirstName: "peterxx1",
        userLastName: "kellnerxx1"
      };
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}
