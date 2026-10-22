import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

// Remove rendered components from the DOM after every test.
afterEach(() => {
  cleanup()
})
