'use server'

export async function sendOmbudsmanAction(data) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/ombudsman-channel`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    const result = await response.json()

    if (response.ok && result.success) {
      return { success: true }
    }
    return { success: false, msg: 'Erro na resposta do servidor' }
  } catch (error) {
    return { success: false, msg: 'Falha na conexão' }
  }
}