import { Button } from '@chakra-ui/react';

const TagButton = ({ tag }) => {
    return (
        <Button
            variant="confirm"
        >
            {tag.title}
        </Button>
    );
}

export default TagButton;
