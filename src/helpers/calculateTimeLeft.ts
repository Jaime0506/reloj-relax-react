export const calculateTimeLeft = (minutes: number | undefined, seconds: number | undefined): number => {
    if (minutes != undefined &&  seconds != undefined) {
        return minutes * 60 + seconds
    }

    return 0
}