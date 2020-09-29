function validateBattlefield(field) {
    n = field.length;
    m = field[0].length;

    function checkCell(i, j) {
        if (i >= 0 && i < n && j >= 0 && j < m) return field[i][j];
        return 0;
    }

    function findShip(i, j) {
        if (checkCell(i + 1, j + 1) || checkCell(i + 1, j - 1)) return 99;
        if (checkCell(i + 1, j) && checkCell(i, j + 1)) return 99;
        field[i][j] = 2;
        if (checkCell(i + 1, j)) return findShip(i + 1, j) + 1;
        if (checkCell(i, j + 1)) return findShip(i, j + 1) + 1;
        return 1
    }

    let ships = [0, 0, 0, 0, 0];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (checkCell(i, j) === 1) {
                let size = findShip(i, j);
                if (size > 4) {
                    return false;
                }
                else {
                    ships[size]++;
                }
            }
        }
    }

    function compare(a1, a2) {
        return a1.length == a2.length && a1.every((v,i)=>v === a2[i])
    }
    
    return compare(ships.slice(1), [4,3,2,1])
}



console.log(validateBattlefield(
   [[1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]));