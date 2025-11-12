import { Doctor, Service, Branch } from './types';

export const BRANCHES: { name: string; id: Branch }[] = [
  { name: 'الرياض', id: 'Riyadh' },
  { name: 'جدة', id: 'Jeddah' },
];

export const DOCTORS: Doctor[] = [
  {
    id: 'd1',
    name: 'د. فاطمة العمودي',
    specialty: 'علم نفس الطفل',
    bio: 'د. فاطمة لديها أكثر من 15 عامًا من الخبرة في العمل مع الأطفال والمراهقين، متخصصة في العلاج السلوكي واضطرابات النمو.',
    branch: 'Riyadh',
    image: 'https://picsum.photos/seed/fatima/200/200'
  },
  {
    id: 'd2',
    name: 'د. أحمد خان',
    specialty: 'استشارات زوجية',
    bio: 'د. أحمد مستشار علاقات معتمد يساعد الأزواج على تجاوز التحديات وبناء روابط أقوى.',
    branch: 'Riyadh',
    image: 'https://picsum.photos/seed/ahmed/200/200'
  },
  {
    id: 'd3',
    name: 'د. ليلى حسن',
    specialty: 'إدارة القلق والتوتر',
    bio: 'د. ليلى تستخدم تقنيات العلاج السلوكي المعرفي لمساعدة الأفراد على إدارة القلق والتوتر بفعالية.',
    branch: 'Jeddah',
    image: 'https://picsum.photos/seed/layla/200/200'
  },
  {
    id: 'd4',
    name: 'د. يوسف الغامدي',
    specialty: 'إدارة القلق والتوتر',
    bio: 'د. يوسف متخصص في تقنيات خفض التوتر القائمة على اليقظة الذهنية وساعد العديد من العملاء على إيجاد التوازن والسلام الداخلي.',
    branch: 'Jeddah',
    image: 'https://picsum.photos/seed/yousef/200/200'
  },
  {
    id: 'd5',
    name: 'د. سارة إبراهيم',
    specialty: 'علم نفس الطفل',
    bio: 'مع دكتوراه من جامعة مرموقة، تركز د. سارة على العلاج باللعب للأطفال الصغار.',
    branch: 'Jeddah',
    image: 'https://picsum.photos/seed/sarah/200/200'
  },
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    name: 'جلسة علم نفس الطفل',
    doctorIds: ['d1', 'd5'],
  },
  {
    id: 's2',
    name: 'استشارات زوجية',
    doctorIds: ['d2'],
  },
  {
    id: 's3',
    name: 'إدارة القلق والتوتر',
    doctorIds: ['d3', 'd4'],
  },
];
