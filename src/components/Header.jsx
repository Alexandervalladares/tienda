"use client"
import { useState } from 'react';

export const Headers = ({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
}) => {
  const [active, setActive] = useState(false);

  const onDeleteProduct = product => {
    const results = allProducts.filter(
      item => item.id !== product.id
    );
    setTotal(total - product.price * product.quantity);
    setCountProducts(countProducts - product.quantity);
    setAllProducts(results);
  };

  const onCleanCart = () => {
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };

  const onUpdateQuantity = (product, newQuantity) => {
    const updatedProducts = allProducts.map((item) => {
      if (item.id === product.id) {
        const quantityDiff = newQuantity - item.quantity;
        setCountProducts(countProducts + quantityDiff);
        setTotal(total + (quantityDiff * item.price));
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setAllProducts(updatedProducts);
  };

  return (
    <header>
      <h1>café Himalaya</h1>
      <div>
      <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-GZQCr2sXw_vJRzH1OrY6wSX731AlFArD1Q&usqp=CAU"
            alt="icon"
                
            className="icon" />
       </div> 
    <div className='container-icon'>    
        <div className='container-cart-icon'
          onClick={() => setActive(!active)}
        >
          <img
            src="https://e7.pngegg.com/pngimages/833/426/png-clipart-black-shopping-cart-icon-for-free-black-shopping-cart.png"
            alt="carrito"
            className="icon-cart" />
          <div className='count-products'>
            <span id='contador-productos'>{countProducts}</span>
          </div>
        </div>
        <div
          className={`container-cart-products ${
            active ? '' : 'hidden-cart'
            }`}
        >
          {allProducts.length ? (
            <>
              <div className='row-product'>
                {allProducts.map(product => (
                  <div className='cart-product'
                    key={product.id}>
                    <div className='info-cart-product'>
                      <input
                        type="number"
                        min="1"
                        value={product.quantity}
                        onChange={(e) => onUpdateQuantity(product, e.target.value)}
                      />
                      <p className='titulo-producto-carrito'>
                        {product.title}
                      </p>
                      <span className='precio-producto-carrito'>
                        ${product.price}
                      </span>
                    </div>
                    <img src="https://static.vecteezy.com/system/resources/previews/018/887/462/original/signs-close-icon-png.png"
                      alt="cerrar"
                      className="icon-close"
                      onClick={() => onDeleteProduct(product)}
                    />
                  </div>
                ))}
              </div>
              <div className='cart-total'>
                <h3>Total:</h3>
                <span className='total-pagar'>${total}</span>
              </div>
              <button className='btn-clear-all'
                onClick={onCleanCart}>
                Vaciar Carrito
              </button>
            </>
          ) : (
              <p className='cart-empty'>El carrito está vacío</p>
            )}
        </div>
      </div>
    </header>
  );
};
