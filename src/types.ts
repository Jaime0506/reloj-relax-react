export interface Timer {
    uid: string | null,

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
    
