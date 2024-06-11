import { createHabit } from '@/app/actions'


export default function CreateHabitForm() {
  return (
    <form className="flex flex-col items-start" action={createHabit}>
          <h2 className="text-xl font-bold">Create Habit</h2>
          <input
            type="text"
            name="name"
            placeholder="Habit name"
            className="w-full mt-5 p-2.5 bg-zinc-800 outline-none rounded"
          />
          <input
            type="submit"
            className="mt-2.5 cursor-pointer bg-sky-600 px-4 py-2.5 rounded"
            value="Create"
          />
    </form>
  )
}
