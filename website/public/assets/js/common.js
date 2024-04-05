// Mobile Menu Toggle
const siteWrapper = document.querySelector('.js-site-wrapper');
const mobileMenuToggle = document.querySelector('.js-menu-toggle');
const mobileMenuIconOpen = document.querySelector('.js-menu-toggle-icon-open');
const mobileMenuIconClose = document.querySelector('.js-menu-toggle-icon-close');
const mobileMenu = document.querySelector('.js-mobile-menu');

// Mobile Menu Toggle
mobileMenuToggle.onclick = () => {
  mobileMenuToggle.classList.toggle('active');

  if ( mobileMenuToggle.classList.contains('active') ) {
    siteWrapper.classList.add('overflow-y-hidden');
    mobileMenuIconOpen.classList.add('hidden');
    mobileMenuIconClose.classList.remove('hidden');
    mobileMenu.classList.remove('translate-x-full');
    mobileMenu.classList.add('translate-x-0');
  } else {
    siteWrapper.classList.remove('overflow-y-hidden');
    mobileMenuIconOpen.classList.remove('hidden');
    mobileMenuIconClose.classList.add('hidden');
    mobileMenu.classList.remove('translate-x-0');
    mobileMenu.classList.add('translate-x-full');
  }
};


// Mobile Submenu Togglers
const mobileSubmenuToggle = document.querySelectorAll('.js-mobile-submenu-toggle');

mobileSubmenuToggle.forEach(function(item, i) {
  item.onclick = () => {
    item.classList.toggle('active');

    if ( item.classList.contains('active') ) {
      item.classList.add('rotate-180');
      item.nextElementSibling.classList.remove('max-h-0');
      item.nextElementSibling.classList.add('max-h-screen');
    } else {
      item.classList.remove('rotate-180');
      item.nextElementSibling.classList.add('max-h-0');
      item.nextElementSibling.classList.remove('max-h-screen');
    }
  };
});



// Tabs
function tabs(headerSelector, tabSelector, contentSelector, activeClass) {
  const header  = document.querySelector(headerSelector);
  const tab     = document.querySelectorAll(tabSelector);
  const content = document.querySelectorAll(contentSelector);

  function hideTabContent() {
    content.forEach(item => {
      item.classList.add('hidden');
    });
    tab.forEach(item => {
      item.classList.remove(activeClass);
    });
  }

  function showTabContent(i = 0) {
    content.forEach(item => {
      item.classList.remove('block');
    });
    content[i].classList.remove('hidden');
    content[i].classList.add('block');
    tab[i].classList.add(activeClass);
  }

  hideTabContent();
  showTabContent();

  header.addEventListener('click', e => {
    e.preventDefault();
    const target = e.target;
    if ( target.classList.contains(tabSelector.replace(/\./, '')) || target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
      tab.forEach((item, i) => {
        if ( target == item || target.parentNode == item ) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
}

// Tabs Init
if (document.querySelector('.tabs')) {
  tabs(
    '.tabs__header',
    '.tabs__header-item',
    '.tabs__content-item',
    'is-active'
  );
}

// Accordion
function accordion(itemsSelector) {
  const items = document.querySelectorAll(itemsSelector);
  items.forEach(item => {
    item.addEventListener('click', () => {
      const parent = item.parentNode;
      if (parent.classList.contains('active')) {
        parent.classList.remove('active');
      } else {
        document
            .querySelectorAll('.accordion__item')
            .forEach(child => child.classList.remove('active'));
        parent.classList.add('active');
      }
    });
  });
}

// Accordion Init
if (document.querySelector('.accordion')) {
  accordion('.accordion__item-trigger');
}


// Lightbox
const lightbox = GLightbox({
  selector: '.glightbox',
  plyr: {
    css: 'assets/vendors/common/glightbox/css/plyr.css',
    js: 'assets/vendors/common/glightbox/js/plyr.js',
  }
});
