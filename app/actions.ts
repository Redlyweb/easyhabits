"use server"

import type { Habit } from "@prisma/client"
import { prisma } from "@/helpers/prisma"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"
import { authConfig } from "@/helpers/auth"

export async function createHabit(data: FormData) {
    const { name } = Object.fromEntries(data) as unknown as Omit<Habit, "id, days">;
    const session = await getServerSession(authConfig)
    const prismaUser = await prisma.user.findUnique({
        where: {email: session?.user?.email!}
    })

    if(!prismaUser) {
        null
    }
    else {
        const habit = await prisma.habit.create({
        data: {
                name,
                userId: prismaUser?.id as string
            }
        })
        redirect(`/`)
}
    }
    

export async function updateHabit(days: number, id: string) {
    const habit = await prisma.habit.update({
        where: {
            id,
        },
        data: {
            days: days + 1,
        }
    })
    redirect(`/`)
}

export async function removeHabit(id: string) {
    await prisma.habit.delete({
        where: {id}
    })
    redirect(`/`)
}