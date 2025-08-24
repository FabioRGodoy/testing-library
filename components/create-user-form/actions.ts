"use server";

import z from "zod";

const userSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  password: z.string().min(6).max(100),
});

export const createUser = async (formData: FormData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  const result = userSchema.safeParse({ name, email, password });

  if (!result.success) {
    console.log(result.error.format());
    return;
  }

  console.log({ name, email, password });
};