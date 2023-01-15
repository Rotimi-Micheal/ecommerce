import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import {
  decreaseCartItems,
  increaseCartItems,
  removeItemFromCart,
} from "../../app/CartSlice";

const CartItem = ({ item }) => {
  const { id, title, text, img, color, shadow, price, Quantity } = item;
  const dispatch = useDispatch();

  const onRemoveItemHandler = () => {
    dispatch(
      removeItemFromCart({
        ...item,
      })
    );
  };

  const increaseItemQTYHandler = () => {
    dispatch(
      increaseCartItems({
        ...item,
      })
    );
  };

  const decreaseItemQTYHandler = () => {
    dispatch(
      decreaseCartItems({
        ...item,
      })
    );
  };

  return (
    <Fragment>
      <div className="flex items-center justify-between px-5 w-full ">
        <div className="flex items-center gap-5 ">
          <div
            className={`bg-gradient-to-b ${color} ${shadow} relative rounded p-3 hover:scale-105 ease-in-out grid items-center`}
          >
            <img
              src={img}
              alt={`cartimg/${title}`}
              className="w-36 h-auto object-fill lg:w-28"
            />
            <div className="absolute right-1 top-1 blur-theme-effect bg-white/80 text-slate-900 text-xs px-1 rounded">
              ${price}
            </div>
          </div>
          <div className="grid items-center gap-4 ">
            <div className="grid items-center leading-none">
              <h1 className="font-medium text-lg text-slate-900 lg:text-sm">
                {title}
              </h1>
              <p className="text-sm text-slate-800 lg:text-xs">{text}</p>
            </div>
            <div className="flex items-center justify-around w-full ">
              <button
                type="button "
                className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90"
                onClick={decreaseItemQTYHandler}
              >
                <MinusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]" />
              </button>
              <div className="bg-theme-cart rounded text-white font-medium lg:text-xs w-7 h-6 lg:h-5 lg:w-6 flex items-center justify-center">
                {Quantity}
              </div>
              <button
                type="button"
                className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90"
                onClick={increaseItemQTYHandler}
              >
                <PlusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]" />
              </button>
            </div>
          </div>
        </div>
        <div className="grid items-center gap-5 ">
          <div className="grid items-center justify-center ">
            <h1 className="text-lg lg:text-base text-slate-900 font-medium">
              ${price * Quantity}
            </h1>
          </div>
          <div className="grid items-center justify-center">
            <button
              type="button"
              className="bg-theme-cart rounded text-white p-1 lg:p-0.5 grid items-center justify-items-center cursor-pointer"
              onClick={onRemoveItemHandler}
            >
              <TrashIcon className="w-5 h-5 text-white " />
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CartItem;
