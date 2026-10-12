/**
 * DevStore - Landing Page Oficial
 * Grupo GT1: Andrade Mallco Aaron, Omar Claudio Lazaro Flores, Jairo Edwin Arizaga Garrado
 * Carrera: Ingeniería en Ciencias de la Computación (Docente: Ing. Duran)
 */

import {
  createIcons,
  Layers,
  ShoppingBag,
  ArrowRight,
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  Zap,
  Terminal,
  CheckCircle2,
  Search,
  Plus,
  ShoppingCart,
  ShieldCheck,
  AlertTriangle,
  XCircle,
  CheckCheck,
  Box,
  ArrowUpRight,
  Store,
  GraduationCap,
  Star,
  BarChart3,
  SlidersHorizontal,
  PackageCheck,
  Github,
  Linkedin,
  Award,
  UserPlus,
  ArrowUp,
  Sparkles,
  Info
} from 'lucide';

// Objeto de iconos optimizado para Tree-Shaking
const activeIcons = {
  Layers,
  ShoppingBag,
  ArrowRight,
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  Zap,
  Terminal,
  CheckCircle2,
  Search,
  Plus,
  ShoppingCart,
  ShieldCheck,
  AlertTriangle,
  XCircle,
  CheckCheck,
  Box,
  ArrowUpRight,
  Store,
  GraduationCap,
  Star,
  BarChart3,
  SlidersHorizontal,
  PackageCheck,
  Github,
  Linkedin,
  Award,
  UserPlus,
  ArrowUp,
  Sparkles,
  Info
};

// =========================================================================
// 1. INICIALIZACIÓN DE ICONOS LUCIDE
// =========================================================================
function refreshIcons() {
  createIcons({
    icons: activeIcons,
    attrs: {
      'stroke-width': 1.75,
    }
  });
}

// =========================================================================
// 2. SISTEMA DE NOTIFICACIONES TOAST LIGERAS
// =========================================================================
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl border text-xs font-mono shadow-2xl transition-all duration-300 transform translate-y-4 opacity-0 ${
    type === 'success' 
      ? 'bg-[#161B22]/95 border-[#00F0FF]/60 text-white shadow-glow-cyan-sm' 
      : 'bg-[#161B22]/95 border-[#6C5CE7]/60 text-white'
  }`;

  const iconName = type === 'success' ? 'check-circle-2' : 'info';
  const iconColor = type === 'success' ? 'text-[#00F0FF]' : 'text-[#6C5CE7]';

  toast.innerHTML = `
    <i data-lucide="${iconName}" class="w-4 h-4 ${iconColor} shrink-0"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  refreshIcons();

  // Animación de entrada
  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
  });

  // Autodescarte tras 3.5 segundos
  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-4', 'opacity-0');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3500);
}

// =========================================================================
// 3. MENÚ MÓVIL RESPONSIVE
// =========================================================================
function setupMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-menu-drawer');
  const iconOpen = document.getElementById('menu-icon-open');
  const iconClose = document.getElementById('menu-icon-close');

  if (!toggleBtn || !drawer) return;

  let isOpen = false;

  const toggle = () => {
    isOpen = !isOpen;
    drawer.classList.toggle('hidden', !isOpen);
    if (iconOpen && iconClose) {
      iconOpen.classList.toggle('hidden', isOpen);
      iconClose.classList.toggle('hidden', !isOpen);
    }
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
  };

  toggleBtn.addEventListener('click', toggle);

  // Cerrar al pulsar un enlace
  const links = drawer.querySelectorAll('.mobile-link');
  links.forEach(link => {
    link.addEventListener('click', () => {
      if (isOpen) toggle();
    });
  });

  // Botón CTA del menú móvil
  const mobileCta = document.getElementById('mobile-cta-btn');
  if (mobileCta) {
    mobileCta.addEventListener('click', () => {
      toggle();
      openDemoModal();
    });
  }
}

// =========================================================================
// 4. MOCKUP INTERACTIVO DEL CATÁLOGO TRIMODAL (HERO)
// =========================================================================
function setupCatalogMockup() {
  const tabButtons = document.querySelectorAll('.catalog-tab-btn');
  const productItems = document.querySelectorAll('.product-item');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.category;

      // Actualizar estado activo en botones
      tabButtons.forEach(b => {
        b.classList.remove('active', 'text-dev-cyan', 'bg-dev-surface', 'border', 'border-dev-cyan/30');
        b.classList.add('text-dev-muted');
      });

      btn.classList.add('active', 'text-dev-cyan', 'bg-dev-surface', 'border', 'border-dev-cyan/30');
      btn.classList.remove('text-dev-muted');

      // Filtrar tarjetas con transición suave
      productItems.forEach(item => {
        const itemType = item.dataset.type;
        if (category === 'all' || itemType === category) {
          item.style.display = 'flex';
          item.style.opacity = '0';
          item.style.transform = 'scale(0.96)';
          requestAnimationFrame(() => {
            item.style.transition = 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)';
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          });
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Botones de simulación "Añadir al carrito"
  const addButtons = document.querySelectorAll('.add-to-cart-trigger');
  addButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const card = btn.closest('.product-item');
      const title = card ? card.querySelector('h4')?.textContent : 'Producto seleccionado';
      showToast(`Añadido al Carrito Trimodal: ${title}`, 'success');
    });
  });

  // Botón "Pagar Orden Trimodal" dentro del Mockup
  const checkoutMockupBtn = document.getElementById('mockup-checkout-btn');
  if (checkoutMockupBtn) {
    checkoutMockupBtn.addEventListener('click', () => {
      showToast('Simulando Checkout Trimodal (Hardware + Software + Cursos)...', 'success');
      setTimeout(() => {
        openDemoModal();
      }, 600);
    });
  }

  // Botón preview carrito de la navbar
  const cartPreviewBtn = document.getElementById('cart-preview-btn');
  if (cartPreviewBtn) {
    cartPreviewBtn.addEventListener('click', () => {
      const catalogSection = document.getElementById('catalogo');
      if (catalogSection) {
        catalogSection.scrollIntoView({ behavior: 'smooth' });
        showToast('Vista de Carrito Trimodal con 3 ítems integrados.', 'info');
      }
    });
  }
}

// =========================================================================
// 5. ACORDEÓN INTERACTIVO DE PREGUNTAS FRECUENTES (FAQ)
// =========================================================================
function setupFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');
    const icon = item.querySelector('.faq-icon');

    if (!trigger || !content) return;

    trigger.addEventListener('click', () => {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

      // Cerrar otros acordeones
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          const otherTrigger = otherItem.querySelector('.faq-trigger');
          const otherContent = otherItem.querySelector('.faq-content');
          const otherIcon = otherItem.querySelector('.faq-icon');
          if (otherTrigger && otherContent) {
            otherTrigger.setAttribute('aria-expanded', 'false');
            otherContent.classList.add('hidden');
            otherItem.classList.remove('border-dev-cyan/40', 'bg-dev-surface/80');
            if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
          }
        }
      });

      // Alternar estado actual
      if (isExpanded) {
        trigger.setAttribute('aria-expanded', 'false');
        content.classList.add('hidden');
        item.classList.remove('border-dev-cyan/40', 'bg-dev-surface/80');
        if (icon) icon.style.transform = 'rotate(0deg)';
      } else {
        trigger.setAttribute('aria-expanded', 'true');
        content.classList.remove('hidden');
        item.classList.add('border-dev-cyan/40', 'bg-dev-surface/80');
        if (icon) icon.style.transform = 'rotate(180deg)';
      }
    });
  });
}

// =========================================================================
// 6. MODAL INTERACTIVO DE DEMO Y SELECCIÓN DE ROL
// =========================================================================
const demoModal = document.getElementById('demo-modal');

function openDemoModal() {
  if (!demoModal) return;
  demoModal.classList.remove('hidden');
  demoModal.classList.add('flex');
}

function closeDemoModal() {
  if (!demoModal) return;
  demoModal.classList.add('hidden');
  demoModal.classList.remove('flex');
}

function setupModal() {
  const closeModalBtn = document.getElementById('close-modal-btn');
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeDemoModal);
  }

  // Cerrar al hacer clic en el backdrop
  if (demoModal) {
    demoModal.addEventListener('click', (e) => {
      if (e.target === demoModal) {
        closeDemoModal();
      }
    });
  }

  // Escuchar tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && demoModal && !demoModal.classList.contains('hidden')) {
      closeDemoModal();
    }
  });

  // Botones de activación del modal
  const triggers = [
    document.getElementById('nav-cta-btn'),
    document.getElementById('hero-cta-main'),
    document.getElementById('final-cta-btn'),
    document.getElementById('final-vendor-btn')
  ];

  triggers.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openDemoModal();
      });
    }
  });

  // Selección de rol dentro del modal
  const roleButtons = document.querySelectorAll('.role-select-btn');
  roleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const role = btn.dataset.role || 'Desarrollador';
      showToast(`¡Perfil seleccionado: ${role}! Cargando panel adaptado...`, 'success');
      setTimeout(() => {
        closeDemoModal();
      }, 700);
    });
  });
}

// =========================================================================
// 7. BOTÓN FLOTANTE "VOLVER ARRIBA" & SCROLL LISTENER
// =========================================================================
function setupScrollFeatures() {
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
        backToTopBtn.classList.add('opacity-100', 'pointer-events-auto');
      } else {
        backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
        backToTopBtn.classList.remove('opacity-100', 'pointer-events-auto');
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// =========================================================================
// INICIALIZACIÓN GENERAL DEL DOM
// =========================================================================
document.addEventListener('DOMContentLoaded', () => {
  refreshIcons();
  setupMobileMenu();
  setupCatalogMockup();
  setupFaqAccordion();
  setupModal();
  setupScrollFeatures();

  console.log(
    '%c DevStore %c Grupo GT1 • Trimodal Marketplace Ready ',
    'background: #00F0FF; color: #0B0E14; font-weight: bold; border-radius: 4px; padding: 2px 6px;',
    'background: #161B22; color: #F0F6FC; border-radius: 4px; padding: 2px 6px;'
  );
});
