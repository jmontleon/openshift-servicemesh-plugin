import { kialiStyle } from 'styles/StyleUtils';

export const healthIndicatorStyle = kialiStyle({
  $nest: {
    '& .pf-v6-c-tooltip__content': {
      borderWidth: '1px',
      textAlign: 'left'
    }
  }
});

export const naTextStyle = kialiStyle({
  color: 'var(--pf-t--global--text--color--subtle)',
  display: 'inline-block'
});
