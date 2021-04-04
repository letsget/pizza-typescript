import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

// list.insertBefore(newItem, list.childNodes[0])
const wrapper = document.querySelector("#root");

const Portal: React.FC<{}> = ({ children }) => {
  const el = useRef(document.createElement("div"));
  el.current.classList.add("popup");

  useEffect(() => {
    const current = el.current;
    document.body.insertBefore(current, wrapper);

    return () => void document.body.removeChild(current);
  }, []);

  return createPortal(children, el.current);
};

export default Portal;
