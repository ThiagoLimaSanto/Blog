"use client";

import { ErrorMessage } from "@/components/ErrorMessage";
import { useEffect } from "react";

type ErrorPageProps = {
    error: Error;
    reset: () => void;
};

export default function RootErrorPage({ error }: ErrorPageProps) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <>
            <ErrorMessage
                pageTitle="Internal Server Error"
                contentTitle="501"
                content="Ocorreu um erro inesperado. Por favor, tente novamente."
            />
        </>
    );
}
