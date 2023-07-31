import { Description } from "@/domain/user/value-objects/description.value-object";

describe("Description.ValueObject", () => {
  it("should throw ValidationError if value is empty", () => {
    const value = "";
    expect(() => new Description(value)).toThrowError(
      "Description must be between 3 and 60 characters."
    );
  });
});
