import { zodResolver } from "@hookform/resolvers/zod";
import {
  UseFormProps as UseHookFormProps,
  useForm as useHookForm,
} from "react-hook-form";
import { TypeOf, ZodSchema } from "zod";

interface UseFormProps<T extends ZodSchema<any>>
  extends UseHookFormProps<TypeOf<T>> {
  schema: T;
}

export const useForm = <T extends ZodSchema<any>>({
  schema,
  ...formConfig
}: UseFormProps<T>) => {
  return useHookForm({
    ...formConfig,
    resolver: zodResolver(schema),
  });
};
