import { useEffect, useState } from "react";


const useOurManu = () => {
  const [manu, setManu] = useState([]);
  console.log(manu)
  const [loading, setLoading] = useState(true);

   const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetch(`${apiBaseUrl}/api/menuItems`)
      .then(res => res.json())
      .then(data => {
        setManu(data);
        setLoading(false);
      });
  }, [apiBaseUrl]);

  return { manu, setManu, loading };
};

export default useOurManu;
