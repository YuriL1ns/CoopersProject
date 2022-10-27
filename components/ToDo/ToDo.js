import React, { useState } from 'react'
import { ReactSortable } from 'react-sortablejs'
import Checkbox from '@mui/material/Checkbox'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye'

export default function ToDo() {
    const [newText, setText] = useState()
    const [tasksTodo, setTasksTodo] = useState([
        { id: '1', name: 'Develop the to-do list page', status: 'todo' },
        { id: '2', name: 'Create the dnd function', status: 'todo' },
        { id: '3', name: 'Add new tasks', status: 'todo' },
        { id: '4', name: 'Delete items', status: 'todo' },
        { id: '5', name: 'Erase all', status: 'todo' },
        { id: '6', name: 'Checked item goes to Done list', status: 'todo' },
        { id: '7', name: 'This item label may be edited', status: 'todo' }
    ])
    const [tasksDone, setTasksDone] = useState([
        { id: '8', name: 'Get FTP Credentials', status: 'done' },
        { id: '9', name: 'Home Page Design', status: 'done' },
        { id: '10', name: 'E-mail John about the deadline', status: 'done' },
        { id: '11', name: 'Create a Google Drive folder', status: 'done' },
        { id: '12', name: 'Send a gift to the client', status: 'done' }
    ])
    const label = { inputProps: { 'aria-label': 'Checkbox' } }
    const taskTodo = tasksTodo.filter((task) => task.status === 'todo')
    const taskDone = tasksDone.filter((task) => task.status === 'done')

    function deleteTaskTodo(taskId) {
        const newTasks = tasksTodo.filter((task) => task.id !== taskId)

        setTasksTodo([...newTasks])
    }

    function deleteTaskDone(taskId) {
        const newTasks = tasksDone.filter((task) => task.id !== taskId)

        setTasksDone([...newTasks])
    }

    function deleteAllTodo(clearId) {
        const clearTasks = tasksTodo.filter((task) => task.id === clearId)

        setTasksTodo([...clearTasks])
    }

    function deleteAllDone(clearId) {
        const clearTasks = tasksDone.filter((task) => task.id === clearId)

        setTasksDone([...clearTasks])
    }

    function addTask() {
        const newId = new Date().getTime()

        const newTask = {
            id: String(newId),
            name: newText,
            status: 'todo'
        }

        const newArray = [...tasksTodo, newTask]

        setTasksTodo(newArray)
    }

    return (
        <div
            id='tasks-list'
            className='flex flex-wrap gap-x-12 gap-y-10 justify-center'
        >
            <div
                id='todo'
                className='w-8/12 md:w-3/12 h-full bg-white rounded-lg border-t-[2rem] border-[#E88D39] drop-shadow-xl'
            >
                <div className='text-center'>
                    <h1 className='font-bold text-black text-center text-3xl md:text-5xl md:py-4'>
                        To-do
                    </h1>
                    <p className='text-black text-center text-md md:text-2xl font-normal'>
                        Take a breath.
                    </p>
                    <p className='text-black text-center text-md md:text-2xl font-normal pb-10'>
                        Start doing.
                    </p>

                    <div
                        id='list'
                        className='list-group grid px-2 gap-y-2 cursor-grab active:cursor-grabbing text-sm md:text-lg '
                        type='card'
                    >
                        <ReactSortable
                            list={tasksTodo}
                            setList={setTasksTodo}
                            group='sharedlist'
                            animation={200}
                            delayOnTouchStart={true}
                            delay={1}
                            className='grid gap-y-2'
                        >
                            {tasksTodo.map((task) => (
                                <div
                                    key={task.id}
                                    id={`simple-task-${task.id}`}
                                    className='list-group-item lg:w-full flex  items-center justify-between'
                                >
                                    <div className='text-start cursor-grab flex items-center'>
                                        <Checkbox
                                            {...label}
                                            icon={<PanoramaFishEyeIcon />}
                                            className='cursor-grab text-[#E88D39]'
                                        />
                                        <div className='flex flex-wrap'>
                                            {task.name}
                                        </div>
                                    </div>
                                    <div className='text-xs px-2 cursor-pointer'>
                                        <span
                                            className='text-black'
                                            onClick={() =>
                                                deleteTaskTodo(task.id)
                                            }
                                        >
                                            delete
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </ReactSortable>

                        <p className='flex w-full'>
                            <Checkbox
                                {...label}
                                icon={<PanoramaFishEyeIcon />}
                                className='cursor-grab text-[#E88D39]'
                            />
                            <input
                                className='w-full md:px-4 text-black justify-center text-start placeholder-[#E88D39]'
                                value={newText}
                                onChange={(e) => setText(e.target.value)}
                                placeholder='Editing an item'
                                onKeyPress={(e) => {
                                    e.key === 'Enter' ? addTask() : null
                                }}
                            />

                            <button
                                className='hidden md:mx-1 text-[#E88D39] px-4 rounded-full font-semibold text-xl md:text-2xl '
                                onClick={() => addTask()}
                            >
                                +
                            </button>
                        </p>

                        <button
                            className='bg-black font-bold text-white w-8/12 md:w-10/12 mx-auto py-2 rounded-md my-4 '
                            onClick={() => deleteAllTodo()}
                        >
                            erase all
                        </button>
                    </div>
                </div>
            </div>

            <div
                id='done'
                className='w-8/12 md:w-3/12 h-full flex flex-col items-center bg-white rounded-lg border-t-[2rem] border-[#4AC959] drop-shadow-xl '
            >
                <div className='mx-auto'>
                    <h1 className='font-bold text-black text-center text-xl py-4 md:text-5xl'>
                        Done
                    </h1>
                    <p className='text-black text-center text-xs md:text-2xl font-normal'>
                        Congratulations!
                    </p>
                    <p
                        className='text-black text-center font-bold text-xs md:text-2xl pb-10
                    '
                    >
                        You have done {tasksDone.length} tasks
                    </p>
                </div>
                <div
                    id='list2'
                    className='list-group flex px-2 cursor-grab active:cursor-grabbing text-sm md:text-lg'
                    type='card'
                >
                    <ReactSortable
                        list={tasksDone}
                        setList={setTasksDone}
                        group='sharedlist'
                        animation={200}
                        delayOnTouchStart={true}
                        delay={1}
                        className='grid gap-y-2'
                    >
                        {tasksDone.map((task) => {
                            return (
                                <div
                                    key={task.id}
                                    id={`simple-task-${task.id}`}
                                    className='list-group-item lg:w-full flex  items-center justify-between'
                                >
                                    <p className='text-start cursor-grab flex items-center'>
                                        <Checkbox
                                            {...label}
                                            icon={<CheckCircleIcon />}
                                            checkedIcon={<CheckCircleIcon />}
                                            id='checkicon'
                                            fill='none'
                                            stroke='currentColor'
                                            className=' text-[#4AC959] important cursor-grab '
                                        />
                                        {task.name}
                                    </p>
                                    <div className='text-end px-2 cursor-pointer'>
                                        <span
                                            className='text-black text-xs'
                                            onClick={() =>
                                                deleteTaskDone(task.id)
                                            }
                                        >
                                            delete
                                        </span>
                                    </div>
                                </div>
                            )
                        })}
                    </ReactSortable>
                </div>

                <button
                    className='bg-black font-bold text-white w-8/12 md:w-10/12 py-2 rounded-md my-4 '
                    onClick={() => deleteAllDone()}
                >
                    erase all
                </button>
            </div>
        </div>
    )
}
