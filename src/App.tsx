import { themeClass } from "./theme.css";
import { container, previewWrapper } from "./App.css";
import useIndicesState from "./useIndicesState";
import ConfigForm from "./ConfigForm";

import PrintPages from "./PrintPages";
import Preview from "./Preview";
import { useEffect, useRef, useState } from "react";

function App() {
  const {
    width,
    height,
    indexWidth,
    fontSize,
    fontWeight,
    indices,
    unit,
    updateState,
  } = useIndicesState();

  const [zoom, setZoom] = useState(1);

  const measureHeightRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const { offsetHeight: wrapperHeight } = wrapperRef.current!;
      const { offsetHeight: pageHeight } = measureHeightRef.current!;
      const newZoom = wrapperHeight / pageHeight;
      setZoom(newZoom);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [indexWidth, height, width, height, unit]);

  return (
    <div className={`${themeClass} ${container}`}>
      <div
        style={{
          position: "absolute",
          height: `${height}${unit}`,
          width: "1px",
        }}
        ref={measureHeightRef}
      />

      <div ref={wrapperRef} className={previewWrapper}>
        <ConfigForm
          width={width}
          height={height}
          indexWidth={indexWidth}
          fontSize={fontSize}
          fontWeight={fontWeight}
          indices={indices}
          unit={unit}
          updateState={updateState}
        />
        <Preview
          width={width}
          height={height}
          indexWidth={indexWidth}
          fontSize={fontSize}
          fontWeight={fontWeight}
          indices={indices}
          unit={unit}
          style={{
            zoom,
          }}
        />
      </div>
      <PrintPages
        width={width}
        height={height}
        indexWidth={indexWidth}
        fontSize={fontSize}
        fontWeight={fontWeight}
        indices={indices}
        unit={unit}
      />
    </div>
  );
}

export default App;
