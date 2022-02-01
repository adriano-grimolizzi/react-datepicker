import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Welcome from "./Welcome"

let container = null

beforeEach(() => {
    container = document.createElement("div")
    document.body.appendChild(container)
})

afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null
})

describe("Welcome component", () => {
    it("should render with a name when it's provided", () => {
        act(() => {
            render(<Welcome name="Adriano" />, container)
        })
        expect(container.textContent).toBe("Hello, Adriano.")        
    })
    it("should render 'stranger' when no name it's provided", () => {
        act(() => {
            render(<Welcome />, container)
        })
        expect(container.textContent).toBe("Hello, stranger.")        
    })
})