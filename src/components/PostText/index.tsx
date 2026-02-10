import { formatDateTime, formatDistanceToNow } from "@/helpers/format-dateTime";
import { PostHeading } from "../PostHeading";

type PostTextProps = {
    postHeadingAs: "h1" | "h2";
    title: string;
    excerpt: string;
    createdAt: string;
    url: string;
};

export function PostText({
    postHeadingAs,
    title,
    excerpt,
    createdAt,
    url,
}: PostTextProps) {
    const createdAtFormatedRelative = formatDistanceToNow(createdAt);
    const createdAtFormated = formatDateTime(createdAt);
    return (
        <div className="flex flex-col gap-4 sm:justify-center">
            <time
                className="text-slate-600 text-sm/tight"
                dateTime={createdAt}
                title={createdAtFormatedRelative}
            >
                {createdAtFormated}
            </time>

            <PostHeading as={postHeadingAs} url={url}>
                {title}
            </PostHeading>

            <p>{excerpt}</p>
        </div>
    );
}
