import ErrorMessage from "@/components/ErrorMessage";
import clsx from "clsx";

export default function NotFoundPage() {
    return (
        <>
            <ErrorMessage
                pageTitle="404 - Not Found"
                contentTitle="404"
                content="The page you are looking for does not exist."
            />
        </>
    );
}
