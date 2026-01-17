export async function getHello(name: string): Promise<string> {
  try {
    const response = await fetch(`http://localhost:8080/api/hello?name=${name}`)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }
    return await response.text()
  } catch (error) {
    console.error('Failed to fetch hello message:', error)
    return 'Hello, Frontend (Fallback)'
  }
}
