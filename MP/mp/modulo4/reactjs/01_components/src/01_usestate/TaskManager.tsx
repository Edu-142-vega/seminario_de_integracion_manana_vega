import { useState } from 'react'

interface Expediente {
  id: number
  codigo: string
  titulo: string
  resuelto: boolean
}

export default function GestorExpedientes() {
  const [expedientes, setExpedientes] = useState<Expediente[]>([])
  const [codigo, setCodigo] = useState('')
  const [titulo, setTitulo] = useState('')

  // AGREGAR — spread del array anterior más el nuevo caso policial
  function agregarExpediente() {
    if (!codigo.trim() || !titulo.trim()) return
    setExpedientes((prev) => [
      ...prev,
      { id: Date.now(), codigo: codigo.trim(), titulo: titulo.trim(), resuelto: false },
    ])
    setCodigo('')
    setTitulo('')
  }

  // ELIMINAR — filter crea un nuevo array sin el expediente policial
  function eliminarExpediente(id: number) {
    setExpedientes((prev) => prev.filter((expediente) => expediente.id !== id))
  }

  // ACTUALIZAR ESTADO — map cambia el estado de resolución del caso policial
  function toggleExpediente(id: number) {
    setExpedientes((prev) =>
      prev.map((expediente) =>
        expediente.id === id ? { ...expediente, resuelto: !expediente.resuelto } : expediente
      )
    )
  }

  return (
    <div style={{ maxWidth: 420 }}>
      <h3>Sistema de Control de Expedientes Policiales</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
        <input
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
          placeholder="Código de Expediente (ej. EXP-2026-01)..."
          style={{ padding: '8px 12px', borderRadius: 6, border: '1px solid #ddd' }}
        />
        <input
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && agregarExpediente()}
          placeholder="Título del Caso / Delito..."
          style={{ padding: '8px 12px', borderRadius: 6, border: '1px solid #ddd' }}
        />
        <button
          onClick={agregarExpediente}
          style={{ padding: '8px 16px', background: '#0070f3', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}
        >
          Registrar Expediente
        </button>
      </div>

      {expedientes.length === 0 && (
        <p style={{ color: '#999', fontSize: 14 }}>No hay expedientes policiales registrados. ¡Registre uno!</p>
      )}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {expedientes.map((expediente) => (
          <li
            key={expediente.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '10px 0',
              borderBottom: '1px solid #eee',
            }}
          >
            <input
              type="checkbox"
              checked={expediente.resuelto}
              onChange={() => toggleExpediente(expediente.id)}
            />
            <span
              style={{
                fontWeight: 'bold',
                textDecoration: expediente.resuelto ? 'line-through' : 'none',
                color: expediente.resuelto ? '#aaa' : '#0070f3',
              }}
            >
              [{expediente.codigo}]
            </span>
            <span
              style={{
                flex: 1,
                textDecoration: expediente.resuelto ? 'line-through' : 'none',
                color: expediente.resuelto ? '#aaa' : '#333',
              }}
            >
              {expediente.titulo}
            </span>
            <button
              onClick={() => eliminarExpediente(expediente.id)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#e00', fontSize: 16 }}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      {expedientes.length > 0 && (
        <p style={{ fontSize: 13, color: '#888', marginTop: 8 }}>
          {expedientes.filter((e) => e.resuelto).length} de {expedientes.length} casos resueltos
        </p>
      )}
    </div>
  )
}