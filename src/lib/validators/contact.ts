import { PhoneNumberUtil } from "google-libphonenumber";
import { z } from "zod";

const phoneUtil = PhoneNumberUtil.getInstance();

const isPhoneValid = (phone: string) => {
  try {
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
  } catch (error) {
    return false;
  }
};

export const defaultValues = {
  firstName: "",

  lastName: "",

  email: "",

  phoneNumber: "",

  topic: "",

  message: "",
};

export const contact = {
  defaultValues,
  schema: z.object({
    firstName: z.string().min(1, "Your first name is required"),

    lastName: z.string().min(1, "Your last name is required"),

    email: z
      .string()
      .min(1, "Your email is required")
      .email({ message: "Invalid email address" }),

    phoneNumber: z
      .string()
      .min(1, "Your phone number is required")
      .refine((pn) => isPhoneValid(pn), {
        message: "Phone number is invalid!",
      }),

    topic: z.string().min(1, "Please select one"),

    message: z.string().min(1, "Please enter your message"),
  }),
};

export type IContactForm = z.infer<typeof contact.schema>;
