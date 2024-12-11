import { z } from "zod";

export const contact = {
  defaultValues: {
    firstName: "",

    lastName: "",

    email: "",

    phoneNumber: "",

    topic: "",

    message: "",
  },
  schema: z.object({
    firstName: z.string().min(1, "Your first name is required"),

    lastName: z.string().min(1, "Your last name is required"),

    email: z
      .string()
      .min(1, "Your email is required")
      .email({ message: "Invalid email address" }),

    phoneNumber: z.string().min(1, "Your phone number is required"),

    topic: z.string().min(1, "Please select one"),

    message: z.string().min(1, "Please enter your message"),
  }),
};

export type IContactForm = z.infer<typeof contact.schema>;
