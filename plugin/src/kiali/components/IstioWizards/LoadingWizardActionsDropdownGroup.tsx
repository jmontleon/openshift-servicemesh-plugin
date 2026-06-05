import { Spinner } from '@patternfly/react-core';
import { DropdownGroup, DropdownItem, DropdownList } from '@patternfly/react-core';
import * as React from 'react';
import { groupMenuStyle } from 'styles/DropdownStyles';

export const LoadingWizardActionsDropdownGroup = () => {
  return (
    <DropdownGroup key="wizards" label="Actions" className={groupMenuStyle}>
      <DropdownList>
        <DropdownItem isDisabled={true}>
          <Spinner size="md" aria-label="Loading actions..." />
        </DropdownItem>
      </DropdownList>
    </DropdownGroup>
  );
};
