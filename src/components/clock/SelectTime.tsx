import { LocalizationProvider, TimeClock } from '@mui/x-date-pickers'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'

import type { Dayjs } from 'dayjs'
import type { Timer, TimerTypeSelection } from '../../types'

interface TimerChanged {
    work: boolean,
    relax: boolean
}

interface Props {
    setTimer: (value: Timer) => void
    setHasChanged: (value: TimerChanged) => void
    timerSelected: TimerTypeSelection
    timer: Timer
    hasChanged: TimerChanged
}

export const SelectTime = ({setTimer, setHasChanged, timerSelected, timer, hasChanged}: Props) => {

    const onChangeClock = (event: Dayjs | null, type: TimerTypeSelection) => {
        if (type === 'focus') {
            setTimer({
                ...timer,
                ["work"]: {
                    minute: event?.minute(),
                    seconds: 0
                }
            });

            setHasChanged({
                ...hasChanged,
                work: true
            })
        }

        if (type === 'relax') {
            setTimer({
                ...timer,
                ["relax"]: {
                    minute: event?.minute(),
                    seconds: 0
                }
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
