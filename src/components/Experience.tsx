import { motion } from 'motion/react';

export default function Experience() {
  const experiences = [
    {
      period: "近期实践",
      role: "AI 导演",
      company: "杭州鸣麓元启",
      desc: "导演整部 AI 真人精品短剧《城隍渡》和 AI 动画《Furdream》。负责分镜设计、提示词编写、美术风格设计协调和指导，美术、抽卡和剪辑环节。深入了解 AI 短处并进行规避。完成超现实主义时尚主题 AIGC 视频全流程创作。",
    },
    {
      period: "运营与创作",
      role: "短视频编导",
      company: "大连智捷有限公司",
      desc: "负责抖音 50 万粉博主日常内容，独立脚本、导拍与剪辑。优化内容结构与创意，主导全链路内容与电商运营。宠物账号月营销金额达 2.39 万，GMV 提升 35%。",
    },
    {
      period: "影像创作",
      role: "导演",
      company: "微电影《迷途》",
      desc: "围绕“青春成长与自我探索”主题，主导项目整体创作方向。入围 FRIST 青年电影展短片赛道提名。联合完成剧本创作，展现从创意到落地的全流程实践能力。",
    },
    {
      period: "戏剧制导",
      role: "舞台剧导演",
      company: "《夏洛特烦恼》改编版",
      desc: "独立执导开心麻花舞台剧《夏洛特烦恼》改编版，主导剧本本土化改编、演员表演调度及舞台节奏把控，强化剧目感染力与现场观演体验。",
    }
  ];

  return (
    <section id="experience" className="py-24 relative bg-[#030d26] border-y border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-sm font-bold text-xinze-klein-light tracking-widest uppercase mb-4">Experience</h2>
          <h3 className="text-4xl font-bold text-white">实践经历</h3>
        </motion.div>

        <div className="relative">
          {/* Vertical line timeline for larger screens */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-800 transform -translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-24">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex flex-col md:flex-row items-center group">
                <div className={`md:w-1/2 flex ${index % 2 === 0 ? 'md:justify-end md:pr-16' : 'md:order-2 md:justify-start md:pl-16'} w-full mb-6 md:mb-0`}>
                  <motion.div 
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-xinze-klein/50 transition-colors w-full text-left"
                  >
                    <span className="text-xinze-klein-light text-sm font-bold tracking-wider uppercase mb-2 block">{exp.period}</span>
                    <h4 className="text-2xl font-bold text-white mb-1">{exp.role}</h4>
                    <p className="text-slate-400 mb-4 font-medium">{exp.company}</p>
                    <p className="text-slate-300 text-sm leading-relaxed">{exp.desc}</p>
                  </motion.div>
                </div>
                
                {/* Timeline node */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-[#030d26] border-4 border-slate-800 group-hover:border-xinze-klein transition-colors z-10 items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-xinze-klein opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
