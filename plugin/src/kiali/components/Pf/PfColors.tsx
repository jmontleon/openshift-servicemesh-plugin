// There are two ways in which we use the PF color palette. Either way we want to use the standard
// PF colors, and moreover, use the defined color variables such that any changes made by PF are
// picked up when the PF version is updated.  The preferred, standard way, is in CSS styling.  In
// those cases we can directly let CSS resolve the PF var. So, whenever possible use the PFColors
// enum below.

// Colors used by Kiali for CSS styling
// PF6 migration: palette colors are now under --pf-t--global--color--nonstatus--<color>--<shade>
export enum PFColors {
  Black100 = 'var(--pf-t--global--color--nonstatus--gray--50)',
  Black150 = 'var(--pf-t--global--color--nonstatus--gray--100)',
  Black200 = 'var(--pf-t--global--color--nonstatus--gray--100)',
  Black300 = 'var(--pf-t--global--color--nonstatus--gray--200)',
  Black400 = 'var(--pf-t--global--color--nonstatus--gray--200)',
  Black500 = 'var(--pf-t--global--color--nonstatus--gray--300)',
  Black600 = 'var(--pf-t--global--color--nonstatus--gray--300)',
  Black700 = 'var(--pf-t--global--color--nonstatus--gray--400)',
  Black800 = 'var(--pf-t--global--color--nonstatus--gray--400)',
  Black900 = 'var(--pf-t--global--color--nonstatus--gray--500)',
  Black1000 = 'var(--pf-t--global--color--nonstatus--gray--500)',
  Blue50 = 'var(--pf-t--global--color--nonstatus--blue--100)',
  Blue100 = 'var(--pf-t--global--color--nonstatus--blue--100)',
  Blue200 = 'var(--pf-t--global--color--nonstatus--blue--200)',
  Blue300 = 'var(--pf-t--global--color--nonstatus--blue--300)',
  Blue400 = 'var(--pf-t--global--color--nonstatus--blue--400)',
  Blue500 = 'var(--pf-t--global--color--nonstatus--blue--500)',
  Blue600 = 'var(--pf-t--global--color--nonstatus--blue--500)',
  Cyan300 = 'var(--pf-t--global--color--nonstatus--teal--300)',
  Gold300 = 'var(--pf-t--global--color--nonstatus--yellow--300)',
  Gold400 = 'var(--pf-t--global--color--nonstatus--yellow--400)',
  Gold500 = 'var(--pf-t--global--color--nonstatus--yellow--500)',
  Green300 = 'var(--pf-t--global--color--nonstatus--green--300)',
  Green400 = 'var(--pf-t--global--color--nonstatus--green--400)',
  Green500 = 'var(--pf-t--global--color--nonstatus--green--500)',
  Green600 = 'var(--pf-t--global--color--nonstatus--green--500)',
  LightBlue400 = 'var(--pf-t--global--color--nonstatus--blue--400)',
  LightBlue500 = 'var(--pf-t--global--color--nonstatus--blue--500)',
  LightGreen400 = 'var(--pf-t--global--color--nonstatus--green--400)',
  LightGreen500 = 'var(--pf-t--global--color--nonstatus--green--500)',
  Orange50 = 'var(--pf-t--global--color--nonstatus--orange--100)',
  Orange300 = 'var(--pf-t--global--color--nonstatus--orange--300)',
  Orange400 = 'var(--pf-t--global--color--nonstatus--orange--400)',
  Purple100 = 'var(--pf-t--global--color--nonstatus--purple--100)',
  Purple200 = 'var(--pf-t--global--color--nonstatus--purple--200)',
  Purple300 = 'var(--pf-t--global--color--nonstatus--purple--300)',
  Purple500 = 'var(--pf-t--global--color--nonstatus--purple--500)',
  Red50 = 'var(--pf-t--global--color--nonstatus--red--100)',
  Red100 = 'var(--pf-t--global--color--nonstatus--red--100)',
  Red200 = 'var(--pf-t--global--color--nonstatus--red--200)',
  Red500 = 'var(--pf-t--global--color--nonstatus--red--500)',
  White = 'var(--pf-t--global--background--color--100)',

  // semantic kiali colors
  Active = 'var(--pf-t--global--color--brand--default)',
  Badge = 'var(--pf-t--global--color--nonstatus--blue--300)',
  Replay = 'var(--pf-t--global--color--brand--300)',
  Link = 'var(--pf-t--global--text--color--link--default)',

  // Health/Alert colors https://www.patternfly.org/design-guidelines/styles/colors
  Danger = 'var(--pf-t--global--color--status--danger--default)',
  Info = 'var(--pf-t--global--color--status--info--default)',
  InfoBackground = 'var(--pf-t--global--color--status--info--200)',
  Success = 'var(--pf-t--global--color--status--success--default)',
  SuccessBackground = 'var(--pf-t--global--color--status--success--200)',
  Warning = 'var(--pf-t--global--color--status--warning--default)',

  // chart-specific color values, for rates charts where 4xx is really Danger not Warning
  ChartDanger = 'var(--pf-t--global--color--status--danger--300)',
  ChartOther = 'var(--pf-t--global--color--nonstatus--gray--500)',
  ChartWarning = 'var(--pf-t--global--color--status--danger--default)',

  // PF background colors (compatible with dark mode)
  BackgroundColor100 = 'var(--pf-t--global--background--color--100)',
  BackgroundColor150 = 'var(--pf-t--global--background--color--200)',
  BackgroundColor200 = 'var(--pf-t--global--background--color--200)',
  BackgroundColorLight300 = 'var(--pf-t--global--background--color--300)',

  // PF standard colors (compatible with dark mode)
  Color100 = 'var(--pf-t--global--text--color--100)',
  Color200 = 'var(--pf-t--global--text--color--200)',
  ColorLight100 = 'var(--pf-t--global--text--color--inverse)',
  ColorLight200 = 'var(--pf-t--global--text--color--300)',
  ColorLight300 = 'var(--pf-t--global--text--color--400)',

  // PF border colors (compatible with dark mode)
  BorderColor100 = 'var(--pf-t--global--border--color--default)',
  BorderColor200 = 'var(--pf-t--global--border--color--200)',
  BorderColor300 = 'var(--pf-t--global--border--color--300)',
  BorderColorLight100 = 'var(--pf-t--global--border--color--100)',

  // PF colors suitable for dark backgrounds (don't change in Dark mode)
  Color300 = 'var(--pf-t--global--text--color--300)',
  Color400 = 'var(--pf-t--global--text--color--400)'
}
