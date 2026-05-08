// Constantes globales du projet YAFABiz Digital

export const APP_NAME = 'YAFABiz Digital';
export const APP_DESCRIPTION =
  'Plateforme e-commerce africaine moderne — Produits Forever, WhatsApp Business, IA';

export const WHATSAPP_NUMBER = '+221XXXXXXXXX'; // À modifier

export const CURRENCY = 'XOF';
export const CURRENCY_SYMBOL = 'FCFA';
export const LOCALE = 'fr-FR';

export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_PAGE_SIZE: 12,
  MAX_PAGE_SIZE: 100,
} as const;

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  LOGIN: '/login',
  REGISTER: '/register',
  PRODUCTS: '/products',
  CART: '/cart',
  CHECKOUT: '/checkout',
  ORDERS: '/orders',
  DASHBOARD: '/dashboard',
  DASHBOARD_PRODUCTS: '/dashboard/products',
  DASHBOARD_ORDERS: '/dashboard/orders',
  DASHBOARD_LEADS: '/dashboard/leads',
  DASHBOARD_ANALYTICS: '/dashboard/analytics',
  DASHBOARD_SETTINGS: '/dashboard/settings',
} as const;

export const API_ROUTES = {
  AUTH_LOGIN: '/api/auth/login',
  AUTH_REGISTER: '/api/auth/register',
  AUTH_CALLBACK: '/api/auth/callback',
  PRODUCTS: '/api/products',
  ORDERS: '/api/orders',
  LEADS: '/api/leads',
  WHATSAPP_SEND: '/api/whatsapp/send',
  WHATSAPP_WEBHOOK: '/api/whatsapp/webhook',
  AI_CHAT: '/api/ai/chat',
  AI_GENERATE: '/api/ai/generate',
  AI_ANALYZE: '/api/ai/analyze',
  UPLOAD: '/api/upload',
  HEALTH: '/api/health',
} as const;
