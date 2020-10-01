function moonRating(rating) {
    let a = Math.round(rating);
    if (a === 0) return 'xxxxx'
    if (a === 1) return 'cxxxx'
    if (a === 2) return 'oxxxx'
    if (a === 3) return 'ocxxx'
    if (a === 4) return 'ooxxx'
    if (a === 5) return 'oocxx'
    if (a === 6) return 'oooxx'
    if (a === 7) return 'ooocx'
    if (a === 8) return 'oooox'
    if (a === 9) return 'ooooc'
    if (a === 10) return 'ooooo'
}