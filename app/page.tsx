import { getAllHabits } from "@/helpers/habits";
import { createHabit, removeHabit, updateHabit } from "./actions";
import { getServerSession } from "next-auth";
import { authConfig } from "@/helpers/auth";
import GoogleAuthButton from "@/components/GoogleAuthButton";
import CreateHabitForm from "@/components/CreateHabitForm";

export default async function Home() {
  const session = await getServerSession(authConfig);
  const thirdDays = new Array(30).fill({});
  const habits = await getAllHabits(session?.user?.id)
  if (!session) {
    return (
      <section className="flex flex-col text-center mt-[30vh] items-center">
        <h1 className="text-6xl font-bold">Forge Your Path</h1>
        <h2 className="text-xl mt-5">Habit Tracking for Personal Evolution</h2>
        <div className="mt-5">
          <GoogleAuthButton/>
        </div>
      </section>
    );
  } else {
    return (
      <section className="flex flex-col mt-5">
        <CreateHabitForm/>
        <h2 className="text-xl mt-5 font-bold">Habits ({habits.length})</h2>
        <div className="">
          {habits.map((habit) => (
            <div className="" key={habit.id}>
              <h3 className="text-lg mt-5">{habit.name}</h3>
              <form
                className="flex gap-2 flex-wrap mt-2.5 cursor-pointer"
                action={updateHabit.bind(null, habit.days, habit.id)}
              >
                {thirdDays.map((day, index) => (
                  <input
                    key={index}
                    className={`${
                      index + 1 <= habit.days
                        ? "bg-sky-600 border border-sky-600"
                        : "bg-transparent border"
                    } cursor-pointer rounded outline-none w-14 h-14 min-[475px]:h-20 min-[475px]:w-20`}
                    type="submit"
                    value=""
                  ></input>
                ))}
              </form>
              <form action={removeHabit.bind(null, habit.id)}>
                <input
                  type="submit"
                  value="Delete"
                  className="mt-5 cursor-pointer bg-sky-600 px-4 py-2.5 rounded"
                />
              </form>
            </div>
          ))}
        </div>
      </section>
    );
  }
}