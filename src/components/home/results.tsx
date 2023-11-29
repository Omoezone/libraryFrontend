import { Book } from "../../types/book";

interface Props {
    bookData: Book;

}

const Results = ({ bookData }: Props) => {
    return (
        <>
            <h2>{bookData.title}</h2>
        </>
    );
};

export default Results;