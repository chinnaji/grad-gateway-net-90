import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShoppingCart, Plus, Minus, Trash2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import tshirtImage from "@/assets/tshirt.jpg";
import mugImage from "@/assets/mug.jpg";
import hoodieImage from "@/assets/hoodie.jpg";
import licenseFrameImage from "@/assets/license-frame.jpg";
import penSetImage from "@/assets/pen-set.jpg";
import decalsImage from "@/assets/decals.jpg";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

interface CartItem extends Product {
  quantity: number;
}

const Store = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCheckout, setShowCheckout] = useState(false);

  const products: Product[] = [
    {
      id: 1,
      name: "University Alumni T-Shirt",
      price: 25.99,
      image: tshirtImage,
      description: "Premium cotton t-shirt with university logo",
      category: "Apparel"
    },
    {
      id: 2,
      name: "Alumni Coffee Mug",
      price: 12.99,
      image: mugImage,
      description: "Ceramic mug perfect for morning coffee",
      category: "Accessories"
    },
    {
      id: 3,
      name: "University Hoodie",
      price: 45.99,
      image: hoodieImage,
      description: "Warm and comfortable hoodie with embroidered logo",
      category: "Apparel"
    },
    {
      id: 4,
      name: "Alumni License Plate Frame",
      price: 8.99,
      image: licenseFrameImage,
      description: "Show your pride on the road",
      category: "Accessories"
    },
    {
      id: 5,
      name: "University Pen Set",
      price: 18.99,
      image: penSetImage,
      description: "Elegant pen set in presentation box",
      category: "Office"
    },
    {
      id: 6,
      name: "Alumni Decal Pack",
      price: 5.99,
      image: decalsImage,
      description: "Set of 5 weather-resistant decals",
      category: "Accessories"
    }
  ];

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, change: number) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    // Store order in localStorage
    const order = {
      items: cart,
      total: getCartTotal(),
      date: new Date().toISOString(),
      id: Date.now()
    };
    
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    
    setCart([]);
    setShowCheckout(false);
    alert('Order placed successfully!');
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Alumni <span className="text-accent">Store</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Show your university pride with our exclusive alumni merchandise
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="group hover:shadow-card transition-all duration-300">
                  <CardHeader>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{product.category}</Badge>
                      <span className="text-xl font-bold text-accent">${product.price}</span>
                    </div>
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                    <Button onClick={() => addToCart(product)} className="w-full">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Shopping Cart */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Cart ({cart.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                {cart.length === 0 ? (
                  <p className="text-muted-foreground text-center py-4">Your cart is empty</p>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-2 border rounded">
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{item.name}</h4>
                          <p className="text-accent font-bold">${item.price}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-6 w-6"
                            onClick={() => updateQuantity(item.id, -1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-6 w-6"
                            onClick={() => updateQuantity(item.id, 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                          <Button
                            size="icon"
                            variant="destructive"
                            className="h-6 w-6"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                    
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-bold">Total: </span>
                        <span className="font-bold text-accent text-xl">
                          ${getCartTotal().toFixed(2)}
                        </span>
                      </div>
                      <Button 
                        onClick={() => setShowCheckout(true)} 
                        className="w-full"
                        disabled={cart.length === 0}
                      >
                        Checkout
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Checkout Modal */}
        {showCheckout && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle>Checkout</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCheckout} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required />
                  </div>
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input id="city" required />
                    </div>
                    <div>
                      <Label htmlFor="zip">ZIP Code</Label>
                      <Input id="zip" required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="card">Card Number</Label>
                    <Input id="card" placeholder="1234 5678 9012 3456" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry">Expiry</Label>
                      <Input id="expiry" placeholder="MM/YY" required />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" required />
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-bold">Total: </span>
                      <span className="font-bold text-accent text-xl">
                        ${getCartTotal().toFixed(2)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button type="button" variant="outline" onClick={() => setShowCheckout(false)}>
                      Cancel
                    </Button>
                    <Button type="submit" className="flex-1">
                      Place Order
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Store;