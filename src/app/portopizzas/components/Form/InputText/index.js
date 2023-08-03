import { useController, useFormContext } from "react-hook-form";

import styles from "./styles.module.scss";

import { ErrorMessage } from "../ErrorMessage";

export const InputText = ({ name, label, ...rest }) => {
    const { control } = useFormContext();
    const { field, fieldState } = useController({ name, control });

    const error = fieldState.error?.message;
    const isError = typeof error === "string";

    const onChange = (event) => {
        let value = event.target.value;

        field.onChange(value);
    };

    return (
        <fieldset className={styles.input}>
            <label htmlFor={name}>{label}</label>
            <input
                id={name}
                className={isError ? styles.error : ""}
                aria-invalid={isError}
                {...rest}
                {...field}
                onChange={onChange}
            />

            <ErrorMessage message={error} />
        </fieldset>
    );
};
