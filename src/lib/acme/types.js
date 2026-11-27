/**
 * ACME/ACC Distribution–shaped product fields.
 * When real API credentials exist, map SOAP GetProductList / GetProductSpecification
 * responses into this shape and drop the mock catalog.
 */

export const PRODUCT_CATEGORIES = [
  { id: "visi", label: "Visos prekės" },
  { id: "kompiuteriai", label: "Kompiuteriai" },
  { id: "monitoriai", label: "Monitoriai" },
  { id: "televizoriai", label: "Televizoriai" },
  { id: "telefonai", label: "Telefonai" },
  { id: "spausdintuvai", label: "Spausdintuvai" },
  { id: "komponentai", label: "Komponentai" },
  { id: "priedai", label: "Priedai" },
];
