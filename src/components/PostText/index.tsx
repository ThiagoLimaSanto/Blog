import { PostHeading } from "../PostHeading";

type PostTextProps = {
    title: string;
    excerpt: string;
    createdAt: string;
};

export function PostText({ title, excerpt, createdAt }: PostTextProps) {
    return (
        <div className="flex flex-col gap-4 sm:justify-center">
            <time className="text-slate-600 text-sm/tight" dateTime={createdAt}>
                {createdAt}
            </time>

            <PostHeading url="#">{title}</PostHeading>

            <p>{excerpt}</p>
        </div>
    );
}
