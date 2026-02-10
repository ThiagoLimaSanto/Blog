import { formatDateTime, formatDistanceToNow } from "@/helpers/format-dateTime";
import { PostHeading } from "../PostHeading";

type PostTextProps = {
    title: string;
    excerpt: string;
    createdAt: string;
    url: string;
};

export function PostText({ title, excerpt, createdAt, url }: PostTextProps) {
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

            <PostHeading as="h2" url={url}>
                {title}
            </PostHeading>

            <p>{excerpt}</p>
        </div>
    );
}
