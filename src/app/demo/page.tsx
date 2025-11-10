"use client"

import { useState } from "react"
import CodeDemo from "@/components/CodeDemo"

export default function DemoPage() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null)

  /** ========= TRICOUNT – Application de gestion de dépenses ========= **/
  // Principaux atouts recherchés : PHP 8 (MVC), MySQL, REST/AJAX, sécurité basique (CSRF/validation).
  const stepsTricount = [
    {
      title: "Schéma MySQL minimal & index",
      description: "Tables normalisées + index pour requêtes courantes.",
      language: "sql" as const,
      code: `CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(80) NOT NULL,
  email VARCHAR(120) UNIQUE NOT NULL
);
CREATE TABLE expenses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  label VARCHAR(160) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  INDEX idx_user_created (user_id, created_at DESC)
);`,
    },
    {
      title: "Contrôleur MVC (validation + CSRF)",
      description: "Validation serveur + protection CSRF (base).",
      language: "php" as const,
      code: `// app/Controllers/ExpenseController.php
session_start();
if (!hash_equals($_SESSION['csrf'] ?? '', $_POST['_token'] ?? '')) {
  http_response_code(419); echo json_encode(["error"=>"CSRF"]); exit;
}
$amount = filter_input(INPUT_POST, 'amount', FILTER_VALIDATE_FLOAT);
$label  = trim($_POST['label'] ?? "");
if ($amount === false || $amount <= 0 || $label === "") {
  http_response_code(422); echo json_encode(["error"=>"Invalid fields"]); exit;
}
$id = $model->create((int)$_POST['user_id'], (float)$amount, $label);
echo json_encode(["ok"=>true, "id"=>$id]);`,
    },
    {
      title: "Modèle PDO (requête préparée)",
      description: "Insert sécurisé, prêt pour transactions si besoin.",
      language: "php" as const,
      code: `// app/Models/ExpenseModel.php
$stmt = $pdo->prepare("INSERT INTO expenses (user_id, amount, label) VALUES (?,?,?)");
$stmt->execute([$userId, $amount, $label]);
return (int)$pdo->lastInsertId();`,
    },
    {
      title: "AJAX (jQuery) sans rechargement",
      description: "REST-like POST et refresh de la liste.",
      language: "javascript" as const,
      code: `$("#addExpenseForm").on("submit", function(e){
  e.preventDefault();
  $.post("/expenses/store", $(this).serialize())
   .done((r)=>{ const out = JSON.parse(r); if(out.ok) renderExpenses(); else alert(out.error); })
   .fail(()=> alert("Erreur réseau"));
});`,
    },
  ]

  /** ========= FARMING GAME – Jeu JavaFX MVVM ========= **/
  // Principaux atouts recherchés : Java 17/JavaFX, MVVM, bindings.
  const stepsFarming = [
    {
      title: "ViewModel (MVVM)",
      description: "État observable + logique métier testable.",
      language: "java" as const,
      code: `public class FarmViewModel {
  private final StringProperty cropName = new SimpleStringProperty("");
  private final BooleanProperty canPlant = new SimpleBooleanProperty(false);
  public FarmViewModel(){ canPlant.bind(cropName.isNotEmpty()); }
  public void plant(){ if(!canPlant.get()) return; System.out.println("Plant " + cropName.get()); cropName.set(""); }
  public StringProperty cropNameProperty(){ return cropName; }
  public BooleanProperty canPlantProperty(){ return canPlant; }
}`,
    },
    {
      title: "Bindings Vue ↔ ViewModel",
      description: "UI réactive grâce aux propriétés JavaFX.",
      language: "java" as const,
      code: `TextField crop = new TextField(); Button plantBtn = new Button("Planter");
crop.textProperty().bindBidirectional(vm.cropNameProperty());
plantBtn.disableProperty().bind(vm.canPlantProperty().not());
plantBtn.setOnAction(e -> vm.plant());`,
    },
  ]

  /** ========= PORTFOLIO – Site Next.js & IA ========= **/
  // Principaux atouts recherchés : Next.js 15, TypeScript, Tailwind + shadcn/ui, Framer Motion, API OpenAI.
  const stepsPortfolio = [
    {
      title: "Next.js App Router + TypeScript",
      description: "Rendu typé et data mapping.",
      language: "tsx" as const,
      code: `import { projects } from "@/data/projects"
export default function ProjectsPage(){
  return (
    <section>
      <h1 className="text-3xl md:text-4xl font-bold">Mes projets</h1>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(p => (
          <li key={p.title} className="rounded-xl border p-4">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm opacity-80">{p.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}`,
    },
    {
      title: "UI moderne (Tailwind + shadcn/ui)",
      description: "Composants propres + badges technos.",
      language: "tsx" as const,
      code: `import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"; import { Button } from "@/components/ui/button"
<Card className="flex flex-col">
  <CardHeader><CardTitle>{p.title}</CardTitle></CardHeader>
  <CardContent><div className="flex flex-wrap gap-2">
    {p.technologies.map(t => <Badge key={t} variant="secondary">{t}</Badge>)}
  </div></CardContent>
  <CardFooter>{p.github && <a href={p.github} target="_blank"><Button>Voir le code</Button></a>}</CardFooter>
</Card>`,
    },
    {
      title: "API OpenAI (server) + widget chat",
      description: "Route sécurisée + bouton emoji 👨🏾‍💻 togglable.",
      language: "ts" as const,
      code: `import OpenAI from "openai"
export const runtime = "nodejs"
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
export async function POST(req: Request){
  const { message } = await req.json()
  const out = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role:"system",content:"Tu es Yahya Sacko, dev full-stack." }, { role:"user",content: message }]
  })
  return Response.json({ reply: out.choices[0]?.message?.content ?? "" })
}`,
    },
  ]

  const demos = [
    {
      id: "tricount",
      title: "Tricount – Application de gestion de dépenses",
      skills: ["PHP 8 (MVC)", "MySQL", "AJAX (jQuery)", "Validation & CSRF"],
      steps: stepsTricount,
    },
    {
      id: "farming",
      title: "Farming Game – Jeu JavaFX MVVM",
      skills: ["Java 17 / JavaFX", "MVVM", "Bindings"],
      steps: stepsFarming,
    },
    {
      id: "portfolio",
      title: "Portfolio – Site Next.js & IA",
      skills: ["Next.js 15", "TypeScript", "Tailwind + shadcn/ui", "OpenAI API"],
      steps: stepsPortfolio,
    },
  ]

  return (
    <main className="max-w-6xl mx-auto px-4 py-10 space-y-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Démonstrations (techs clés)</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Lance une démo pour voir l’essentiel : architecture, sécurité, UI moderne et IA.
      </p>

      {demos.map((demo) => (
        <section key={demo.id} className="space-y-4 border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold">{demo.title}</h2>
              <ul className="flex flex-wrap gap-2 mt-2">
                {demo.skills.map((s) => (
                  <li
                    key={s}
                    className="text-xs px-2 py-1 rounded-md bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-300/50"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => setActiveDemo((prev) => (prev === demo.id ? null : demo.id))}
              className={`px-4 py-2 rounded-lg text-sm font-medium border transition
                ${activeDemo === demo.id
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-transparent text-blue-600 border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20"}`}
            >
              {activeDemo === demo.id ? "⏸️ Fermer la démo" : "▶️ Lancer la démo"}
            </button>
          </div>

          {activeDemo === demo.id && (
            <div className="mt-6">
              <CodeDemo steps={demo.steps} autoPlay={false} loop={false} typingSpeedMs={18} />
            </div>
          )}
        </section>
      ))}
    </main>
  )
}
