export function generateId(): string {
  return Math.random().toString(16).substring(2, 10);
}

export function parseCookies(cookieHeader: string): any {
  const cookiesArray = (cookieHeader || '').split('; ');
  const cookies = {};

  cookiesArray.forEach(cookie => {
    const [key, value] = cookie.split('=');
    cookies[key] = value;
  })

  return cookies;
}