import * as React from 'react';
import { MenuToggle, MenuToggleElement, Select, SelectOptionProps, SelectProps } from '@patternfly/react-core';

type SimpleSelectProps = Omit<Omit<Omit<Omit<SelectProps, 'isOpen'>, 'onSelect'>, 'onOpenChange'>, 'toggle'> & {
  onOpenChange?: (isOpen: boolean) => void;
  onSelect?: (value?: SelectOptionProps['value']) => void;
};

export const SimpleSelect: React.FC<SimpleSelectProps> = (props: SimpleSelectProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = (toggleRef: React.Ref<MenuToggleElement>) => (
    <MenuToggle ref={toggleRef} onClick={() => setIsOpen(!isOpen)} isExpanded={isOpen}>
      {props.selected}
    </MenuToggle>
  );

  return (
    <Select
      {...props}
      toggle={toggle}
      onOpenChange={isOpen => {
        setIsOpen(isOpen);

        if (props.onOpenChange) {
          props.onOpenChange(isOpen);
        }
      }}
      onSelect={(_event?: React.MouseEvent<Element, MouseEvent>, value?: SelectOptionProps['value']) => {
        setIsOpen(false);
        if (props.onSelect) {
          props.onSelect(value);
        }
      }}
      isOpen={isOpen}
    >
      {props.children}
    </Select>
  );
};
