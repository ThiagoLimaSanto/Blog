import Link from "next/link";

export function Footer() {
    return (
        <footer className="text-center">
            <p className="py-8">
                <span>
                    Copyright &copy; {new Date().getFullYear()} |
                    <Link href="/"> The Blog</Link>
                </span>
            </p>
        </footer>
    );
}
