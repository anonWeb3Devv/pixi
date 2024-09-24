import { PreviewImage, ScrollablePickerWrapper } from "./styled";

const ScrollablePicker = ({ options, category, onSelect }) => {
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
