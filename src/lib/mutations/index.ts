import { useMutation } from "@tanstack/react-query";

import { apiForte } from "../axios-config";
import { IContactForm } from "../validators/contact";

type Callback = () => void;

export const useContactMutation = (
  callback: Callback,
  errCallBack: Callback
) => {
  const { mutateAsync: sendContact, isPending } = useMutation({
    mutationFn: async (input: IContactForm) =>
      await apiForte.post("/contact-us", input),
    onSuccess: () => {
      callback();
    },
    onError: errCallBack,
  });

  return { sendContact, isPending };
};
