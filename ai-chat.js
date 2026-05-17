// ===== AI CHAT MODULE (Claude API) =====
// Handles AI-powered Q&A about DEPU school using Claude API

const AIChat = {
  apiKey: '',
  chatHistory: [],
  isOpen: false,

  // Initialize: load saved API key
  init() {
    this.apiKey = localStorage.getItem('depu_claude_api_key') || '';
    this.renderChatPanel();
    this.renderSettingsPanel();
  },

  // Check if API key is set
  hasApiKey() {
    return this.apiKey && this.apiKey.startsWith('sk-');
  },

  // Save API key
  saveApiKey(key) {
    this.apiKey = key;
    localStorage.setItem('depu_claude_api_key', key);
  },

  // Render the chat toggle button
  renderChatPanel() {
    // Chat panel is rendered in index.html, this wires up events
  },

  // Render settings panel for API key input
  renderSettingsPanel() {
    // Settings panel is rendered in index.html
  },

  // Toggle chat panel visibility
  toggleChat() {
    this.isOpen = !this.isOpen;
    const panel = document.getElementById('aiChatPanel');
    if (panel) {
      panel.style.display = this.isOpen ? 'flex' : 'none';
      if (this.isOpen && !this.hasApiKey()) {
        this.showSettings();
      }
    }
  },

  // Show settings within chat panel
  showSettings() {
    const chatMessages = document.getElementById('aiChatMessages');
    const chatInput = document.getElementById('aiChatInputArea');
    const settingsArea = document.getElementById('aiSettingsArea');

    if (chatMessages) chatMessages.style.display = 'none';
    if (chatInput) chatInput.style.display = 'none';
    if (settingsArea) {
      settingsArea.style.display = 'block';
      const keyInput = document.getElementById('aiApiKeyInput');
      if (keyInput) keyInput.value = this.apiKey;
    }
  },

  // Save settings and switch to chat mode
  saveSettings() {
    const keyInput = document.getElementById('aiApiKeyInput');
    if (keyInput && keyInput.value.trim()) {
      this.saveApiKey(keyInput.value.trim());
    }
    const chatMessages = document.getElementById('aiChatMessages');
    const chatInput = document.getElementById('aiChatInputArea');
    const settingsArea = document.getElementById('aiSettingsArea');
    if (chatMessages) chatMessages.style.display = 'flex';
    if (chatInput) chatInput.style.display = 'flex';
    if (settingsArea) settingsArea.style.display = 'none';

    if (this.chatHistory.length === 0) {
      this.addBotMessage('Hello! I\'m the DEPU School AI Assistant. Ask me anything about Chongqing DEPU Foreign Language School — its history, academics, facilities, admissions, curriculum, achievements, and more!');
    }
  },

  // Add a message to the chat display
  addBotMessage(text) {
    const container = document.getElementById('aiChatMessages');
    if (!container) return;
    const msg = document.createElement('div');
    msg.className = 'ai-msg bot';
    msg.textContent = text;
    container.appendChild(msg);
    container.scrollTop = container.scrollHeight;
  },

  addUserMessage(text) {
    const container = document.getElementById('aiChatMessages');
    if (!container) return;
    const msg = document.createElement('div');
    msg.className = 'ai-msg user';
    msg.textContent = text;
    container.appendChild(msg);
    container.scrollTop = container.scrollHeight;
  },

  addLoadingMessage() {
    const container = document.getElementById('aiChatMessages');
    if (!container) return;
    const msg = document.createElement('div');
    msg.className = 'ai-msg bot loading';
    msg.id = 'aiLoadingMsg';
    msg.textContent = 'Thinking...';
    container.appendChild(msg);
    container.scrollTop = container.scrollHeight;
  },

  removeLoadingMessage() {
    const msg = document.getElementById('aiLoadingMsg');
    if (msg) msg.remove();
  },

  // Send a message to Claude API
  async sendMessage(userMessage) {
    if (!this.hasApiKey()) {
      this.addBotMessage('Please set your Claude API key first. Click the ⚙️ Settings button above.');
      this.showSettings();
      return;
    }

    this.addUserMessage(userMessage);
    this.chatHistory.push({ role: 'user', content: userMessage });

    this.addLoadingMessage();

    try {
      const systemPrompt = `You are a helpful assistant expert on Chongqing DEPU Foreign Language School. Answer questions based on the following knowledge base. If the answer is not in the knowledge base, say so honestly but try to provide what you do know. Always answer in English unless the user asks in Chinese, in which case answer in Chinese.

KNOWLEDGE BASE:
${typeof DEPU_KNOWLEDGE_BASE !== 'undefined' ? DEPU_KNOWLEDGE_BASE : 'Knowledge base not loaded.'}`;

      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': this.apiKey,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true'
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-6',
          max_tokens: 1024,
          system: systemPrompt,
          messages: this.chatHistory.slice(-10) // Keep last 10 messages for context
        })
      });

      this.removeLoadingMessage();

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const errorMsg = errorData.error?.message || `HTTP ${response.status}`;
        this.addBotMessage(`API Error: ${errorMsg}. Please check your API key and try again.`);
        // Remove the failed user message from history
        this.chatHistory.pop();
        return;
      }

      const data = await response.json();
      const botMessage = data.content?.[0]?.text || 'Sorry, I couldn\'t generate a response.';

      this.addBotMessage(botMessage);
      this.chatHistory.push({ role: 'assistant', content: botMessage });

    } catch (error) {
      this.removeLoadingMessage();
      this.addBotMessage(`Network error: ${error.message}. Please check your internet connection and try again.`);
      this.chatHistory.pop();
    }
  },

  // Handle user input
  handleInput() {
    const input = document.getElementById('aiChatInput');
    if (!input) return;
    const text = input.value.trim();
    if (!text) return;
    input.value = '';
    this.sendMessage(text);
  },

  // Clear chat history
  clearChat() {
    this.chatHistory = [];
    const container = document.getElementById('aiChatMessages');
    if (container) container.innerHTML = '';
    this.addBotMessage('Chat cleared. How can I help you with DEPU School?');
  }
};