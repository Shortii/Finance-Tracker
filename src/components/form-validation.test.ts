import formValidation from "./form-validation";

test("returns true when value is number", () => {
    expect(formValidation(1)).toBe(true);
})

test("returns false when value is not number", () => {
    expect(formValidation("one")).toBe(false);
})