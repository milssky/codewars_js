function validBraces(braces) {
    const regexp_braces = /\(\)|\[\]|\{\}/g;
    while (regexp_braces.test(braces)) {
        braces = braces.replace(regexp_braces, '');
    }

    return !braces.length;
}