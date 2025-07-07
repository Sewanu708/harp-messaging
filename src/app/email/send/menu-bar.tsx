'use client'
import {
    Bold,
    Italic,
    Strikethrough,
    Heading1,
    Heading2,
    Heading3,
    AlignLeft,
    AlignCenter,
    AlignRight,
    AlignJustify,
    SendIcon,
    Highlighter,
    UndoIcon,
    Redo,
    List,
    ListOrdered,
} from 'lucide-react'
import Link from 'next/link'
import { FaUnderline } from 'react-icons/fa'
import React from 'react'
import { Editor } from '@tiptap/react'
import { Toggle } from '@/components/ui/toggle'
import { Button } from '@/components/ui/button'
import { LuLayoutTemplate } from 'react-icons/lu'

export const MenuBar = ({ editor, loading }: { editor: Editor | null, loading: boolean }) => {
    
    const Options = [
        {
            icon: <Bold className="size-4" />,
            onclick: () => editor?.chain().focus().toggleBold().run(),
            pressed: editor?.isActive('bold'),
        },
        {
            icon: <Italic className="size-4" />,
            onclick: () => editor?.chain().focus().toggleItalic().run(),
            pressed: editor?.isActive('italic'),
        },
        {
            icon: <Strikethrough className="size-4" />,
            onclick: () => editor?.chain().focus().toggleStrike().run(),
            pressed: editor?.isActive('strike'),
        },
        {
            icon: <FaUnderline className="size-4" />,
            onclick: () => editor?.chain().focus().toggleUnderline().run(),
            pressed: editor?.isActive('underline'),
        },
        {
            icon: <Heading1 className="size-4" />,
            onclick: () => editor?.chain().focus().toggleHeading({ level: 1 }).run(),
            pressed: editor?.isActive('heading', { level: 1 }),
        },
        {
            icon: <Heading2 className="size-4" />,
            onclick: () => editor?.chain().focus().toggleHeading({ level: 2 }).run(),
            pressed: editor?.isActive('heading', { level: 2 }),
        },
        {
            icon: <Heading3 className="size-4" />,
            onclick: () => editor?.chain().focus().toggleHeading({ level: 3 }).run(),
            pressed: editor?.isActive('heading', { level: 3 }),
        },
        {
            icon: <Highlighter className="size-4" />,
            onclick: () => editor?.chain().focus().toggleHighlight().run(),
            pressed: editor?.isActive('code'),
        },

        {
            icon: <AlignLeft className="size-4" />,
            onclick: () => editor?.chain().focus().setTextAlign('left').run(),
            pressed: editor?.isActive({ textAlign: 'left' }),
        },
        {
            icon: <AlignCenter className="size-4" />,
            onclick: () => editor?.chain().focus().setTextAlign('center').run(),
            pressed: editor?.isActive({ textAlign: 'center' }),
        },
        {
            icon: <AlignRight className="size-4" />,
            onclick: () => editor?.chain().focus().setTextAlign('right').run(),
            pressed: editor?.isActive({ textAlign: 'right' }),
        },
        {
            icon: <AlignJustify className="size-4" />,
            onclick: () => editor?.chain().focus().setTextAlign('justify').run(),
            pressed: editor?.isActive({ textAlign: 'justify' }),
            disabled: !editor?.can().chain().focus().undo().run()
        },
        {
            icon: <UndoIcon className="size-4" />,
            onclick: () => editor?.chain().focus().redo().run(),
            pressed: editor?.isActive({ textAlign: 'left' }),
            disabled: !editor?.can().chain().focus().redo().run()
        }, {
            icon: <Redo className="size-4" />,
            onclick: () => editor?.chain().focus().undo().run(),
            pressed: editor?.isActive({ textAlign: 'left' }),
        },{
            icon: <List className="size-4" />,
            onclick: () => editor?.chain().focus().toggleBulletList().run(),
            pressed: editor?.isActive('bulletList'),
        },
        {
            icon: <ListOrdered className="size-4" />,
            onclick: () => editor?.chain().focus().toggleOrderedList().run(),
            pressed: editor?.isActive('orderedList'),
        },
    ]
  

    return (
        <div className="flex absolute w-64 flex-wrap bottom-10 right-4  items-center p-2 rounded-md bg-white shadow-sm border border-zinc-200 mt-2 gap-2">
            <Button type="submit" className="cursor-pointer w-full sm:w-auto" disabled={(loading)}>
                Send Email <span className="ml-2"><SendIcon /></span>
            </Button>
            {
                Options.map((option, index) => (
                    <Toggle key={index} disabled={option.disabled ? option.disabled : false} pressed={option.pressed} onClick={option.onclick}>
                        {option.icon}
                    </Toggle>
                ))
            }
            <Link href="/email/templates" className="cursor-pointer flex items-center py-2 px-4 bg-zinc-800 rounded-md">
                <span className="mr-2 text-white text-sm"><LuLayoutTemplate /></span> <span className=" text-sm text-white">Choose Template</span>
            </Link>
        </div>
    )
}

