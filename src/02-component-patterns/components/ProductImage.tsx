import { useContext } from "react";
import noImage from "../assets/no-image.jpg";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

interface ProductImageProps {
  className?: string;
  image?: string;
  style?: React.CSSProperties;
}

export const ProductImage = ({ image = "", className }: ProductImageProps) => {
  const { product } = useContext(ProductContext);
  let imgToShow: string;
  if (image) {
    imgToShow = image;
  } else if (product.image) {
    imgToShow = product.image;
  } else {
    imgToShow = noImage;
  }

  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={imgToShow}
      alt="Product"
    />
  );
};
