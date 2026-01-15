
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="flex-none h-20 border-b border-grid-line bg-white dark:bg-[#1a202c] z-50 px-6 md:px-8 flex items-center justify-between">
            <div className="flex items-center gap-3 cursor-pointer group">
                <div className="w-10 h-10 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-lg rounded group-hover:bg-primary transition-colors">
                    ع
                </div>
                <span className="font-bold tracking-tight text-lg hidden sm:block">عبدالرحمن بن حمدان<span className="text-primary">.</span></span>
            </div>

            <nav className="hidden md:flex items-center gap-10">
                <a className="text-sm font-bold hover:text-primary transition-colors uppercase tracking-wider" href="#">المشاريع</a>
                <a className="text-sm font-bold hover:text-primary transition-colors uppercase tracking-wider" href="#">الفلسفة</a>
                <a className="text-sm font-bold hover:text-primary transition-colors uppercase tracking-wider" href="#">تواصل</a>
            </nav>

            <button className="flex items-center gap-2 bg-black hover:bg-primary text-white px-6 py-2.5 rounded text-sm font-bold transition-all transform active:scale-95 shadow-sm">
                <span className="material-symbols-outlined text-[20px]">download</span>
                <span>السيرة الذاتية</span>
            </button>
        </header>
    );
};

export default Header;
