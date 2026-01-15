
import React from 'react';

const HeroRight: React.FC = () => {
    return (
        <div className="hidden md:flex md:col-span-3 border-l border-grid-line flex-col justify-between p-8 lg:p-12 bg-white dark:bg-[#111621] overflow-y-auto no-scrollbar relative">
            <div className="space-y-8">
                <p className="text-xs font-mono text-primary font-bold uppercase tracking-widest flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                    متاح للعمل الحر
                </p>
                <h1 className="text-5xl xl:text-7xl font-bold leading-[0.9] tracking-tighter text-black dark:text-white">
                    بناء<br />
                    تجارب<br />
                    رقمية<span className="text-primary">.</span>
                </h1>
                <p className="text-text-muted leading-relaxed max-w-xs text-lg">
                    متخصص في صياغة تطبيقات ويب قوية وسهلة الاستخدام، بلمسة عربية بسيطة وأداء عالي.
                </p>
            </div>

            <div className="mt-12 space-y-6">
                <div className="pt-6 border-t border-grid-line">
                    <p className="text-xs font-bold uppercase tracking-wider text-text-muted mb-3">الموقع</p>
                    <div className="flex items-center gap-2 text-black dark:text-white font-medium">
                        <span className="material-symbols-outlined text-primary">location_on</span>
                        المملكة العربية السعودية
                    </div>
                </div>
            </div>

            {/* Decorative corner element */}
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-black dark:border-white m-4 opacity-20"></div>
        </div>
    );
};

export default HeroRight;
