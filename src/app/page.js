"use client"
import { useState } from 'react';
import { Headers } from '../components/Header';
import { ProductList } from '../components/ProductList';
export default function Home() {
const [allProducts, setAllProducts] = useState([]);
const [scroll, setScroll] = useState(0)
const [total, setTotal] = useState(0);
const [countProducts, setCountProducts] = useState(0);
return (
<>
<Headers
allProducts={allProducts}
setAllProducts={setAllProducts}
scroll={setScroll}
total={total}
setTotal={setTotal}
countProducts={countProducts}
setCountProducts={setCountProducts}
/>
<ProductList
allProducts={allProducts}
setAllProducts={setAllProducts}
scroll={setScroll}
total={total}
setTotal={setTotal}
countProducts={countProducts}
setCountProducts={setCountProducts}
/>
</>
);
}
