import { useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion';
import dayjs from 'dayjs';

import { useUiStore } from '../../hooks';
import { SelectTime, SelectedClockValues } from '.';

import './index.css'

interface Timer {
    pomodoro: number | undefined
    relax: number | undefined
}

type TimerSelected = "focus" | "relax"

const initialState: Timer = {
    pomodoro: dayjs().set('minute', 20).minute(),
    relax: dayjs().set('minute', 5).minute()
}

export const Timer = () => {
    const { handleCloseModal } = useUiStore()

    const [timer, setTimer] = useState<Timer>(initialState)
    const [timerSelected, setTimerSelected] = useState<TimerSelected>("focus")
    const [hasChanged, setHasChanged] = useState({
        pomodoro: false,
        relax: false,
    })


    const changeTimerSelected = (type: TimerSelected) => {
        setTimerSelected(type)
    }

    return (
        <main className='flex flex-col gap-4'>
            <div className='flex w-full flex-row text-center gap-10'>
                <SelectTime
                    setTimer={setTimer}
                    setHasChanged={setHasChanged}
                    timerSelected={timerSelected}
                    timer={timer}
                    hasChanged={hasChanged}
                />
                <SelectedClockValues
                    changeTimerSelected={changeTimerSelected}
                    hasChanged={hasChanged}
                    timer={timer}
                    timerSelected={timerSelected}
                />
            </div>


            <AnimatePresence>
                {hasChanged.pomodoro && hasChanged.relax && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="flex justify-center items-center h-10 flex-col gap-2"
                        onClick={handleCloseModal}
                    >
                        <span className="rounded-full flex p-2 bg-white w-8 items-center justify-center h-8 hover:bg-black transition-colors ease-in duration-300 shadow-xl text-black hover:cursor-pointer hover:text-white">
                            <i className="fa-solid flex fa-plus"></i>
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>

        </main>
    )
}
