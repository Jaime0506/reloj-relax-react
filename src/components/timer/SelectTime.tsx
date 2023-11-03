import { LocalizationProvider, TimeClock } from '@mui/x-date-pickers'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'

import type { Dayjs } from 'dayjs'

type TimerSelected = "focus" | "relax"

interface Timer {
    pomodoro: number | undefined
    relax: number | undefined
}

interface TimerChanged {
    pomodoro: boolean,
    relax: boolean
}

interface Props {
    setTimer: (value: Timer) => void
    setHasChanged: (value: TimerChanged) => void
    timerSelected: TimerSelected
    timer: Timer
    hasChanged: TimerChanged
}

export const SelectTime = ({setTimer, setHasChanged, timerSelected, timer, hasChanged}: Props) => {

    const onChangeClock = (event: Dayjs | null, type: TimerSelected) => {
        if (type === 'focus') {
            setTimer({
                ...timer,
                pomodoro: event?.minute()
            });

            setHasChanged({
                ...hasChanged,
                pomodoro: true
            })
        }

        if (type === 'relax') {
            setTimer({
                ...timer,
                relax: event?.minute()
            })
            setHasChanged({
                ...hasChanged,
                relax: true
            })
        }
    }
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['TimeClock']}>
                <DemoItem>
                    <TimeClock
                        views={['minutes']}
                        onChange={(e: Dayjs | null) => onChangeClock(e, timerSelected)}
                        defaultValue={dayjs().startOf('day')}
                    />
                </DemoItem>
            </DemoContainer>
        </LocalizationProvider>
    )
}
