import { useEffect, useState, useCallback } from 'react';

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  // memoize the fetch function with useCallback
  const fetchCurrency = useCallback(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
    console.log(data);
  }, [currency, data]); // include currency and data as dependencies
  useEffect(() => {
    // call the memoized fetch function
    fetchCurrency();
  }, [fetchCurrency]); // pass the memoized function as a dependency
  console.log(data);
  return data;
}

export default useCurrencyInfo;
