import { Icon, HStack } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const StarRating = ({ value }) => {
    const maxStars = 5;

  // Ensure the value is within the range [0, 5]
    const normalizedValue = Math.min(Math.max(value, 0), maxStars);

    const stars = Array.from({ length: maxStars }, (_, index) => (
        <Icon
            as={StarIcon}
            key={index}
            color={index < normalizedValue ? 'yellow.400' : 'gray.300'}
            w={5}
            h={5}
        />
    ));

    return (
        <HStack spacing={1}>
            {stars}
        </HStack>
    );
};

export default StarRating;
