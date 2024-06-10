import React, { useEffect, useState } from "react";

export default function useProducts() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        //get products
      } catch (error) {}
    })();
  }, []);

  return {};
}
