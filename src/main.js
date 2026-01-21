import './index.css'

const app = document.querySelector('#app')

const state = {
  invoices: [
    { id: 'INV-001', client: 'Acme Corp', amount: 1250.00, status: 'Paid', date: '2026-01-15' },
    { id: 'INV-002', client: 'Global Tech', amount: 850.00, status: 'Pending', date: '2026-01-18' },
    { id: 'INV-003', client: 'Nexus Inc', amount: 3200.00, status: 'Overdue', date: '2026-01-10' },
  ],
  isGenerating: false
}

function renderDashboard() {
  app.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Header -->
      <header class="flex justify-between items-center mb-12">
        <div>
          <h1 class="text-4xl font-heading font-bold text-white tracking-tight">Apex <span class="text-fintech-cta">Invoice</span></h1>
          <p class="text-slate-400 mt-2">Intelligent billing automation dashboard</p>
        </div>
        <button id="new-invoice-btn" class="btn-primary flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          New Invoice
        </button>
      </header>

      <!-- Stats Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div class="glass-card p-6">
          <p class="text-slate-400 text-sm font-medium">Total Revenue</p>
          <p class="text-3xl font-heading font-bold text-white mt-1">$5,300.25</p>
          <div class="mt-2 flex items-center text-emerald-400 text-sm">
            <span>+12.5%</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 ml-1">
              <path fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
        <div class="glass-card p-6 border-l-4 border-l-fintech-cta">
          <p class="text-slate-400 text-sm font-medium">Pending Invoices</p>
          <p class="text-3xl font-heading font-bold text-white mt-1">12</p>
          <p class="mt-2 text-slate-500 text-sm">Awaiting client action</p>
        </div>
        <div class="glass-card p-6">
          <p class="text-slate-400 text-sm font-medium">Automation Accuracy</p>
          <p class="text-3xl font-heading font-bold text-white mt-1">99.8%</p>
          <p class="mt-2 text-slate-500 text-sm">Powered by Antigravity AI</p>
        </div>
      </div>

      <!-- Invoice Table -->
      <div class="glass-card overflow-hidden">
        <div class="px-6 py-4 border-b border-white/5 flex justify-between items-center">
          <h2 class="text-lg font-bold text-white">Recent Activities</h2>
          <button class="text-fintech-cta text-sm font-medium hover:underline">View All</button>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-left">
            <thead>
              <tr class="text-slate-500 text-xs uppercase tracking-wider">
                <th class="px-6 py-4 font-semibold">Invoice ID</th>
                <th class="px-6 py-4 font-semibold">Client</th>
                <th class="px-6 py-4 font-semibold">Date</th>
                <th class="px-6 py-4 font-semibold">Amount</th>
                <th class="px-6 py-4 font-semibold">Status</th>
                <th class="px-6 py-4 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-white/5">
              ${state.invoices.map(inv => `
                <tr class="hover:bg-white/5 transition-colors duration-200 cursor-pointer">
                  <td class="px-6 py-4 text-sm font-medium text-slate-300 font-mono">${inv.id}</td>
                  <td class="px-6 py-4 text-sm text-white">${inv.client}</td>
                  <td class="px-6 py-4 text-sm text-slate-400">${inv.date}</td>
                  <td class="px-6 py-4 text-sm font-bold text-white">$${inv.amount.toLocaleString()}</td>
                  <td class="px-6 py-4">
                    <span class="px-3 py-1 text-xs font-medium rounded-full ${getStatusStyle(inv.status)}">
                      ${inv.status}
                    </span>
                  </td>
                  <td class="px-6 py-4 text-right">
                    <button class="nav-link text-fintech-cta">Edit</button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- SFX Particles (Simple CSS implementation) -->
    <div class="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      <div class="absolute top-[20%] left-[10%] w-72 h-72 bg-sky-500/10 blur-[120px] rounded-full animate-pulse"></div>
      <div class="absolute bottom-[20%] right-[10%] w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full animate-pulse-slow"></div>
    </div>
  `

  attachEventListeners()
}

function getStatusStyle(status) {
  switch (status) {
    case 'Paid': return 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
    case 'Pending': return 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
    case 'Overdue': return 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
    default: return 'bg-slate-500/10 text-slate-400'
  }
}

function attachEventListeners() {
  document.querySelector('#new-invoice-btn')?.addEventListener('click', () => {
    alert('Invoice Automation AI is preparing your workspace...')
  })
}

// Initial Render
renderDashboard()
