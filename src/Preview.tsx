import { ComponentPropsWithoutRef } from "react";
import Letter from "./Letter";
import { preview } from "./Preview.css";
import VerticalCutLine from "./VerticalCutLine";
import useIndicesState from "./useIndicesState";

const Preview = ({
  width,
  height,
  indexWidth,
  fontSize,
  fontWeight,
  indices,
  unit,
  ...rest
}: Omit<ReturnType<typeof useIndicesState>, "updateState"> &
  ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      {...rest}
      className={preview}
      style={{
        ...rest.style,
        width: `calc(${width}${unit} + ${indexWidth}${unit} + 1px)`,
        height: `calc(${height}${unit} + 1px)`,
      }}
    >
      <VerticalCutLine
        style={{
          height: `${height}${unit}`,
          right: `${indexWidth}${unit}`,
        }}
      />
      {indices.map((item, index) => (
        <Letter
          key={item}
          item={item}
          index={index}
          indices={indices}
          indexWidth={indexWidth}
          height={height}
          fontSize={fontSize}
          fontWeight={fontWeight}
          unit={unit}
        />
      ))}
    </div>
  );
};

export default Preview;
