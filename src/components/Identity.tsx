import { motion } from 'motion/react';
import { Compass, Film, Zap, Lightbulb } from 'lucide-react';

export default function Identity() {
  const qualities = [
    {
      icon: <Zap className="w-6 h-6 text-xinze-klein-light" />,
      title: "流量的捕猎者",
      desc: "深谙短视频完播率逻辑，利用“视觉反差与危险感”制作流量钩子。"
    },
    {
      icon: <Compass className="w-6 h-6 text-xinze-klein-light" />,
      title: "工具的架构师",
      desc: "长期对接火山引擎、阿里通义等大厂进行模型压测，将混沌的 AI 生成转化为工业化 SOP。"
    },
    {
      icon: <Film className="w-6 h-6 text-xinze-klein-light" />,
      title: "商业剧场实战",
      desc: "开心麻花剧场《夏洛特烦恼改编版》话剧导演，具备极强的脚本本土化改良、演员调度及舞台节奏把控能力。"
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-xinze-klein-light" />,
      title: "影展认可",
      desc: "入围 FRIST 青年电影展。以专业导演思维取舍 AI 算力优劣。"
    }
  ];

  return (
    <section id="identity" className="py-24 relative bg-xinze-bg z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-xinze-klein-light tracking-widest uppercase mb-4">Identity & Presence</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              AIGC 早期深耕者<br/>
              <span className="text-slate-400 text-2xl md:text-3xl font-normal mt-2 block">(Since 2023)</span>
            </h3>
            
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed mb-8">
              <p>
                现居 <strong className="text-white">中国 · 杭州</strong>。自 Midjourney 问世起即深度参与 AI 游戏概念设计，拥有跨越技术周期的实战手感。
              </p>
              <p>
                我的核心理念：<strong>好的导演懂得在 AI 工具的弊端与优势间进行取舍，创作出真正具有灵魂的作品。</strong>
              </p>
            </div>
            
            <div className="pt-8 border-t border-slate-800">
               <div className="grid grid-cols-2 gap-8">
                 <div>
                    <h4 className="text-3xl font-bold text-white mb-2">2021-2025</h4>
                    <p className="text-slate-400 text-sm">大连工业大学<br/>数字媒体艺术专业<br/>融媒体时尚创意与设计微专业</p>
                 </div>
                 <div>
                    <h4 className="text-3xl font-bold text-white mb-2">IELTS</h4>
                    <p className="text-slate-400 text-sm">6 <br/>国际化创作视野</p>
                 </div>
               </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-xinze-klein/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-xinze-klein/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
