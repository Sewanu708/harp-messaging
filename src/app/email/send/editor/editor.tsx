'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import { MenuBar } from '../menu-bar'
import Highlight from '@tiptap/extension-highlight'
import TextStyle from '@tiptap/extension-text-style'

interface Props {
    loading: boolean, domain: string, setHtmlContent: (value: { to: string, subject: string, html: string }) => void, htmlContent: {
        to: string, subject: string, html: string
    },error:{
        to: string, html: string
    },setError:(value: { to: string, html: string }) => void
}
interface html {
    to: string, subject: string, html: string
}
const Tiptap = ({ loading, domain, htmlContent,setHtmlContent,error,setError }: Props) => {
    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                bulletList: {
                    HTMLAttributes: {
                        class: 'list-disc ml-3'
                    }
                }, orderedList: {
                    HTMLAttributes: {
                        class: 'list-decimal ml-3'
                    }
                }

            }),
            Placeholder.configure({
                placeholder: 'Enter your message',
            }),
            Underline,
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }), TextStyle, Highlight
        ],
        content: '',
        editorProps: {
            attributes: {
                class:
                    'h-[300px] focus:border-none focus:outline-none overflow-y-auto py-2 px-2 ',
            },
        }, onUpdate: ({ editor }) => {
          const newdata = {...htmlContent,html:editor.getHTML()}
          if (editor.getHTML()==='<p></p>') {
            const errorData = {...error,html:'No content'}
            setError(errorData)
          } else{
            const errorData = {...error,html:''}
            setError(errorData)
             setHtmlContent(newdata)
          }
          setHtmlContent(newdata)

        }
    }, [])

    return (
        <>
            <EditorContent editor={editor} />
            {
                domain ? <MenuBar editor={editor} loading={loading} /> : <div className="flex absolute z-0 w-64 flex-wrap bottom-10 right-4  items-center p-2 rounded-md bg-white h-16  border border-zinc-200 mt-2 gap-2">Select domain to continue</div>
            }

        </>
    )
}

export default Tiptap
