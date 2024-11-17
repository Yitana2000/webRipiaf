import React from 'react';
import { Scale, Users, BookOpen, CheckCircle, AlertCircle, Book } from 'lucide-react';

export default function TabContent({ activeTab }: { activeTab: string }) {
  const renderDerechos = () => (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Derechos Fundamentales</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <div className="flex items-center mb-4">
            <Scale className="w-6 h-6 text-blue-500 mr-2" />
            <h3 className="text-xl font-semibold">Igualdad ante la Ley</h3>
          </div>
          <p className="text-gray-600">Derecho fundamental a un trato justo y equitativo en todos los procesos legales y administrativos.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-cyan-500">
          <div className="flex items-center mb-4">
            <CheckCircle className="w-6 h-6 text-cyan-500 mr-2" />
            <h3 className="text-xl font-semibold">Presunción de Inocencia</h3>
          </div>
          <p className="text-gray-600">Toda persona es inocente hasta que se demuestre lo contrario mediante un proceso legal justo.</p>
        </div>
      </div>
    </div>
  );

  const renderRegistro = () => (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Registro Internacional</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <Users className="w-6 h-6 text-blue-500 mr-2" />
          <h3 className="text-xl font-semibold">Base de Datos Internacional</h3>
        </div>
        <p className="text-gray-600 mb-4">
          El Registro Internacional de Personas Inocentes (RIPIAF) mantiene una base de datos actualizada de casos y resoluciones.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-700 mb-2">Registro de Casos</h4>
            <p className="text-gray-600">Documentación detallada de casos resueltos y en proceso.</p>
          </div>
          <div className="bg-cyan-50 p-4 rounded-lg">
            <h4 className="font-semibold text-cyan-700 mb-2">Estadísticas Globales</h4>
            <p className="text-gray-600">Análisis y seguimiento de casos a nivel internacional.</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderRecursos = () => (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Recursos Legales</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Book className="w-6 h-6 text-blue-500 mr-2" />
            <h3 className="text-xl font-semibold">Guías Legales</h3>
          </div>
          <p className="text-gray-600">Documentos y guías para entender sus derechos y procesos legales.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <AlertCircle className="w-6 h-6 text-cyan-500 mr-2" />
            <h3 className="text-xl font-semibold">Asistencia</h3>
          </div>
          <p className="text-gray-600">Información sobre organizaciones y profesionales de apoyo legal.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-blue-500 mr-2" />
            <h3 className="text-xl font-semibold">Formularios</h3>
          </div>
          <p className="text-gray-600">Documentos y plantillas necesarios para procesos legales.</p>
        </div>
      </div>
    </div>
  );

  const contentMap = {
    derechos: renderDerechos,
    registro: renderRegistro,
    recursos: renderRecursos,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {contentMap[activeTab as keyof typeof contentMap]?.()}
    </div>
  );
}