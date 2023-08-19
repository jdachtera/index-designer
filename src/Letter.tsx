import { ComponentProps } from "react";
import { letter } from "./Letter.css";

type LetterProps = {
  item: string;
  index: number;
  indices: string[];
  indexWidth: number;
  height: number;
  fontSize: number;
  fontWeight: number;
  unit: string;
} & ComponentProps<"div">;

const Letter = ({
  item,
  index,
  indices,
  indexWidth,
  height,
  fontSize,
  fontWeight,
  unit,
  ...rest
}: LetterProps) => (
  <div
    {...rest}
    className={letter}
    style={{
      ...rest.style,
      width: `${indexWidth}${unit}`,
      height: `${height / indices.length}${unit}`,
      top: `${(height / indices.length) * index}${unit}`,
      fontSize: `${fontSize}${unit}`,
      lineHeight: `${fontSize}${unit}`,
      fontWeight,
    }}
  >
    {item}
  </div>
);

export default Letter;
