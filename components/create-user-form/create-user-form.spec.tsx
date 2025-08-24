import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreateUserForm from "./index";

describe("CreateUserForm (UI)", () => {
  it("renderiza título e o form com aria-label", () => {
    render(<CreateUserForm />);
    expect(screen.getByRole("heading", { name: /criar usuário/i })).toBeInTheDocument();
    expect(screen.getByRole("form", { name: /create-user-form/i })).toBeInTheDocument();
  });

  it("renderiza os campos com placeholders, names e tipos corretos", () => {
    render(<CreateUserForm />);

    const name = screen.getByPlaceholderText(/seu nome/i) as HTMLInputElement;
    const email = screen.getByPlaceholderText(/seu email/i) as HTMLInputElement;
    const password = screen.getByPlaceholderText(/sua senha/i) as HTMLInputElement;

    expect(name).toBeInTheDocument();
    expect(name.name).toBe("name");
    expect(name.type).toBe("text");

    expect(email).toBeInTheDocument();
    expect(email.name).toBe("email");
    expect(email.type).toBe("email");

    expect(password).toBeInTheDocument();
    expect(password.name).toBe("password");
    expect(password.type).toBe("password");
  });

  it("aceita digitação nos inputs", async () => {
    render(<CreateUserForm />);
    const user = userEvent.setup();

    const name = screen.getByPlaceholderText(/seu nome/i) as HTMLInputElement;
    const email = screen.getByPlaceholderText(/seu email/i) as HTMLInputElement;
    const password = screen.getByPlaceholderText(/sua senha/i) as HTMLInputElement;

    await user.type(name, "Fabio");
    await user.type(email, "fabio@example.com");
    await user.type(password, "supersecret");

    expect(name.value).toBe("Fabio");
    expect(email.value).toBe("fabio@example.com");
    expect(password.value).toBe("supersecret");
  });

  it("tem um botão de submit visível e clicável", async () => {
    render(<CreateUserForm />);
    const user = userEvent.setup();

    const button = screen.getByRole("button", { name: /criar/i });
    expect(button).toBeInTheDocument();
    expect((button as HTMLButtonElement).type).toBe("submit");

    await user.click(button);
  });
});



