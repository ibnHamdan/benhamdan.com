
import React from 'react';
import type { Service } from '../types';

interface SidebarLeftProps {
    services: Service[];
}

const SidebarLeft: React.FC<SidebarLeftProps> = ({ services }) => {
    return (
        <div className="hidden md:flex md:col-span-3 flex-col bg-white dark:bg-[#111621] border-grid-line">
            {/* Services List */}
            <div className="flex-1 p-8 lg:p-10 border-b border-grid-line overflow-y-auto no-scrollbar">
                <h4 className="font-bold text-sm mb-6 uppercase tracking-widest text-primary flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">design_services</span>
                    الخدمات
                </h4>
                <ul className="space-y-4">
                    {services.map((service, idx) => (
                        <React.Fragment key={service.id}>
                            <li className="group cursor-default">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="font-bold group-hover:text-primary transition-colors">{service.title}</span>
                                    <span className="text-xs font-mono text-text-muted">{service.number}</span>
                                </div>
                                <p className="text-xs text-text-muted">{service.skills}</p>
                            </li>
                            {idx < services.length - 1 && <li className="w-full h-px bg-grid-line"></li>}
                        </React.Fragment>
                    ))}
                </ul>
            </div>

            {/* Contact Section */}
            <div className="p-8 lg:p-10 bg-[#f8f9fc] dark:bg-gray-800 flex flex-col justify-center">
                <p className="text-sm font-medium text-text-muted mb-4">هل لديك مشروع؟</p>
                <a className="text-2xl font-black hover:text-primary transition-colors break-all leading-none mb-8 block" href="mailto:hello@johndoe.com">
                    hello@johndoe.com
                </a>
                <div className="flex gap-4">
                    <SocialLink icon="code" />
                    <SocialLink icon="alternate_email" />
                    <SocialLink icon="link" />
                </div>
            </div>
        </div>
    );
};

const SocialLink: React.FC<{ icon: string }> = ({ icon }) => (
    <a className="h-10 w-10 border border-grid-line bg-white dark:bg-black rounded flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all group" href="#">
        <span className="material-symbols-outlined text-[18px]">{icon}</span>
    </a>
);

export default SidebarLeft;
