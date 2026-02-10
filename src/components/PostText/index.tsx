import { PostHeading } from "../PostHeading";

type PostTextProps = {
    title: string;
    excerpt: string;
    createdAt: string;
    url: string;
};

export function PostText({ title, excerpt, createdAt, url }: PostTextProps) {
    return (
        <div className="flex flex-col gap-4 sm:justify-center">
            <time className="text-slate-600 text-sm/tight" dateTime={createdAt}>
                {createdAt}
            </time>

            <PostHeading as="h2" url={url}>{title}</PostHeading>

            <p>{excerpt}</p>
        </div>
    );
}
