import {
  PreviewImage,
  ScrollablePickerWrapper,
} from "../ScrollablePicker/styled";

interface PetOption {
  image: string;
  name: string;
  value: string;
}

interface ScrollablePetPickerProps {
  options: PetOption[];
  onSelect: (value: string, name: string) => void;
}

const ScrollablePetPicker: React.FC<ScrollablePetPickerProps> = ({
  options,
  onSelect,
}) => {
  return (
    <ScrollablePickerWrapper>
      {options.map((option, index) => (
        <PreviewImage
          key={index}
          src={option.image}
          alt={option.name}
          onClick={() => onSelect(option.value, option.name)}
        />
      ))}
    </ScrollablePickerWrapper>
  );
};

export default ScrollablePetPicker;
