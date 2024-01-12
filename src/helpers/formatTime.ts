export const formatTime = (seconds: number): string => {
    const formattedMinutes = Math.floor(seconds / 60)
    const formattedSeconds = seconds % 60

    return `${String(formattedMinutes).padStart(2, "0")}:${String(formattedSeconds).padStart(2, "0")}`
}