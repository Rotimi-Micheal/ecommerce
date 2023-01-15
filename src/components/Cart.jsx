import React, { Fragment, useEffect } from "react";
import CartCount from "./cart/CartCount";
import CartEmpty from "./cart/CartEmpty";
import CartItem from "./cart/CartItem";
import {
  setCloseCart,
  selectCartState,
  selectCartItems,
  clearCartItems,
  getTotals,
  selectTotalAmount,
  selectTotalQuantity,
} from "../app/CartSlice";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState);
  const cartItems = useSelector(selectCartItems);
  const TotalAmount = useSelector(selectTotalAmount);
  const TotalQuantity = useSelector(selectTotalQuantity);

  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems, dispatch]);

  const onToggleCart = () => {
    dispatch(setCloseCart({ cartState: false }));
  };

  const clearCartHandler = () => {
    dispatch(clearCartItems());
  };

  return (
    <Fragment>
      <div
        className={`fixed top-0 left-0 right-0 button-0 blur-effect-theme w-full h-screen opacity-100 z-[250] ${
          ifCartState
            ? "opacity-100 visible translate-x-0"
            : "opacity-0 invisible translate-x-8"
        } `}
      >
        <div
          className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0`}
        >
          <CartCount
            TotalQuantity={TotalQuantity}
            onToggleCart={onToggleCart}
            clearCartHandler={clearCartHandler}
          />
          {cartItems?.length === 0 ? (
            <CartEmpty onToggleCart={onToggleCart} />
          ) : (
            <div>
              <div className="flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[75vh] scroll-smooth py-3">
                {cartItems?.map((item, index) => (
                  <CartItem key={index} item={item} />
                ))}
              </div>

              <div className="fixed bottom-0 bg-white w-full px-5 py-6 grid">
                <div className="flex items-center justify-between">
                  <h1 className="text-base font-semibold  uppercase">
                    Total Cart Price
                  </h1>
                  <h1 className="text-sm rounded bg-theme-cart text-slate-100 py-0.5 px-3">
                    {TotalAmount}
                  </h1>
                </div>
                <div className="grid items-center gap-2">
                  <p className="text-sm font-medium text-center">
                    Taxes and shipping will be calculated at shipping
                  </p>
                  <button className="button-theme bg-theme-cart text-white">
                    Check-Out
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;
