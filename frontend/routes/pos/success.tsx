export default function Index() {
    return (
        <div class="flex flex-col max-h-screen max-w-screen">
            <div class="h-screen bg-indigo-900 flex flex-col items-center px-2">
                <div class="rounded-full h-1 w-16 bg-white m-1"></div>

                <div class="flex flex-col w-full max-w-md bg-white text-indigo-900 mt-48 items-center gap-4 rounded-2xl p-4 items-stretch">
                    <div class="flex justify-center mt-8">
                        <div class="h-32 w-32 bg-green-600 rounded-3xl"></div>
                    </div>
                    <div class="mx-8">
                        <div class="text-2xl font-bold text-center">
                            Order Received 🎉
                        </div>
                        <div class="text-md">
                            Lorem ipsum keme keme keme 48 years waz kasi ganders
                            na at bakit fayatollah kumenis
                        </div>
                    </div>
                    <button class="rounded-2xl bg-white border-indigo-900 border-2 text-xl p-3">
                        Back to POS
                    </button>
                </div>
            </div>
        </div>
    );
}
