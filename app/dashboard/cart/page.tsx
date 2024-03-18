import { cookies } from 'next/headers';

export const metadata = {
  title: 'Carrito de compras',
};

const CartPage = () => {
  const cookieStore = cookies();
  const cart = JSON.parse(cookieStore.get('cart')?.value || '{}');

  console.log(cart);
  return (
    <div>
      <h1 className="text-5xl">Productos en el carrito</h1>
      <hr className="mb-2" />

      <div className="flex w-full flex-col gap-2 sm:flex-row"></div>
    </div>
  );
};
export default CartPage;
