import { useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion';
import dayjs from 'dayjs';

import { usePomodoroStore, useUiStore } from '../../hooks';
import { SelectTime, SelectedClockValues } from '.';

import type { TimerTypeSelection, Timer as TypeTimer } from '../../types';

import './index.css'

const initialState: TypeTimer = {
    uid: null,
    pomodoro: {
        minute: dayjs().set('minute', 20).minute(),
        seconds: 0
    },

    relax: {
        minute: dayjs().set('minute', 5).minute(),
        seconds: 0
    }
}

export const Timer = () => {
    const { handleCloseModal } = useUiStore()
    const { onAddTimer } = usePomodoroStore()

    const [timer, setTimer] = useState<TypeTimer>(initialState)
    const [timerSelected, setTimerSelected] = useState<TimerTypeSelection>("focus")
    const [hasChanged, setHasChanged] = useState({
        pomodoro: false,
        relax: false,
    })


    const changeTimerSelected = (type: TimerTypeSelection) => {
        setTimerSelected(type)
    }

    const handleAddTimer = () => {
        handleCloseModal()
        
        setTimer({...timer})
        onAddTimer(timer)
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
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="flex justify-center items-center h-10 flex-col gap-2"
                        onClick={handleAddTimer}
                    >
                        <span className="rounded-full flex p-2 bg-white w-8 items-center justify-center h-8 hover:bg-black transition-colors ease-in duration-300 shadow-xl text-black hover:cursor-pointer hover:text-white">
                            <i className="fa-solid flex fa-plus"></i>
                        </span>
                    </motion.button>
                )}
            </AnimatePresence>
        </main>
    )
}
