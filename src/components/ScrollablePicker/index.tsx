import { PreviewImage, ScrollablePickerWrapper } from "./styled";

interface Option {
  image: string;
  name: string;
  value: string;
}

interface ScrollablePickerProps {
  options: Option[];
  category: string;
  onSelect: (category: string, value: string) => void;
}

const ScrollablePicker: React.FC<ScrollablePickerProps> = ({
  options,
  category,
  onSelect,
}) => {
  return (
    <ScrollablePickerWrapper>
      {options.map((option, index) => (
        <PreviewImage
          key={index}
          src={option.image}
          alt={option.name}
          onClick={() => onSelect(category, option.value)}
        />
      ))}
    </ScrollablePickerWrapper>
  );
};

export default ScrollablePicker;
