import { Code2, Database, Server, GitBranch, FileJson, Palette, Layers, Terminal } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: Code2 },
      { name: "JavaScript (ES6+)", icon: FileJson },
      { name: "HTML5", icon: Code2 },
      { name: "CSS3", icon: Palette },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express", icon: Layers },
    ],
  },
  {
    title: "Bases de datos",
    skills: [
      { name: "MongoDB", icon: Database },
      { name: "SQL", icon: Database },
    ],
  },
  {
    title: "Herramientas",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "Postman", icon: Terminal },
    ],
  },
];

export function Skills() {
  return (
    <section id="habilidades" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">02.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Habilidades</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors group"
                    >
                      <Icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
