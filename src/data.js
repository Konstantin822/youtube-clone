export const API_KEY = 'AIzaSyAVzh0sb__xWtJapHD3DxrnFEKCtyXi1Ok'

export const valueConverter = (value) => {
    if (value >= 1000000) {
        return Math.floor(value / 1000000) + 'M'
    } else if (value >= 1000) {
        return Math.floor(value / 1000) + 'K'
    } else {
        return value
    }
}