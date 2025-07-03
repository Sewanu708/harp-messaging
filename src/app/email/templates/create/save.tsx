'use client'

import { emailCategories, emailTags, emailTemplates } from '@/data';
import { dateGenerator, idGenerator } from '@/utils';
import { useRouter } from 'next/navigation';
import React, { useRef, useState } from 'react'
interface SaveProp {
    saveProp: (value: boolean) => void
}



function Save({ saveProp }: SaveProp) {
    const navigate = useRouter()
    const ref = useRef<HTMLDivElement>(null);
    const [data, setData] = useState({
        category: '',
        tags: '',
        templateName: ''
    })

    const [anyError, setAnyError] = useState(false)
    const [error, setError] = useState({
        category: 'Your Category Field is Blank',
        tags: 'Your Tag  Field is Blank',
        templateName: 'Your Template Name Field is Blank'
    })


    function handleErrors(value: string, name: string) {
        if (value.length < 2) {
            setError(prev => ({ ...prev, [name]: `${name} should be greater than one letter` }))
        } else if (!/^[a-zA-Z0-9 _-]*$/.test(value)) {
            setError(prev => ({ ...prev, [name]: 'No special characters allowed' }))
            setAnyError(true)
        } else {
            setError(prev => ({ ...prev, [name]: '' }))
            setAnyError(false)
        }
    }

    function handleDataSubmission() {
        const templateData = {
            id: '1',
            name: data.templateName,
            subject: "Welcome to Harp, {{user.firstName}}!",
            category: data.category,
            createdBy: "Pelz",
            createdAt: dateGenerator(),
            lastEdited: dateGenerator(),
            status: "active",
            usageCount: 0,
            tags: [...data.tags],
            content: `
      <h1>Welcome to Harp, {{user.firstName}}!</h1>
      <p>We’re excited to have you. Explore our platform and start sending notifications right away.</p>
    `
        }
        emailTemplates.push(
            templateData
        )
    }

    return (
        <div className="fixed backdrop-blur inset-0 flex flex-col w-full items-center justify-center z-50">
            <div className='w-[70%] max-w-xl bg-white rounded-lg shadow-lg p-8' ref={ref}>
                <h2 className="text-xl font-semibold mb-4 text-zinc-800">Save Template</h2>
                <form className="flex flex-col gap-4" onSubmit={(e) => {
                    e.preventDefault();
                    if (error.category.length > 0 || error.tags.length > 0 || error.templateName.length > 0 || !data.category || !data.tags || !data.templateName) {
                        setAnyError(true)
                        return
                    }
                    handleDataSubmission()
                    navigate.push('/email/templates')
                }}>
                    <div>
                        <label className="block text-zinc-700 font-medium mb-1" htmlFor="templateName">
                            Template Name
                        </label>
                        <input
                            id="templateName"
                            name="templateName"
                            type="text"
                            className="w-full border border-zinc-300 rounded px-3 py-2 focus:outline-none focus:border-[#0F6C68]"
                            placeholder="Enter template name"
                            required
                            value={data.templateName}
                            onInput={(e) => {
                                const value = (e.target as HTMLInputElement).value;
                                const name = (e.target as HTMLInputElement).name;
                                setData(prev => ({ ...prev, [name]: value }))
                                handleErrors(value, name)

                            }}
                        />
                    </div>
                    <div>
                        <label className="block text-zinc-700 font-medium mb-1" htmlFor="templateCategory">
                            Category
                        </label>
                        <input
                            id="category"
                            name="category"
                            type="text"
                            list='id-category'
                            className="w-full border border-zinc-300 rounded px-3 py-2 focus:outline-none focus:border-[#0F6C68]"
                            placeholder="Enter category"
                            onInput={(e) => {
                                const { value, name } = (e.target as HTMLInputElement);

                                setData(prev => ({ ...prev, [name]: value }))
                                handleErrors(value, name)

                            }}
                        />
                        <datalist id='id-category'>
                            {
                                emailCategories.map(category => <option key={category.value} value={category.value}>{category.label}</option>)
                            }

                        </datalist>
                    </div>
                    <div>
                        <label className="block text-zinc-700 font-medium mb-1" htmlFor="templateTags">
                            Tags
                        </label>
                        <input
                            id="templateTags"
                            name="tags"
                            list='tags'
                            type="text"
                            className="w-full border border-zinc-300 rounded px-3 py-2 focus:outline-none focus:border-[#0F6C68]"
                            placeholder="Tag"
                            onInput={(e) => {
                                const value = (e.target as HTMLInputElement).value;
                                const name = (e.target as HTMLInputElement).name;
                                setData(prev => ({ ...prev, [name]: value }))
                                handleErrors(value, name)

                            }}
                        />
                        <datalist id='tags'>
                            {
                                emailTags.map(tag => <option key={tag.value} value={tag.value}>{tag.label}</option>)
                            }
                        </datalist>
                    </div>
                    <div className="flex justify-end gap-2 mt-4">
                        <button
                            type="button"
                            className="px-4 py-2 rounded bg-zinc-300 text-zinc-700 hover:bg-zinc-400"
                            onClick={() => saveProp(false)}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 rounded bg-[#0F6C68] text-white hover:bg-[#09524e]"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
            {(anyError && (error.templateName || error.category || error.tags)) && (
                <div className="mb-4 p-3 absolute top-32 left-[30%] rounded bg-red-100 text-red-700 text-sm">
                    <ul className="list-disc pl-5">
                        {error.tags && <li>{error.tags}</li>}
                        {error.templateName && <li>{error.templateName}</li>}
                        {error.category && <li>{error.category}</li>}
                    </ul>
                </div>
            )}
        </div>
    )
}
export default Save