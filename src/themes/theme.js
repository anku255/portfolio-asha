export const theme = {
  pink: { primaryDark: '#e5075d', primaryLight: '#ff9bc2' },
  grey: { primaryDark: '#777777', primaryLight: '#e6e6e6' },
}

export const updateTheme = theme => {
  // update theme only in browser env
  if (typeof window !== `undefined`) {
    const html = document.getElementsByTagName('html')[0]
    const { primaryDark, primaryLight } = theme
    html.style.setProperty('--color-primary-dark', primaryDark)
    html.style.setProperty('--color-primary-light', primaryLight)
  }
}
