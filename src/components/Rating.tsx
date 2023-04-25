import { StarIcon } from "@chakra-ui/icons";

interface Props {
  rating: number;
}

const ratings = [1, 2, 3, 4, 5];

const Rating = ({ rating }: Props) => {
  const setRatingStars = () => {
    return ratings.map(
      (r) => r <= rating && <StarIcon boxSize={4} color={"gold"} />
    );
  };

  return <>{setRatingStars()}</>;
};

export default Rating;
