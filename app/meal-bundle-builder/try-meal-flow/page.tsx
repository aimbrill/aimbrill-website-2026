"use client";

/**
 * Embedded Meal Flow (ported from supplied Vite demo)
 */
import React, { useState, useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Loader2,
  MapPin,
  Calendar as CalendarIcon,
  ShoppingCart,
  Plus,
  Minus,
  Utensils,
  Zap,
  Leaf,
  Flame,
  X,
  MessageCircle,
  Mail,
  ExternalLink,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  ChevronDown,
  Star,
} from "lucide-react";

// --- Helpers ---

type ShopifyProduct = {
  id: string | number;
  title: string;
  images: { src?: string }[];
  variants: { price: string; compare_at_price?: string | null }[];
};

const getBrandName = (url: string) => {
  if (!url) return "YOUR BRAND";
  try {
    const domain = url.replace(/^(https?:\/\/)?(www\.)?/, "").split(".")[0];
    return domain.toUpperCase();
  } catch {
    return url.toUpperCase();
  }
};

const MOCK_CITY_ZIPS: Record<string, string> = {
  london: "SW1A 1AA",
  "new york": "10001",
  mumbai: "400001",
  sydney: "2000",
};

// --- Types ---

interface Product {
  id: string | number;
  name: string;
  price: number;
  originalPrice: number;
  calories: number;
  protein: number;
  tag: string;
  image: string;
}

interface CartItem extends Product {
  quantity: number;
}

type AppStep = "landing" | "loading" | "zipcode" | "delivery" | "products" | "summary" | "success";

// --- Mock Data ---

const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Grilled Chicken Protein Bowl",
    price: 12.99,
    originalPrice: 15.99,
    calories: 450,
    protein: 42,
    tag: "Best Seller",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Vegan Power Meal",
    price: 11.49,
    originalPrice: 13.99,
    calories: 380,
    protein: 24,
    tag: "Vegan",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Keto Paneer Bowl",
    price: 13.49,
    originalPrice: 16.49,
    calories: 520,
    protein: 30,
    tag: "Keto",
    image:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Low Carb Salad Box",
    price: 10.99,
    originalPrice: 12.99,
    calories: 320,
    protein: 18,
    tag: "Low Carb",
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Muscle Gain Meal",
    price: 14.99,
    originalPrice: 18.99,
    calories: 650,
    protein: 55,
    tag: "High Protein",
    image:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Balanced Diet Thali",
    price: 12.49,
    originalPrice: 14.99,
    calories: 480,
    protein: 28,
    tag: "Balanced",
    image:
      "https://images.unsplash.com/photo-1546069901-eacef0df6022?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Mediterranean Quinoa Bowl",
    price: 11.99,
    originalPrice: 14.49,
    calories: 410,
    protein: 22,
    tag: "Vegan",
    image:
      "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "Steamed Fish & Greens",
    price: 15.49,
    originalPrice: 19.99,
    calories: 350,
    protein: 38,
    tag: "Best Seller",
    image:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    name: "Turkey Meatball Pasta",
    price: 13.99,
    originalPrice: 16.99,
    calories: 510,
    protein: 35,
    tag: "High Protein",
    image:
      "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    name: "Tofu Stir Fry",
    price: 10.49,
    originalPrice: 12.99,
    calories: 340,
    protein: 20,
    tag: "Vegan",
    image:
      "https://images.unsplash.com/photo-1546069901-5ec6a7ad9028?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 11,
    name: "Beef Steak & Asparagus",
    price: 16.99,
    originalPrice: 21.99,
    calories: 580,
    protein: 48,
    tag: "Keto",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 12,
    name: "Lentil Soup & Sourdough",
    price: 9.99,
    originalPrice: 11.99,
    calories: 390,
    protein: 18,
    tag: "Balanced",
    image:
      "https://images.unsplash.com/photo-1547592115-85748111932c?auto=format&fit=crop&w=800&q=80",
  },
];

// --- Components ---

const CalendarPicker = ({
  value,
  onChange,
  onNext,
}: {
  value: string;
  onChange: (val: string) => void;
  onNext: () => void;
}) => {
  const [currentMonth, setCurrentMonth] = useState(() => {
    if (value) return new Date(value);
    return new Date();
  });

  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const handleDayClick = (day: number) => {
    // Create date in local timezone to avoid offsets
    const selected = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const year = selected.getFullYear();
    const month = String(selected.getMonth() + 1).padStart(2, "0");
    const date = String(selected.getDate()).padStart(2, "0");
    onChange(`${year}-${month}-${date}`);
  };

  const nextMonth = () =>
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  const prevMonth = () =>
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = [] as Array<number | null>;
  const totalDays = daysInMonth(currentMonth.getFullYear(), currentMonth.getMonth());
  const startDay = firstDayOfMonth(currentMonth.getFullYear(), currentMonth.getMonth());

  for (let i = 0; i < startDay; i++) days.push(null);
  for (let i = 1; i <= totalDays; i++) days.push(i);

  const isToday = (day: number) => {
    const today = new Date();
    return (
      today.getDate() === day &&
      today.getMonth() === currentMonth.getMonth() &&
      today.getFullYear() === currentMonth.getFullYear()
    );
  };

  const isSelected = (day: number) => {
    if (!value) return false;
    const [y, m, d] = value.split("-").map(Number);
    return y === currentMonth.getFullYear() && m === currentMonth.getMonth() + 1 && d === day;
  };

  return (
    <div
      className="brand-card p-4 w-full max-w-sm mx-auto"
      style={{ background: "transparent", boxShadow: "none" }}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-black text-primary uppercase tracking-tight">
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </h3>
        <div className="flex gap-1">
          <button
            onClick={prevMonth}
            className="p-1.5 border border-primary/10 rounded-xl hover:bg-accent transition-all active:scale-95 shadow-sm"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={nextMonth}
            className="p-1.5 border border-primary/10 rounded-xl hover:bg-accent transition-all active:scale-95 shadow-sm"
          >
            <ChevronRightIcon size={16} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center mb-2">
        {["S", "M", "T", "W", "T", "F", "S"].map((d, idx) => (
          <div
            key={`${d}-${idx}`}
            className="font-black text-primary/30 text-[8px] uppercase tracking-widest"
          >
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days.map((day, idx) => {
          const dateObj = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day ?? 1);
          const isPast = day !== null && dateObj < new Date(new Date().setHours(0, 0, 0, 0));
          const isEarliest =
            day !== null &&
            !isPast &&
            dateObj.toDateString() ===
              new Date(new Date().setDate(new Date().getDate() + 1)).toDateString(); // Simplified earliest logic

          return (
            <button
              key={idx}
              disabled={day === null || isPast}
              onClick={() => {
                if (day) {
                  handleDayClick(day);
                  setTimeout(onNext, 300); // Small delay for visual feedback
                }
              }}
              className={`h-10 flex items-center justify-center rounded-xl font-black text-xs transition-all relative ${
                day === null
                  ? "invisible"
                  : isPast
                    ? "opacity-20 cursor-not-allowed text-primary grayscale"
                    : isSelected(day)
                      ? "bg-primary text-white shadow-[2px_2px_0px_0px_rgba(255,215,0,1)]"
                      : isToday(day)
                        ? "bg-accent/30 text-primary border-2 border-primary border-dashed"
                        : "hover:bg-primary-light text-primary hover:scale-105 active:scale-95"
              } ${isEarliest && !isSelected(day) ? "border-2 border-wonky-orange" : ""}`}
            >
              {day}
              {isEarliest && (
                <span className="absolute -top-1.5 -right-1 px-1 bg-wonky-orange text-white text-[6px] rounded uppercase font-black whitespace-nowrap shadow-sm">
                  Earliest
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

const Stepper = ({ currentStep }: { currentStep: AppStep }) => {
  const steps = [
    { id: "zipcode", label: "Zipcode", num: 1 },
    { id: "delivery", label: "Date", num: 2 },
    { id: "products", label: "Meal Plan", num: 3 },
    { id: "summary", label: "Checkout", num: 4 },
  ];

  const getStepIndex = (s: AppStep) => {
    if (s === "landing" || s === "loading") return -1;
    if (s === "success") return 5;
    const steps_ids = ["zipcode", "delivery", "products", "summary"];
    return steps_ids.indexOf(s);
  };

  const currentIndex = getStepIndex(currentStep);

  return (
    <div className="bg-transparent py-3 px-4 border-b border-primary/5 flex justify-center mt-0 transition-all duration-300">
      <div className="flex items-center justify-between w-full max-w-3xl">
        {steps.map((step, idx) => {
          const isCompleted = currentIndex > idx;
          const isActive = currentIndex === idx;
          return (
            <div key={step.id} className="flex items-center flex-1 last:flex-none group">
              <div
                className="flex items-center gap-3 transition-opacity duration-300"
                style={{ opacity: isActive ? 1 : isCompleted ? 0.8 : 0.5 }}
              >
                <div
                  className={`w-7 h-7 rounded-lg border flex items-center justify-center font-black text-[11px] transition-all duration-300 ${
                    isActive
                      ? "bg-accent border-primary scale-110 shadow-md transform"
                      : isCompleted
                        ? "bg-primary border-primary text-white"
                        : "bg-white border-primary/20 text-primary/40"
                  }`}
                >
                  {isCompleted ? "✓" : step.num}
                </div>
                <span
                  className={`hidden md:inline font-bold text-[9px] uppercase tracking-[0.15em] transition-colors duration-300 ${isActive ? "text-primary" : "text-primary/40"}`}
                >
                  {step.label}
                </span>
              </div>
              {idx < steps.length - 1 && (
                <div className="flex-1 mx-4 h-px bg-primary/10 transition-colors duration-300" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function Page() {
  const [step, setStep] = useState<AppStep>("landing");
  const [headerHeight, setHeaderHeight] = useState(0);
  const [viewportHeight, setViewportHeight] = useState<number | null>(null);
  const [embedAvailable, setEmbedAvailable] = useState(false);
  const [brandUrl, setBrandUrl] = useState("");
  const [category, setCategory] = useState("Food");
  const [categoryMenuOpen, setCategoryMenuOpen] = useState(false);
  const categoryMenuRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [plan, setPlan] = useState<"one-time" | "weekly" | "monthly">("weekly");
  const [products, setProducts] = useState<Product[]>(MOCK_PRODUCTS);
  const [dietaryFilter, setDietaryFilter] = useState<"All" | "Vegan" | "Keto" | "High Protein">(
    "All",
  );
  const [isCalculating, setIsCalculating] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loadingStep, setLoadingStep] = useState(0);
  const [showLeadPopup, setShowLeadPopup] = useState(false);
  const [brandDescription, setBrandDescription] = useState(
    "Fresh ingredients, delicious recipes delivered weekly.",
  );

  useEffect(() => {
    if (step === "success") {
      const timer = setTimeout(() => {
        setShowLeadPopup(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [step]);

  // Measure the fixed header height so we can reserve space for embedded iframe
  useEffect(() => {
    const updateHeaderHeight = () => {
      try {
        const nav = document.querySelector('nav[aria-label="Main navigation"]');
        const h = nav ? Math.ceil((nav as HTMLElement).getBoundingClientRect().height) : 0;
        setHeaderHeight(h);
      } catch (e) {
        setHeaderHeight(0);
      }
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  // Match iframe height to the visible viewport (mobile URL bar / keyboard)
  useEffect(() => {
    const updateViewport = () => {
      const vv = window.visualViewport;
      const h = vv?.height ?? window.innerHeight;
      setViewportHeight(Math.max(0, Math.round(h)));
    };
    updateViewport();
    window.visualViewport?.addEventListener("resize", updateViewport);
    window.visualViewport?.addEventListener("scroll", updateViewport);
    window.addEventListener("resize", updateViewport);
    return () => {
      window.visualViewport?.removeEventListener("resize", updateViewport);
      window.visualViewport?.removeEventListener("scroll", updateViewport);
      window.removeEventListener("resize", updateViewport);
    };
  }, []);

  // Check if the built Vite demo exists in public/meal-flow
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const resp = await fetch("/meal-bundle-builder/meal-flow/index.html", {
          method: "HEAD",
        });
        if (mounted && resp && resp.ok) setEmbedAvailable(true);
      } catch (e) {
        // ignore
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (!categoryMenuOpen) return;
    const close = (e: MouseEvent) => {
      const el = categoryMenuRef.current;
      if (el && !el.contains(e.target as Node)) setCategoryMenuOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [categoryMenuOpen]);

  const loadingMessages = [
    "Analyzing your brand...",
    "Detecting products...",
    "Optimizing subscription flow...",
    "Preparing experience...",
  ];

  // --- Logic ---

  const handleGenerateFlow = async (e: React.FormEvent) => {
    e.preventDefault();
    setStep("loading");

    for (let i = 0; i < loadingMessages.length; i++) {
      setLoadingStep(i);
      await new Promise((resolve) => setTimeout(resolve, 800));
    }

    try {
      // 1. Clean the URL
      let cleanUrl = brandUrl.trim().toLowerCase();
      if (!cleanUrl.startsWith("http")) {
        cleanUrl = `https://${cleanUrl}`;
      }

      // 2. Extract domain for better fetching if needed
      const urlObj = new URL(cleanUrl);
      const origin = urlObj.origin;

      // 3. Attempt to fetch Shop details for description
      try {
        const shopResponse = await fetch(`${origin}/shop.json`);
        if (shopResponse.ok) {
          const shopData = await shopResponse.json();
          if (shopData.shop && shopData.shop.description) {
            setBrandDescription(shopData.shop.description);
          } else if (shopData.shop && shopData.shop.name) {
            setBrandDescription(
              `Premium ${category} Subscription Flow created for ${shopData.shop.name}`,
            );
          }
        }
      } catch (e) {
        console.warn("Shop details fetch failed");
      }

      // 4. Attempt to fetch Products from Shopify endpoint
      const response = await fetch(`${origin}/products.json`);
      if (response.ok) {
        const data = await response.json();
        if (data.products && data.products.length > 0) {
          const fetchedProducts: Product[] = data.products
            .slice(0, 12)
            .map((p: ShopifyProduct) => ({
              id: p.id,
              name: p.title,
              price: parseFloat(p.variants[0].price),
              originalPrice:
                (p.variants[0].compare_at_price ? parseFloat(p.variants[0].compare_at_price) : 0) ||
                parseFloat(p.variants[0].price) * 1.2,
              calories: Math.floor(Math.random() * 300) + 300,
              protein: Math.floor(Math.random() * 20) + 20,
              tag: "Best Seller",
              image: p.images[0]?.src || "https://picsum.photos/seed/food/800/600",
            }));
          setProducts(fetchedProducts);
        }
      }
    } catch (err) {
      console.error("Shopify fetch failed, using mock data:", err);
    }

    setStep("zipcode");
  };

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string | number) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === productId);
      if (existing && existing.quantity > 1) {
        return prev.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item,
        );
      }
      return prev.filter((item) => item.id !== productId);
    });
  };

  const filteredProducts = useMemo(() => {
    if (dietaryFilter === "All") return products;
    return products.filter((p) => p.tag === dietaryFilter);
  }, [products, dietaryFilter]);

  const totalPrice = useMemo(() => {
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    if (plan === "weekly") return subtotal * 0.9;
    if (plan === "monthly") return subtotal * 0.8;
    return subtotal;
  }, [cart, plan]);

  const discountAmount = useMemo(() => {
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return subtotal - totalPrice;
  }, [cart, totalPrice]);

  // --- Renderers ---

  const renderLanding = () => (
    <div className="h-full flex items-center justify-center p-6 bg-dots-pattern">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-white/40 backdrop-blur-sm p-8 md:p-12 rounded-[3rem] border-2 border-primary/5 shadow-sm">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-10"
        >
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-black text-primary leading-[1.1] uppercase tracking-tighter">
              Build Your <br />
              <span className="text-wonky-orange">Dream</span> Flow.
            </h1>
            <p className="text-xl font-bold text-primary/60 max-w-md leading-relaxed">
              Generate high-converting subscription experiences for D2C brands in seconds.
            </p>
          </div>

          <div className="flex flex-wrap gap-10 items-center pt-4">
            <div className="flex flex-col">
              <span className="text-3xl font-black text-primary italic leading-none">50+</span>
              <span className="micro-label mt-2">Brands Powered</span>
            </div>
            <div className="w-px h-10 bg-primary/10" />
            <div className="flex flex-col">
              <span className="text-3xl font-black text-primary italic leading-none">24/7</span>
              <span className="micro-label mt-2">Auto-Optimization</span>
            </div>
          </div>

          <div className="pt-8 flex items-center gap-4">
            <div className="h-0.5 w-16 bg-wonky-orange rounded-full" />
            <span className="font-mono text-[11px] font-black uppercase tracking-[0.4em] text-primary/40">
              Trusted by <span className="text-primary italic">MealFlow Box</span>
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="brand-card p-10 md:p-14 relative"
        >
          <div className="absolute -top-6 -right-6 w-28 h-28 bg-accent rounded-full border-4 border-primary flex items-center justify-center -rotate-12 shadow-[8px_8px_0px_0px_rgba(17,24,39,1)] z-10">
            <span className="font-black text-primary uppercase text-center leading-tight text-sm">
              Start
              <br />
              Free
            </span>
          </div>

          <h2 className="text-2xl font-black text-primary mb-10 uppercase tracking-tight">
            Configure Experience
          </h2>
          <form onSubmit={handleGenerateFlow} className="space-y-8">
            <div className="space-y-6">
              <div>
                <label className="micro-label mb-2 block">Brand URL</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. yourbrand.com"
                  className="brand-input text-lg py-4"
                  value={brandUrl}
                  onChange={(e) => setBrandUrl(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div ref={categoryMenuRef} className="relative">
                  <label className="micro-label mb-2 block">Category</label>
                  <button
                    type="button"
                    className="brand-input text-lg py-4 w-full text-left flex items-center justify-between gap-2 cursor-pointer"
                    aria-expanded={categoryMenuOpen}
                    aria-haspopup="listbox"
                    onClick={() => setCategoryMenuOpen((o) => !o)}
                  >
                    <span className="truncate">{category}</span>
                    <ChevronDown
                      className="h-5 w-5 shrink-0 text-primary/40 pointer-events-none"
                      aria-hidden
                    />
                  </button>
                  {categoryMenuOpen ? (
                    <div
                      role="listbox"
                      className="absolute left-0 right-0 top-full z-[60] mt-1 rounded-2xl border border-primary/10 bg-white py-1 shadow-xl overflow-hidden"
                    >
                      {(["Food", "Meal", "Supplement"] as const).map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          role="option"
                          aria-selected={category === opt}
                          className={`block w-full px-4 py-3 text-left text-base font-medium hover:bg-primary/5 ${
                            category === opt ? "bg-primary/5 font-black" : ""
                          }`}
                          onClick={() => {
                            setCategory(opt);
                            setCategoryMenuOpen(false);
                          }}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  ) : null}
                </div>
                <div>
                  <label className="micro-label mb-2 block">Your Email</label>
                  <input
                    required
                    type="email"
                    placeholder="hello@brand.com"
                    className="brand-input text-lg py-4"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="micro-label mb-2 block">Contact Number</label>
                <input
                  required
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="brand-input text-lg py-4"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              className="brand-button w-full text-xl flex items-center justify-center gap-6 group h-20 shadow-2xl"
            >
              GENERATE FLOW
              <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );

  const renderLoading = () => (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-white">
      <div className="relative mb-12">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="w-32 h-32 border-4 border-dashed border-primary/20 rounded-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-primary bg-accent p-6 rounded-full border border-primary/10 shadow-xl"
          >
            <Loader2 size={40} className="animate-spin" />
          </motion.div>
        </div>
      </div>

      <div className="max-w-md w-full brand-card p-6 bg-primary text-left">
        <div className="flex items-center justify-between mb-4 border-b-2 border-white/10 pb-2">
          <span className="font-mono text-[9px] text-accent uppercase tracking-[0.3em]">
            System Diagnostics
          </span>
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
        </div>
        <div className="space-y-3 font-mono">
          {loadingMessages.map((msg, i) => (
            <motion.div
              key={msg}
              initial={{ opacity: 0, x: -10 }}
              animate={{
                opacity: loadingStep >= i ? 1 : 0.2,
                x: loadingStep >= i ? 0 : -10,
              }}
              className="flex items-center gap-3 text-[11px] tracking-tight text-white"
            >
              {loadingStep > i ? (
                <span className="text-accent underline text-[9px]">DONE</span>
              ) : loadingStep === i ? (
                <span className="text-accent animate-pulse text-[9px]">{">>>"}</span>
              ) : (
                <span className="opacity-30 text-[9px]">WAIT</span>
              )}
              {msg.toUpperCase()}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );

  const handlePincodeAutoFill = () => {
    setIsCalculating(true);
    setTimeout(() => {
      const lowerZip = zipcode.toLowerCase().trim();
      if (MOCK_CITY_ZIPS[lowerZip]) {
        setZipcode(MOCK_CITY_ZIPS[lowerZip]);
      } else {
        setZipcode("2000");
      }
      setIsCalculating(false);
    }, 1200);
  };

  const handleUseLocation = () => {
    setIsCalculating(true);
    setTimeout(() => {
      setZipcode("10001");
      setIsCalculating(false);
    }, 1500);
  };

  const renderStep1Zipcode = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-4xl mx-auto pb-24 px-6"
    >
      <div className="text-center mb-5 pt-2">
        <div className="inline-flex items-center gap-3 mb-3">
          <div className="w-1.5 h-7 bg-wonky-orange rounded-full" />
          <h2 className="text-3xl font-black text-primary uppercase tracking-tighter leading-none">
            Where to?
          </h2>
        </div>
        <p className="text-primary/40 font-medium max-w-sm mx-auto text-sm">
          Enter your delivery details to check availability in your area.
        </p>
      </div>

      <div className="max-w-xl mx-auto">
        <div className="brand-card p-10 space-y-8 bg-white relative overflow-hidden shadow-2xl border border-primary/5">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-[4rem] pointer-events-none" />

          <div className="flex items-center gap-4">
            <div className="w-1.5 h-10 bg-accent rounded-full flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-black text-primary uppercase leading-tight tracking-tight">
                Shipping Address
              </h3>
              <p className="font-mono text-[10px] text-primary/30 uppercase font-black tracking-widest">
                Verification required
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between px-1">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/40">
                Enter City or Postcode
              </label>
              <button
                onClick={handleUseLocation}
                className="text-[9px] font-black text-wonky-orange hover:underline uppercase tracking-widest flex items-center gap-1"
              >
                <MapPin size={10} />
                Use my current location
              </button>
            </div>
            <div className="relative group">
              <input
                type="text"
                placeholder="e.g. Sydney or 2000"
                className="brand-input text-xl h-16 pr-32 pl-8 rounded-full"
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
              />
              <button
                onClick={handlePincodeAutoFill}
                disabled={isCalculating}
                className="absolute right-2 top-2 bottom-2 px-6 bg-primary text-white rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-primary/90 transition-all shadow-lg active:scale-95 disabled:opacity-50"
              >
                {isCalculating ? <Loader2 size={16} className="animate-spin" /> : "AUTO-FILL"}
              </button>
            </div>

            <AnimatePresence>
              {isCalculating ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-3 bg-accent/10 p-4 rounded-xl border border-accent"
                >
                  <Loader2 size={18} className="animate-spin text-primary" />
                  <span className="text-xs font-black text-primary uppercase tracking-tight">
                    Calculating local availability...
                  </span>
                </motion.div>
              ) : (
                <div className="flex items-center gap-2 px-1 text-xs font-bold text-green-600 italic">
                  <CheckCircle2 size={14} />
                  <span>Verified for Standard & Express delivery</span>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Bar Step 1 */}
      <motion.div
        initial={{ y: 150 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 right-0 bg-white h-20 px-6 md:px-10 z-50 flex items-center shadow-[0_-15px_30px_rgba(0,0,0,0.1)]"
      >
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-8">
          <div className="hidden md:flex flex-1 items-center gap-4 text-primary/20">
            <div className="h-0.5 flex-1 bg-current" />
            <span className="font-mono text-xs font-black italic tracking-widest">
              LOGISTICS PHASE
            </span>
            <div className="h-0.5 flex-1 bg-current" />
          </div>

          <div className="flex gap-4 w-full md:w-auto md:min-w-[480px]">
            <button
              onClick={() => setStep("landing")}
              className="flex-1 py-3 border border-primary/10 rounded-full font-black uppercase text-[11px] tracking-widest text-primary hover:bg-primary-light transition-all flex items-center justify-center gap-3 active:scale-95 shadow-sm"
            >
              <ChevronLeft size={18} />
              BACK
            </button>
            <button
              disabled={!zipcode}
              onClick={() => setStep("delivery")}
              className="flex-[2] brand-button text-base flex items-center justify-center gap-4 h-14 active:scale-[0.98] transition-all"
            >
              CONTINUE
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="hidden md:flex flex-1" />
        </div>
      </motion.div>
    </motion.div>
  );

  const renderStepDelivery = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-4xl mx-auto pb-24 px-6"
      data-flow-step="date"
    >
      <div className="text-center mb-5 pt-2">
        <div className="inline-flex items-center gap-3 mb-2">
          <div className="w-1.5 h-7 bg-wonky-orange rounded-full" />
          <h2 className="text-3xl font-black text-primary uppercase tracking-tighter leading-none">
            Start Date
          </h2>
        </div>
        <p className="text-primary/40 font-medium max-w-sm mx-auto text-sm">
          Select your first delivery date to begin your fresh meal plan.
        </p>
      </div>

      <div className="max-w-xl mx-auto">
        <div className="flex justify-center">
          <CalendarPicker
            value={deliveryDate}
            onChange={setDeliveryDate}
            onNext={() => setStep("products")}
          />
        </div>
        <div className="mt-4 flex items-center justify-center gap-6 bg-gray-50/50 py-2.5 rounded-full border border-dashed border-primary/10">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-accent border border-primary/10 shadow-md" />
            <span className="font-mono text-[9px] font-black uppercase tracking-widest text-primary/40">
              Today
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-primary border border-primary/10 shadow-md" />
            <span className="font-mono text-[9px] font-black uppercase tracking-widest text-primary/40">
              Selected
            </span>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ y: 150 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 right-0 bg-white h-20 px-6 md:px-10 z-50 flex items-center shadow-[0_-15px_30px_rgba(0,0,0,0.1)]"
      >
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-8">
          <div className="hidden md:flex flex-1 items-center gap-4 text-primary/20">
            <div className="h-0.5 flex-1 bg-current" />
            <span className="font-mono text-xs font-black italic tracking-widest">
              DATE SELECTION
            </span>
            <div className="h-0.5 flex-1 bg-current" />
          </div>
          <div className="flex gap-4 w-full md:w-auto md:min-w-[480px]">
            <button
              type="button"
              onClick={() => setStep("zipcode")}
              className="flex-1 py-3 border border-primary/10 rounded-full font-black uppercase text-[11px] tracking-widest text-primary hover:bg-primary-light transition-all flex items-center justify-center gap-3 active:scale-95 shadow-sm"
            >
              <ChevronLeft size={18} />
              BACK
            </button>
            <button
              type="button"
              disabled={!deliveryDate}
              onClick={() => setStep("products")}
              className="flex-[2] brand-button text-base flex items-center justify-center gap-4 h-14 active:scale-[0.98] transition-all"
            >
              CONFIRM DATE
              <CalendarIcon size={24} />
            </button>
          </div>
          <div className="hidden md:flex flex-1" />
        </div>
      </motion.div>
    </motion.div>
  );

  const renderStepProducts = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-7xl mx-auto pb-28 px-4 md:px-8 lg:px-12"
    >
      <div className="flex justify-center mb-6 pt-2 max-sm:-mx-1">
        <div className="bg-white p-2 rounded-full border border-primary/10 shadow-xl inline-flex gap-2 max-sm:w-full max-sm:flex-nowrap max-sm:overflow-x-auto max-sm:justify-start max-sm:gap-1 max-sm:px-1.5 max-sm:py-1.5 sm:flex-wrap sm:justify-center no-scrollbar">
          {(["one-time", "weekly", "monthly"] as const).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setPlan(p)}
              className={`shrink-0 rounded-full font-black uppercase tracking-widest transition-all flex items-center gap-2 relative max-sm:px-2.5 max-sm:py-2 max-sm:text-[8px] max-sm:gap-1 sm:px-6 sm:py-2.5 sm:text-[10px] sm:gap-3 ${
                plan === p
                  ? "bg-primary text-white shadow-lg"
                  : "text-primary/40 hover:text-primary hover:bg-gray-50"
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full border border-white/20 transition-all ${
                  plan === p ? "bg-accent scale-110" : "bg-transparent"
                }`}
              />
              {p.replace("-", " ")}
              {p === "weekly" && (
                <span
                  className={`text-[7px] px-1.5 py-0.5 rounded-full font-black tracking-widest ${
                    plan === p ? "bg-accent text-primary" : "bg-accent/30 text-primary/60"
                  }`}
                >
                  10% OFF
                </span>
              )}
              {p === "monthly" && (
                <span
                  className={`text-[7px] px-1.5 py-0.5 rounded-full font-black tracking-widest ${
                    plan === p
                      ? "bg-wonky-orange text-white"
                      : "bg-wonky-orange/20 text-wonky-orange border border-wonky-orange/20"
                  }`}
                >
                  20% OFF
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2 sm:gap-3 mt-8">
        {filteredProducts.map((product) => {
          const item = cart.find((c) => c.id === product.id);
          return (
            <motion.div
              key={String(product.id)}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-[1.5rem] p-3 flex flex-col h-full border border-gray-100 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative aspect-[4/3] rounded-[1rem] overflow-hidden mb-3">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-2 right-2">
                  {item ? (
                    <div className="flex items-center bg-primary text-white rounded-full p-0.5 shadow-lg ring-2 ring-white scale-90 origin-top-right">
                      <button
                        type="button"
                        onClick={() => removeFromCart(product.id)}
                        className="w-7 h-7 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="font-black text-xs w-4 text-center">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => addToCart(product)}
                        className="w-7 h-7 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => addToCart(product)}
                      className="bg-white text-primary px-3 py-1.5 rounded-full font-black text-[10px] shadow-lg flex items-center gap-1.5 hover:bg-accent transition-all active:scale-90 ring-2 ring-transparent hover:ring-white"
                    >
                      <Plus size={12} />
                      Add
                    </button>
                  )}
                </div>
              </div>
              <div className="flex flex-col flex-1 px-1">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xl font-black text-primary tracking-tighter">
                      ${product.price}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-[10px] text-primary/30 line-through font-bold">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
                <h4 className="font-black text-wonky-orange text-sm tracking-tight mb-1 group-hover:scale-[1.02] transition-transform line-clamp-2 min-h-[2.5rem]">
                  {product.name}
                </h4>
                <p className="text-[10px] font-bold text-gray-400 mb-3 leading-tight line-clamp-2 italic">
                  Premium protein meal with seasonal ingredients.
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ y: 150 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 right-0 bg-white h-20 px-6 md:px-10 z-50 flex items-center shadow-[0_-15px_30px_rgba(0,0,0,0.1)]"
      >
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-8">
          <div className="hidden lg:flex gap-12 flex-1">
            <div>
              <div className="text-[10px] text-primary/40 uppercase font-black tracking-widest mb-0.5">
                Your Box
              </div>
              <div className="font-black text-lg text-primary leading-none">
                {cart.reduce((n, c) => n + c.quantity, 0)} ITEMS
              </div>
            </div>
            <div>
              <div className="text-[10px] text-primary/40 uppercase font-black tracking-widest mb-0.5">
                Total
              </div>
              <div className="font-black text-2xl text-primary leading-none">
                ${totalPrice.toFixed(2)}
              </div>
            </div>
          </div>
          <div className="flex gap-4 flex-[2] w-full lg:w-auto">
            <button
              type="button"
              onClick={() => setStep("delivery")}
              className="flex-1 lg:w-32 py-2 border border-primary/10 rounded-full font-black uppercase text-xs text-primary hover:bg-primary-light transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <ChevronLeft size={16} />
              BACK
            </button>
            <button
              type="button"
              disabled={cart.length === 0}
              onClick={() => setStep("summary")}
              className="flex-[2] lg:w-40 brand-button text-base flex items-center justify-center gap-4 h-12"
            >
              REVIEW BOX
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  // If a static built demo exists in /public/meal-flow, embed it in an iframe.
  if (embedAvailable) {
    const iframeH =
      viewportHeight != null
        ? `${Math.max(320, viewportHeight - headerHeight)}px`
        : `calc(100dvh - ${headerHeight}px)`;
    return (
      <div className="try-meal-flow-page min-h-[100dvh] min-h-screen overflow-x-hidden bg-white">
        {headerHeight > 0 ? <div style={{ height: headerHeight }} aria-hidden /> : null}
        <iframe
          src="/meal-bundle-builder/meal-flow/index.html"
          title="Meal flow"
          className="block w-full max-w-full border-0"
          style={{
            height: iframeH,
            minHeight: 0,
            maxHeight: iframeH,
          }}
        />
      </div>
    );
  }

  // Render switch for steps — fallbacks when the iframe bundle is unavailable
  const compactStepShell = step === "zipcode" || step === "delivery";

  return (
    <div
      className={`try-meal-flow-page ${compactStepShell ? "h-[100dvh] flex flex-col overflow-hidden" : "min-h-screen"}`}
    >
      <div className={compactStepShell ? "flex-shrink-0" : undefined}>
        <Stepper currentStep={step} />
      </div>
      <div className={compactStepShell ? "flex-1 min-h-0 overflow-hidden" : undefined}>
        {step === "landing" && renderLanding()}
        {step === "loading" && renderLoading()}
        {step === "zipcode" && renderStep1Zipcode()}
        {step === "delivery" && renderStepDelivery()}
        {step === "products" && renderStepProducts()}
        {step === "summary" && (
          <div style={{ padding: 48, textAlign: "center" }}>
            <h2 style={{ marginBottom: 12 }}>Summary</h2>
            <p>Checkout summary will appear here.</p>
          </div>
        )}
        {step === "success" && (
          <div style={{ padding: 48, textAlign: "center" }}>
            <h2 style={{ marginBottom: 12 }}>Success</h2>
            <p>Your flow has been generated — thank you!</p>
          </div>
        )}
      </div>
    </div>
  );
}
