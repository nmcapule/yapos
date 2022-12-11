const tags = ["*", "Juice", "Shake", "Bottle", "Cup"];
const items = [
    "Buko Shake (Small Cup)",
    "Buko Shake (Medium Cup)",
    "Buko Shake (Large Cup)",
    "Buko Shake (Small Bottle)",
    "Buko Shake (Medium Bottle)",
    "Buko Shake (Large Bottle)",
    "Buko Juice (Small Cup)",
    "Buko Juice (Medium Cup)",
    "Buko Juice (Large Cup)",
    "Buko Juice (Small Bottle)",
    "Buko Juice (Medium Bottle)",
    "Buko Juice (Large Bottle)",
];
const cartItems = ["BJSC", "BJSB", "BSLB x2", "BSSB"];

export default function Index() {
    return (
        <div class="flex flex-col max-h-screen max-w-screen">
            <div class="h-32 bg-indigo-900 flex text-white text-2xl items-center justify-center px-2 gap-2">
                <div class="rounded-2xl bg-white px-1">Mn</div>
                <div class="flex-grow overflow-x-auto whitespace-nowrap">
                    Welcome to Buko Juan Arca South
                </div>
            </div>
            <div class="flex flex-col my-4">
                <div class="flex flex-row gap-2 mx-2">
                    <div class="flex-grow flex gap-2 overflow-x-auto">
                        {tags.map((tag) => (
                            <button class="whitespace-nowrap rounded-full border-2 border-indigo-900 px-4 text-indigo-900">
                                {tag}
                            </button>
                        ))}
                    </div>
                    <button class="rounded-full border-2 border-indigo-900 p-2 w-10 h-10">
                        🔍
                    </button>
                </div>
            </div>
            <div class="flex-grow flex flex-col mx-2 overflow-y-auto gap-2">
                {items.map((item) => (
                    <button class="rounded-2xl border-2 border-indigo-900 p-4 text-indigo-900 flex flex-row gap-4">
                        <div class="w-24 h-24 bg-indigo-900"></div>
                        <div class="flex-grow flex flex-col text-left">
                            <div class="text-xl font-bold">{item}</div>
                            <div class="text-md">
                                lorem ipsum dolor sit amet
                            </div>
                        </div>
                    </button>
                ))}
            </div>
            <div class="h-48 bg-indigo-900 flex flex-col items-center">
                <div class="rounded-full h-1 w-16 bg-white m-1"></div>
                <div class="flex flex-row flex-grow w-full items-center px-4 gap-2">
                    <div class="flex flex-row flex-grow gap-2 overflow-x-auto">
                        {cartItems.map((item) => (
                            <div class="rounded-full whitespace-nowrap bg-white px-4 py-1 text-md text-indigo-900">
                                {item}
                            </div>
                        ))}
                    </div>
                    <div class="text-xl font-bold text-white">P1000.00</div>
                </div>
            </div>
        </div>
    );
}
