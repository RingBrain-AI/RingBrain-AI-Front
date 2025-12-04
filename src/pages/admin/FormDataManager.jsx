import { useState } from 'react';
import { Save, Plus, X, Edit2, Trash2 } from 'lucide-react';

const FormDataManager = () => {
    // All form field configurations
    const [formFields, setFormFields] = useState({
        documentTypes: {
            name: 'Tipos de Documento',
            type: 'select',
            options: [
                { value: 'cc', label: 'Cédula de Ciudadanía' },
                { value: 'ce', label: 'Cédula de Extranjería' },
                { value: 'ti', label: 'Tarjeta de Identidad' },
                { value: 'pasaporte', label: 'Pasaporte' },
            ]
        },
        genders: {
            name: 'Géneros',
            type: 'select',
            options: [
                { value: 'masculino', label: 'Masculino' },
                { value: 'femenino', label: 'Femenino' },
                { value: 'otro', label: 'Otro' },
            ]
        },
        studySchedules: {
            name: 'Horarios de Estudio',
            type: 'select',
            options: [
                { value: 'manana', label: '6:00 am a 2:00 pm' },
                { value: 'tarde', label: '2:00 pm a 10:00 pm' },
            ]
        },
        occupations: {
            name: 'Ocupaciones',
            type: 'select',
            options: [
                { value: 'trabajo', label: 'Trabajo' },
                { value: 'estudio', label: 'Estudio' },
                { value: 'ambos', label: 'Trabajo y Estudio' },
                { value: 'ninguno', label: 'Ninguno' },
            ]
        },
        educationLevels: {
            name: 'Niveles de Escolaridad',
            type: 'select',
            options: [
                { value: 'bachiller', label: 'Bachiller' },
                { value: 'tecnico', label: 'Técnico' },
                { value: 'tecnologo', label: 'Tecnólogo' },
                { value: 'profesional', label: 'Profesional' },
                { value: 'posgrado', label: 'Posgrado' },
            ]
        },
        departments: {
            name: 'Departamentos',
            type: 'select',
            options: [
                { value: 'antioquia', label: 'Antioquia' },
                { value: 'atlantico', label: 'Atlántico' },
                { value: 'bogota', label: 'Bogotá D.C.' },
                { value: 'valle', label: 'Valle del Cauca' },
            ]
        },
        socioeconomicStrata: {
            name: 'Estratos Socioeconómicos',
            type: 'select',
            options: [
                { value: '1', label: '1' },
                { value: '2', label: '2' },
                { value: '3', label: '3' },
                { value: '4', label: '4' },
                { value: '5', label: '5' },
                { value: '6', label: '6' },
            ]
        },
        programmingLevels: {
            name: 'Niveles de Programación',
            type: 'select',
            options: [
                { value: 'ninguno', label: 'Ninguno' },
                { value: 'basico', label: 'Básico' },
                { value: 'intermedio', label: 'Intermedio' },
                { value: 'avanzado', label: 'Avanzado' },
            ]
        },
        agreementTypes: {
            name: 'Tipos de Convenio',
            type: 'select',
            options: [
                { value: 'general', label: 'General' },
                { value: 'empresarial', label: 'Empresarial' },
                { value: 'institucional', label: 'Institucional' },
            ]
        },
    });

    const [activeField, setActiveField] = useState('documentTypes');
    const [editingItem, setEditingItem] = useState(null);
    const [editForm, setEditForm] = useState({ value: '', label: '' });

    const currentField = formFields[activeField];

    const handleSave = () => {
        // TODO: Save to backend via API
        console.log('Saving all form data...', formFields);
        alert('Datos guardados exitosamente (simulado)\n\nConfigura el endpoint en src/config/api.config.js para guardar en el backend.');
    };

    const handleAddOption = () => {
        const newValue = prompt('Ingrese el valor (ID único):');
        const newLabel = prompt('Ingrese la etiqueta (texto visible):');

        if (newValue && newLabel) {
            setFormFields({
                ...formFields,
                [activeField]: {
                    ...currentField,
                    options: [
                        ...currentField.options,
                        { value: newValue, label: newLabel }
                    ]
                }
            });
        }
    };

    const handleDeleteOption = (index) => {
        if (confirm('¿Estás seguro de eliminar esta opción?')) {
            const newOptions = currentField.options.filter((_, i) => i !== index);
            setFormFields({
                ...formFields,
                [activeField]: {
                    ...currentField,
                    options: newOptions
                }
            });
        }
    };

    const startEdit = (index) => {
        setEditingItem(index);
        setEditForm({
            value: currentField.options[index].value,
            label: currentField.options[index].label
        });
    };

    const saveEdit = () => {
        const newOptions = [...currentField.options];
        newOptions[editingItem] = {
            value: editForm.value,
            label: editForm.label
        };

        setFormFields({
            ...formFields,
            [activeField]: {
                ...currentField,
                options: newOptions
            }
        });

        setEditingItem(null);
        setEditForm({ value: '', label: '' });
    };

    const cancelEdit = () => {
        setEditingItem(null);
        setEditForm({ value: '', label: '' });
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Gestión de Campos del Formulario</h2>
                    <p className="text-gray-600 mt-1">Administra todos los campos y opciones del formulario de registro</p>
                </div>
                <button
                    onClick={handleSave}
                    className="flex items-center gap-2 gradient-bg text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                    <Save className="w-5 h-5" />
                    Guardar Todos los Cambios
                </button>
            </div>

            {/* Field Selector */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
                <p className="text-sm font-medium text-gray-700 mb-3">Selecciona el campo a editar:</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                    {Object.entries(formFields).map(([key, field]) => (
                        <button
                            key={key}
                            onClick={() => setActiveField(key)}
                            className={`px-4 py-2 rounded-lg font-medium transition-all text-left ${activeField === key
                                    ? 'gradient-bg text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            <div className="text-sm">{field.name}</div>
                            <div className="text-xs opacity-75">({field.options?.length || 0} opciones)</div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Options Editor */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                        {currentField?.name}
                        <span className="text-sm text-gray-500 ml-2">({currentField?.options?.length || 0} opciones)</span>
                    </h3>
                    <button
                        onClick={handleAddOption}
                        className="flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-lg font-medium hover:bg-purple-200 transition-colors"
                    >
                        <Plus className="w-4 h-4" />
                        Nueva Opción
                    </button>
                </div>

                {/* Options List */}
                <div className="space-y-3">
                    {currentField?.options?.map((option, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-lg hover:border-purple-300 transition-colors"
                        >
                            {editingItem === index ? (
                                // Edit Mode
                                <div className="p-4 bg-purple-50">
                                    <div className="grid grid-cols-2 gap-4 mb-3">
                                        <div>
                                            <label className="text-xs text-gray-700 font-semibold mb-1 block">Valor (ID)</label>
                                            <input
                                                type="text"
                                                value={editForm.value}
                                                onChange={(e) => setEditForm({ ...editForm, value: e.target.value })}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-xs text-gray-700 font-semibold mb-1 block">Etiqueta</label>
                                            <input
                                                type="text"
                                                value={editForm.label}
                                                onChange={(e) => setEditForm({ ...editForm, label: e.target.value })}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={saveEdit}
                                            className="flex items-center gap-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 text-sm font-medium"
                                        >
                                            <Save className="w-4 h-4" />
                                            Guardar
                                        </button>
                                        <button
                                            onClick={cancelEdit}
                                            className="flex items-center gap-1 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 text-sm font-medium"
                                        >
                                            <X className="w-4 h-4" />
                                            Cancelar
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                // View Mode
                                <div className="p-4 flex items-center gap-4 group">
                                    <div className="flex-1 grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-xs text-gray-500 uppercase font-semibold">Valor (ID)</label>
                                            <p className="text-gray-900 font-mono text-sm">{option.value}</p>
                                        </div>
                                        <div>
                                            <label className="text-xs text-gray-500 uppercase font-semibold">Etiqueta</label>
                                            <p className="text-gray-900">{option.label}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button
                                            onClick={() => startEdit(index)}
                                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                            title="Editar"
                                        >
                                            <Edit2 className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => handleDeleteOption(index)}
                                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                            title="Eliminar"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {currentField?.options?.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 mb-2">No hay opciones configuradas para este campo</p>
                        <button
                            onClick={handleAddOption}
                            className="text-purple-600 hover:text-purple-700 font-medium text-sm"
                        >
                            + Agregar primera opción
                        </button>
                    </div>
                )}
            </div>

            {/* Info Box */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="text-sm text-blue-800">
                    <strong>📌 Importante:</strong> Los cambios se sincronizarán con el formulario del landing page.
                    Recuerda presionar "Guardar Todos los Cambios" para enviar al backend.
                </p>
            </div>
        </div>
    );
};

export default FormDataManager;
