import { render,screen } from "@testing-library/react";
import { expect, test } from "vitest";
import ContactUs from "../src/components/ContactUs";


test("should load contact us page", ()=>{
    render(<ContactUs/>)
    const heading = screen.getAllByRole("heading")

    expect(heading).toBeInTheDocument()
})