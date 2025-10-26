"use client"; 

import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | DEVELOPER SADHIN`;
  }, [title]);
};

export default useTitle;