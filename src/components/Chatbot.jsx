import React, { useState, useRef, useEffect } from 'react'

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    { id: 1, role: 'assistant', text: 'Hi — how can I help you today?' },
  ])
  const [loading, setLoadin ] = useState(false)
  const listRef = useRef(null)

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight
    }
  }, [messages, open])

  async function sendMessage(e) {
    e?.preventDefault()
    const text = input.trim()
    if (!text) return
    const userMsg = { id: Date.now(), role: 'user', text }
    setMessages((m) => [...m, userMsg])
    setInput('')
    setLoading(true)

    try {
      // ---- Replace this block with a real AI call ----
      // Example: fetch('/api/chat', { method: 'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ prompt: text }) })
      // then use the response to append assistant message.
      await new Promise((r) => setTimeout(r, 900)) // simulate latency
      const assistantText = `Echo: ${text}` // demo reply
      // ------------------------------------------------

      const assistantMsg = { id: Date.now() + 1, role: 'assistant', text: assistantText }
      setMessages((m) => [...m, assistantMsg])
    } catch (err) {
      const errMsg = { id: Date.now() + 1, role: 'assistant', text: 'Sorry, something went wrong.' }
      setMessages((m) => [...m, errMsg])
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed right-4 bottom-4 z-50">
      {/* Chat panel */}
      <div
        className={`flex flex-col bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-200 ${
          open ? 'w-80 h-96' : 'w-14 h-14'
        }`}
        style={{ minWidth: open ? 320 : 56 }}
      >
        {open ? (
          <>
            <div className="flex items-center justify-between px-3 py-2 border-b">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-semibold">AI</div>
                <div className="text-sm font-medium">Assistant</div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => {
                    setOpen(false)
                  }}
                  aria-label="Close chat"
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  ✕
                </button>
              </div>
            </div>

            <div ref={listRef} className="flex-1 overflow-auto p-3 space-y-3 text-sm">
              {messages.map((m) => (
                <div key={m.id} className={m.role === 'user' ? 'text-right' : 'text-left'}>
                  <div
                    className={`inline-block px-3 py-2 rounded-lg ${m.role === 'user' ? 'bg-indigo-100 text-indigo-900' : 'bg-gray-100 text-gray-900'}`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {loading && <div className="text-left text-sm text-gray-500">Thinking...</div>}
            </div>

            <form onSubmit={sendMessage} className="px-3 py-2 border-t">
              <div className="flex items-center gap-2">
                <input
                  className="flex-1 px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Type a message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-indigo-600 text-white rounded-md text-sm disabled:opacity-50"
                  disabled={loading}
                >
                  Send
                </button>
              </div>
            </form>
          </>
        ) : (
          // Floating button when closed
          <button
            onClick={() => setOpen(true)}
            aria-label="Open chat"
            className="w-14 h-14 flex items-center justify-center bg-indigo-600 text-white rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            💬
          </button>
        )}
      </div>
    </div>
  )
}