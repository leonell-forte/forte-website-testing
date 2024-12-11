import { cn } from "../../../lib/utilities/cn";

export type Props = {
  name?: string;
  error?: string;
  readOnly?: boolean;
  label?: string;
  optional?: boolean;
};

const FormFieldWrapper = ({
  name,
  error,
  children,
  label,
  readOnly,
  optional = false,
}: Props & {
  children: React.ReactNode;
}) => {
  return (
    <div className="grid grid-cols-[110px_1fr] items-center">
      {label ? (
        <label htmlFor={name} className="mb-5 hidden text-white sm:block">
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
            error ? "text-red-500" : ""
          )}
        >
          {error ? error : ""}
        </small>
      </div>
    </div>
  );
};

export default FormFieldWrapper;
