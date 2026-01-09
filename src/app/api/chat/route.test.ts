import { describe, it, expect } from "vitest"
import { validateMessage } from "./route"

describe("validateMessage", () => {
  it("rejects non-string", () => {
    expect(validateMessage(123).ok).toBe(false)
  })

  it("rejects empty message", () => {
    expect(validateMessage("   ").ok).toBe(false)
  })

  it("rejects very long message", () => {
    expect(validateMessage("a".repeat(2001)).ok).toBe(false)
  })

  it("accepts normal message", () => {
    const res = validateMessage("Salut")
    expect(res.ok).toBe(true)
    if (res.ok) expect(res.value).toBe("Salut")
  })
})
