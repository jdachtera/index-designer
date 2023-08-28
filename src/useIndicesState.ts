import { useCallback, useEffect, useMemo, useState } from "react";

export default function useIndicesState() {
  const [
    { width, height, indexWidth, fontSize, fontWeight, indices, unit },
    setState,
  ] = useState({
    width: 148,
    height: 210,
    indexWidth: 11,
    fontSize: 7.5,
    fontWeight: 800,
    indices: defaultIndices,
    unit: "mm",
  });

  const updateState = useCallback(
    (state: Partial<Parameters<typeof setState>[0]>) => {
      setState((prevState) => ({
        ...prevState,
        ...state,
      }));
    },
    []
  );

  useEffect(() => {
    updateState({
      fontSize:
        Math.floor(Math.min(fontSize, height / indices.length) * 10) / 10,
    });
  }, [fontSize, height, indices.length, updateState]);

  return useMemo(
    () => ({
      width,
      height,
      indexWidth,
      fontSize,
      fontWeight,
      indices,
      unit,
      updateState,
    }),
    [
      fontSize,
      fontWeight,
      height,
      indexWidth,
      indices,
      unit,
      updateState,
      width,
    ]
  );
}

const defaultIndices = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
