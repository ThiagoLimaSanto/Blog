import {
    format,
    formatDistanceToNow as dateFnsFormatDistanceToNow,
} from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatDateTime(date: string): string {
    const dateFormated = new Date(date);

    return format(dateFormated, "dd/MM/yyyy 'às' HH'h'mm", {
        locale: ptBR,
    });
}

export function formatDistanceToNow(date: string): string {
    const dateFormated = new Date(date);

    return dateFnsFormatDistanceToNow(dateFormated, {
        locale: ptBR,
        addSuffix: true,
    });
}
