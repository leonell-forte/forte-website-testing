import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import * as React from "react";
import { useFormContext } from "react-hook-form";
import {
  CountryIso2,
  FlagImage,
  defaultCountries,
  parseCountry,
  usePhoneInput,
} from "react-international-phone";

import { cn } from "@/lib/utilities/cn";

import FormFieldWrapper, {
  type Props as WrapperProps,
} from "./FormFieldWrapper";
import { Select, SelectContent, SelectItem, SelectTrigger } from "./Select";

export const CustomTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, value, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "bg-background ring-offset-background flex h-[3.125rem] w-full items-center justify-between rounded-lg border p-[1rem] text-sm leading-4 sm:text-base",
      "focus:outline-none disabled:bg-gray-300",
      "disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      "[&[data-state=open]>svg]:rotate-180",
      "[&>span]:text-left [&>span]:text-inherit",
      "focus:border-selected data-[placeholder]:text-white/70",
      className
    )}
    {...props}
  >
    <FlagImage iso2={value as CountryIso2} size="30px" />
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 transform stroke-white/70 transition-all duration-300" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

type Props = {
  name: string;
  disabled?: boolean;
  maxLength?: number;
  placeholder?: string;
  type?: "text" | "email";
  value?: string;
  onChange: (str: string) => void;
} & WrapperProps;

const InputMobile = React.forwardRef<HTMLInputElement, Props>(function FI({
  name,
  disabled = false,
  readOnly = false,
  placeholder = undefined,
  label,
  onChange,
  value = "",
}) {
  const {
    formState: { errors },
  } = useFormContext();
  const error = errors[name];
  const errorMessage = error?.message as string;
  const [local, setLocal] = React.useState(value);

  const { inputValue, handlePhoneValueChange, inputRef, country, setCountry } =
    usePhoneInput({
      defaultCountry: "au",
      value: local,
      countries: defaultCountries,
      onChange: (data) => {
        setLocal(data.phone);
        onChange(data.phone);
      },
    });

  React.useEffect(() => {
    if (value === "") setLocal("");
  }, [value]);

  return (
    <FormFieldWrapper
      name={name}
      error={errorMessage}
      readOnly={readOnly}
      label={label}
    >
      <div className="relative flex w-full items-center gap-2">
        <div className="min-w-[90px]">
          <Select
            onValueChange={(v) => setCountry(v)}
            defaultValue={country.iso2}
            value={country.iso2}
          >
            <CustomTrigger value={country.iso2} />
            <SelectContent>
              {defaultCountries.map((c, idx) => {
                const mCountry = parseCountry(c);
                return (
                  <SelectItem key={idx} value={mCountry.iso2}>
                    <div className="group flex items-center gap-3.5">
                      <FlagImage iso2={mCountry.iso2} size="30px" />
                      <div className="flex items-center gap-1.5">
                        <div
                          className={cn(
                            "text-lg",
                            country.iso2 === mCountry.iso2
                              ? "text-[#2ca373]"
                              : "text-black transition group-hover:text-black/60"
                          )}
                        >
                          {mCountry.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          +{mCountry.dialCode}
                        </div>
                      </div>
                    </div>
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>

        <input
          id={name}
          name={name}
          type="tel"
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
          ref={inputRef}
          value={inputValue}
          onChange={handlePhoneValueChange}
        />
      </div>
    </FormFieldWrapper>
  );
});

export default InputMobile;
