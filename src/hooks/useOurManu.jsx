import { useEffect, useState } from "react";

const useOurManu = () => {
  const [manu, setManu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/ourManu.json') 
      .then(res => res.json())
      .then(data => {
        setManu(data);
        setLoading(false);
      });
  }, []);

  return [manu, loading];
};

export default useOurManu;
