import * as React from 'react';
import { kialiStyle } from 'styles/StyleUtils';
import { EmptyState, EmptyStateBody, EmptyStateVariant } from '@patternfly/react-core';
import { ErrorMsg } from '../../types/ErrorMsg';

interface MessageProps {
  error: ErrorMsg;
}

const errorSectionStyle = kialiStyle({
  height: '80vh'
});

export const ErrorSection: React.FC<MessageProps> = (props: MessageProps) => {
  return (
    <div>
      <EmptyState id="empty-page-error" variant={EmptyStateVariant.lg} className={errorSectionStyle} titleText={<>{props.error.title}</>} headingLevel="h5">
        <EmptyStateBody>{props.error.description}</EmptyStateBody>
      </EmptyState>
    </div>
  );
};
