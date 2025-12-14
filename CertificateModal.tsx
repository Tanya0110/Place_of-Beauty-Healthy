
import React, { useState } from 'react';
import { X, Check, Gift, Calendar, User, Phone, Coins, AlertCircle } from 'lucide-react';
import { sendTelegramNotification } from '../services/telegramService';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  priceList: any; // Dynamic price list prop
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ isOpen, onClose, priceList }) => {
  const [step, setStep] = useState(1);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    startDate: '',
    selectedOption: '5000', // Значение из селекта
    customAmount: '' // Значение для ручного ввода
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.startDate) return;
    
    // Определяем итоговую сумму или услугу
    let finalAmountOrService = formData.selectedOption;
    
    if (formData.selectedOption === 'custom') {
        const amount = parseInt(formData.customAmount, 10);
        if (isNaN(amount) || amount < 1000) {
            setError('Минимальная сумма сертификата — 1000 ₽');
            return;
        }
        finalAmountOrService = `${formData.customAmount} ₽`;
    } else if (['1000', '2000', '3000', '5000', '10000'].includes(formData.selectedOption)) {
        finalAmountOrService = `${formData.selectedOption} ₽`;
    }
    // Если выбрана услуга из прайса, она уже лежит в selectedOption как название
    
    // Сброс ошибки
    setError('');

    // Отправка в Telegram
    const msg = `🎁 <b>Заказ сертификата!</b>\n\n👤 <b>Имя:</b> ${formData.name}\n📞 <b>Телефон:</b> ${formData.phone}\n💰 <b>Выбор:</b> ${finalAmountOrService}\n📅 <b>Начало действия:</b> ${formData.startDate}`;
    sendTelegramNotification(msg);
    
    setStep(2);
  };

  const handleClose = () => {
     setStep(1);
     setFormData({ name: '', phone: '', startDate: '', selectedOption: '5000', customAmount: '' });
     setError('');
     onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-md bg-white rounded-[2rem] shadow-2xl p-8 transform transition-all scale-100 border border-purple-50 max-h-[90vh] overflow-y-auto custom-scrollbar">
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-purple-600 transition-colors bg-slate-50 p-2 rounded-full"
        >
          <X size={20} />
        </button>

        {step === 1 ? (
          <>
            <div className="text-center mb-6">
               <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-purple-600">
                  <Gift size={32} />
               </div>
               <h2 className="text-2xl font-bold text-slate-800 leading-tight">
                 Заказ сертификата
               </h2>
               <p className="text-slate-500 text-sm mt-2">Дарите красоту и здоровье близким</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5 ml-1">Ваше Имя</label>
                <div className="relative">
                    <User className="absolute left-4 top-3.5 text-slate-400" size={18} />
                    <input
                      required
                      type="text"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-slate-800 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all placeholder:text-slate-400"
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5 ml-1">Телефон</label>
                    <div className="relative">
                        <Phone className="absolute left-4 top-3.5 text-slate-400" size={18} />
                        <input
                          required
                          type="tel"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-slate-800 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all placeholder:text-slate-400"
                          placeholder="+7 (999)..."
                          value={formData.phone}
                          onChange={e => setFormData({...formData, phone: e.target.value})}
                        />
                    </div>
                  </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5 ml-1">Сумма или Услуга</label>
                <select
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all appearance-none"
                  value={formData.selectedOption}
                  onChange={e => {
                    setFormData({...formData, selectedOption: e.target.value});
                    if (e.target.value !== 'custom') setError('');
                  }}
                >
                  <option value="custom">✨ Указать свою сумму...</option>
                  
                  <optgroup label="Популярные номиналы">
                    <option value="1000">1 000 ₽</option>
                    <option value="2000">2 000 ₽</option>
                    <option value="3000">3 000 ₽</option>
                    <option value="5000">5 000 ₽</option>
                    <option value="10000">10 000 ₽</option>
                  </optgroup>

                  {Object.values(priceList).map((category: any, idx: number) => (
                    <optgroup key={idx} label={category.title}>
                      {category.items.map((item: any) => (
                        <option key={item.name} value={`${item.name} (${item.price})`}>
                          {item.name} — {item.price}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>

                {formData.selectedOption === 'custom' && (
                   <div className="relative mt-2 animate-in fade-in slide-in-from-top-2">
                      <Coins className="absolute left-4 top-3.5 text-purple-500" size={18} />
                      <input 
                        type="number"
                        placeholder="Введите сумму (мин. 1000)"
                        className={`w-full bg-purple-50 border ${error ? 'border-red-400 bg-red-50' : 'border-purple-200'} rounded-xl pl-11 pr-4 py-3 text-slate-800 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition-all placeholder:text-slate-400 font-bold`}
                        value={formData.customAmount}
                        onChange={e => {
                            setFormData({...formData, customAmount: e.target.value});
                            if (error) setError('');
                        }}
                      />
                   </div>
                )}
                {error && (
                    <div className="flex items-center gap-2 text-red-500 text-xs font-bold mt-2 animate-in slide-in-from-top-1">
                        <AlertCircle size={14} /> {error}
                    </div>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5 ml-1">Дата начала действия</label>
                <div className="relative">
                    <Calendar className="absolute left-4 top-3.5 text-slate-400" size={18} />
                    <input
                      required
                      type="date"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-slate-800 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all"
                      value={formData.startDate}
                      onChange={e => setFormData({...formData, startDate: e.target.value})}
                    />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-[0_10px_20px_rgba(168,85,247,0.3)] transition-all transform hover:-translate-y-0.5"
              >
                Оформить заказ
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8 animate-in fade-in zoom-in duration-300">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Заявка принята!</h3>
            <p className="text-slate-500 mb-8">
              Менеджер свяжется с вами для подтверждения оплаты и отправки сертификата.
            </p>
            <button
              onClick={handleClose}
              className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3 px-8 rounded-xl transition-colors w-full"
            >
              Закрыть
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
