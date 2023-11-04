export interface Timer {
    pomodoro: {
        minute: number | undefined
        seconds: number | undefined
    },

    relax: {
        minute: number | undefined
        seconds: number | undefined
    }
}

export type TimerTypeSelection = "focus" | "relax"
    
