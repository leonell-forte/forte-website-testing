import { cn } from "../../../lib/utilities/cn";

export type Props = {
  name?: string;
  error?: string;
  readOnly?: boolean;
  label?: string;
  optional?: boolean;
  className?: string;
};

const FormFieldWrapper = ({
  name,
  error,
  children,
  label,
  readOnly,
  className,
  optional = false,
}: Props & {
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn("grid items-center sm:grid-cols-[110px_1fr]", className)}
    >
      {label ? (
        <label
          htmlFor={name}
          className="mb-5 hidden text-sm text-white sm:block sm:text-base"
        >
          {label}
          {optional && !readOnly ? (
            <>
              {" - "}
              <span className="font-light italic">optional</span>
            </>
          ) : null}
        </label>
      ) : null}
      <div className="flex w-full flex-1 flex-col items-start space-y-1">
        {children}
        <small
          className={cn(
            "mt-0.5 flex min-h-[1rem] items-center space-x-1 text-xs",
            !error || readOnly ? "invisible" : "",
            error ? "text-red-400" : ""
          )}
        >
          {error ? error : ""}
        </small>
      </div>
    </div>
  );
};

export default FormFieldWrapper;
