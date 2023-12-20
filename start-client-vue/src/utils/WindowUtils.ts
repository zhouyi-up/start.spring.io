export const symb = () => {
    const userAgent = window.navigator.userAgent.toLowerCase()
    return userAgent.indexOf('mac') > -1 ? "⌘": "Ctrl"
}