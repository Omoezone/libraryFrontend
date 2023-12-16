import { Book } from "./book";

export interface reviewAllUser {
    review_id: number;
    review: string;
    stars: number;
    Book: {
        title: string;
    };
}