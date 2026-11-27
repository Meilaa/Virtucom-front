import { loadProducts } from "@/lib/acme/catalog";

export default async function sitemap() {
  const products = await loadProducts();
  const lastModified = new Date();

  return [
    {
      url: "https://virtucom.lt",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://virtucom.lt/parduotuve",
      lastModified,
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...products.map((product) => ({
      url: `https://virtucom.lt/parduotuve/${product.slug}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    })),
  ];
}
