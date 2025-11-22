// Utilities for mobile optimization

export function isMobileDevice(): boolean {
  if (typeof window === "undefined") return false
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

export function isTablet(): boolean {
  if (typeof window === "undefined") return false
  return /iPad|Android(?!.*Mobi)/i.test(navigator.userAgent)
}

export function getViewportWidth(): number {
  if (typeof window === "undefined") return 0
  return Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
}

export function getViewportHeight(): number {
  if (typeof window === "undefined") return 0
  return Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
}

export function isPortraitMode(): boolean {
  if (typeof window === "undefined") return false
  return getViewportHeight() > getViewportWidth()
}

export function optimizeImageForMobile(imageUrl: string, maxWidth = 800): string {
  // For production, integrate with image optimization services
  // like imgix, cloudinary, or your own image optimization API
  return imageUrl
}

export function reduceMotion(): boolean {
  if (typeof window === "undefined") return false
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

export function compressData(data: string): string {
  // In production, use actual compression libraries
  return btoa(encodeURIComponent(data))
}

export function decompressData(compressedData: string): string {
  // In production, use actual compression libraries
  return decodeURIComponent(atob(compressedData))
}
