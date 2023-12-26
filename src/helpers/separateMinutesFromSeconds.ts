export const separateMinutesFromSeconds = (time: number) => {
    const wholePart = Math.floor(time)

    const decimalPart = time % 1

    return {
        wholePart,
        decimalPart
    }
}