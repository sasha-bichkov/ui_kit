const defaultColor = '#fff'
const defaultTextColor = '#000'
const defaultBorderColor = '#d9d9d9'
const primaryColor = '#03a9f4'
const disabledColor = 'rgb(0 0 0 / .26)'
const disabledBackgroundColor = 'rgb(0 0 0 / .12)'


export const customStyles = {
  container: (provided, state) => ({
    ...provided,
    width: '320px',
    position: 'relative',
    backgroundColor: defaultColor,
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: state.isFocused ? primaryColor : defaultBorderColor,
    '&:hover': {
      color: primaryColor,
    }
  }),
  control: (provided, state) => ({
    ...provided,
    boxShadow: state.isFocused ? '0 0 0 2px rgb(0 0 0 / .1)' : undefined,
    borderColor: state.isFocused ? primaryColor : defaultBorderColor,
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    display: 'none',
  }),
}
