import { Button } from './../common/button/Button';
import cartSvg from './../../assets/images/homePageImg/Cart 1.svg';
import cartClearSvg from './../../assets/images/cart/trashBasket 1.svg';
import plusSvg from './../../assets/images/cart/plus-square 1.svg';
import minusSvg from './../../assets/images/cart/dash-square 1.svg';
import trashSvg from './../../assets/images/cart/x-square 1.svg';
import { ContuctUs } from './../common/callUs/ContuctUs';
import { useEffect, useState } from 'react';
import {
  collection,
  deleteDoc,
  doc,
  updateDoc,
  getDoc,
  getDocs,
  increment,
} from 'firebase/firestore';
import { db } from './../../config/firebase';
import { useToast } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

export const ShoppingCart = () => {
  const toast = useToast();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [cartEmpty, setCartEmpty] = useState(cartItems);
  // const [item, setItem] = useState(null);
  // const [totalPrice, setTotalPrice] = useState(0);

  // useEffect(() => {
  //   const fetchItem = async (id) => {
  //     const itemRef = doc(db, "cartItems", id);
  //     const itemSnap = await getDoc(itemRef);
  //     const itemData = itemSnap.data();
  //     setItem(itemData);
  //     setTotalPrice(itemData.price * itemData.count);
  //   };
  //   fetchItem();
  // }, []);

  // const onMinusItem = async (id) => {
  //   const cartItemRef = doc(db, "cartItems", id);
  //   const decrement = -1;
  //   const count = docSnap.data().count;
  //   const price = docSnap.data().price;
  //   const newCount = count + decrement;
  //   const newPrice = price * newCount;
  //   setTotalPrice(newPrice);
  //   await updateDoc(cartItemRef, {
  //     count: newCount,
  //     price: newPrice
  //   });
  // };

  // const onPlusItem = async (id) => {
  //   const cartItemRef = doc(db, "cartItems", id);
  //   const increment = 1;
  //   const count = docSnap.data().count;
  //   const price = docSnap.data().price;
  //   const newCount = count + increment;
  //   const newPrice = price * newCount;
  //   setTotalPrice(newPrice);
  //   await updateDoc(cartItemRef, {
  //     count: newCount,
  //     price: newPrice
  //   });
  // };

  // * TO delete cart item
  const deleteCartItem = async (id) => {
    try {
      const cartCollectionRef = doc(db, 'cartItems', id);
      await deleteDoc(cartCollectionRef);
      getCartItems();
      toast({
        title: '?????????? ???????????? ???? ??????????????!',
        status: 'success',
        isClosable: true,
        position: 'top-right',
        duration: 3000,
      });
    } catch (err) {
      console.log('error:', err);
    }
  };
  // *TO minus item cart data from db
  const onMinusItem = async(id) => {
    try {
      const cartItemRef = doc(db, 'cartItems', id);
      const decrement = increment(-1);
      await updateDoc(cartItemRef, {
        count: decrement
      });
      const docSnap = await getDoc(cartItemRef);
      const count = docSnap.data().count;
      if (count === 0) {
        await deleteDoc(cartItemRef);
        console.log("Item deleted successfully!");
      } else {
        console.log("Item decremented successfully!");
      }
      getCartItems();
    } catch (error) {
      console.error("Error decrementing item: ", error);
    }
  }
  // *TO plus item cart data from db
  const onPlusItem = async(id) => {
    try {
      const cartItemRef = doc(db, 'cartItems', id);
      const decrement = increment(1);
      await updateDoc(cartItemRef, {
        count: decrement
      });
      const docSnap = await getDoc(cartItemRef);
      const count = docSnap.data().count;
      if (count === 0) {
        await deleteDoc(cartItemRef);
        console.log("Item deleted successfully!");
      } else {
        console.log("Item incremented successfully!");
      }
      getCartItems();
    } catch (error) {
      console.error("Error incremented item: ", error);
    }
  }
  // *TO get cart data from db
  const getCartItems = async () => {
    try {
      const cartCollectionRef = collection(db, 'cartItems');
      const data = await getDocs(cartCollectionRef);
      const cartData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setCartEmpty(cartData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <section className="shopping-cart">
      <div className="container">
        <div className="shopping-cart__header">
          <div className="shopping-cart__image">
            <figure>
              <img src={cartSvg} alt="??????????????" />
            </figure>
            <h2>??????????????</h2>
          </div>
          <Button>
            <img src={cartClearSvg} alt="???????????????? ??????????????" />
            ???????????????? ??????????????
          </Button>
        </div>
        <div className="shopping-cart__extra">
          <p>
            ??????????????????????????:<strong> ????????????????</strong>
          </p>
        </div>
        <section className="shopping-cart__items">
          {cartEmpty.map((el) => (
            <section key={el.id} className="shopping-cart__item">
              <div>
                <figure>
                  <img src={el.image} alt="???????????????? ????????????" title="???????????????? ????????????" />
                </figure>
                <div className="shopping-cart__items_item">
                  <p>{el.title}</p>
                  <p>
                    <strong>??????-????:</strong>??????????. ?????? ????????????
                  </p>
                  <p>
                    <strong>????????:</strong>
                    {el.name.name}
                  </p>
                  <p>
                    <strong>??????????:</strong>
                    {el.textile}
                  </p>
                  <p>
                    <strong>????????????:</strong>
                    {el.sizes}
                  </p>
                </div>
              </div>
              <div className="shopping-cart__items_count">
                <img
                  onClick={() => onPlusItem(el.id)}
                  src={plusSvg}
                  alt="???????????????? ???????? ??????????"
                  title="???????????????? ???????? ??????????"
                />
                <span>
                  <strong>{el.count}</strong>
                </span>
                <img
                  onClick={() => onMinusItem(el.id)}
                  src={minusSvg}
                  alt="?????????????? ???????? ??????????"
                  title="?????????????? ???????? ??????????"
                />
              </div>
              <div className="shopping-cart__items_price">
                <p>
                  <strong>{el.price}</strong>&nbsp;??????.
                </p>
                <img
                  src={trashSvg}
                  onClick={() => deleteCartItem(el.id)}
                  alt="?????????????? ??????????"
                  title="?????????????? ??????????"
                />
              </div>
            </section>
          ))}
        </section>
        <section className="shopping-cart__payment">
          <p>
            ??????????: <strong>1500</strong> ????.
          </p>
          <p>
            ?????????? ????????????: <strong>1500</strong> ??????.
          </p>
          <Button>???????????????? ????????????</Button>
          <Button>?????????????????? ??????????</Button>
        </section>
      </div>
      <ContuctUs />
    </section>
  );
};
