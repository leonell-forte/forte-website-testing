import { z } from "zod";

export const contact = {
  defaultValues: {
    firstName: "",

    lastName: "",

    email: "",

    phoneNumber: "",

    topic: "",

    // message: "",
  },
  schema: z.object({
    firstName: z.string().min(1, "First name is a required field"),

    lastName: z.string().min(2, "Last name is a required field"),

    email: z.string().email({ message: "Invalid email address" }),

    phoneNumber: z.string().min(1, "Invalid phone number"),

    topic: z.string().min(1, "Topic is a required field"),

    // message: z.string().min(1, "Please enter your message"),
  }),
};

export type IContactForm = z.infer<typeof contact.schema>;
