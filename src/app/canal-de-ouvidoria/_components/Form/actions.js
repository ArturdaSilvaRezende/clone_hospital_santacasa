'use server'

export async function sendOmbudsmanAction(data) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/listening-channel`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    const result = await response.json()

    if (response.ok) {
      return { success: true, protocol: result.protocol }
    }
    return { success: false, msg: result.error || 'Erro ao processar sua solicitação' }
  } catch (error) {
    return { success: false, msg: 'Falha na conexão com o servidor' }
  }
}