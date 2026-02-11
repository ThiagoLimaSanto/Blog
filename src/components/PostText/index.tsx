import { formatDateTime, formatDistanceToNow } from "@/helpers/format-dateTime";
import { PostHeading } from "../PostHeading";
import { PostDate } from "../PostDate";

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
    return (
        <div className="flex flex-col gap-4 sm:justify-center">
            <PostDate dateTime={createdAt} />

            <PostHeading as={postHeadingAs} url={url}>
                {title}
            </PostHeading>

            <p>{excerpt}</p>
        </div>
    );
}
