export const widthDrawerController = (width: number) => {
    // De menor a mayor para que no entre en la primera concidencias
    // evitando asi la evaluacion de ser mayor al anterior pero menos al limite

    // 750 < widht < 1100
    
    if (width < 750) {
        return width / 3
    }

    if (width < 1000) {
        return width / 3.2
    }

    if (width < 1100) {
        return width / 3.4
    }

    if (width < 1300) {
        return width / 3.6
    }

    if (width < 1400) {
        return width / 3.8
    }

    return width / 4
}