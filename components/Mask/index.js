export function phone(e) {
    e.currentTarget.maxLength = 13
    let value = e.currentTarget.value
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{2})(\d{5})(\d{2})/, '$1 $2-$3')
    e.currentTarget.value = value
    return e
}
