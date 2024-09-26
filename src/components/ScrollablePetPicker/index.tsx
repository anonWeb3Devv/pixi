import {
  PreviewImage,
  ScrollablePickerWrapper,
} from "../ScrollablePicker/styled";

const ScrollablePetPicker = ({ options, onSelect }) => {
  return (
    <ScrollablePickerWrapper>
      {options.map((option, index) => (
        <PreviewImage
          key={index}
          src={option.image}
          alt={option.name}
          onClick={() => onSelect(option.value)}
        />
      ))}
    </ScrollablePickerWrapper>
  );
};

export default ScrollablePetPicker;
