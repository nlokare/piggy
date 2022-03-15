import { StyleSheet } from 'aphrodite/no-important';
import colors, { overlayColor, offsetColor } from '@lib/colors';
import { createColorizedRowStyle } from '@widgets/StyleGenerators';

const styles = StyleSheet.create({
  crudList: {
    backgroundColor: overlayColor(colors.background, 0.05),
    boxShadow: `0px 0px 8px ${colors.shadow}`,
    border: `1px solid ${colors.border}`,
    flexGrow: 0,
    borderRadius: 4,
    marginBottom: 8,
    margin: 8,
  },
  crudListHeader: {
    backgroundColor: colors.titleBackground,
    color: colors.foreground,
    padding: 8,
  },
  crudContentWrapper: {
    display: 'flex',
  },
  crudListFooter: {
    backgroundColor: colors.titleBackground,
    display: 'flex',
    flexDirection: 'column',
    padding: 8,
    justifyContent: 'flex-start',
  },
  crudListContent: {
    padding: '4px 0px',
    boxShadow: `inset 0px 0px 4px 4px #0002`,
    flex: '1',
  },
  crudListRow: {
    display: 'flex',
    alignItems: 'center',
    padding: '4px 8px',
    cursor: 'pointer',
    borderTop: '1px solid transparent',
    borderBottom: '1px solid transparent',
    boxSizing: 'border-box',
    ':hover': {
      backgroundColor: offsetColor(colors.toolbarBackground, 0.15),
    },
    outline: 'none',
  },
  crudListRowSelected: createColorizedRowStyle(colors.cyan, 'solid'),
  buttonStyleOverrides: {
    margin: 0,
    marginBottom: 4,
    textAlign: 'center',
  },
});

export default styles;
