"use client";

import { useFormState, useController } from "react-hook-form";
import { useState } from "react";
import ProductCard from "../../ProductCard";
import styles from "./styles.module.scss";
import { ErrorMessage } from "../ErrorMessage";

const InputCheckboxRadio = ({ name, options, type, control }) => {
    const { errors } = useFormState();
    const { field } = useController({ control, name, defaultValues: "" });

    const [checkboxValue, setCheckboxValue] = useState([]);
    const [radioValue, setRadioValue] = useState("");
    
    const handleCheckboxChange = (optionName) => {
        const updatedValue = checkboxValue.includes(optionName)
            ? checkboxValue.filter((item) => item !== optionName)
            : [...checkboxValue, optionName];

        setCheckboxValue(updatedValue);
        field.onChange(updatedValue);
    };

    const handleRadioChange = (optionName) => {
        setRadioValue(optionName);
        field.onChange(optionName);
    };

    return (
        <div className={styles.InputCheckboxRadio}>
            {options.map((option) => (
                <fieldset
                    key={option.name}
                    className={
                        type === "checkbox"
                            ? checkboxValue.includes(option.name)
                                ? styles.checked
                                : ""
                            : radioValue.includes(option.name)
                            ? styles.checked
                            : ""
                    }
                >
                    <input
                        type={type}
                        id={option.name}
                        value={option.name}
                        {...field}
                        onChange={
                            type === "checkbox"
                                ? () => handleCheckboxChange(option.name)
                                : () => handleRadioChange(option.name)
                        }
                        checked={
                            type === "checkbox"
                                ? checkboxValue.includes(option.name)
                                : radioValue.includes(option.name)
                        }
                        
                    />
                    <label htmlFor={option.name}>
                        <ProductCard
                            img={option.img}
                            name={option.name}
                            value={option.value}
                            description={option.description}
                        />
                    </label>
                </fieldset>
            ))}
            {errors[name] && <ErrorMessage message={errors[name].message} />}
        </div>
    );
};

export default InputCheckboxRadio;
