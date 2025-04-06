
export function formatPrice(price: number | string) {

  if (typeof price === "string") {
    return price;
  }

  const priceFormated = new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN",
  });

  const finalPrice = priceFormated.format(price);

  return finalPrice;
}
