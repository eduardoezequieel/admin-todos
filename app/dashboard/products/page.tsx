import { products } from '@/app/data/products';
import { ProductCard } from './components';

export const metadata = {
  title: 'Products',
};

const ProductsPage = () => {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
export default ProductsPage;
