'use server'

import type { InvalidInputsType } from "@/components/contact/Form"
import { validateInputs } from "@/utils/validateInputs"
import { redirect } from "next/navigation"

export async function contactFormAction(
    prevState: Partial<InvalidInputsType> | undefined, 
    formData: FormData
) {
    const rawFormData = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    }

    const invalidInputs: Partial<InvalidInputsType> = {}

    for (const key in rawFormData) {
        if (key === 'name' || key === 'email' || key === 'message') {
            if (rawFormData[key] === null || typeof rawFormData[key] !== 'string') return
            
            const isValid = validateInputs(rawFormData[key], key);
            if (!isValid) {
                invalidInputs[key] = true
            }
        }
    }

    if (Object.keys(invalidInputs).length > 0) {
        return invalidInputs
    }

    // send data to the server somehow
    redirect('/')   
}