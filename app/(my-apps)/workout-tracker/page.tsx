"use client";

import Logo from "@/app/componentes/logo/logo";
import React, { useEffect, useState } from "react";

type Workout = { exercise: string; value: string };
type Template = { name: string; exercises: string[] };
type DailyLog = { date: string; entries: Workout[] };

export default function WorkoutTracker() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [exercise, setExercise] = useState("");
  const [templateName, setTemplateName] = useState("");
  const [templates, setTemplates] = useState<Template[]>([]);
  const [logHistory, setLogHistory] = useState<DailyLog[]>([]);

  // Estados para modo edición y selección múltiple
  const [editTemplatesMode, setEditTemplatesMode] = useState(false);
  const [selectedTemplates, setSelectedTemplates] = useState<Set<number>>(new Set());

  const [editHistoryMode, setEditHistoryMode] = useState(false);
  const [selectedHistory, setSelectedHistory] = useState<Set<number>>(new Set());

  useEffect(() => {
    const storedTemplates = localStorage.getItem("workoutTemplates");
    const storedLogs = localStorage.getItem("workoutHistory");

    if (storedTemplates) setTemplates(JSON.parse(storedTemplates));
    if (storedLogs) setLogHistory(JSON.parse(storedLogs));
  }, []);

  const saveTemplates = (newTemplates: Template[]) => {
    localStorage.setItem("workoutTemplates", JSON.stringify(newTemplates));
    setTemplates(newTemplates);
  };

  const saveLogHistory = (newLogs: DailyLog[]) => {
    localStorage.setItem("workoutHistory", JSON.stringify(newLogs));
    setLogHistory(newLogs);
  };

  const handleAddExercise = () => {
    if (exercise.trim() !== "") {
      setWorkouts([...workouts, { exercise, value: "" }]);
      setExercise("");
    }
  };

  const handleValueChange = (index: number, newValue: string) => {
    const updated = [...workouts];
    updated[index].value = newValue;
    setWorkouts(updated);
  };

  const handleSaveTemplate = () => {
    if (!templateName.trim()) return;

    const newTemplate: Template = {
      name: templateName.trim(),
      exercises: workouts.map((w) => w.exercise),
    };

    const updatedTemplates = [...templates, newTemplate];
    saveTemplates(updatedTemplates);
    setTemplateName("");
  };

  const handleLoadTemplate = (template: Template) => {
    const loaded = template.exercises.map((exercise) => ({
      exercise,
      value: "",
    }));
    setWorkouts(loaded);
  };

  // Se eliminan en bloque las rutinas seleccionadas
  const handleDeleteSelectedTemplates = () => {
    if (selectedTemplates.size === 0) return;

    if (
      confirm(
        `¿Eliminar ${selectedTemplates.size} rutina(s) seleccionada(s)?`
      )
    ) {
      const filtered = templates.filter(
        (_, i) => !selectedTemplates.has(i)
      );
      saveTemplates(filtered);
      setSelectedTemplates(new Set());
      setEditTemplatesMode(false);
    }
  };

  // Se eliminan en bloque los registros seleccionados
  const handleDeleteSelectedHistory = () => {
    if (selectedHistory.size === 0) return;

    if (
      confirm(
        `¿Eliminar ${selectedHistory.size} registro(s) de historial seleccionado(s)?`
      )
    ) {
      const filtered = logHistory.filter((_, i) => !selectedHistory.has(i));
      saveLogHistory(filtered);
      setSelectedHistory(new Set());
      setEditHistoryMode(false);
    }
  };

  const handleSaveDay = () => {
    if (workouts.length === 0) return;

    const today = new Date().toISOString().split("T")[0];
    const newEntry: DailyLog = { date: today, entries: workouts };
    const updatedLogs = [...logHistory, newEntry];

    saveLogHistory(updatedLogs);
    setWorkouts([]);
  };

  // Funciones para seleccionar / deseleccionar ítems
  const toggleSelectTemplate = (index: number) => {
    const newSet = new Set(selectedTemplates);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    setSelectedTemplates(newSet);
  };

  const toggleSelectHistory = (index: number) => {
    const newSet = new Set(selectedHistory);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    setSelectedHistory(newSet);
  };

  const selectAllTemplates = () => {
    if (selectedTemplates.size === templates.length) {
      setSelectedTemplates(new Set());
    } else {
      setSelectedTemplates(new Set(templates.map((_, i) => i)));
    }
  };

  const selectAllHistory = () => {
    if (selectedHistory.size === logHistory.length) {
      setSelectedHistory(new Set());
    } else {
      setSelectedHistory(new Set(logHistory.map((_, i) => i)));
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <Logo xclass="fixed left-0 top-0 p-[1rem]"/>
      <h1 className="text-2xl font-bold mb-4">Workout Tracker</h1>

      {/* Agregar ejercicios */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Ejercicio"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
          className="border rounded p-2 w-full text-black"
        />
        <button
          onClick={handleAddExercise}
          className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700"
        >
          Agregar
        </button>
      </div>

      {/* Tabla ejercicios */}
      <table className="w-full border-collapse mb-4">
        <thead>
          <tr>
            <th className="border p-2 text-left">Ejercicio</th>
            <th className="border p-2 text-left">Reps / Minutos</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map((w, index) => (
            <tr key={index}>
              <td className="border p-2">{w.exercise}</td>
              <td className="border p-2">
                <input
                  type="text"
                  value={w.value}
                  onChange={(e) => handleValueChange(index, e.target.value)}
                  className="border rounded p-1 w-full text-black"
                  placeholder="Escribe aquí"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Guardar rutina */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Nombre de la rutina (ej. Pecho)"
          value={templateName}
          onChange={(e) => setTemplateName(e.target.value)}
          className="border rounded p-2 w-full text-black"
        />
        <button
          onClick={handleSaveTemplate}
          className="bg-green-600 text-white rounded px-4 py-2 hover:bg-green-700"
        >
          Guardar rutina
        </button>
      </div>

      {/* Guardar día */}
      <div className="mb-6">
        <button
          onClick={handleSaveDay}
          className="bg-purple-600 text-white rounded px-4 py-2 hover:bg-purple-700"
        >
          Guardar registro del día
        </button>
      </div>

      {/* Sección Rutinas guardadas */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-semibold">Mis rutinas guardadas</h2>
          <button
            onClick={() => {
              setEditTemplatesMode(!editTemplatesMode);
              setSelectedTemplates(new Set());
            }}
            className="text-sm px-3 py-1 rounded border hover:bg-gray-100"
          >
            {editTemplatesMode ? "Cancelar" : "Editar"}
          </button>
        </div>

        {templates.length === 0 ? (
          <p className="text-gray-500">No tienes rutinas guardadas todavía.</p>
        ) : (
          <>
            {editTemplatesMode && (
              <div className="mb-2 flex items-center gap-4">
                <label className="flex items-center gap-1 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedTemplates.size === templates.length}
                    onChange={selectAllTemplates}
                  />
                  Seleccionar todo
                </label>
                <button
                  onClick={handleDeleteSelectedTemplates}
                  disabled={selectedTemplates.size === 0}
                  className={`px-3 py-1 rounded text-white ${
                    selectedTemplates.size === 0
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-red-600 hover:bg-red-700"
                  }`}
                >
                  Eliminar seleccionados
                </button>
              </div>
            )}

            <ul className="space-y-2">
              {templates.map((t, i) => (
                <li
                  key={i}
                  className="flex items-center bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded"
                >
                  {editTemplatesMode && (
                    <input
                      type="checkbox"
                      checked={selectedTemplates.has(i)}
                      onChange={() => toggleSelectTemplate(i)}
                      className="mr-3"
                    />
                  )}
                  <button
                    disabled={editTemplatesMode}
                    className={`text-left text-black flex-grow ${
                      editTemplatesMode ? "cursor-default" : "hover:underline"
                    }`}
                    onClick={() => !editTemplatesMode && handleLoadTemplate(t)}
                  >
                    {t.name}
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </section>

      {/* Sección Historial de entrenamientos */}
      <section>
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-semibold">Historial de entrenamientos</h2>
          <button
            onClick={() => {
              setEditHistoryMode(!editHistoryMode);
              setSelectedHistory(new Set());
            }}
            className="text-sm px-3 py-1 rounded border hover:bg-gray-100"
          >
            {editHistoryMode ? "Cancelar" : "Editar"}
          </button>
        </div>

        {logHistory.length === 0 ? (
          <p className="text-gray-500">No hay registros aún.</p>
        ) : (
          <>
            {editHistoryMode && (
              <div className="mb-2 flex items-center gap-4">
                <label className="flex items-center gap-1 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedHistory.size === logHistory.length}
                    onChange={selectAllHistory}
                  />
                  Seleccionar todo
                </label>
                <button
                  onClick={handleDeleteSelectedHistory}
                  disabled={selectedHistory.size === 0}
                  className={`px-3 py-1 rounded text-white ${
                    selectedHistory.size === 0
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-red-600 hover:bg-red-700"
                  }`}
                >
                  Eliminar seleccionados
                </button>
              </div>
            )}

            <ul className="space-y-4">
              {logHistory.map((log, i) => (
                <li
                  key={i}
                  className="border rounded p-3 bg-white shadow-sm flex justify-between items-start"
                >
                  {editHistoryMode && (
                    <input
                      type="checkbox"
                      checked={selectedHistory.has(i)}
                      onChange={() => toggleSelectHistory(i)}
                      className="mr-4 mt-1"
                    />
                  )}

                  <div>
                    <strong className="text-black">{log.date}</strong>
                    <ul className="list-disc list-inside mt-1 text-black">
                      {log.entries.map((entry, j) => (
                        <li key={j}>
                          {entry.exercise}: {entry.value || "—"}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </section>
    </div>
  );
}
