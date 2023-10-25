import { useState, useEffect } from 'react'

import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimeClock } from '@mui/x-date-pickers/TimeClock';
import dayjs from 'dayjs';

import type { Dayjs } from 'dayjs';

import './index.css'

interface Timer {
    pomodoro: Dayjs | null
}

interface Props {
    type?: 'focus' | 'relax'
}

const initialState: Timer = {
    pomodoro: dayjs('2022-04-17T15:30')
}

export const Timer = ({ type }: Props) => {
    const [timer, setTimer] = useState<Timer>(initialState)

    useEffect(() => {
        console.log(timer.pomodoro)
    }, [timer.pomodoro])

    const onChangeClock = (event: Dayjs | null) =>  {
        setTimer({
            ...timer,
            pomodoro: event
        });
    }

    // Correcion error de Ts al no usar la funcion ni el setTimer del useState
    return (
        <div className='flex w-full flex-row text-center'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['TimeClock']}>
                    <DemoItem>
                        <TimeClock
                            views={['minutes']}
                            onChange={onChangeClock} 
                        />
                    </DemoItem>
                </DemoContainer>
            </LocalizationProvider>

            <section className='pt-5 flex flex-col items-center bg-red-400 flex-1'> 
                <h2>Pomodoro Time</h2>
                <p>{timer.pomodoro?.minute()}: 00</p>
            </section>
        </div>
    )
}
