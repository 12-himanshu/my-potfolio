import { useEffect, useState } from 'react';
import { fetchProducts, ShopifyProduct } from '@/lib/shopify';
import { ProductCard } from './ProductCard';
import { Loader2, PackageX } from 'lucide-react';

export const ProductGrid = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const data = await fetchProducts(20);
      setProducts(data);
      setLoading(false);
    };
    loadProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <PackageX className="h-16 w-16 text-muted-foreground mb-4" />
        <h3 className="text-xl font-display font-medium mb-2">No products yet</h3>
        <p className="text-muted-foreground max-w-md">
          Your store doesn't have any products. Tell me what products you'd like to create and I'll add them for you!
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.node.id} product={product} />
      ))}
    </div>
  );
};
