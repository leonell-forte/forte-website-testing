import { forwardRef } from "react";
import { useFormContext } from "react-hook-form";

import { cn } from "@/lib/utilities/cn";

import FormFieldWrapper, {
  type Props as WrapperProps,
} from "./FormFieldWrapper";

type Props = {
  name: string;
  disabled?: boolean;
  maxLength?: number;
  placeholder?: string;
  type?: "text" | "email";
} & WrapperProps;

const Input = forwardRef<HTMLInputElement, Props>(function FI(
  {
    name,
    type = "text",
    disabled = false,
    readOnly = false,
    maxLength = undefined,
    placeholder = undefined,
    label,
    ...rest
  },
  ref
) {
  const {
    formState: { errors },
  } = useFormContext();
  const error = errors[name];
  const errorMessage = error?.message as string;

  return (
    <FormFieldWrapper
      name={name}
      error={errorMessage}
      readOnly={readOnly}
      label={label}
    >
      <div className="relative w-full">
        <input
          id={name}
          name={name}
          type={type}
          className={cn(
            "h-[3.125rem] w-full rounded-lg border bg-transparent p-[1rem] text-sm leading-4 sm:text-base",
            "focus:outline-none disabled:bg-gray-300",
            "[&:not(:disabled)]:read-only:border-none [&:not(:disabled)]:read-only:bg-transparent [&:not(:disabled)]:read-only:px-0 [&:not(:disabled)]:read-only:pt-1.5",
            error
              ? "border-red-400 text-red-400 placeholder:text-red-400/70"
              : "focus:border-selected text-white placeholder:text-white/70"
          )}
          placeholder={readOnly ? "-" : placeholder || label}
          disabled={readOnly ? false : disabled}
          readOnly={readOnly}
          maxLength={maxLength}
          ref={ref}
          {...rest}
        />
      </div>
    </FormFieldWrapper>
  );
});

export default Input;
