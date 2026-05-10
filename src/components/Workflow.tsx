import { motion } from 'motion/react';
import { PenTool, Image as ImageIcon, Video, Sliders, MonitorPlay } from 'lucide-react';

export default function Workflow() {
  const steps = [
    {
      icon: <PenTool className="w-6 h-6 text-white" />,
      title: "前期筹备 (Pre-prod)",
      tools: "手搓创意分镜 / 脚本模型化",
      desc: "结合商业 IP 改编，以导演视角拆解分镜，构建工业化生产骨架。"
    },
    {
      icon: <ImageIcon className="w-6 h-6 text-white" />,
      title: "视觉生成 (Image Gen)",
      tools: "Midjourney / Nanobannana",
      desc: "2年+深度生图经验，精通垫图、混图及风格化训练，定义核心视觉基调。"
    },
    {
      icon: <Video className="w-6 h-6 text-white" />,
      title: "动态赋予 (Video Gen)",
      tools: "Runway / Luma / Seedance",
      desc: "镜头运镜控制与动态延展，利用大模型算力实现高质量视频素材生成。"
    },
    {
      icon: <Sliders className="w-6 h-6 text-white" />,
      title: "精修控制 (Fine Control)",
      tools: "RunningHub (ComfyUI)",
      desc: "通过工作流搭建，实现像素级细节修正与人物一致性控制，解决崩坏难题。"
    },
    {
      icon: <MonitorPlay className="w-6 h-6 text-white" />,
      title: "视听整合 (Post-prod)",
      tools: "DaVinci Resolve / Premiere",
      desc: "调色、音效设计与剪辑节奏把控，完成最终电影级质感交付。"
    }
  ];

  return (
    <section id="workflow" className="py-24 relative bg-xinze-bg z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3 lg:sticky lg:top-24 h-fit">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-sm font-bold text-xinze-klein-light tracking-widest uppercase mb-4">Logic & Workflow</h2>
              <h3 className="text-4xl font-bold text-white mb-6 leading-tight">
                将混沌生成<br/>转化为<br/>工业化 SOP
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed mix-blend-lighten">
                我的工作流并非工具的堆砌，而是以<strong>导演思维</strong>为核心，精准匹配每一步的算力工具，在效率与艺术性之间寻找最优解。
              </p>
            </motion.div>
          </div>

          <div className="lg:w-2/3">
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start hover:bg-slate-800/40 transition-colors"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-xinze-klein to-xinze-klein-dark flex-shrink-0 flex items-center justify-center shadow-[0_0_20px_rgba(0,47,167,0.3)]">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1 flex items-center gap-3">
                      {step.title}
                      <span className="text-xs font-normal px-2 py-1 bg-slate-800 text-slate-300 rounded uppercase tracking-wider">{step.tools}</span>
                    </h4>
                    <p className="text-slate-400 leading-relaxed mt-3">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
