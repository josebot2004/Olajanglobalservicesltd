const data = {
  categories: [
    {
      key: 'solar',
      title: 'Solar-Inverter Solutions',
      color: 'primary', // Blue accent
      items: [
        { 
          key: 'design', 
          name: 'System Design', 
          img: '/src/assets/images/solar-design.svg',
          features: ['Load audit', 'Battery sizing', 'Roof layout'], 
          description: 'Tailored solar PV and inverter systems designed for maximum reliability and ROI.' 
        },
        { 
          key: 'install', 
          name: 'Installation', 
          img: '/src/assets/images/solar-install.svg',
          features: ['Safety-first', 'Neat cabling', 'Commissioning'], 
          description: 'Professional installation by certified technicians for homes and businesses.' 
        },
        { 
          key: 'maintenance', 
          name: 'Maintenance', 
          img: '/src/assets/images/solar-maintenance.svg',
          features: ['Preventive checks', 'Battery health', 'Panel cleaning'],
          description: 'Scheduled maintenance to keep your solar system running at peak performance.' 
        },
        { 
          key: 'sales', 
          name: 'Sales & Upgrades', 
          img: '/src/assets/images/solar-sales.svg',
          features: ['Inverters', 'Batteries', 'Panels'], 
          description: 'High-quality components from trusted brands with warranty and upgrade support.' 
        },
      ]
    },
    {
      key: 'office',
      title: 'Office Equipment',
      color: 'secondary', // Yellow accent
      items: [
        { 
          key: 'copiers', 
          name: 'Copiers & Printers', 
          img: '/src/assets/images/office-copier.svg',
          features: ['Colour/B&W', 'Network ready', 'Consumables'], 
          description: 'Efficient printing solutions backed by fast and reliable after-sales support.' 
        },
        { 
          key: 'scanners', 
          name: 'Scanners', 
          img: '/src/assets/images/office-scanner.svg',
          features: ['High DPI', 'ADF', 'OCR'],
          description: 'Digitize your documents quickly and accurately for streamlined workflow.' 
        },
        { 
          key: 'ups', 
          name: 'UPS', 
          img: '/src/assets/images/office-ups.svg',
          features: ['Line-interactive', 'Online', 'Rack/Tower'],
          description: 'Protect office equipment from power interruptions and voltage fluctuations.' 
        },
      ]
    },
    {
      key: 'it',
      title: 'IT Products',
      color: 'primary', // Blue accent again
      items: [
        { 
          key: 'cctv', 
          name: 'CCTV & Surveillance', 
          img: '/src/assets/images/it-cctv.svg',
          features: ['HD/4K', 'Remote viewing', 'NVR/DVR'], 
          description: 'Modern video surveillance solutions to secure your premises effectively.' 
        },
        { 
          key: 'network', 
          name: 'Networking', 
          img: '/src/assets/images/it-network.svg',
          features: ['Structured cabling', 'Switches & routers', 'Wi‑Fi'],
          description: 'Reliable network infrastructure for seamless collaboration and productivity.' 
        },
        { 
          key: 'servers', 
          name: 'Servers & Storage', 
          img: '/src/assets/images/it-servers.svg',
          features: ['On‑prem', 'NAS', 'Cloud integration'],
          description: 'Scalable data solutions that grow with your business needs.' 
        },
      ]
    }
  ]
}

export default data
