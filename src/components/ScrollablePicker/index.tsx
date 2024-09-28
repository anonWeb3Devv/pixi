import { PreviewImage, ScrollablePickerWrapper } from "./styled";

interface Option {
  image: string;
  name: string;
  value: string;
}

interface ScrollablePickerProps {
  options: Option[];
  category: string;
  onSelect: (category: string, value: Option) => void; // Change the type to Option
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
          onClick={() => onSelect(category, option)} // Pass the entire option
        />
      ))}
    </ScrollablePickerWrapper>
  );
};

export default ScrollablePicker;
