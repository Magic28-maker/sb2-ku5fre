const API_URL = import.meta.env.VITE_API_URL || 'https://your-railway-url.railway.app';

export const endpoints = {
  contact: `${API_URL}/api/contact`,
  directory: `${API_URL}/api/directory`,
  admin: {
    import: `${API_URL}/api/admin/import-lawyers`,
  }
};

export const fetcher = async (url: string, options = {}) => {
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error('API request failed');
  }

  return response.json();
};