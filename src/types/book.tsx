import { Author } from "./author";
import { Reviews } from "./reviews";
import { Tags } from "./tags";

export interface Book {
    book_id: number;
    title: string;
    picture: string;
    summary: string;
    pages: number;
    amount: number;
    available_amount: number;
    author_id: number;
    Reviews: Reviews[];
    Author: Author;
    Tags: Tags[];
}