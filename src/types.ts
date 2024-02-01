export interface Timer {
    uid?: string | null,

    work: {
        minutes: number | undefined
        seconds: number | undefined
    },

    relax: {
        minutes: number | undefined
        seconds: number | undefined
    }
}

export type TimerTypeSelection = "focus" | "relax"
    
