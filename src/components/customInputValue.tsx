/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useReducer } from "react";
import { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

type TextInputProps = {
  form: UseFormReturn<any>;
  name: string;
  label: string;
  placeholder: string;
  defaultValue?: string;
};

const numberFormatter = new Intl.NumberFormat("pt-BR", {
  style: "decimal",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const formatValue = (value: string) => {
  const digits = value.replace(/\D/g, "");
  return numberFormatter.format(Number(digits));
};

export function CustomInputValue(props: TextInputProps) {
  const initialValue = props.form.getValues()[props.name]
    ? formatValue(props.form.getValues()[props.name])
    : props.defaultValue
    ? formatValue(props.defaultValue)
    : "";

  const [value, setValue] = useReducer(
    (_: string, next: string) => formatValue(next),
    initialValue
  );

  useEffect(() => {
    if (!props.defaultValue) {
      setValue(initialValue);
    }
  }, [initialValue, props.defaultValue]);

  const handleChange = (
    realChangeFn: (value: string) => void,
    formattedValue: string
  ) => {
    const digits = formattedValue.replace(/\D/g, "");
    const realValue = numberFormatter.format(Number(digits)).toString();
    realChangeFn(realValue);
  };

  return (
    <FormField
      control={props.form.control}
      name={props.name}
      render={({ field }) => {
        field.value = value;
        const _change = field.onChange;

        return (
          <FormItem>
            <FormLabel>{props.label}</FormLabel>
            <FormControl>
              <Input
                placeholder={props.placeholder}
                type="text"
                {...field}
                onChange={(ev) => {
                  const inputValue = ev.target.value;
                  const digits = inputValue.replace(/\D/g, "");
                  const caracteres = props.name === "preco" ? 8 : 6;

                  if (digits.length <= caracteres) {
                    setValue(inputValue);
                    handleChange(_change, inputValue);
                  }
                }}
                value={value}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}
