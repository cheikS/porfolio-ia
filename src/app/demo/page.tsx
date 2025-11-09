"use client"

import CodeDemo from "@/components/CodeDemo"

const steps = [
  {
    title: "Route d’ajout de dépense (PHP – Clicount)",
    description: "Endpoint MVC : reçoit une dépense, la valide et l’enregistre en base.",
    language: "php" as const,
    code: `// controllers/ExpenseController.php
public function store() {
  $amount = $_POST['amount'] ?? null;
  $label  = trim($_POST['label'] ?? "");
  $payer  = $_POST['user_id'] ?? null;

  if (!$amount || !$payer || $label === "") {
    http_response_code(422);
    echo json_encode(["error" => "Champs requis manquants"]);
    return;
  }

  $expenseId = $this->expenseModel->create([
    "amount" => (float)$amount,
    "label"  => $label,
    "user_id"=> (int)$payer
  ]);

  echo json_encode(["ok" => true, "id" => $expenseId]);
}
`,
  },
  {
    title: "AJAX côté client (jQuery)",
    description: "Envoie la dépense sans recharger la page et rafraîchit la liste.",
    language: "javascript" as const,
    code: `// public/js/expenses.js
$("#addExpenseForm").on("submit", function(e) {
  e.preventDefault();
  const data = $(this).serialize();
  $.post("/expenses/store", data)
    .done((res) => {
      const out = JSON.parse(res);
      if (out.ok) {
        renderExpenses();
        this.reset();
      } else {
        alert(out.error || "Erreur serveur");
      }
    })
    .fail(() => alert("Erreur réseau"));
});`,
  },
  {
    title: "Modèle MySQL (PDO)",
    description: "Insertion SQL sécurisée via PDO préparé.",
    language: "php" as const,
    code: `// models/ExpenseModel.php
public function create(array $data): int {
  $stmt = $this->pdo->prepare("
    INSERT INTO expenses (amount, label, user_id, created_at)
    VALUES (:amount, :label, :user_id, NOW())
  ");
  $stmt->execute([
    ":amount"  => $data["amount"],
    ":label"   => $data["label"],
    ":user_id" => $data["user_id"],
  ]);
  return (int)$this->pdo->lastInsertId();
}`,
  },
  {
    title: "JavaFX – Vue (Farming Game)",
    description: "Binding MVVM : l’UI reflète l’état du ViewModel.",
    language: "java" as const,
    code: `// FarmView.java
TextField cropName = new TextField();
Button plantBtn = new Button("Planter");

cropName.textProperty().bindBidirectional(viewModel.cropNameProperty());
plantBtn.disableProperty().bind(viewModel.canPlantProperty().not());

plantBtn.setOnAction(e -> viewModel.plant());`,
  },
]

export default function DemoPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Démo interactive</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Suis le déroulé : chaque étape affiche progressivement le code avec un effet machine à écrire.
        Utilise Play/Pause, Suivant/Précédent ou clique un jalon ci-dessous.
      </p>
      <CodeDemo steps={steps} autoPlay loop={false} typingSpeedMs={16} />
    </main>
  )
}
