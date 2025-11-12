import React, { useState } from 'react';
import { BotIcon, UserIcon, SparklesIcon, MapPinIcon, ListBulletIcon, CalendarDaysIcon, CreditCardIcon, CheckCircleIcon, BellIcon } from './components/icons';

const JourneyStep = ({ icon, title, description, children, isLast = false }: { icon: React.ReactNode, title: string, description: string, children?: React.ReactNode, isLast?: boolean }) => (
  <div className="flex items-start">
    <div className="flex flex-col items-center mr-4 rtl:mr-0 rtl:ml-4">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300">
        {icon}
      </div>
      {!isLast && <div className="w-px h-24 bg-gray-300 dark:bg-gray-600"></div>}
    </div>
    <div className="w-full pb-8">
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
        <h3 className="font-bold mb-1 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
        {children && <div className="mt-4 border-t border-gray-200 dark:border-gray-700 pt-3">{children}</div>}
      </div>
    </div>
  </div>
);

const ChatBubble = ({ sender, text }: { sender: 'bot' | 'user', text: string }) => (
  <div className={`flex items-start my-2 ${sender === 'user' ? 'justify-end' : 'justify-start'}`}>
    <div className={`flex items-center max-w-xs md:max-w-sm ${sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${sender === 'bot' ? 'bg-gray-200 dark:bg-gray-600 ml-2 rtl:ml-0 rtl:mr-2' : 'bg-blue-200 mr-2 rtl:mr-0 rtl:ml-2'}`}>
        {sender === 'bot' ? <BotIcon className="w-5 h-5 text-gray-500 dark:text-gray-300" /> : <UserIcon className="w-5 h-5 text-blue-600" />}
      </div>
      <div className={`px-3 py-2 rounded-lg shadow-sm text-sm ${sender === 'bot' ? 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200' : 'bg-blue-600 text-white'}`}>
        {text}
      </div>
    </div>
  </div>
);

const BookingJourney = () => (
    <>
      <JourneyStep icon={<SparklesIcon className="w-6 h-6" />} title="1. بدء المحادثة" description="يبدأ العميل بالتواصل عبر منصة المراسلة (واتساب، انستغرام، الخ) للاستفسار أو الحجز.">
          <ChatBubble sender="user" text="مرحباً، أود حجز موعد." />
      </JourneyStep>

      <JourneyStep icon={<MapPinIcon className="w-6 h-6" />} title="2. اختيار الفرع" description="يرحب الوكيل بالعميل ويطلب منه تحديد الفرع المطلوب لتقديم خدمة أفضل.">
           <ChatBubble sender="bot" text="أهلاً بك! لنقدم لك أفضل خدمة، يرجى اختيار الفرع: الرياض أم جدة؟" />
           <ChatBubble sender="user" text="الرياض" />
      </JourneyStep>

      <JourneyStep icon={<ListBulletIcon className="w-6 h-6" />} title="3. تحديد نية العميل" description="يعرض الوكيل الخيارات المتاحة لمساعدة العميل في الوصول إلى هدفه بسرعة.">
          <ChatBubble sender="bot" text="ممتاز. كيف يمكنني مساعدتك في فرع الرياض اليوم؟ (حجز موعد، عرض الخدمات، التواصل مع موظف)" />
          <ChatBubble sender="user" text="أريد حجز موعد" />
      </JourneyStep>
      
      <JourneyStep icon={<CalendarDaysIcon className="w-6 h-6" />} title="4. جمع المعلومات والحجز" description="يقود الوكيل العميل خلال عملية اختيار الخدمة، وجمع البيانات الأساسية، واختيار المختص المناسب.">
           <ChatBubble sender="bot" text="بالتأكيد. أي خدمة تود الحصول عليها؟ (علم نفس الطفل، استشارات زوجية...)" />
           <ChatBubble sender="user" text="علم نفس الطفل" />
           <ChatBubble sender="bot" text="ممتاز. للحجز، نحتاج لبعض المعلومات. ما هو اسم الطفل ورقم جوال للتواصل؟" />
           <ChatBubble sender="user" text="اسمه 'خالد أحمد'، ورقم الجوال 0551234567." />
           <ChatBubble sender="bot" text="شكراً لك. لدينا في فرع الرياض د. فاطمة العمودي و د. أحمد خان. هل لديك تفضيل؟" />
           <ChatBubble sender="user" text="أريد معلومات عن د. فاطمة" />
           <ChatBubble sender="bot" text="د. فاطمة لديها خبرة 15 عامًا في علاج اضطرابات النمو لدى الأطفال." />
      </JourneyStep>
      
       <JourneyStep icon={<CreditCardIcon className="w-6 h-6" />} title="5. إتمام الحجز والدفع" description="بعد اختيار المختص، يوجه الوكيل العميل إلى صفحة آمنة لإتمام عملية تحديد الموعد والدفع إلكترونياً.">
           <ChatBubble sender="bot" text="لتأكيد حجزك مع د. فاطمة، يرجى الضغط على الرابط لإتمام الدفع واختيار الوقت." />
            <a href="#" onClick={(e) => e.preventDefault()} className="mt-2 block w-full text-center px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
                إتمام الحجز والدفع
            </a>
      </JourneyStep>

      <JourneyStep icon={<CheckCircleIcon className="w-6 h-6" />} title="6. تأكيد الحجز" description="بمجرد إتمام الدفع، يرسل الوكيل رسالة تأكيد فورية تحتوي على تفاصيل الموعد.">
           <ChatBubble sender="bot" text="شكراً لك. تم تأكيد موعد خالد بنجاح مع د. فاطمة يوم الثلاثاء الساعة 4 مساءً." />
      </JourneyStep>

      <JourneyStep icon={<BellIcon className="w-6 h-6" />} title="7. إشعار فريق العمل" description="بشكل فوري، يتم إرسال إشعار لفريق العمل يحتوي على كافة تفاصيل الحجز الجديد (اسم العميل، الخدمة، الدكتور، الموعد) لتجهيز ملف العميل.">
      </JourneyStep>

      <JourneyStep icon={<BellIcon className="w-6 h-6" />} title="8. تذكير ما قبل الموعد" description="يرسل الوكيل تذكيراً تلقائياً للعميل قبل الموعد بعدة ساعات لضمان عدم نسيانه." isLast={true}>
          <ChatBubble sender="bot" text="تذكير: موعد خالد اليوم الساعة 4 مساءً. نتطلع لرؤيتكم." />
      </JourneyStep>
    </>
);

const InquiryJourney = () => (
    <>
      <JourneyStep icon={<SparklesIcon className="w-6 h-6" />} title="1. بدء الاستفسار" description="يسأل العميل عن معلومات محددة حول الموقع أو أحد الأطباء.">
          <ChatBubble sender="user" text="أهلاً، ممكن أعرف وين مكان فرع جدة بالضبط؟" />
      </JourneyStep>
      <JourneyStep icon={<MapPinIcon className="w-6 h-6" />} title="2. تقديم معلومات الموقع" description="يقدم الوكيل العنوان الدقيق ورابطاً للموقع على الخرائط لتسهيل الوصول.">
          <ChatBubble sender="bot" text="أهلاً بك! فرعنا في جدة يقع في حي الروضة، شارع الأمير سلطان. يمكنك الوصول بسهولة عبر الرابط التالي:" />
           <a href="#" onClick={(e) => e.preventDefault()} className="mt-2 block w-full text-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                عرض على الخريطة
            </a>
      </JourneyStep>
      <JourneyStep icon={<UserIcon className="w-6 h-6" />} title="3. الاستفسار عن طبيب" description="يستفسر العميل عن طبيب معين، فيقدم الوكيل نبذة عن خبراته وتخصصه.">
          <ChatBubble sender="user" text="عظيم. وحاب أسأل عن الدكتورة ليلى حسن." />
          <ChatBubble sender="bot" text="بالتأكيد. د. ليلى حسن متخصصة في إدارة القلق والتوتر وتستخدم تقنيات العلاج السلوكي المعرفي." />
      </JourneyStep>
       <JourneyStep icon={<CalendarDaysIcon className="w-6 h-6" />} title="4. الاستفسار عن أوقات العمل" description="يسأل العميل عن ساعات عمل الطبيب، فيقدم الوكيل الجدول الزمني المتاح." isLast={true}>
          <ChatBubble sender="user" text="ممتاز، ومتى تكون ساعات عملها؟" />
          <ChatBubble sender="bot" text="د. ليلى متواجدة في فرع جدة أيام الأحد، الثلاثاء، والخميس من الساعة 4 مساءً حتى 9 مساءً. هل تود حجز موعد؟" />
      </JourneyStep>
    </>
);

const ComplaintJourney = () => (
    <>
        <JourneyStep icon={<SparklesIcon className="w-6 h-6" />} title="1. تقديم الشكوى" description="يعبر العميل عن عدم رضاه عن تجربة سابقة.">
            <ChatBubble sender="user" text="صراحة تجربتي معكم آخر مرة لم تكن جيدة." />
        </JourneyStep>
        <JourneyStep icon={<BotIcon className="w-6 h-6" />} title="2. الاستجابة والتعاطف" description="يستجيب الوكيل بتعاطف واهتمام، ويطلب تفاصيل لفهم المشكلة.">
            <ChatBubble sender="bot" text="نأسف جداً لسماع ذلك. راحتك هي أولويتنا. هل يمكنك إخباري بما حدث لنتمكن من حل المشكلة؟" />
            <ChatBubble sender="user" text="كان موعدي الساعة 5 وانتظرت أكثر من 45 دقيقة." />
        </JourneyStep>
        <JourneyStep icon={<UserIcon className="w-6 h-6" />} title="3. تسجيل المشكلة وعرض الحلول" description="يسجل الوكيل الشكوى ويعرض تحويل العميل لموظف بشري للمتابعة الفورية.">
            <ChatBubble sender="bot" text="أتفهم إحباطك تماماً، هذا غير مقبول. تم تسجيل ملاحظتك وسيتم مراجعتها. هل تود التحدث مع أحد مسؤولي خدمة العملاء الآن لمتابعة الأمر بشكل شخصي؟" />
             <a href="#" onClick={(e) => e.preventDefault()} className="mt-2 block w-full text-center px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">
                التحدث إلى موظف
            </a>
        </JourneyStep>
         <JourneyStep icon={<BellIcon className="w-6 h-6" />} title="4. آلية تحويل المحادثة" description="عند طلب العميل، يتم إشعار الموظف المختص فوراً عبر القناة المخصصة (إيميل، تليجرام، واتساب) مع تزويده بسجل المحادثة كاملاً." isLast={true}>
        </JourneyStep>
    </>
);

const RescheduleJourney = () => (
    <>
      <JourneyStep icon={<SparklesIcon className="w-6 h-6" />} title="1. طلب تعديل الموعد" description="يطلب العميل إلغاء أو تأجيل موعده الحالي.">
          <ChatBubble sender="user" text="مرحباً، أرغب في تأجيل موعدي." />
      </JourneyStep>
      <JourneyStep icon={<CheckCircleIcon className="w-6 h-6" />} title="2. التحقق من الحجز" description="يطلب الوكيل معلومات للتحقق من الحجز وتحديد الموعد المقصود.">
          <ChatBubble sender="bot" text="أهلاً بك. للمساعدة، يرجى تزويدي برقم الجوال المسجل في الحجز." />
          <ChatBubble sender="user" text="0501234567" />
          <ChatBubble sender="bot" text="شكراً. لدينا موعد مسجل باسمك مع د. أحمد خان يوم الأربعاء الساعة 11 صباحاً. هل هذا صحيح؟" />
          <ChatBubble sender="user" text="نعم صحيح." />
      </JourneyStep>
      <JourneyStep icon={<CalendarDaysIcon className="w-6 h-6" />} title="3. تنفيذ التعديل" description="يوفر الوكيل رابطاً للعميل ليتمكن من اختيار موعد جديد بسهولة." isLast={true}>
          <ChatBubble sender="bot" text="هل تود إلغاء الموعد نهائياً أم إعادة جدولته؟" />
          <ChatBubble sender="user" text="إعادة جدولة." />
          <ChatBubble sender="bot" text="تفضل، يمكنك اختيار موعد جديد يناسبك من خلال الرابط التالي. سيتم إلغاء الموعد القديم تلقائياً بعد تأكيد الجديد." />
           <a href="#" onClick={(e) => e.preventDefault()} className="mt-2 block w-full text-center px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors">
                إعادة جدولة الموعد
            </a>
      </JourneyStep>
    </>
);

const ServicesJourney = () => (
    <>
        <JourneyStep icon={<SparklesIcon className="w-6 h-6" />} title="1. الاستفسار عن خدمة" description="يسأل العميل عن الخدمات المتاحة لمشكلة معينة وعن أسعارها.">
            <ChatBubble sender="user" text="عندكم جلسات لعلاج الاكتئاب؟ وكم أسعارها؟" />
        </JourneyStep>
        <JourneyStep icon={<ListBulletIcon className="w-6 h-6" />} title="2. عرض تفاصيل الخدمة" description="يقدم الوكيل معلومات وافية عن الخدمة المناسبة، الأطباء، والأسعار، ويجيب على الأسئلة التفصيلية.">
            <ChatBubble sender="bot" text="نعم، نقدم جلسات 'إدارة القلق والتوتر' التي تغطي جوانب الاكتئاب. سعر الجلسة 450 ريال." />
            <ChatBubble sender="user" text="جميل. لكن ما هي الأساليب المتبعة في هذه الجلسات؟ هل هي مناسبة للمراهقين؟" />
            <ChatBubble sender="bot" text="سؤال مهم. في هذه الجلسات، يستخدم مختصونا أساليب العلاج السلوكي المعرفي (CBT) وتقنيات الاسترخاء واليقظة الذهنية. وهي فعالة جداً ومناسبة للمراهقين والبالغين على حد سواء." />
            <ChatBubble sender="user" text="هل فيه عروض أو باقات؟" />
        </JourneyStep>
        <JourneyStep icon={<CreditCardIcon className="w-6 h-6" />} title="3. تقديم العروض والحث على اتخاذ إجراء" description="يعرض الوكيل الباقات والخصومات المتاحة، ثم يقترح على العميل الحجز." isLast={true}>
            <ChatBubble sender="bot" text="بالتأكيد. لدينا باقة 4 جلسات بسعر 1600 ريال (توفير 200 ريال)، وخصم 15% للعملاء الجدد على أول جلسة. هل تود حجز جلستك الأولى والاستفادة من الخصم؟" />
        </JourneyStep>
    </>
);


const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('booking');

  const tabs = [
    { id: 'booking', label: 'حجز موعد' },
    { id: 'inquiry', label: 'الاستفسار عن الموقع والطبيب' },
    { id: 'complaint', label: 'الشكاوي والتحدث لموظف' },
    { id: 'reschedule', label: 'إلغاء أو تأجيل موعد' },
    { id: 'services', label: 'الخدمات والأسعار والعروض' },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen font-sans">
      <header className="bg-white dark:bg-gray-800 shadow-sm p-4 text-center sticky top-0 z-10">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">عرض وكيل الذكاء الاصطناعي</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">مقدم من <span className="font-bold text-blue-600 dark:text-blue-400">حلول بوتلي</span></p>
      </header>
      
      <main className="p-4 md:p-8">
        <div className="max-w-3xl mx-auto">
           <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-gray-900 dark:text-white">رحلة العميل</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
            مسار توضيحي يوضح خطوات تفاعل العميل مع وكيل بوتلي الذكي لمركز الإرشاد النفسي.
          </p>

          <div className="mb-10 flex flex-wrap justify-center gap-2 md:gap-3 px-2">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-2 text-xs md:text-sm font-bold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900 focus:ring-blue-500 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div>
            {activeTab === 'booking' && <BookingJourney />}
            {activeTab === 'inquiry' && <InquiryJourney />}
            {activeTab === 'complaint' && <ComplaintJourney />}
            {activeTab === 'reschedule' && <RescheduleJourney />}
            {activeTab === 'services' && <ServicesJourney />}
          </div>

        </div>
      </main>
       <footer className="text-center p-4">
         <p className="text-xs text-gray-500 dark:text-gray-400">
          Powered by <span className="font-bold text-blue-600 dark:text-blue-400">Botly Solutions | حلول بوتلي</span>
        </p>
      </footer>
    </div>
  );
};

export default App;
