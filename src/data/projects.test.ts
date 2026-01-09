// src/data/projects.test.ts
import { describe, it, expect } from "vitest"
import { projects } from "./projects"

describe("projects data", () => {
  it("should contain at least 1 project", () => {
    expect(projects.length).toBeGreaterThan(0)
  })

  it("each project should have required fields", () => {
    for (const p of projects) {
      expect(p.id).toBeTruthy()
      expect(p.title).toBeTruthy()
      expect(p.shortDescription).toBeTruthy()
      expect(Array.isArray(p.technologies)).toBe(true)
      expect(p.technologies.length).toBeGreaterThan(0)
    }
  })

  it("project links should be valid-ish when provided", () => {
    for (const p of projects) {
      if (p.github) expect(p.github).toMatch(/^https?:\/\//)
      // si tu as un champ demo/website/live, adapte ici :
      // if (p.demo) expect(p.demo).toMatch(/^https?:\/\//)
      if (p.image) expect(p.image.startsWith("/")).toBe(true)
    }
  })
})
