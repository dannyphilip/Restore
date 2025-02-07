import { Product } from "../../app/models/product";
import ProductList from "./productList";

type Props = {
  readonly products: Product[];
};

export default function Catalog({ products }: Props) {
  return <ProductList products={products} />;
}
