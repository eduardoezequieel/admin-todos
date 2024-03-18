'use client';

import { Product } from '@/app/data/products';
import Image from 'next/image';
import { IoAddCircleOutline, IoTrashOutline } from 'react-icons/io5';
import { Star } from '.';
import { addProductToCart, deleteProductFromCart } from '../actions';
import { useRouter } from 'next/navigation';

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  const router = useRouter();
  const onAddToCard = () => {
    addProductToCart(product.id);
    router.refresh();
  };

  const onDeleteFromCart = () => {
    deleteProductFromCart(product.id);
    router.refresh();
  };

  return (
    <div className="max-w-sm rounded-lg bg-white shadow">
      {/* Product Image */}
      <div className="p-2">
        <Image
          width={500}
          height={500}
          className="rounded"
          src={product.image}
          alt="product image"
        />
      </div>

      {/* Title */}
      <div className="px-5 pb-5">
        <a href="#">
          <h3 className="text-xl font-semibold tracking-tight text-gray-900">{product.name}</h3>
        </a>
        <div className="mb-5 mt-2.5 flex items-center">
          {/* Stars */}
          <Star rating={product.rating} />

          {/* Rating Number */}
          <span className="ml-3 mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 ">
            {product.rating.toFixed(1)}
          </span>
        </div>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900">${product.price}</span>

          <div className="flex">
            <button
              onClick={onAddToCard}
              className="mr-2 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
            >
              <IoAddCircleOutline size={25} />
            </button>
            <button
              onClick={onDeleteFromCart}
              className="rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-blue-300"
            >
              <IoTrashOutline size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
