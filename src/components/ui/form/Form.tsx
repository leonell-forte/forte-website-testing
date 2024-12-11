import { ComponentProps } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  UseFormReturn,
} from "react-hook-form";

interface FormProps<T extends FieldValues = any>
  extends Omit<ComponentProps<"form">, "onSubmit"> {
  form: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
  className?: string;
}

export const Form = <T extends FieldValues>({
  form,
  onSubmit,
  className,
  children,
  ...props
}: FormProps<T>) => {
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} {...props}>
        <fieldset disabled={form.formState.isSubmitting} className={className}>
          {children}
        </fieldset>
      </form>
    </FormProvider>
  );
};
