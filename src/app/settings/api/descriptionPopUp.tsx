import { Button } from "@/components/ui/button"

interface Props {
    description: (value: string) => void,
    display: (value: boolean) => void,
    createAPI: (value: boolean) => void
}
function DescriptionPopUp({ display, createAPI,description }: Props) {
    return (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-transparent ">
            <form
                className="w-full max-w-md rounded-xl bg-white shadow-2xl flex flex-col p-8"
                onSubmit={e => {
                    e.preventDefault();
                    display(false);
                    createAPI(true);
                }}
            >
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Describe your API</h2>
                <div className="mb-6">
                    <label htmlFor="describe" className="block text-sm font-medium text-gray-700 mb-2">
                        Description
                    </label>
                    <input
                        type="text"
                        id="describe"
                        name="describe"
                        placeholder="Describe your API"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F6C68] transition"
                        onInput={e => {
                            const { value } = e.target as HTMLInputElement;
                            description(value);
                        }}
                        required
                    />
                </div>
                <div className="flex justify-end space-x-3">
                    <Button
                        type="button"
                        variant="outline"
                        onClick={() => display(false)}
                        className="px-5 py-2 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 transition"
                    >
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        variant="default"
                        className="px-5 py-2 rounded-md bg-[#0F6C68] text-white hover:bg-[#0F6C68] transition"
                    >
                        Create
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default DescriptionPopUp