// Offline storage utilities for low-bandwidth and offline support

export class OfflineStorage {
  static saveData(key: string, data: any) {
    try {
      localStorage.setItem(key, JSON.stringify(data))
      return true
    } catch (e) {
      console.error("Failed to save data:", e)
      return false
    }
  }

  static getData<T>(key: string): T | null {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : null
    } catch (e) {
      console.error("Failed to get data:", e)
      return null
    }
  }

  static removeData(key: string) {
    try {
      localStorage.removeItem(key)
      return true
    } catch (e) {
      console.error("Failed to remove data:", e)
      return false
    }
  }

  static clearAll() {
    try {
      localStorage.clear()
      return true
    } catch (e) {
      console.error("Failed to clear storage:", e)
      return false
    }
  }

  static getStorageSize(): number {
    let size = 0
    for (const key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        size += localStorage[key].length + key.length
      }
    }
    return size
  }
}

// Service Worker registration for offline support
export async function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    try {
      await navigator.serviceWorker.register("/sw.js")
      console.log("Service Worker registered")
    } catch (error) {
      console.error("Service Worker registration failed:", error)
    }
  }
}
