import { expect, describe, it } from "vitest";
import userService from "../../userService";

describe("userService test", () => {
  it("userService has getAllUsers function", () => {
    expect(typeof userService.getAllUsers).toBe("function");
  });
});

describe("userService test", () => {
  it("userService has getAllUsers function", () => {
    expect(typeof userService.getAllUsers).toBe("function");
  });

  it("userService has addUser function", () => {
    expect(typeof userService.addUser).toBe("function");

    return userService
      .addUser({ name: "TestUser", email: "test@example.com" })
      .then((newUser) => {
        expect(newUser).toBeDefined();
        expect(newUser.name).toBe("TestUser");
        expect(newUser.email).toBe("test@example.com");
      });
  });

  it("userService has getAllProducts function", () => {
    expect(typeof userService.getAllProducts).toBe("function");

    return userService.getAllProducts().then((products) => {
      expect(Array.isArray(products)).toBe(true);
    });
  });
});
