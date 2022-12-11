const orderItems = [
    {
        label: "Buko Juice (Small Cup)",
        quantity: 8,
    },
    {
        label: "Buko Juice (Medium Cup)",
        quantity: 8,
    },
    {
        label: "Buko Juice (Large Cup)",
        quantity: 8,
    },
    {
        label: "Buko Juice (Small Bottle)",
        quantity: 8,
    },
    {
        label: "Buko Juice (Medium Bottle)",
        quantity: 8,
    },
    {
        label: "Buko Juice (Large Bottle)",
        quantity: 8,
    },
    {
        label: "Buko Shake (Small Cup)",
        quantity: 8,
    },
    {
        label: "Buko Shake (Medium Cup)",
        quantity: 8,
    },
    {
        label: "Buko Shake (Large Cup)",
        quantity: 8,
    },
    {
        label: "Buko Shake (Small Bottle)",
        quantity: 8,
    },
    {
        label: "Buko Shake (Medium Bottle)",
        quantity: 8,
    },
    {
        label: "Buko Shake (Large Bottle)",
        quantity: 8,
    },
];

export default function Index() {
    return (
        <div class="flex flex-col max-h-screen max-w-screen">
            <div class="h-16 bg-indigo-900 flex text-white text-2xl items-center justify-center px-2 gap-2">
                <div class="rounded-2xl bg-white px-1">Mn</div>
                <div class="flex-grow overflow-x-auto whitespace-nowrap">
                    Welcome to Buko Juan Arca South
                </div>
            </div>
            <div class="h-screen bg-indigo-900 flex-grow flex flex-col items-center px-2 pt-4 overflow-y-auto">
                <div class="flex flex-col w-full bg-white text-indigo-900 my-2 gap-2 rounded-2xl p-4 items-stretch">
                    <div class="flex flex-row mb-2">
                        <div class="text-2xl flex-grow">Today's orders</div>
                        <div class="text-2xl">Quantity</div>
                    </div>
                    {orderItems.map((item) => (
                        <div class="flex flex-row">
                            <div class="flex-grow">○ {item.label}</div>
                            <div class="">{item.quantity}</div>
                        </div>
                    ))}
                </div>
                <div class="flex flex-col w-full bg-white text-indigo-900 my-2 gap-2 rounded-2xl p-4 items-stretch">
                    <div class="flex flex-row">
                        <div class="flex-grow text-sm">#31</div>
                        <div class="text-right text-sm">8 hours ago</div>
                    </div>
                    <div class="flex flex-row flex-wrap gap-2">
                        <div class="rounded-full whitespace-nowrap bg-white border-2 border-indigo-900 px-4 py-1 text-md text-indigo-900">
                            BJSC x2
                        </div>
                        <div class="rounded-full whitespace-nowrap bg-white border-2 border-indigo-900 px-4 py-1 text-md text-indigo-900">
                            BJMC
                        </div>
                        <div class="rounded-full whitespace-nowrap bg-white border-2 border-indigo-900 px-4 py-1 text-md text-indigo-900">
                            BSLB x30
                        </div>
                        <div class="rounded-full whitespace-nowrap bg-white border-2 border-indigo-900 px-4 py-1 text-md text-indigo-900">
                            BSSB
                        </div>
                    </div>
                    <div class="flex flex-row justify-end text-lg">
                        P1234.00
                    </div>
                </div>
                <div class="flex flex-col w-full bg-white text-indigo-900 my-2 gap-2 rounded-2xl p-4 items-stretch">
                    <div class="flex flex-row">
                        <div class="flex-grow text-sm">#31</div>
                        <div class="text-right text-sm">8 hours ago</div>
                    </div>
                    <div class="flex flex-row flex-wrap gap-2">
                        <div class="rounded-full whitespace-nowrap bg-white border-2 border-indigo-900 px-4 py-1 text-md text-indigo-900">
                            BJSC x2
                        </div>
                        <div class="rounded-full whitespace-nowrap bg-white border-2 border-indigo-900 px-4 py-1 text-md text-indigo-900">
                            BJMC
                        </div>
                        <div class="rounded-full whitespace-nowrap bg-white border-2 border-indigo-900 px-4 py-1 text-md text-indigo-900">
                            BSLB x30
                        </div>
                        <div class="rounded-full whitespace-nowrap bg-white border-2 border-indigo-900 px-4 py-1 text-md text-indigo-900">
                            BSSB
                        </div>
                    </div>
                    <div class="flex flex-row justify-end text-lg">
                        P1234.00
                    </div>
                </div>
            </div>
        </div>
    );
}
