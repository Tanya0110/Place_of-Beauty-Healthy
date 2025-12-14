
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Clock, CheckCircle, Heart, ArrowRight, Sparkles, MapPin, Phone, Instagram, MessageCircle, Star, Quote, ChevronLeft, ChevronRight, Calendar as CalendarIcon, AlertCircle, X, ZoomIn, ZoomOut, ExternalLink, Gift, CreditCard, Mail, Navigation } from 'lucide-react';
import { DIKIDI_COMPANY_ID, DIKIDI_WIDGET_URL } from '../data';
import { Review, BookingDetails, GalleryItem } from '../types';
import { sendTelegramNotification } from '../services/telegramService';

export const HomePage: React.FC<{ onNavigate: (page: string) => void; openBooking: () => void }> = ({ onNavigate, openBooking }) => (
  <>
    {/* HERO */}
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-200/40 dark:bg-purple-900/20 rounded-full blur-[80px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[700px] h-[700px] bg-fuchsia-200/30 dark:bg-fuchsia-900/20 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent dark:from-slate-950/90 dark:via-slate-950/40 dark:to-transparent"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto mt-20 animate-in slide-in-from-bottom-10 fade-in duration-700">
        <div className="mb-8 flex justify-center">
            <div className="px-8 py-2 border border-purple-200/50 dark:border-purple-800/50 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-full text-purple-800 dark:text-purple-300 text-xs md:text-sm uppercase tracking-[0.3em] font-bold shadow-lg shadow-purple-100/50 dark:shadow-none ring-1 ring-white/50 dark:ring-white/10">
              Салон красоты в Большом Камне
            </div>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter leading-[1.05] drop-shadow-sm">
          PLACE OF <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-600 neon-text drop-shadow-lg">BEAUTY & HEALTHY</span>
        </h1>
        <p className="text-lg md:text-2xl text-slate-700 dark:text-slate-300 mb-12 max-w-4xl mx-auto font-medium leading-relaxed drop-shadow-md">
          Для безупречного взгляда - брови и ресницы. <br className="hidden md:block"/>
          Для глубокого отдыха - ручной массаж. <br className="hidden md:block"/>
          Для красивой фигуры - аппаратный массаж.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button onClick={openBooking} className="group relative bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-lg px-12 py-5 rounded-full font-bold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 overflow-hidden hover:bg-slate-800 dark:hover:bg-slate-100">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 dark:via-black/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]"></div>
            <span className="flex items-center justify-center gap-2 relative z-10"><Clock size={20} className="text-purple-300 dark:text-purple-600" /> ЗАПИСАТЬСЯ</span>
          </button>
          <button onClick={() => onNavigate('services')} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md hover:bg-white dark:hover:bg-slate-800 text-slate-800 dark:text-white border border-purple-100 dark:border-slate-700 hover:border-purple-300 text-lg px-12 py-5 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
            Прайс-лист
          </button>
        </div>
      </div>
    </section>

    {/* MARQUEE */}
    <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 py-6 relative overflow-hidden shadow-2xl z-20 -mt-6 rotate-1 transform origin-left scale-105 border-y-4 border-white dark:border-slate-800">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <div className="whitespace-nowrap animate-marquee flex gap-16 text-white font-bold tracking-[0.15em] uppercase text-sm md:text-base items-center w-max">
          <span className="flex items-center gap-4">✨ СКИДКИ ДО -30% ✨</span>
          <span className="flex items-center gap-4">💎 КАРТА ЛЮБИМОГО КЛИЕНТА 💎</span>
          <span className="flex items-center gap-4">🎁 ПОДАРОЧНЫЕ СЕРТИФИКАТЫ 🎁</span>
          <span className="flex items-center gap-4">✨ СКИДКИ ДО -30% ✨</span>
          <span className="flex items-center gap-4">💎 КАРТА ЛЮБИМОГО КЛИЕНТА 💎</span>
          <span className="flex items-center gap-4">🎁 ПОДАРОЧНЫЕ СЕРТИФИКАТЫ 🎁</span>
        </div>
    </div>
    <style>{`
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-marquee {
        animation: marquee 20s linear infinite;
      }
      @keyframes shimmer {
        100% { transform: translateX(100%); }
      }
    `}</style>

    {/* ABOUT SECTION */}
    <section className="py-32 bg-white dark:bg-slate-900 relative overflow-hidden transition-colors duration-500">
       <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-fuchsia-200 dark:bg-fuchsia-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center relative z-10">
        <div>
          <div className="inline-block px-4 py-1.5 rounded-full bg-purple-50 dark:bg-purple-900/30 border border-purple-100 dark:border-purple-800 text-purple-600 dark:text-purple-300 font-bold text-xs uppercase tracking-widest mb-6 shadow-sm">О нас</div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-800 dark:text-white mb-8 leading-tight">
            Почему выбирают <br/><span className="text-purple-600 dark:text-purple-400 neon-text text-3xl md:text-5xl block mt-2">PLACE OF BEAUTY & HEALTHY?</span>
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6 group">
              <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl flex-shrink-0 flex items-center justify-center text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-slate-700 shadow-xl shadow-purple-100/50 dark:shadow-none group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                <CheckCircle size={32} />
              </div>
              <div>
                <h4 className="font-bold text-xl text-slate-800 dark:text-white mb-2">Опытные мастера</h4>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">Наши специалисты — настоящие фанаты своего дела, постоянно повышающие квалификацию.</p>
              </div>
            </div>
            <div className="flex gap-6 group">
              <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl flex-shrink-0 flex items-center justify-center text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-slate-700 shadow-xl shadow-purple-100/50 dark:shadow-none group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                <Heart size={32} />
              </div>
              <div>
                <h4 className="font-bold text-xl text-slate-800 dark:text-white mb-2">Атмосфера релакса</h4>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">Стильный интерьер, приглушенный свет, вкусный чай и полная изоляция от городской суеты.</p>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <button onClick={() => onNavigate('services')} className="text-purple-700 dark:text-purple-400 font-bold flex items-center gap-2 hover:gap-4 transition-all group tracking-widest uppercase text-sm border-b-2 border-purple-200 dark:border-purple-800 pb-1 hover:border-purple-600 dark:hover:border-purple-400">
              Смотреть услуги <ArrowRight size={20} />
            </button>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-purple-300 to-fuchsia-300 dark:from-purple-800 dark:to-fuchsia-800 rounded-[2.5rem] transform rotate-3 opacity-60 group-hover:opacity-80 transition-opacity blur-2xl"></div>
          <img 
            src="images/20.jpg" 
            alt="About Salon" 
            className="relative rounded-[2rem] shadow-2xl z-10 w-full object-cover aspect-[4/5] border-4 border-white dark:border-slate-800 ring-1 ring-slate-100 dark:ring-slate-700" 
          />
        </div>
      </div>
    </section>
  </>
);

export const ServicesPage: React.FC<{ openBooking: () => void; priceList: any }> = ({ openBooking, priceList }) => (
  <section className="pt-32 pb-20 container mx-auto px-6 bg-slate-50/50 dark:bg-slate-950/50 transition-colors duration-500">
    <div className="text-center mb-16 animate-in slide-in-from-bottom-5">
      <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">НАШ ПРАЙС-ЛИСТ</h2>
      <div className="h-2 w-24 bg-gradient-to-r from-purple-400 to-fuchsia-400 mx-auto rounded-full shadow-lg shadow-purple-200 dark:shadow-purple-900"></div>
      <p className="mt-6 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
        Выбирайте необходимые услуги или сэкономьте, взяв выгодные комплексы.
      </p>
    </div>

    {Object.keys(priceList).length === 0 ? (
       <div className="text-center text-slate-400 py-12">Загрузка прайс-листа...</div>
    ) : (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {Object.values(priceList).map((category: any, idx: number) => (
          <div key={idx} className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 md:p-10 border border-purple-50 dark:border-slate-800 shadow-lg hover:shadow-2xl hover:shadow-purple-100/50 dark:hover:shadow-purple-900/20 hover:border-purple-200 dark:hover:border-slate-700 transition-all hover:-translate-y-1 animate-in zoom-in-95 duration-500" style={{animationDelay: `${idx * 100}ms`}}>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 flex items-center gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
              <Sparkles size={24} className="text-purple-500" /> {category.title}
            </h3>
            <div className="space-y-6">
              {category.items.map((item: any, i: number) => (
                <div key={i} className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-2 group cursor-default">
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between">
                      <h4 className="font-bold text-slate-700 dark:text-slate-300 text-lg group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{item.name}</h4>
                      <span className="flex-1 mx-4 border-b border-dotted border-slate-200 dark:border-slate-700 hidden sm:block"></span>
                      <span className="font-bold text-purple-600 dark:text-purple-400 text-lg whitespace-nowrap hidden sm:block">{item.price}</span>
                    </div>
                    {item.desc && <p className="text-slate-400 text-sm mt-1">{item.desc}</p>}
                    <span className="font-bold text-purple-600 dark:text-purple-400 text-lg sm:hidden mt-2 block">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    )}

    <div className="text-center">
      <button onClick={openBooking} className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white text-lg px-16 py-5 rounded-full font-bold shadow-xl shadow-purple-200 dark:shadow-purple-900/50 transition-all hover:-translate-y-1 hover:scale-105">
        Записаться на процедуру
      </button>
    </div>
  </section>
);

export const CertificatesPage: React.FC<{ openCertModal: () => void }> = ({ openCertModal }) => {
  return (
    <section className="pt-32 pb-20 container mx-auto px-6 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 min-h-screen">
      <div className="text-center mb-16 animate-in slide-in-from-bottom-5">
        <h2 className="text-4xl md:text-6xl font-black text-slate-800 dark:text-white mb-4">ПОДАРОЧНЫЕ СЕРТИФИКАТЫ</h2>
        <div className="h-2 w-24 bg-gradient-to-r from-purple-400 to-fuchsia-400 mx-auto rounded-full shadow-lg shadow-purple-200 dark:shadow-purple-900"></div>
        <p className="mt-6 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Дарите красоту и здоровье своим близким. Идеальный подарок на любой праздник.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
         {/* Left Side: Info */}
         <div className="flex-1 max-w-lg space-y-8">
            <div className="flex gap-4">
               <div className="w-12 h-12 bg-purple-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <Gift size={24} />
               </div>
               <div>
                  <h3 className="font-bold text-xl text-slate-800 dark:text-white">Любой номинал</h3>
                  <p className="text-slate-500 dark:text-slate-400">От 1 000₽ до бесконечности. Также можно оформить сертификат на конкретную услугу.</p>
               </div>
            </div>
            <div className="flex gap-4">
               <div className="w-12 h-12 bg-purple-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <CalendarIcon size={24} />
               </div>
               <div>
                  <h3 className="font-bold text-xl text-slate-800 dark:text-white">Действует 6 месяцев</h3>
                  <p className="text-slate-500 dark:text-slate-400">Получатель сможет выбрать удобное время для визита в течение полугода.</p>
               </div>
            </div>
            <div className="flex gap-4">
               <div className="w-12 h-12 bg-purple-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <CreditCard size={24} />
               </div>
               <div>
                  <h3 className="font-bold text-xl text-slate-800 dark:text-white">Электронный или Бумажный</h3>
                  <p className="text-slate-500 dark:text-slate-400">Отправим красивый PDF на email или подготовим стильную печатную открытку в салоне.</p>
               </div>
            </div>
         </div>

         {/* Right Side: Visual & CTA */}
         <div className="flex-1 w-full max-w-xl bg-white dark:bg-slate-900 rounded-[3rem] p-8 md:p-12 shadow-2xl border border-purple-50 dark:border-slate-800 text-center">
             <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Хотите заказать?</h3>
             <p className="text-slate-500 dark:text-slate-400 mb-8">Оставьте заявку, и администратор свяжется с вами для оформления и оплаты.</p>
             
             <div className="mb-8">
                <span className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 font-bold text-xs uppercase tracking-widest rounded-lg mb-4">Дизайн карты "TITANIUM GREY"</span>
                {/* Visual Card Representation */}
                <div 
                   className="w-full aspect-[1.6/1] rounded-xl shadow-lg relative overflow-hidden flex bg-[#d6d6d6] text-left mx-auto transform transition-transform hover:scale-105 duration-500"
                   style={{ background: 'linear-gradient(135deg, #e3e3e3 0%, #cfcfcf 100%)' }}
                >
                    <div className="flex-1 p-4 md:p-6 flex flex-col justify-between relative">
                        <div>
                           <div className="text-[8px] uppercase font-bold tracking-widest text-zinc-800 mb-1">Place of Beauty & Healthy</div>
                           <div className="h-px w-10 bg-zinc-800/50"></div>
                        </div>
                        <div className="text-[10px] md:text-xs text-zinc-600 leading-snug">
                           В ваших руках уникальный подарок — <br/> сертификат в салон красоты
                        </div>
                        <div className="mt-2 text-[8px] text-zinc-500 uppercase tracking-wide flex justify-between items-end border-t border-zinc-400/30 pt-2">
                            <span>Действителен 6 месяцев</span>
                        </div>
                    </div>
                    <div className="w-10 md:w-14 border-l border-zinc-400/30 flex items-center justify-center bg-zinc-200/50">
                        <span className="text-lg md:text-xl font-serif tracking-[0.2em] text-zinc-800" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>СЕРТИФИКАТ</span>
                    </div>
                </div>
             </div>

             <button 
               onClick={openCertModal}
               className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white font-bold py-4 rounded-xl shadow-xl shadow-purple-200 dark:shadow-purple-900/40 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1"
             >
                <Gift size={20} /> Заказать сертификат
             </button>
         </div>
      </div>
    </section>
  );
};

export const ReviewsPage: React.FC<{ 
  openBooking: () => void;
  reviews: Review[];
  onAddReview: (review: Review) => void;
}> = ({ openBooking, reviews, onAddReview }) => {
  const [newReview, setNewReview] = useState({ name: '', text: '', rating: 5 });
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.text) return;
    
    const review: Review = {
      id: Date.now(),
      name: newReview.name,
      text: newReview.text,
      rating: newReview.rating,
      date: new Date().toLocaleDateString('ru-RU')
    };
    
    // Telegram Notify
    const msg = `⭐ <b>Новый отзыв!</b>\n\n👤 <b>Имя:</b> ${newReview.name}\n💬 <b>Текст:</b> "${newReview.text}"\n✨ <b>Оценка:</b> ${newReview.rating}/5`;
    sendTelegramNotification(msg);

    onAddReview(review);
    setNewReview({ name: '', text: '', rating: 5 });
    setShowForm(false);
  };

  return (
    <section className="pt-32 pb-20 container mx-auto px-6 bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      <div className="text-center mb-16 animate-in slide-in-from-bottom-5">
        <h2 className="text-4xl md:text-5xl font-black text-slate-800 dark:text-white mb-4">ОТЗЫВЫ</h2>
        <div className="h-2 w-24 bg-gradient-to-r from-purple-400 to-fuchsia-400 mx-auto rounded-full shadow-lg shadow-purple-200 dark:shadow-purple-900"></div>
        <div className="flex justify-center items-center gap-2 mt-4 bg-white dark:bg-slate-800 inline-flex px-6 py-2 rounded-full shadow-sm border border-slate-100 dark:border-slate-700">
           <div className="flex text-yellow-400 drop-shadow-sm">
              {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={20} />)}
           </div>
           <span className="text-slate-800 dark:text-white font-bold text-xl">5.0</span>
           <span className="text-slate-400 text-sm border-l border-slate-200 dark:border-slate-600 pl-2 ml-2">(на основе {reviews.length} оценок)</span>
        </div>
      </div>

      {reviews.length === 0 ? (
          <div className="text-center text-slate-400 py-12">Отзывов пока нет. Будьте первыми!</div>
      ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {reviews.map(review => (
               <div key={review.id} className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-purple-50 dark:border-slate-800 relative animate-in zoom-in-95 duration-500 hover:shadow-2xl hover:-translate-y-2 transition-all group">
                  <Quote className="absolute top-8 right-8 text-purple-100 dark:text-purple-900/50 group-hover:text-purple-200 dark:group-hover:text-purple-900 transition-colors" size={64} />
                  <div className="flex gap-1 text-yellow-400 mb-4">
                     {[...Array(review.rating)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 italic leading-relaxed relative z-10 font-medium">"{review.text}"</p>
                  <div className="flex justify-between items-center border-t border-slate-100 dark:border-slate-800 pt-4 mt-auto">
                     <span className="font-bold text-slate-900 dark:text-white">{review.name}</span>
                     <span className="text-xs text-slate-400 font-medium bg-slate-50 dark:bg-slate-800 px-2 py-1 rounded-md">{review.date}</span>
                  </div>
               </div>
            ))}
          </div>
      )}

      <div className="max-w-2xl mx-auto">
        {!showForm ? (
          <div className="text-center">
            <button onClick={() => setShowForm(true)} className="bg-white dark:bg-slate-900 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-slate-700 hover:border-purple-400 text-lg px-12 py-4 rounded-full font-bold transition-all shadow-md hover:shadow-lg">
               Оставить отзыв
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-[2.5rem] border border-purple-50 dark:border-slate-700 shadow-2xl animate-in slide-in-from-bottom-5 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
             <h3 className="text-2xl font-bold text-center text-slate-800 dark:text-white mb-6 relative z-10">Ваше мнение важно!</h3>
             <div className="space-y-4 relative z-10">
                <div>
                   <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1.5 ml-1">Имя</label>
                   <input 
                      type="text" 
                      required
                      value={newReview.name}
                      onChange={e => setNewReview({...newReview, name: e.target.value})}
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-400 dark:text-white transition-all"
                      placeholder="Представьтесь"
                   />
                </div>
                <div>
                   <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1.5 ml-1">Отзыв</label>
                   <textarea 
                      required
                      value={newReview.text}
                      onChange={e => setNewReview({...newReview, text: e.target.value})}
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 h-32 focus:outline-none focus:border-purple-400 dark:text-white transition-all resize-none"
                      placeholder="Расскажите о ваших впечатлениях..."
                   />
                </div>
                <div>
                   <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1.5 ml-1">Оценка</label>
                   <div className="flex gap-2">
                      {[1,2,3,4,5].map(star => (
                         <button 
                           key={star} 
                           type="button" 
                           onClick={() => setNewReview({...newReview, rating: star})}
                           className="transition-transform hover:scale-110"
                         >
                            <Star 
                              size={28} 
                              className={star <= newReview.rating ? "text-yellow-400 fill-yellow-400" : "text-slate-300 dark:text-slate-700"} 
                            />
                         </button>
                      ))}
                   </div>
                </div>
                <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-purple-200 dark:shadow-none transition-all mt-4">
                   Отправить отзыв
                </button>
                <button type="button" onClick={() => setShowForm(false)} className="w-full text-slate-400 text-sm hover:text-slate-600 dark:hover:text-slate-300 mt-2">
                   Отмена
                </button>
             </div>
          </form>
        )}
      </div>
    </section>
  );
};

export const GalleryPage: React.FC<{ items: GalleryItem[] }> = ({ items }) => {
  const [filter, setFilter] = useState('Все');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  // Categories based on backend data, extract unique from items or use defaults
  const categories = ['Все', ...Array.from(new Set(items.map(i => i.category))).filter(c => c)];
  
  const filteredItems = filter === 'Все' ? items : items.filter(i => i.category === filter);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, filteredItems]);

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex]);
    setZoomLevel(1);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[prevIndex]);
    setZoomLevel(1);
  };

  const handleZoomIn = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setZoomLevel(prev => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setZoomLevel(prev => Math.max(prev - 0.5, 1));
  };

  const handleClose = () => {
    setSelectedImage(null);
    setZoomLevel(1);
  };

  return (
    <section className="pt-32 pb-20 container mx-auto px-6 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 min-h-screen">
      <div className="text-center mb-12 animate-in slide-in-from-bottom-5">
        <h2 className="text-4xl md:text-5xl font-black text-slate-800 dark:text-white mb-4">НАШИ РАБОТЫ</h2>
        <p className="text-slate-500 dark:text-slate-400 text-lg">Вдохновение и результаты наших мастеров</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12 animate-in fade-in duration-700">
        {categories.map(cat => (
          <button 
            key={cat} 
            onClick={() => setFilter(cat)}
            className={`px-8 py-3 rounded-full text-sm font-bold transition-all border shadow-sm ${
              filter === cat 
                ? 'bg-purple-600 text-white border-purple-600 shadow-purple-200 dark:shadow-purple-900/50' 
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-purple-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      
      {items.length === 0 ? (
          <div className="text-center text-slate-400 py-12">Портфолио загружается или пока пусто...</div>
      ) : (
          <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                onClick={() => setSelectedImage(item)}
                className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-zoom-in bg-slate-200 dark:bg-slate-800 animate-in zoom-in-95 duration-500"
              >
                <img 
                  src={item.src} 
                  alt={item.category} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                   <span className="bg-white/90 backdrop-blur-sm text-purple-900 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                     {item.category}
                   </span>
                </div>
              </div>
            ))}
          </div>
      )}

      {/* Lightbox with Zoom and Navigation */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center animate-in fade-in duration-300" onClick={handleClose}>
           {/* Close Button */}
           <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white p-2 transition-colors z-[60]"
              onClick={(e) => { e.stopPropagation(); handleClose(); }}
           >
             <X size={32}/>
           </button>
           
           {/* Nav Left */}
           <button 
             className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all z-[60] hidden md:block"
             onClick={handlePrev}
           >
             <ChevronLeft size={48} />
           </button>

           {/* Nav Right */}
           <button 
             className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all z-[60] hidden md:block"
             onClick={handleNext}
           >
             <ChevronRight size={48} />
           </button>

           {/* Image Container */}
           <div 
              className="relative w-full h-full flex items-center justify-center p-4 overflow-hidden" 
              onClick={(e) => e.stopPropagation()} 
           >
              <img 
                src={selectedImage.src} 
                className="max-w-full max-h-full object-contain transition-transform duration-200 ease-out" 
                style={{ transform: `scale(${zoomLevel})` }}
                onClick={(e) => e.stopPropagation()}
              />
           </div>

           {/* Bottom Controls */}
           <div 
             className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/50 px-6 py-3 rounded-full backdrop-blur-sm z-[60]"
             onClick={(e) => e.stopPropagation()}
           >
               {/* Mobile Nav Arrows (Visible only on small screens) */}
               <button onClick={handlePrev} className="md:hidden text-white/70 hover:text-white p-1"><ChevronLeft size={24}/></button>
               
               <button onClick={handleZoomOut} className="text-white/70 hover:text-white p-1" disabled={zoomLevel <= 1}>
                  <ZoomOut size={24} className={zoomLevel <= 1 ? "opacity-30" : ""} />
               </button>
               
               <span className="text-white/90 font-mono text-sm min-w-[3ch] text-center">{Math.round(zoomLevel * 100)}%</span>
               
               <button onClick={handleZoomIn} className="text-white/70 hover:text-white p-1" disabled={zoomLevel >= 3}>
                  <ZoomIn size={24} className={zoomLevel >= 3 ? "opacity-30" : ""} />
               </button>

               <div className="w-px h-6 bg-white/20 mx-2"></div>
               
               <span className="text-white/90 text-sm font-medium whitespace-nowrap">
                  {selectedImage.category}
               </span>

               <button onClick={handleNext} className="md:hidden text-white/70 hover:text-white p-1"><ChevronRight size={24}/></button>
           </div>
        </div>
      )}
    </section>
  );
};

export const ContactsPage: React.FC = () => (
  <section className="pt-32 pb-20 container mx-auto px-6 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 min-h-screen">
    
    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
       {/* Info Card */}
       <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-purple-50 dark:border-slate-800 animate-in slide-in-from-left-5">
           <h2 className="text-4xl md:text-5xl font-black text-slate-800 dark:text-white mb-10">КОНТАКТЫ</h2>
           
           <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                 <div className="w-14 h-14 bg-purple-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300 flex-shrink-0">
                    <MapPin size={28} />
                 </div>
                 <div>
                    <h3 className="font-bold text-xl text-slate-800 dark:text-white mb-2">Адрес</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-lg">г. Большой Камень,<br/>ул. Адмирала Макарова, 2</p>
                 </div>
              </div>

              <div className="flex items-start gap-6 group">
                 <div className="w-14 h-14 bg-purple-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300 flex-shrink-0">
                    <Phone size={28} />
                 </div>
                 <div>
                    <h3 className="font-bold text-xl text-slate-800 dark:text-white mb-2">Телефон</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-lg font-medium">+7 (993) 628-77-99</p>
                 </div>
              </div>

              <div className="flex items-start gap-6 group">
                 <div className="w-14 h-14 bg-purple-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300 flex-shrink-0">
                    <Clock size={28} />
                 </div>
                 <div>
                    <h3 className="font-bold text-xl text-slate-800 dark:text-white mb-2">Режим работы</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-lg">Ежедневно: 10:00 - 22:00</p>
                    <div className="mt-2 inline-block bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">
                       * По предварительной записи
                    </div>
                 </div>
              </div>
           </div>

           <div className="mt-12">
               <button onClick={() => window.open('https://max.ru/u/f9LHodD0cOLHJIT7gLZalTj7ZZ5N1h7Px1c1CpimeuXJFQbka4VV34vanNo', '_blank')} className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-lg font-black py-5 rounded-2xl shadow-xl shadow-purple-200 dark:shadow-purple-900/40 hover:-translate-y-1 transition-transform flex items-center justify-center gap-2">
                   MAX
               </button>
               <p className="text-center text-purple-600 font-bold text-sm mt-4">Мы есть во всех соцсетях</p>
           </div>
       </div>

       {/* Map Card */}
       <div className="h-[700px] w-full bg-white dark:bg-slate-900 p-2 rounded-[2.5rem] shadow-2xl border border-purple-50 dark:border-slate-800 animate-in slide-in-from-right-5 relative overflow-hidden">
          <div className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl text-xs font-bold shadow-sm border border-slate-200 text-slate-600 flex items-center gap-2">
              <Navigation size={14}/> 1 найден
          </div>
          <div className="w-full h-full rounded-[2rem] overflow-hidden relative z-0">
              <iframe 
                src="https://yandex.ru/map-widget/v1/?text=Place%20of%20Beauty%20%26%20Healthy%20%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9%20%D0%9A%D0%B0%D0%BC%D0%B5%D0%BD%D1%8C&z=17" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
              ></iframe>
          </div>
       </div>
    </div>
  </section>
);

export const SchedulePage: React.FC = () => (
  <section className="pt-32 pb-20 container mx-auto px-6 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 min-h-screen flex flex-col items-center">
     <div className="text-center mb-12 animate-in slide-in-from-bottom-5">
        <h2 className="text-4xl md:text-5xl font-black text-slate-800 dark:text-white mb-4">РАСПИСАНИЕ</h2>
        <div className="h-2 w-24 bg-gradient-to-r from-purple-400 to-fuchsia-400 mx-auto rounded-full shadow-lg"></div>
        <p className="text-slate-500 dark:text-slate-400 mt-6 max-w-xl mx-auto">Удобный виджет для онлайн-записи через сервис DIKIDI</p>
     </div>
     
     <div className="w-full max-w-4xl h-[700px] bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl overflow-hidden border border-purple-50 dark:border-slate-800 animate-in zoom-in-95 duration-700">
        <iframe 
          src={DIKIDI_WIDGET_URL} 
          width="100%" 
          height="100%" 
          frameBorder="0"
        ></iframe>
     </div>
  </section>
);
