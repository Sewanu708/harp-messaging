export function dateGenerator() {
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = (date.getDay()).toString().padStart(2, '0')
    const hour = (date.getHours()).toString().padStart(2, '0')
    const minutes = (date.getMinutes()).toString().padStart(2, '0')
    const seconds = (date.getSeconds()).toString().padStart(2, '0')

    const formatted = `${year}-${day}-${month}  ${hour}:${minutes}:${seconds}`

    return formatted
}

export function idGenerator() {
    const datGen = new Date().getTime() + Math.random().toString(36).substring(2, 9)
    return datGen;
}