"use client";

import { useState } from "react";

export default function Sidebar() {
    const [openSidebar, setOpenSidebar] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const [openMenus, setOpenMenus] = useState<any>({
        users: false,
        sub1: false,
        sub2: false,
        account: false,
        projects: false,
    });

    const toggleMenu = (key: string) => {
        setOpenMenus((prev: any) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    return (
        <>
            {/* MOBILE BUTTON */}
            <div className="lg:hidden p-4">
                <button
                    onClick={() => setOpenSidebar(true)}
                    className="px-3 py-2 bg-gray-200 rounded"
                >
                    Open
                </button>
            </div>

            {/* SIDEBAR */}
            <div
                className={`
    fixed top-0 left-0 h-full z-50 bg-[#aef0ea] border-r transition-all duration-300
    ${collapsed ? "w-16" : "w-64"}
    ${openSidebar ? "translate-x-0" : "-translate-x-full"}
    lg:translate-x-0
  `}
            >
                <div className="flex flex-col h-full">
                    {/* HEADER */}
                    <div className="flex justify-between items-center p-[17px] border-b">
                        <span className={`font-bold ${collapsed ? "hidden" : "inline"}`}>Tool</span>

                        {/* CLOSE MOBILE */}
                        <button
                            className="lg:hidden"
                            onClick={() => setOpenSidebar(false)}
                        >
                            ✕
                        </button>
                        <button
                            onClick={() => setCollapsed(!collapsed)}
                            className="hidden lg:block"
                        >
                            {collapsed ? "➡️" : "⬅️"}
                        </button>
                    </div>

                    {/* MENU */}
                    <nav className={`flex-1 overflow-y-auto p-2 space-y-1 ${collapsed ? "hidden" : "inline"}`}>
                        {/* Dashboard */}
                        <a className="block px-3 py-2 bg-gray-200 rounded">
                            Dashboard
                        </a>

                        {/* USERS */}
                        <div>
                            <button
                                onClick={() => toggleMenu("users")}
                                className="w-full flex justify-between px-3 py-2 hover:bg-gray-100 rounded"
                            >
                                Users
                                <span>{openMenus.users ? "▲" : "▼"}</span>
                            </button>

                            {openMenus.users && (
                                <div className="pl-4 space-y-1">
                                    {/* SUB 1 */}
                                    <div>
                                        <button
                                            onClick={() => toggleMenu("sub1")}
                                            className="w-full flex justify-between px-3 py-2 hover:bg-gray-100 rounded"
                                        >
                                            Sub Menu 1
                                            <span>{openMenus.sub1 ? "▲" : "▼"}</span>
                                        </button>

                                        {openMenus.sub1 && (
                                            <div className="pl-4">
                                                <a className="block py-1">Link 1</a>
                                                <a className="block py-1">Link 2</a>
                                                <a className="block py-1">Link 3</a>
                                            </div>
                                        )}
                                    </div>

                                    {/* SUB 2 */}
                                    <div>
                                        <button
                                            onClick={() => toggleMenu("sub2")}
                                            className="w-full flex justify-between px-3 py-2 hover:bg-gray-100 rounded"
                                        >
                                            Sub Menu 2
                                            <span>{openMenus.sub2 ? "▲" : "▼"}</span>
                                        </button>

                                        {openMenus.sub2 && (
                                            <div className="pl-4">
                                                <a className="block py-1">Link 1</a>
                                                <a className="block py-1">Link 2</a>
                                                <a className="block py-1">Link 3</a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* ACCOUNT */}
                        <div>
                            <button
                                onClick={() => toggleMenu("account")}
                                className="w-full flex justify-between px-3 py-2 hover:bg-gray-100 rounded"
                            >
                                Account
                                <span>{openMenus.account ? "▲" : "▼"}</span>
                            </button>

                            {openMenus.account && (
                                <div className="pl-4">
                                    <a className="block py-1">Link 1</a>
                                    <a className="block py-1">Link 2</a>
                                    <a className="block py-1">Link 3</a>
                                </div>
                            )}
                        </div>

                        {/* PROJECTS */}
                        <div>
                            <button
                                onClick={() => toggleMenu("projects")}
                                className="w-full flex justify-between px-3 py-2 hover:bg-gray-100 rounded"
                            >
                                Projects
                                <span>{openMenus.projects ? "▲" : "▼"}</span>
                            </button>

                            {openMenus.projects && (
                                <div className="pl-4">
                                    <a className="block py-1">Link 1</a>
                                    <a className="block py-1">Link 2</a>
                                    <a className="block py-1">Link 3</a>
                                </div>
                            )}
                        </div>

                        {/* STATIC */}
                        <a className="block px-3 py-2 hover:bg-gray-100 rounded">
                            Calendar
                        </a>

                        <a className="block px-3 py-2 hover:bg-gray-100 rounded">
                            Documentation
                        </a>
                    </nav>
                </div>
            </div>

            {/* OVERLAY MOBILE */}
            {openSidebar && (
                <div
                    onClick={() => setOpenSidebar(false)}
                    className="fixed inset-0 bg-black/30 lg:hidden"
                />
            )}
        </>
    );
}