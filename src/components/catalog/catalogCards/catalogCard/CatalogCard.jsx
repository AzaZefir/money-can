import React, { useState } from 'react';
import { Button } from './../../../common/button/Button';
import addBtnSvg from './../../../../assets/images/catalogImg/cart-plus 1.svg';
import { addDoc, collection } from 'firebase/firestore';
import { db } from './../../../../config/firebase';
import { useToast } from '@chakra-ui/react';

export const CatalogCard = ({ id, image, title, price, colors, sizes }) => {
  const toast = useToast();

  const [activeColors, setActiveColors] = useState(0);
  const [activeSizes, setActiveSizes] = useState(0);

  const cartEl = {
    image,
    title,
    price,
    name: colors[activeColors],
    size: sizes[activeSizes],
  };

  // *TO add catalog item to cart
  const addToCart = async () => {
    try {
      const cartRef = collection(db, 'cartItems');
      await addDoc(cartRef, cartEl);
      toast({
        title: 'Товар добавлен в корзину!',
        status: 'success',
        isClosable: true,
        position: 'top-right',
        duration: 3000,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div key={id} className="catalog__card">
      <div>
        <img src={image} alt="Картинка товара " />
      </div>
      <div className="catalog__card_description">
        <h4>{title}</h4>
        <div className="catalog__card__colors">
          {colors.map((color, index) => (
            <span
              key={index}
              onClick={() => setActiveColors(index)}
              className={activeColors === index ? 'active' : ''}>
              <img src={color.img} />
            </span>
          ))}
        </div>
        <div className="catalog__card__sizes">
          {sizes.map((size, index) => (
            <span
              key={index}
              onClick={() => setActiveSizes(index)}
              className={activeSizes === index ? 'active' : ''}>
              <strong>{size}</strong>
            </span>
          ))}
        </div>
        <div className="catalog__card_add">
          <p>Цена {price} руб.</p>
          <Button onClick={addToCart}>
            <img src={addBtnSvg} alt="" />4
          </Button>
        </div>
      </div>
    </div>
  );
};
