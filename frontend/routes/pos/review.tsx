const orderItems = [
    {
        quantity: 3,
        label: "Buko Juice (Small Cup)",
        price: 165.0,
    },
    {
        quantity: 1,
        label: "Buko Shake (Small Bottle)",
        price: 60.0,
    },
    {
        quantity: 1,
        label: "Buko Shake (Small Bottle)",
        price: 60.0,
    },
];

export default function Index() {
    return (
        <div class="flex flex-col max-h-screen max-w-screen">
            <div class="h-screen bg-indigo-900 flex flex-col items-center px-2">
                <div class="rounded-full h-1 w-16 bg-white m-1"></div>
                <div class="flex flex-col flex-grow w-full bg-white text-indigo-900 items-center my-2 mt-16 gap-4 rounded-2xl p-4 items-stretch">
                    <div class="text-2xl font-bold">
                        Buko Juan Arca South #31
                    </div>
                    <div class="flex flex-col gap-2">
                        <div class="text-xl">Discounts and Misc</div>
                        <div class="flex flex-row gap-2">
                            <button class="whitespace-nowrap rounded-full border-2 border-indigo-900 px-4 py-1 text-indigo-900">
                                Senior Citizen
                            </button>
                            <button class="whitespace-nowrap rounded-full border-2 border-indigo-900 px-4 py-1 text-indigo-900">
                                PWD
                            </button>
                        </div>
                    </div>
                    <div class="max-w-full border-indigo-900 border-b-1 border-dashed"></div>
                    <div class="flex-grow flex flex-col gap-2 overflow-y-auto">
                        <div class="text-xl">Order Items</div>
                        <div class="flex flex-col w-full gap-1">
                            {orderItems.map((item) => (
                                <div class="flex flex-row gap-4 ml-2 items-center">
                                    <button
                                        class="rounded-full border-2 border-indigo-900 h-8 w-8"
                                        style={{ minWidth: "2rem" }}
                                    >
                                        {item.quantity}
                                    </button>
                                    <div class="text-lg flex whitespace-nowrap">
                                        {item.label}
                                    </div>
                                    <div class="flex-grow overflow-x-auto"></div>
                                    <div class="text-lg">P{item.price}</div>
                                </div>
                            ))}
                            <div class="border-b-1 border-indigo-900 ml-14 my-2"></div>
                            <div class="flex flex-row gap-4 ml-14 items-center">
                                <div class="text-lg flex-grow flex whitespace-nowrap overflow-x-auto">
                                    Subtotal
                                </div>
                                <div class="text-lg">PXXX</div>
                            </div>
                            <div class="flex flex-row gap-4 ml-14 items-center text-green-900">
                                <div class="text-lg flex-grow flex whitespace-nowrap overflow-x-auto">
                                    PWD (Discount)
                                </div>
                                <div class="text-lg">-PYYY</div>
                            </div>
                            <div class="border-b-1 border-indigo-900 ml-14 my-2"></div>
                            <div class="flex flex-row gap-4 ml-14 items-center font-bold">
                                <div class="text-lg flex-grow flex whitespace-nowrap overflow-x-auto">
                                    Total
                                </div>
                                <div class="text-lg">PZZZ</div>
                            </div>
                        </div>
                    </div>
                    <button class="rounded-2xl bg-white border-indigo-900 border-2 text-xl p-3">
                        Confirm Order (PZZZ)
                    </button>
                </div>
            </div>
        </div>
    );
}
