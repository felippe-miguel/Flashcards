/** Gera um ID randomico único */
export function idGenerator () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}
