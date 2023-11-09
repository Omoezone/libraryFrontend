import { Button } from '@chakra-ui/react';


const TagButton = ({ tag }) => {
    return (
        <Button
            variant="outline"
            size="sm"
            colorScheme="teal"
        >
            {tag.title}
        </Button>
    );
}

export default TagButton;
