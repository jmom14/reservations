import { useState, useEffect, useCallback } from "react";

type Status = "idle" | "pending" | "success" | "error";

const useAsync =(
    asyncFunction: () => Promise<any>,
    immediate = true
  ) => {
    const [status, setStatus] = useState<Status>("idle");
    const [value, setValue] = useState<any>(null);
    const [error, setError] = useState<any>(null);
    
    const execute = useCallback(async () => {
      setStatus("pending");
      setValue(null);
      setError(null);
      
      return asyncFunction()
        .then((response: any) => {
          setValue(response);
          setStatus("success");
        })
        .catch((error: any) => {
          setError(error);
          setStatus("error");
        });
    }, [asyncFunction]);
    
    useEffect(() => {
      if (immediate) {
        execute();
      }
    }, [execute, immediate]);
    return { execute, status, value, error };
  };

  export default useAsync;