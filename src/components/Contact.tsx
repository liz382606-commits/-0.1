import { motion } from 'motion/react';
import { MapPin, Mail, MessageSquare, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-[#030d26] z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-sm font-bold text-xinze-klein-light tracking-widest uppercase mb-4">Connect & Collaborate</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              探索 AI 与叙事<br className="hidden md:block"/>结合的最优解。
            </h3>
            <p className="text-slate-400 text-lg mb-12 max-w-md">
              从 2023 到未来，我始终在探索 AI 与叙事结合的最优解。无论您是寻找全职 AI 创意导演，还是寻求商业项目合作，都随时欢迎交流。
            </p>

            <div className="space-y-6">
              <div className="flex items-center text-slate-300">
                <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center mr-4">
                  <MapPin className="w-5 h-5 text-xinze-klein-light" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Status & Location</p>
                  <p className="font-medium text-white tracking-wide">杭州 / 远程 (Remote Ready)</p>
                  <p className="text-xs text-xinze-klein-light mt-0.5 font-bold uppercase tracking-widest">Open for Full-time / Collaboration</p>
                </div>
              </div>

              <div className="flex items-center text-slate-300">
                <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center mr-4">
                  <MessageSquare className="w-5 h-5 text-xinze-klein-light" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">WeChat</p>
                  <a href="tel:17542781133" className="font-medium text-white hover:text-xinze-klein-light transition-colors">17542781133</a>
                </div>
              </div>

              <div className="flex items-center text-slate-300">
                <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center mr-4">
                  <Mail className="w-5 h-5 text-xinze-klein-light" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Email</p>
                  <a href="mailto:17542781133@163.com" className="font-medium text-white hover:text-xinze-klein-light transition-colors">17542781133@163.com</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true, margin: "-100px" }}
             className="flex justify-center lg:justify-end"
          >
            <div className="relative p-1 bg-gradient-to-br from-xinze-klein to-slate-900 rounded-3xl">
              <div className="bg-xinze-bg rounded-[22px] p-8 md:p-12 border border-slate-800 flex flex-col items-center">
                <p className="text-white font-bold tracking-widest uppercase mb-8 flex items-center">
                  扫码直达 <ArrowRight className="w-4 h-4 ml-2" />
                </p>
                
                {/* QR Code */}
                <div className="relative w-48 h-48 md:w-56 md:h-56 bg-white/5 border border-xinze-klein/30 rounded-xl overflow-hidden group cursor-pointer">
                   <img src="/qrcode.png" alt="WeChat QR Code" className="w-full h-full object-cover" />
                </div>

                <div className="mt-8 text-center text-slate-500 text-sm max-w-[200px]">
                  "从 2023 到未来，我始终在探索 AI 与叙事结合的最优解。"
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
