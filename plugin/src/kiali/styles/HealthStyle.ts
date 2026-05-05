import { PFColors } from 'components/Pf/PfColors';
import { kialiStyle } from 'styles/StyleUtils';

export const healthIndicatorStyle = kialiStyle({
  $nest: {
    '& .pf-v5-c-tooltip__content': {
      borderWidth: '1px',
      textAlign: 'left'
    },

    '& ul': {
      marginBottom: '1rem',
      marginTop: 0,
      color: PFColors.Color100
    }
  }
});
