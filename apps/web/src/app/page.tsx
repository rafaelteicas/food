'use client';
import './global.css'
import { Button } from '../components/button/button';
import { Sidebar } from '../components/sidebar/sidebar';
import { Search } from '../components/search/search';
import { Cart } from '../components/cart/cart';


export default function Index() {
  return (
    <div>
      <Sidebar />
      <div className="container">
        <h1>Food Restaurant</h1>
        <Search />
        
      </div>
      <Cart/>
    </div>
  );
}
