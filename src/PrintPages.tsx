import Letter from "./Letter";
import { page } from "./PrintPages.css";
import VerticalCutLine from "./VerticalCutLine";
import useIndicesState from "./useIndicesState";

const PrintPages = ({
  indices,
  indexWidth,
  height,
  fontSize,
  fontWeight,
  unit,
  width,
}: Omit<ReturnType<typeof useIndicesState>, "updateState">) => {
  return (
    <>
      {indices.map((item, index) => (
        <div
          key={item}
          className={page}
          style={{
            width: `calc(${width}${unit} + ${indexWidth}${unit} + 1px)`,
            height: `calc(${height}${unit} + 1px)`,
          }}
        >
          <Letter
            item={item}
            index={index}
            indices={indices}
            indexWidth={indexWidth}
            height={height}
            fontSize={fontSize}
            fontWeight={fontWeight}
            unit={unit}
            style={{
              borderTop: "none",
              ...(index === indices.length - 1 && { borderBottom: "none" }),
            }}
          />

          <VerticalCutLine
            style={{
              top: `${(height / indices.length) * (index + 1)}${unit}`,
              height: `${
                height - (height / indices.length) * (index + 1)
              }${unit}`,
              right: `${indexWidth}${unit}`,
            }}
          />
        </div>
      ))}
    </>
  );
};

export default PrintPages;
