import { Book } from "./book";

export interface bookmarkAllUser {
    book_interaction_id: number;
    book_id: number;
    interaction_type: string;
    user_id: number;
    Book: {
        title: string;
        book_id: number;
    }
}