import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProductByHandle } from '@/lib/shopify';
import { useCartStore, CartItem } from '@/stores/cartStore';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Loader2, ArrowLeft, ShoppingBag, Minus, Plus } from 'lucide-react';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { handle } = useParams<{ handle: string }>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState<any>(null);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    const loadProduct = async () => {
      if (!handle) return;
      setLoading(true);
      const data = await fetchProductByHandle(handle);
      setProduct(data);
      
      if (data?.variants?.edges?.[0]) {
        const firstVariant = data.variants.edges[0].node;
        setSelectedVariant(firstVariant);
        
        const initialOptions: Record<string, string> = {};
        firstVariant.selectedOptions?.forEach((opt: { name: string; value: string }) => {
          initialOptions[opt.name] = opt.value;
        });
        setSelectedOptions(initialOptions);
      }
      
      setLoading(false);
    };
    loadProduct();
  }, [handle]);

  useEffect(() => {
    if (!product) return;
    
    const variant = product.variants.edges.find((v: any) => 
      v.node.selectedOptions.every((opt: { name: string; value: string }) => 
        selectedOptions[opt.name] === opt.value
      )
    );
    
    if (variant) {
      setSelectedVariant(variant.node);
    }
  }, [selectedOptions, product]);

  const handleAddToCart = () => {
    if (!selectedVariant || !product) return;

    const cartItem: CartItem = {
      product: { node: product },
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity,
      selectedOptions: selectedVariant.selectedOptions || []
    };
    
    addItem(cartItem);
    toast.success('Added to bag', {
      description: `${product.title} x ${quantity}`,
      position: 'top-center',
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center py-32">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-display mb-4">Product not found</h1>
          <Link to="/" className="text-accent hover:underline">
            Return to shop
          </Link>
        </div>
      </div>
    );
  }

  const images = product.images.edges || [];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8 md:py-16">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to shop
        </Link>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-muted">
              {images[selectedImageIndex] ? (
                <img
                  src={images[selectedImageIndex].node.url}
                  alt={images[selectedImageIndex].node.altText || product.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  No image
                </div>
              )}
            </div>
            
            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {images.map((img: any, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-colors ${
                      idx === selectedImageIndex ? 'border-accent' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={img.node.url}
                      alt={img.node.altText || `${product.title} ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-semibold mb-2">
                {product.title}
              </h1>
              <p className="text-2xl text-foreground">
                {selectedVariant?.price.currencyCode} {parseFloat(selectedVariant?.price.amount || '0').toFixed(2)}
              </p>
            </div>

            {product.description && (
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            )}

            {/* Options */}
            {product.options?.filter((opt: any) => opt.name !== 'Title').map((option: any) => (
              <div key={option.name} className="space-y-3">
                <label className="text-sm font-medium">{option.name}</label>
                <div className="flex flex-wrap gap-2">
                  {option.values.map((value: string) => (
                    <button
                      key={value}
                      onClick={() => setSelectedOptions(prev => ({ ...prev, [option.name]: value }))}
                      className={`px-4 py-2 rounded-md border text-sm font-medium transition-colors ${
                        selectedOptions[option.name] === value
                          ? 'bg-primary text-primary-foreground border-primary'
                          : 'bg-background border-border hover:border-foreground'
                      }`}
                    >
                      {value}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            {/* Quantity */}
            <div className="space-y-3">
              <label className="text-sm font-medium">Quantity</label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button
              onClick={handleAddToCart}
              size="lg"
              className="w-full bg-primary hover:bg-primary/90"
              disabled={!selectedVariant?.availableForSale}
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              {selectedVariant?.availableForSale ? 'Add to Bag' : 'Sold Out'}
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
