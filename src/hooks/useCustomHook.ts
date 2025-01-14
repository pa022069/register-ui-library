import { useState } from 'react';

const useCustomHook = () => {
  const [isLoading, setIsLoading] = useState(false);

  return {
    isLoading,
    setIsLoading,
  };
};

export default useCustomHook;
