import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'es'];
const defaultLocale = 'es';

function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language');
  if (!acceptLanguage) return defaultLocale;

  const languages = acceptLanguage
    .split(',')
    .map((entry) => entry.split(';')[0].trim().toLowerCase());

  for (const lang of languages) {
    // Exact match first (e.g. "es" or "en")
    if (locales.includes(lang)) return lang;
    // Prefix match (e.g. "es-MX" -> "es", "en-US" -> "en")
    const prefix = lang.split('-')[0];
    if (locales.includes(prefix)) return prefix;
  }

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the pathname already contains a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Skip internal paths and static assets
  if (pathname.startsWith('/_next') || pathname.startsWith('/favicon') || pathname.includes('.')) {
    return;
  }

  // If locale is already in the path, continue
  if (pathnameHasLocale) return;

  // Redirect to the preferred locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: '/((?!_next|favicon|api).*)',
};
