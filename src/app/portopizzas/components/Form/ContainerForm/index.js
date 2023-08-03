"use client";
import { FormProvider } from "react-hook-form";

function ContainerForm({ children, methods, onSubmit }) {
    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
        </FormProvider>
    );
}

export default ContainerForm;
