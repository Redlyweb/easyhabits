import { prisma } from "@/helpers/prisma"


export function getAllHabits(id: string | null | undefined) {
    return prisma.habit.findMany({
        where: {
            userId: id!
        }
    })
}

export function getHabitById(id: string) {
    return prisma.habit.findUnique({
        where: {
            id,
        }
    })
}
