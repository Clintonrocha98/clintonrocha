import ProductCard from "../../ProductCard";
import styles from "./styles.module.scss";

const RenderInput = ({
    selectedOption,
    options,
    type,
    onChange,
    fieldName,
}) => {
    const handleToggleChange = (optionName, optionValue) => {
        if (type === "checkbox") {
            let updatedOptions;

            if (Array.isArray(selectedOption)) {
                const optionExistsIndex = selectedOption.findIndex(
                    (item) => item.name === optionName
                );

                if (optionExistsIndex !== -1) {
                    updatedOptions = selectedOption.filter(
                        (item) => item.name !== optionName
                    );
                } else {
                    updatedOptions = [
                        ...selectedOption,
                        { name: optionName, value: optionValue },
                    ];
                }
            } else {
                updatedOptions = [{ name: optionName, value: optionValue }];
            }

            onChange(fieldName, updatedOptions);
        } else if (type === "radio") {
            const update = { name: optionName, value: optionValue };
            onChange(fieldName, update);
        }
    };

    function isInclude(optionName) {
        if (Array.isArray(selectedOption)) {
            return selectedOption.some((item) => item.name === optionName);
        }
        return selectedOption.name === optionName;
    }

    return (
        <>
            {options.map((option, index) => (
                <fieldset
                    key={index}
                    className={`${styles.fieldset} ${
                        isInclude(option.name) ? `${styles.checked} animate__pulse animate__animated animate__faster` : ""
                    }`}
                >
                    <input
                        type={type}
                        id={option.name}
                        checked={isInclude(option.name)}
                        onChange={() =>
                            handleToggleChange(option.name, option.value)
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
        </>
    );
};

export default RenderInput;
