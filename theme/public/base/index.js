// Base JavaScript for Shopline OS 3.0 Theme

// Initialize Shopline global object if not exists
if (typeof window.Shopline === 'undefined') {
  window.Shopline = {};
}

// Define module system
const defineModule = (() => {
  const modules = new Map();
  return (name, definer) => {
    if (!modules.has(name)) {
      modules.set(name, definer);
      definer();
    }
  };
})();

// Theme Event Types
var EnumThemeEvent;
(function (EnumThemeEvent) {
  EnumThemeEvent["ProductViewed"] = "product:viewed";
  EnumThemeEvent["VariantChanged"] = "variant:changed";
  EnumThemeEvent["VariantAdded"] = "variant:added";
  EnumThemeEvent["CartOpened"] = "cart:opened";
  EnumThemeEvent["CartClosed"] = "cart:closed";
  EnumThemeEvent["OpenCart"] = "cart:open";
  EnumThemeEvent["OpenQuickAddModal"] = "quick-add:open";
  EnumThemeEvent["SectionLoad"] = "shopline:section:load";
  EnumThemeEvent["SectionUnload"] = "shopline:section:unload";
  EnumThemeEvent["SectionSelect"] = "shopline:section:select";
  EnumThemeEvent["SectionDeselect"] = "shopline:section:deselect";
  EnumThemeEvent["BlockSelect"] = "shopline:block:select";
  EnumThemeEvent["BlockDeselect"] = "shopline:block:deselect";
})(EnumThemeEvent || (EnumThemeEvent = {}));

// Check if themeEventCenter is provided by Shopline
if (typeof window.themeEventCenter === 'undefined') {
  console.log('themeEventCenter not found, creating fallback');
  
  // Theme Event Center Fallback - Required for Shopline Theme Customizer
  class ThemeEventCenter {
    constructor() {
      this.listeners = new Map();
    }

    addListener(event, callback) {
      if (!this.listeners.has(event)) {
        this.listeners.set(event, []);
      }
      this.listeners.get(event).push(callback);
      
      // Also add DOM event listener for Shopline events
      document.addEventListener(event, callback);
    }

    removeListener(event, callback) {
      if (this.listeners.has(event)) {
        const callbacks = this.listeners.get(event);
        const index = callbacks.indexOf(callback);
        if (index > -1) {
          callbacks.splice(index, 1);
        }
      }
      
      // Also remove DOM event listener
      document.removeEventListener(event, callback);
    }

    emit(event, detail) {
      if (this.listeners.has(event)) {
        this.listeners.get(event).forEach(callback => {
          callback({ detail });
        });
      }
      
      // Also dispatch as DOM event for Shopline compatibility
      document.dispatchEvent(new CustomEvent(event, { detail }));
    }
    
    dispatch(event) {
      this.emit(event.type, event.detail);
    }
    
    getCurrentDetail(eventType) {
      // Placeholder for getting last event detail
      return null;
    }
  }

  // Create global theme event center instance
  window.themeEventCenter = new ThemeEventCenter();
} else {
  console.log('Using Shopline provided themeEventCenter');
}

// Ensure it's available on Shopline object
if (window.Shopline) {
  window.Shopline.themeEventCenter = window.themeEventCenter;
}

// Theme utilities
const themeUtils = {
  throttle(fn, wait) {
    let timer = null;
    return (...args) => {
      if (timer) {
        return;
      }
      timer = window.setTimeout(() => {
        fn.apply(this, args);
        timer = null;
      }, wait);
    };
  },
  
  debounce(fn, wait) {
    let timer = null;
    return (...args) => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = window.setTimeout(() => {
        fn.apply(this, args);
      }, wait);
    };
  }
};

// Add utilities to Shopline global
window.Shopline.utils = window.Shopline.utils || {};
Object.assign(window.Shopline.utils, themeUtils);

// Register Shopline Theme Customizer event listeners
if (window.themeEventCenter) {
  // Use themeEventCenter if available
  window.themeEventCenter.addListener('shopline:section:load', function(event) {
    console.log('Section loaded via themeEventCenter:', event.detail);
    // Re-initialize any JavaScript for the loaded section
    if (window.mountVueComponents) {
      window.mountVueComponents(event.target);
    }
  });

  window.themeEventCenter.addListener('shopline:section:unload', function(event) {
    console.log('Section unloaded via themeEventCenter:', event.detail);
  });

  window.themeEventCenter.addListener('shopline:section:select', function(event) {
    console.log('Section selected via themeEventCenter:', event.detail);
  });

  window.themeEventCenter.addListener('shopline:section:deselect', function(event) {
    console.log('Section deselected via themeEventCenter:', event.detail);
  });

  window.themeEventCenter.addListener('shopline:block:select', function(event) {
    console.log('Block selected via themeEventCenter:', event.detail);
  });

  window.themeEventCenter.addListener('shopline:block:deselect', function(event) {
    console.log('Block deselected via themeEventCenter:', event.detail);
  });
}

// Also listen via DOM events as fallback
document.addEventListener('shopline:section:load', function(event) {
  console.log('Section loaded via DOM:', event.detail);
  // Re-initialize any JavaScript for the loaded section
  if (window.mountVueComponents) {
    window.mountVueComponents(event.target);
  }
});

document.addEventListener('shopline:section:unload', function(event) {
  console.log('Section unloaded via DOM:', event.detail);
});

document.addEventListener('shopline:section:select', function(event) {
  console.log('Section selected via DOM:', event.detail);
});

document.addEventListener('shopline:section:deselect', function(event) {
  console.log('Section deselected via DOM:', event.detail);
});

document.addEventListener('shopline:block:select', function(event) {
  console.log('Block selected via DOM:', event.detail);
});

document.addEventListener('shopline:block:deselect', function(event) {
  console.log('Block deselected via DOM:', event.detail);
});

// Theme initialization
document.addEventListener('DOMContentLoaded', function() {
  console.log('Orion Theme OS 3.0 Initialized');
  
  // Initialize theme settings
  if (window.Shopline) {
    window.Shopline.theme = window.Shopline.theme || {};
    window.Shopline.routes = window.routes || {};
  }
  
  // Dispatch custom event for theme ready
  window.dispatchEvent(new CustomEvent('theme:ready'));
  
  // Initialize sections if in design mode
  if (window.Shopline && window.Shopline.designMode) {
    // Trigger section load for all existing sections
    document.querySelectorAll('[data-section-type]').forEach(function(section) {
      const event = new CustomEvent('shopline:section:load', {
        detail: { sectionId: section.dataset.sectionId },
        target: section
      });
      document.dispatchEvent(event);
    });
  }
  
  // Initialize Vue components if available
  if (window.mountVueComponents) {
    window.mountVueComponents();
  }
});

// Handle dynamic section loading (for theme customizer)
if (window.Shopline && window.Shopline.designMode) {
  document.addEventListener('shopline:section:load', function(event) {
    // Re-initialize components in the newly loaded section
    const section = event.target;
    if (window.mountVueComponents) {
      window.mountVueComponents(section);
    }
  });
}