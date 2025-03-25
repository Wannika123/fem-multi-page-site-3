'use client'

import { contactFormAction } from "@/actions/contactFormAction";
import { toCamelCase } from "@/utils/formatString";
import { validateInputs } from "@/utils/validateInputs";
import { ChangeEvent, useActionState, useEffect, useState } from "react";
import { useFormStatus } from "react-dom";

export type InvalidInputsType = {
    name: boolean
    email: boolean
    message: boolean
}

const INITIAL_VALUES = {
    name: '',
    email: '',
    companyName: '',
    title: '',
    message: ''
}

export default function Form() {
    const [inputVals, setInputVals] = useState(INITIAL_VALUES);
    const [invalidInputs, setInvalidInputs] = useState<InvalidInputsType>({
        name: false,
        email: false,
        message: false
    })

    const [state, formData] = useActionState(contactFormAction, {});

    const inputClass = 'w-full border-b-1 border-b-[var(--White)] px-[14px] pb-4 font-semibold text-[var(--White)] leading-6.5 placeholder:text-[#ffffff60] hover:border-b-[var(--Rapture-Blue)] hover:cursor-pointer ';

    const requiredInputClass = `${inputClass} peer group-has-[span]:border-[var(--Light-Coral)] group-has-[span]:placeholder:text-[#f67e7e60]`;

    const errMessageClass = 'px-[14px] mt-[4px] text-[var(--Light-Coral)] italic text-xs font-bold';

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const key = toCamelCase(e.target.id);
        const value = e.target.value;

        if (key === 'name' || key === 'email' || key === 'message') {
            if (invalidInputs[key]) {
                const isValid = validateInputs(value, key);
                if (isValid) {
                    setInvalidInputs(prev => {
                        return { ...prev, [key]: false }
                    })
                }
            }
        }
        
        setInputVals(prev => {
            return { ...prev, [key]: value }
        })
    }

    const handleBlur = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const key = toCamelCase(e.target.id);
        const value = e.target.value;

        if (key === 'name' || key === 'email' || key === 'message') {
            const isValid = validateInputs(value, key);
            if (!isValid) {
                setInvalidInputs(prev => {
                    return { ...prev, [key]: true }
                })
            }
        }
    }

    useEffect(() => {
        if (state && Object.keys(state).length > 0) {
            setInvalidInputs(prev => {
                return { ...prev, ...state }
            })
        }
    }, [state])

    return (
        <form action={formData}>
            <div className="group mb-6">
                <input 
                    className={requiredInputClass}
                    required
                    type="text"
                    id="name"
                    name="name"
                    value={inputVals.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Name"
                    autoComplete="name"
                    aria-label="name"
                    aria-invalid={invalidInputs.name}
                />
                { invalidInputs.name && <span className={errMessageClass}>This field is required</span>}
            </div>
            <div className="group mb-6">
                <input 
                    className={requiredInputClass}
                    required
                    type="email"
                    id="email"
                    name="email"
                    value={inputVals.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Email Address"
                    autoComplete="email"
                    aria-label="email"
                />
                { invalidInputs.email && <span className={errMessageClass}>Please use a valid email address</span>}
            </div>
            <div className="mb-6">
                <input 
                    className={inputClass}
                    type="text"
                    id="company-name"
                    name="company-name"
                    value={inputVals.companyName}
                    onChange={handleChange}
                    placeholder="Company Name"
                    aria-label="Company Name"
                />
            </div>
            <div className="mb-6">
                <input 
                    className={inputClass}
                    type="text"
                    id="title"
                    name="title"
                    value={inputVals.title}
                    onChange={handleChange}
                    placeholder="Title"
                    aria-label="title"
                />
            </div>
            <div className="group mb-6">
                <textarea
                    className={requiredInputClass}
                    required
                    id="message"
                    name="message"
                    value={inputVals.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Message"
                    aria-label="message"
                ></textarea>
                { invalidInputs.message && <span className={errMessageClass}>This field is required</span>}
            </div>
            <SubmitBtn />
        </form>
    )
}

function SubmitBtn() {
    const { pending } = useFormStatus();

    return (
        <button type='submit' aria-disabled={pending} className="font-semibold text-lg px-8 py-2 text-[var(--Deep-Jungle-Green)] bg-[var(--White)] rounded-[999px] hover:bg-[var(--Rapture-Blue)] transition-colors">
            { pending ? 'submitting...' : 'submit'}
        </button>
    )
}