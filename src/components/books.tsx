interface Book {
    id: number;
    title: string;
    picture: string;
    summary: string;
    length: number; 
    reading_diff: string; 
    avaible_amount: number;
    author_id: number;
}

interface BooksProps {
    books: Book[];
}