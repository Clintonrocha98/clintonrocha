
// "use client";

// import { useFormState, useController } from "react-hook-form";
// import { useState } from "react";
// import ProductCard from "../../ProductCard";
// import styles from "./styles.module.scss";
// import { ErrorMessage } from "../ErrorMessage";

// const InputCheckboxRadio = ({ name, options, type, control }) => {
//     const { errors } = useFormState();
//     const { field } = useController({ control, name, defaultValues: "" });

//     const [checkboxValue, setCheckboxValue] = useState([]);
//     const [radioValue, setRadioValue] = useState("");

//     const handleCheckboxChange = (option) => {
//         const updatedName = checkboxValue.includes(option.name)
//             ? checkboxValue.filter((item) => item !== option.name)
//             : [...checkboxValue, option.name];

//         setCheckboxValue(updatedName);

//         const updatedValuesObject =
//             typeof field.value === "object"
//                 ? {
//                       ...field.value,
//                       [option.name]: checkboxValue.includes(option.name)
//                           ? undefined
//                           : option.value,
//                   }
//                 : {
//                       [option.name]: checkboxValue.includes(option.name)
//                           ? undefined
//                           : option.value,
//                   };

//         if (checkboxValue.includes(option.name)) {
//             delete updatedValuesObject[option.name];
//         } else {
//             updatedValuesObject[option.name] = option;
//         }

//         field.onChange(updatedValuesObject);
//     };

//     const handleRadioChange = (option) => {
//         setRadioValue(option.name);

//         field.onChange(option);
//     };

//     return (
//         <div className={styles.InputCheckboxRadio}>
//             {options.map((option) => (
//                 <fieldset
//                     key={option.name}
//                     className={
//                         type === "checkbox"
//                             ? checkboxValue.includes(option.name)
//                                 ? styles.checked
//                                 : ""
//                             : radioValue.includes(option.name)
//                             ? styles.checked
//                             : ""
//                     }
//                 >
//                     <input
//                         type={type}
//                         id={option.name}
//                         value={option.name}
//                         {...field}
//                         onChange={
//                             type === "checkbox"
//                                 ? () => handleCheckboxChange(option)
//                                 : () => handleRadioChange(option)
//                         }
//                         checked={
//                             type === "checkbox"
//                                 ? checkboxValue.includes(option.name)
//                                 : radioValue.includes(option.name)
//                         }
//                     />
//                     <label htmlFor={option.name}>
//                         <ProductCard
//                             img={option.img}
//                             name={option.name}
//                             value={option.value}
//                             description={option.description}
//                         />
//                     </label>
//                 </fieldset>
//             ))}
//             {errors[name] && <ErrorMessage message={errors[name].message} />}
//         </div>
//     );
// };

// export default InputCheckboxRadio;
