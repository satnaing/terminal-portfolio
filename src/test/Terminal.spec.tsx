import { describe, it, expect } from "vitest";
// import { render, fireEvent, screen } from "@testing-library/react";
import { render, screen } from "../utils/test-util";
import userEvent from "@testing-library/user-event";
import Terminal from "../components/Terminal";

// setup function
function setup(jsx: JSX.Element) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}

describe("Terminal Component", () => {
  const { user } = setup(<Terminal />);
  const terminalInput = screen.getByTitle("terminal-input") as HTMLInputElement;

  describe("Input Features & Initial State", () => {
    it("should display welcome cmd by default", () => {
      expect(screen.getByTestId("input-command").textContent).toBe("welcome");
    });

    it("should change input value", async () => {
      await user.type(terminalInput, "demo");
      expect(terminalInput.value).toBe("demo");
    });

    it("should clear input value when click enter", async () => {
      await user.type(terminalInput, "demo{enter}");
      expect(terminalInput.value).toBe("");
    });
  });

  describe("Input Commands", () => {
    it("should return 'command not found' when input value is invalid", async () => {
      await user.type(terminalInput, "demo{enter}");
      expect(screen.getByTestId("not-found-0").innerHTML).toBe(
        "command not found: demo"
      );
    });

    it("should return 'visitor' when user type 'whoami' cmd", async () => {
      await user.type(terminalInput, "whoami{enter}");
      expect(screen.getByTestId("latest-output").firstChild?.textContent).toBe(
        "visitor"
      );
    });

    it("should return '/home/satnaing' when user type 'pwd' cmd", async () => {
      await user.type(terminalInput, "pwd{enter}");
      expect(screen.getByTestId("latest-output").firstChild?.textContent).toBe(
        "/home/satnaing"
      );
    });
  });
});
