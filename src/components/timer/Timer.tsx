import { useState, useEffect } from 'react'

import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimeClock } from '@mui/x-date-pickers/TimeClock';
import dayjs from 'dayjs';

import type { Dayjs } from 'dayjs';

import './index.css'

interface Timer {
    pomodoro: number | undefined
    relax: number | undefined
}

type TimerSelected = "focus" | "relax"

const initialState: Timer = {
    pomodoro: dayjs().minute(),
    relax: dayjs().minute()
}

export const Timer = () => {
    const [timer, setTimer] = useState<Timer>(initialState)
    const [timerSelected, setTimerSelected] = useState<TimerSelected>("focus")

    const [hasChanged, setHasChanged] = useState({
        pomodoro: false,
        relax: false,
    })

    useEffect(() => {
        console.log(timer.pomodoro)
    }, [timer.pomodoro])

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

    const changeTimerSelected = (type: TimerSelected) => {
        setTimerSelected(type)
    }

    // Correcion error de Ts al no usar la funcion ni el setTimer del useState
    return (
        <main className='flex flex-col gap-4'>
            <div className='flex w-full flex-row text-center gap-10'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['TimeClock']}>
                        <DemoItem>
                            <TimeClock
                                views={['minutes']}
                                onChange={(e: Dayjs | null) => onChangeClock(e, timerSelected)}
                                className=''
                            />
                        </DemoItem>
                    </DemoContainer>
                </LocalizationProvider>

                <section className='flex flex-col items-center flex-1 justify-around'>
                    <article className='p-2 flex flex-col gap-2'>
                        <h2 className=' text-left underline-offset-1'>Focus Time</h2>
                        <p
                            className={`${hasChanged.pomodoro ? "bg-black" : "bg-black/30"} text-white rounded-sm font-clock hover:cursor-pointer text-4xl pl-3 pr-3 pt-1 pb-1 ${timerSelected === 'focus' && "animate-bounce_clock"}`}
                            onClick={() => changeTimerSelected("focus")}
                        >
                            {timer.pomodoro != undefined && timer.pomodoro > 9 ? timer.pomodoro : "0" + timer.pomodoro} : 00
                        </p>

                    </article>

                    <article className='p-2 flex flex-col gap-2'>
                        <h2 className='text-left'>Relax Time</h2>
                        <p
                            className={`${hasChanged.relax ? "bg-black" : "bg-black/30"} text-white rounded-sm font-clock hover:cursor-pointer text-4xl pl-3 pr-3 pt-1 pb-1 ${timerSelected === 'relax' && "animate-bounce_clock"}`}
                            onClick={() => changeTimerSelected("relax")}
                        >
                            {timer.relax != undefined && timer.relax > 9 ? timer.relax : "0" + timer.relax} : 00
                        </p>
                    </article>
                </section>
            </div>

            <button className='bg-black text-white rounded p-2 opacity-20 hover:opacity-60'>Crear</button>
        </main>
    )
}
