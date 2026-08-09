import { useState } from "react";

import InfoDialog from "./dialogs/InfoDialog";
import ConfirmDialog from "./dialogs/ConfirmDialog";
import SettingsDialog from "./dialogs/SettingDialog";

function App() {
  const [activeDialog, setActiveDialog] = useState<
    "info" | "confirm" | "settings" | null
  >(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-5 bg-gray-100">

      <h1 className="text-3xl font-bold">
        Electron React Dialog Assignment
      </h1>

      <button
        className="px-6 py-3 bg-blue-500 text-white rounded"
        onClick={() => setActiveDialog("info")}
      >
        Open Information
      </button>

      <button
        className="px-6 py-3 bg-green-500 text-white rounded"
        onClick={() => setActiveDialog("confirm")}
      >
        Open Confirmation
      </button>

      <button
        className="px-6 py-3 bg-purple-500 text-white rounded"
        onClick={() => setActiveDialog("settings")}
      >
        Open Settings
      </button>

      <InfoDialog
        open={activeDialog === "info"}
        onClose={() => setActiveDialog(null)}
      />

      <ConfirmDialog
        open={activeDialog === "confirm"}
        onClose={() => setActiveDialog(null)}
      />

      <SettingsDialog
        open={activeDialog === "settings"}
        onClose={() => setActiveDialog(null)}
      />
    </div>
  );
}

export default App;