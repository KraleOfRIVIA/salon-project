'use client';

import { useState } from 'react';
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import { Menu, X } from 'lucide-react';

export default function NavBar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-4 flex items-center justify-between">
                <div className="text-2xl font-bold">[Logo / Brand]</div>

                {/* Desktop menu */}
                <div className="hidden md:block">
                    <NavigationMenu>
                        <NavigationMenuList className="space-x-6">
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    href="#hero"
                                    className="hover:text-gray-500 transition"
                                >
                                    [Home]
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    href="#about"
                                    className="hover:text-gray-500 transition"
                                >
                                    [About]
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    href="#courses"
                                    className="hover:text-gray-500 transition"
                                >
                                    [Courses]
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    href="#testimonials"
                                    className="hover:text-gray-500 transition"
                                >
                                    [Testimonials]
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    href="#contact"
                                    className="hover:text-gray-500 transition"
                                >
                                    [Contact]
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Mobile burger icon */}
                <button
                    className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile dropdown menu */}
            {open && (
                <div className="md:hidden bg-white shadow-md border-t animate-slide-down">
                    <ul className="flex flex-col items-center py-4 space-y-4">
                        {['hero', 'about', 'courses', 'testimonials', 'contact'].map((section) => (
                            <li key={section}>
                                <a
                                    href={`#${section}`}
                                    className="text-lg hover:text-gray-500 transition"
                                    onClick={() => setOpen(false)}
                                >
                                    [{section.charAt(0).toUpperCase() + section.slice(1)}]
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}
