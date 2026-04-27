"use client";

import Image from "next/image";

export default function Header() {
    return (
        <div className="w-full bg-white shadow-sm px-4 py-2 flex items-center gap-4">
            <div className="w-[260px]">

            </div>

            {/* CENTER - SEARCH */}
            <div className="flex-1">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Tìm kiếm phần mềm..."
                        className="w-full border rounded-full px-10 py-2 bg-gray-100 focus:outline-none"
                    />
                    <span className="absolute left-3 top-2.5 text-gray-500">🔍</span>
                </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-3">

                {/* Coin */}
                <div className="bg-gray-100 px-4 py-2 rounded-lg text-sm flex items-center gap-2">
                    💰 <span className="font-semibold">0</span>
                </div>

                {/* Button */}
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    Nạp
                </button>

                {/* Dark mode */}
                <div className="w-10 h-10 bg-gray-100 flex items-center justify-center rounded-full cursor-pointer">
                    🌙
                </div>

                {/* Language */}
                <div className="px-3 py-2 bg-gray-100 rounded-full text-sm cursor-pointer">
                    VN
                </div>

                {/* Avatar */}
                <div className="w-10 h-10 rounded-full overflow-hidden cursor-pointer">
                    <Image
                        src="/avatar.png"
                        alt="avatar"
                        width={40}
                        height={40}
                    />
                </div>
            </div>
        </div>
    );
}