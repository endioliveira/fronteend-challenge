import { render, screen } from '@testing-library/react';
import { App } from "../App"
  

describe("Jest", () => {
  it("Should display elements", () => {
    render(<App/>)
  })
})