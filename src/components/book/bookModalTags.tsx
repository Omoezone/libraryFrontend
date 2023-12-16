import { Button } from '@chakra-ui/react';
import { Tags } from '../../types/tags';
interface Props {
    tag: Tags;
}
const TagButton = ({ tag }: Props) => {
    return (
        <Button
            variant="confirm"
        >
            {tag.title}
        </Button>
    );
}

export default TagButton;
