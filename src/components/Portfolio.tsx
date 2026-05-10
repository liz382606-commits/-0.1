import { motion } from 'motion/react';
import { PlayCircle } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: "AI 商业广告",
      desc: "品牌高精质感交付，极致的光影与产品呈现。",
      tags: ["产品级细节", "品牌视觉重塑"],
      span: "md:col-span-2 md:row-span-2",
      bgClass: "bg-gradient-to-br from-slate-800 to-slate-900",
      videoSrc: "/video.mp4"
    },
    {
      title: "AI 创意广告",
      desc: "脑洞驱动，3秒视觉反差抓取流量。",
      tags: ["反差感", "短视频完播率", "流量钩子"],
      span: "md:col-span-1 md:row-span-1",
      bgClass: "bg-gradient-to-bl from-blue-900/40 to-slate-900",
      videoSrc: "/video2.mp4"
    },
    {
      title: "AI 真人短剧",
      desc: "融合开心麻花式喜剧节奏与 AI 角色一致性控制。",
      tags: ["角色一致性", "叙事节奏"],
      span: "md:col-span-1 md:row-span-2",
      bgClass: "bg-gradient-to-t from-xinze-klein-dark to-slate-900",
      videoSrc: "/video4.mp4"
    },
    {
      title: "AI 动画",
      desc: "风格化艺术重构与想象力落地。",
      tags: [],
      span: "md:col-span-1 md:row-span-1",
      bgClass: "bg-gradient-to-r from-slate-900 to-slate-800",
      videoSrc: "/video3.mp4"
    },
    {
      title: "AI 文旅",
      desc: "宏大叙事与数字化景观呈现。",
      tags: [],
      span: "md:col-span-2 md:row-span-1",
      bgClass: "bg-gradient-to-br from-slate-900 to-[#030d26]"
    }
  ];

  return (
    <section id="portfolio" className="py-24 relative bg-xinze-bg z-10 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-sm font-bold text-xinze-klein-light tracking-widest uppercase mb-4">Portfolio</h2>
          <h3 className="text-4xl font-bold text-white mb-6">实战演示</h3>
          <p className="text-slate-400 max-w-2xl mx-auto">以导演思维驾驭 AI，跨越多种视觉语境与商业需求，交付具备传播力与审美品味的作品。</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden border border-slate-800 hover:border-xinze-klein/50 cursor-pointer ${project.span}`}
            >
              {/* Abstract Background for missing assets */}
              <div className={`absolute inset-0 ${project.bgClass} opacity-80 group-hover:scale-105 transition-transform duration-700 ease-in-out`}></div>
              
              {project.videoSrc && (
                <video
                  src={project.videoSrc}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              )}

              {/* Overlay Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-white/10 backdrop-blur-sm text-slate-200 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2 flex items-center group-hover:text-xinze-klein-light transition-colors">
                    {project.title}
                    <PlayCircle className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  </h4>
                  <p className="text-slate-300 text-sm max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {project.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
