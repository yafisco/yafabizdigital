import { useState, useEffect } from 'react';

/**
 * Hook pour vérifier si le composant est monté (évite les erreurs d'hydration)
 */
export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
