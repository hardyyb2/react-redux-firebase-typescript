import { FC } from "react";

import styles from "./Image.module.css";

type ObjectFitType =
  | "cover"
  | "contain"
  | "inherit"
  | "initial"
  | "revert"
  | "none"
  | "scale-down";

interface IProps {
  src: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
  objectFit?: ObjectFitType;
  radius?: string | number;
  margin?: string | number;
}

const Image: FC<IProps> = ({
  src,
  alt = "Image",
  width = 40,
  height = "auto",
  objectFit = "cover",
  radius = 0,
  margin,
}) => {
  return (
    <div
      className={styles.imageContainer}
      style={{
        width,
        minWidth: width,
        height,
        minHeight: height,
        objectFit,
        borderRadius: radius,
        ...(margin && { margin }),
      }}
    >
      <img src={src} alt={alt} className={styles.image} />
    </div>
  );
};

export default Image;
