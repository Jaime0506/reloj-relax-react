export const separateMinutesFromSeconds = (time: number) => {
    const wholePart = Math.floor(time)

    const decimalPart = (time % 1).toFixed(2)

    return {
        wholePart,
        decimalPart
    }
}