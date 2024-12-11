import { forwardRef } from "react";
import { useFormContext } from "react-hook-form";

import { cn } from "../../../lib/utilities/cn";
import FormFieldWrapper, {
  type Props as WrapperProps,
} from "./FormFieldWrapper";

type Props = {
  name: string;
  disabled?: boolean;
  maxLength?: number;
  placeholder?: string;
  rows?: number;
} & WrapperProps;

const Textarea = forwardRef<HTMLTextAreaElement, Props>(function FTA(
  {
    name,
    label,
    disabled = false,
    readOnly = false,
    maxLength = undefined,
    placeholder = undefined,
    rows = 10,
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
      className="items-start [&>label]:mt-2.5"
    >
      <div className="relative w-full">
        <textarea
          id={name}
          name={name}
          className={cn(
            "min-h-[3.125rem] w-full rounded-lg border bg-transparent p-[1rem] text-sm leading-4 sm:text-base",
            "focus:outline-none disabled:bg-gray-300",
            "[&:not(:disabled)]:read-only:border-none [&:not(:disabled)]:read-only:bg-transparent [&:not(:disabled)]:read-only:px-0 [&:not(:disabled)]:read-only:pt-1.5",
            error
              ? "border-red-400 text-red-400 placeholder:text-red-400/70"
              : "focus:border-selected text-white placeholder:text-white/70"
          )}
          placeholder={readOnly ? "-" : label}
          disabled={readOnly ? false : disabled}
          readOnly={readOnly}
          maxLength={maxLength}
          ref={ref}
          rows={rows}
          {...rest}
        />
      </div>
    </FormFieldWrapper>
  );
});

export default Textarea;
