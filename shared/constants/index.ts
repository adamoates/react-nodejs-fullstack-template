// Shared constants

export const API_BASE_URL = process.env.VITE_API_URL || 'http://localhost:3000';

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
} as const;

// Add your shared constants here
