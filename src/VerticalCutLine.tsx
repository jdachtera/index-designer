import { ComponentPropsWithoutRef } from "react";
import { verticalCutLine } from "./VerticalCutline.css";

const VerticalCutLine = (props: ComponentPropsWithoutRef<"div">) => {
  return <div className={verticalCutLine} {...props} />;
};

export default VerticalCutLine;
