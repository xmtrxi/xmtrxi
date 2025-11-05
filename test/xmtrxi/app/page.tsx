"use client"

import { useEffect } from "react"

export default function Page() {
  useEffect(() => {
    // This is a Next.js wrapper for the Nuxt application
    // The actual application is running as a Nuxt app
    // Redirect to the Nuxt app or display a message
    if (typeof window !== "undefined") {
      // In a real setup, you would either:
      // 1. Render the Nuxt app here
      // 2. Redirect to the Nuxt dev server
      // For now, we'll show a placeholder
      document.body.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: center; min-height: 100vh; font-family: system-ui, sans-serif; background: white;">
          <div style="text-align: center;">
            <h1 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 1rem;">XMTRXI</h1>
            <p style="font-size: 1.125rem; color: #666; margin-bottom: 2rem;">Digital Solutions for Modern Businesses</p>
            <p style="color: #999;">Loading your professional tech company website...</p>
          </div>
        </div>
      `
    }
  }, [])

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        fontFamily: "system-ui, sans-serif",
        background: "white",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>XMTRXI</h1>
        <p style={{ fontSize: "1.125rem", color: "#666", marginBottom: "2rem" }}>
          Digital Solutions for Modern Businesses
        </p>
        <p style={{ color: "#999" }}>Your professional tech company website is ready.</p>
        <p style={{ color: "#999", marginTop: "1rem", fontSize: "0.875rem" }}>
          This is a Nuxt 3 application. View the source files in the pages/ directory.
        </p>
      </div>
    </div>
  )
}
