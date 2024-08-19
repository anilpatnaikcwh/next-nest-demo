import { InputAdornment, TextField } from "@mui/material";

type ComponentProps = {
  name?: string;
  value?: string;
  label?: string;
  optional?: boolean;
  type?: string;
  autoComplete?: string;
  touched?: boolean;
  multiline?: boolean;
  fullWidth?: boolean;
  rows?: string | number;
  errorMessage?: string;
  handleChange?: (e: any) => void;
  handleBlur?: (e: any) => void;
  disabled?: boolean;
  startAdor?: boolean;
  startAdorText?: string;
};
export function InputComp({
  name,
  value,
  label,
  optional = false,
  type,
  autoComplete = "off",
  touched,
  multiline,
  fullWidth = true,
  rows,
  errorMessage,
  handleChange,
  handleBlur,
  disabled = false,
  startAdor = false,
  startAdorText
}: ComponentProps) {
  return (
    <TextField
      id={`id-${name}`}
      name={name}
      label={`${label} ${optional ? "(Optional)" : ""}`}
      type={type}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      autoComplete={autoComplete}
      fullWidth={fullWidth}
      multiline={multiline}
      rows={rows}
      variant="standard"
      error={touched && Boolean(errorMessage)}
      helperText={touched && errorMessage}
      disabled={disabled}
      InputProps={
        startAdor
          ? {
              startAdornment: (
                <InputAdornment sx={{ fontSize: "1.25em" }} position="start">
                  {startAdorText}
                </InputAdornment>
              )
            }
          : {}
      }
      InputLabelProps={{ shrink: true }}
      sx={{ input: { fontSize: "0.975em", letterSpacing: "0.075em" } }}
    />
  );
}
