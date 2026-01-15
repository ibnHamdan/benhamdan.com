
import type { Project, Service } from './types';

export const PROJECTS: Project[] = [
    {
        id: '1',
        number: '٠١',
        category: 'مالية',
        title: 'لوحة التحكم المالية',
        description: 'أداة تصور بيانات شاملة لتتبع التمويل الشخصي، مبنية بتركيز عالي على أداء الرسوم البيانية.',
        year: '٢٠٢٣',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATLHDyyPa5ab3dzlIrnZ-4TobB9vPAA1_iXjelFfuX1vAFdHoAVME40ChU9EpSaFKtuTfJpnX5y94xYzXuSWWrI3oklwOHpNVFs7QuisczykW2fm48eQfBXVeBSJPRv8OS7KlYACCQFwFbJ99DinjgGViIfC7n2xEgwOFXR8Cg2T9Oge9Bvz8tiiPAxLltLmGClkHNHAr4R-FLKA7FvTu6ENlbdjEsFz7JwGpbTCpGFuNAAxe-z-PO6tAhrLpY2pX5ZqjVcDQhF68',
        tech: ['React', 'D3.js']
    },
    {
        id: '2',
        number: '٠٢',
        category: 'متاجر',
        title: 'منصة التجارة الإلكترونية',
        description: 'تنفيذ Shopify Headless يركز على السرعة والتحويل. يتميز بتدفق دفع مخصص.',
        year: '٢٠٢٤',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3_GJB_0AXBg9HN43qxM7MMnHFOxIenVYc1aFkebF-rt0-_GvKOKB5TMMxpNcVU8F_aF2OxTbLR9tkgMNvD0SB2ItHq3PTmL1YZSXPNI_GwFKqJnaLC-TJLrGz6WU1fEhCg25-eonV8oAnzjUsexmNlONK4jjDoe82g4wYZ08HE6oS5JbFYGLtvRjv-x1ZuCvQkiiXF9NEUHyNLr5HhRZmYWt-ajTQgHDTuCjiANXMIE2xXTBegICpRJXCgCNhndRCk3NMqh6BUMI',
        tech: ['Next.js', 'Shopify']
    },
    {
        id: '3',
        number: '٠٣',
        category: 'عمارة',
        title: 'التفاصيل المعمارية',
        description: 'معرض صور تفاعلي للمصورين المعماريين، يركز على المساحات السلبية والتكوين.',
        year: '٢٠٢٢',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeZkCLSdpWvveASHM2-TngyfnjEgOtp3MT2Hdybe-43wnb8dvZ_6oPx0G4bYnRVkAGX_ffw-d3ysCgnVvseS4ji8zQhFWwby-ucKIW3iIkoRocLrFpOH9q5aLsrlUZKawlbQrtgQVXufPgm4tHyl-VghChERT2mIxzeVLL8rxFlo-pLmmiFRUrHc8N2pnqmEgceek-rlKiyZEfLRr_sdoLProD9FqMvgfidy5x8JvWIpLJvCSxYAPa6SsYgE9KtAekwneVtjwanB0',
        tech: ['Vue', 'GSAP']
    }
];

export const SERVICES: Service[] = [
    { id: '1', number: '٠١', title: 'تطوير الويب', skills: 'React, Node.js' },
    { id: '2', number: '٠٢', title: 'تصميم الواجهات', skills: 'Figma, Prototyping' },
    { id: '3', number: '٠٣', title: 'الاستراتيجية التقنية', skills: 'SEO, Performance, Scaling' }
];
