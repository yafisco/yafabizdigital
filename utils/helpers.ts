/**
 * Helpers utilitaires divers
 */

/**
 * Pause async pour les délais (utile pour les animations ou debounce)
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Vérifie si on est côté client
 */
export function isClient(): boolean {
  return typeof window !== 'undefined';
}

/**
 * Génère un ID unique
 */
export function generateId(): string {
  return crypto.randomUUID();
}

/**
 * Crée une URL WhatsApp avec message pré-rempli
 */
export function createWhatsAppUrl(
  phoneNumber: string,
  message?: string
): string {
  const baseUrl = 'https://wa.me/';
  const cleanNumber = phoneNumber.replace(/[^0-9]/g, '');
  const encodedMessage = message ? `?text=${encodeURIComponent(message)}` : '';
  return `${baseUrl}${cleanNumber}${encodedMessage}`;
}
