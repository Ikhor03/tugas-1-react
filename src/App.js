import React from 'react';
import Contact from './Page/MenuKontak';
import Product from './Page/MenuProduct';
import TentangKami from './Page/MenuTentangKami';
import MenuUtama from './Page/MenuUtama';

function Header() {
  return (
    <h1>Ini halaman untuk Header</h1>
  );
}

export function Footer() {
  return (
    <div>
      <h1>Ini halaman untuk footer</h1>
    </div>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <MenuUtama />
        <Product />
        <Contact />
        <TentangKami />
        <Footer />
      </div>
    )
  }
}


