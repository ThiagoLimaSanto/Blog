import { formatDateTime, formatDistanceToNow } from "@/helpers/format-dateTime";

type PostDateProps = {
    dateTime: string;
};

export function PostDate({ dateTime }: PostDateProps) {
    const createdAtFormatedRelative = formatDistanceToNow(dateTime);
    const createdAtFormated = formatDateTime(dateTime);
    return (
        <time
            className="text-slate-600 text-sm/tight"
            dateTime={dateTime}
            title={createdAtFormatedRelative}
        >
            {createdAtFormated}
        </time>
    );
}
