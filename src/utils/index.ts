export function getValueFromNestedObject(
    obj: any,
    path: (string | number)[]
): any | undefined {
    if (path.length == 0) {
        return obj
    }
    Object.keys(obj).forEach(key => {
        if (key === path[0]) {
            return getValueFromNestedObject(obj[key], path.slice(1))
        } else {
            return undefined
        }
    })
}
