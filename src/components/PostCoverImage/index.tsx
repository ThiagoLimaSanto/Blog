import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

type PostCoverImageProps = {
    imageProps: React.ComponentProps<typeof Image>;
    LinkProps: React.ComponentProps<typeof Link>;
};

export function PostCoverImage({ imageProps, LinkProps }: PostCoverImageProps) {
    return (
        <Link
            {...LinkProps}
            className={clsx(
                "w-full h-full overflow-hidden rounded-xl",
                LinkProps.className,
            )}
        >
            <Image
                {...imageProps}
                alt={imageProps.alt}
                className={clsx(
                    "w-full h-full group-hover:scale-105 transition object-cover object-center",
                    imageProps.className,
                )}
            />
        </Link>
    );
}
