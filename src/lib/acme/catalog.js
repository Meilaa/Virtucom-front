import { MOCK_PRODUCTS } from "./mock-products";
import { PRODUCT_CATEGORIES } from "./types";

/**
 * Catalog access layer. Swap `loadProducts()` to call ACME SOAP later
 * without changing shop UI.
 */
export async function loadProducts() {
  // TODO: replace with ACME API client when license key is available
  return MOCK_PRODUCTS;
}

export function formatPrice(amount, currency = "EUR") {
  return new Intl.NumberFormat("lt-LT", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(amount);
}

export function getCategories() {
  return PRODUCT_CATEGORIES;
}

export async function getProductBySlug(slug) {
  const products = await loadProducts();
  return products.find((p) => p.slug === slug) || null;
}

export async function listProducts({
  category = "visi",
  q = "",
  inStockOnly = false,
  sort = "name",
} = {}) {
  const products = await loadProducts();
  const query = q.trim().toLowerCase();

  let filtered = products.filter((product) => {
    if (category && category !== "visi" && product.category !== category) {
      return false;
    }
    if (inStockOnly && !product.inStock) {
      return false;
    }
    if (!query) return true;
    const haystack = [
      product.name,
      product.shortName,
      product.vendor,
      product.supplierCode,
      product.description,
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(query);
  });

  filtered = [...filtered].sort((a, b) => {
    switch (sort) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "vendor":
        return a.vendor.localeCompare(b.vendor, "lt");
      case "name":
      default:
        return a.name.localeCompare(b.name, "lt");
    }
  });

  return filtered;
}

export async function getCategoryCounts() {
  const products = await loadProducts();
  const counts = { visi: products.length };
  for (const product of products) {
    counts[product.category] = (counts[product.category] || 0) + 1;
  }
  return counts;
}
