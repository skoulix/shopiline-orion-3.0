<template>
  <Teleport to="body">
    <!-- Backdrop with transition -->
    <Transition name="backdrop">
      <div
        v-if="isOpen"
        class="fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 overlay-close-cursor"
        @click="closeModal"
      ></div>
    </Transition>

    <!-- Modal with transition -->
    <Transition name="modal">
      <div
        v-if="isOpen"
        class="fixed inset-4 md:inset-auto md:bottom-4 md:right-4 bg-white shadow-2xl z-50 md:w-[800px] md:h-[450px] md:max-w-[calc(100vw-2rem)] md:max-h-[450px] overflow-hidden"
        :style="{ borderRadius: cardRadius }"
        @click.stop
      >
        <!-- Close button - More prominent -->
        <button
          @click="closeModal"
          class="absolute top-3 right-3 w-10 h-10 flex items-center justify-center rounded-full bg-black hover:bg-gray-800 transition-colors z-10 shadow-lg"
        >
          <svg
            class="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <!-- Skeleton Loading State -->
        <div
          v-if="isLoading"
          class="flex flex-col md:flex-row h-full animate-pulse"
        >
          <!-- Image Skeleton - Top on mobile, Left on desktop -->
          <div class="w-full md:w-1/2 h-48 md:h-full">
            <div class="bg-gray-50 h-full rounded-none"></div>
          </div>

          <!-- Content Skeleton - Bottom on mobile, Right on desktop -->
          <div class="w-full md:w-1/2 p-4 md:p-6 flex flex-col gap-4">
            <!-- Title Skeleton -->
            <div class="pr-12">
              <div class="h-6 bg-gray-200 rounded w-3/4"></div>
            </div>

            <!-- Price Skeleton -->
            <div class="flex items-baseline gap-2">
              <div class="h-5 bg-gray-200 rounded w-20"></div>
              <div class="h-6 bg-gray-200 rounded w-24"></div>
            </div>

            <!-- Variant Options Skeleton -->
            <div class="space-y-4 mb-6">
              <!-- Color Option -->
              <div>
                <div class="h-4 bg-gray-200 rounded w-16 mb-2"></div>
                <div class="flex gap-2">
                  <div class="w-12 h-12 bg-gray-200 rounded-lg"></div>
                  <div class="w-12 h-12 bg-gray-200 rounded-lg"></div>
                  <div class="w-12 h-12 bg-gray-200 rounded-lg"></div>
                  <div class="w-12 h-12 bg-gray-200 rounded-lg"></div>
                  <div class="w-12 h-12 bg-gray-200 rounded-lg"></div>
                </div>
              </div>

              <!-- Style Option -->
              <div>
                <div class="h-4 bg-gray-200 rounded w-20 mb-2"></div>
                <div class="flex gap-2">
                  <div class="h-10 bg-gray-200 rounded w-24"></div>
                  <div class="h-10 bg-gray-200 rounded w-20"></div>
                </div>
              </div>
            </div>

            <!-- Add to Cart Button Skeleton -->
            <div class="mt-auto">
              <div class="w-full h-12 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>

        <!-- Modal Content -->
        <div
          v-else-if="product && product.title"
          class="flex flex-col md:flex-row h-full"
        >
          <!-- Product Image - Top on mobile, Left on desktop -->
          <div class="w-full md:w-1/2 md:h-full">
            <div class="relative overflow-hidden bg-gray-50 h-full">
              <!-- Fixed aspect ratio container for mobile -->
              <div class="relative md:h-full" :style="{ paddingBottom: isDesktop ? '0' : '100%' }">
                <img
                  v-if="currentImage"
                  :key="currentImage"
                  :src="currentImage"
                  :alt="product.title"
                  class="absolute inset-0 w-full h-full object-cover"
                  :class="{ 'opacity-0': isImageLoading }"
                  @load="handleImageLoad"
                />
                <!-- Loading skeleton -->
                <div
                  v-if="isImageLoading || !currentImage"
                  class="absolute inset-0 flex items-center justify-center bg-gray-50"
                >
                  <svg
                    class="w-12 h-12 text-gray-300 animate-pulse"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Product Info - Bottom on mobile, Right on desktop -->
          <div class="w-full md:w-1/2 p-4 md:p-6 flex flex-col overflow-y-auto">
            <!-- Product Title -->
            <h1 class="text-lg uppercase font-medium mb-2 pr-12">
              {{ product.title }}
            </h1>

            <!-- Price -->
            <div class="mb-1">
              <div class="flex flex-wrap items-center gap-2">
                <span
                  v-if="hasDiscount"
                  class="text-base line-through text-gray-400"
                  style="font-family: 'Roboto Mono', monospace"
                >
                  {{
                    formatPrice(
                      currentVariant?.compare_at_price ||
                        product.compare_at_price
                    )
                  }}
                </span>
                <span
                  class="text-base"
                  :style="{
                    fontFamily: '\'Roboto Mono\', monospace',
                    color: hasDiscount ? 'rgb(194, 62, 62)' : '#000',
                  }"
                >
                  {{ formatPrice(currentVariant?.price || product.price) }}
                </span>
                <span
                  v-if="hasDiscount"
                  class="text-xs font-medium px-2 py-0.5 rounded-full md:ml-1"
                  style="background-color: rgb(194, 62, 62); color: white"
                >
                  Save
                  {{
                    formatPrice(
                      hasDiscount
                        ? (currentVariant?.compare_at_price ||
                            product.compare_at_price) -
                            (currentVariant?.price || product.price)
                        : 0
                    )
                  }}
                </span>
              </div>
            </div>

            <!-- Variant Options using ProductVariantPicker component -->
            <div v-if="hasOptions" class="mb-4">
              <product-variant-picker
                :product="product"
                :selected-variant-id="selectedVariantId"
                @variant-change="handleVariantChange"
              />
            </div>

            <!-- Add to Cart -->
            <div class="mt-auto">
              <button
                @click="addToCart"
                :disabled="
                  isAddingToCart || !currentVariant || !currentVariant.available
                "
                class="w-full py-3 px-6 text-base font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                :style="buttonStyles"
              >
                <span v-if="!currentVariant" class="uppercase"
                  >Select Options</span
                >
                <span v-else-if="!currentVariant.available" class="uppercase"
                  >Out of Stock</span
                >
                <span v-else-if="!isAddingToCart" class="uppercase"
                  >Add to Cart</span
                >
                <svg
                  v-else
                  class="animate-spin w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Error State -->
        <div
          v-else-if="!isLoading && !product?.title"
          class="flex items-center justify-center h-full p-8"
        >
          <div class="text-center">
            <div class="text-gray-400 mb-4">
              <svg
                class="w-16 h-16 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 class="text-lg font-medium text-gray-900 mb-2">
              Unable to load product
            </h3>
            <p class="text-sm text-gray-600">Please try again later</p>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, computed, watch, nextTick, onUnmounted } from "vue";
import ProductVariantPicker from "./ProductVariantPicker.vue";

const isOpen = ref(false);
const isLoading = ref(false);
const product = ref({});
const quantity = ref(1);
const selectedOptions = ref({});
const selectedVariantId = ref(null);
const isAddingToCart = ref(false);
const currentImage = ref(null);
const isImageLoading = ref(false);
const isDesktop = ref(window.innerWidth >= 768);

// Get button styles from theme settings
const buttonStyles = computed(() => {
  const settings = window.Shopline?.theme?.settings || {};
  return {
    backgroundColor: settings.button_primary_bg || "#000000",
    color: settings.button_primary_text || "#ffffff",
    borderRadius: `${settings.button_border_radius || 0}px`,
    border: "none",
  };
});

// Get card radius from theme settings
const cardRadius = computed(() => {
  const radius = window.Shopline?.theme?.settings?.card_border_radius || 0;
  return `${radius}px`;
});

// Check if product has options
const hasOptions = computed(() => {
  return (
    product.value.options &&
    product.value.options.length > 0 &&
    product.value.options.some((opt) => opt.values && opt.values.length > 0)
  );
});

// Current variant based on selected options
const currentVariant = computed(() => {
  if (!product.value.variants || product.value.variants.length === 0) {
    return {
      id: product.value.id,
      price: product.value.price,
      compare_at_price: product.value.compare_at_price,
      available: true,
      featured_image: product.value.featured_image || 
                      product.value.image || 
                      (product.value.images && product.value.images[0]) ||
                      null,
    };
  }

  // If we have no options or they're empty, return the first variant
  if (!product.value.options || product.value.options.length === 0) {
    const firstVariant = product.value.variants[0];
    if (firstVariant) {
      const available =
        firstVariant.available !== undefined
          ? firstVariant.available
          : firstVariant.inventory_quantity !== undefined &&
            firstVariant.inventory_quantity !== null
          ? firstVariant.inventory_quantity > 0
          : !firstVariant.sold_out;
      return {
        ...firstVariant,
        available,
      };
    }
    return null;
  }

  // Check if all options are selected
  const allOptionsSelected = product.value.options.every((option) => {
    // Handle both string options and object options
    const optionName = typeof option === 'object' && option.name ? option.name : option;
    return (
      selectedOptions.value[optionName] !== undefined &&
      selectedOptions.value[optionName] !== null
    );
  });

  if (!allOptionsSelected) {
    return null;
  }

  // Find variant matching ALL selected options
  const variant = product.value.variants.find((v) => {
    return product.value.options.every((option, index) => {
      // Handle both string options and object options
      const optionName = typeof option === 'object' && option.name ? option.name : option;
      const optionKey = `option${index + 1}`;
      const matches = v[optionKey] === selectedOptions.value[optionName];
      return matches;
    });
  });

  if (variant) {
    // Ensure proper availability
    const available =
      variant.available !== undefined
        ? variant.available
        : variant.inventory_quantity !== undefined &&
          variant.inventory_quantity !== null
        ? variant.inventory_quantity > 0
        : !variant.sold_out;

    return {
      ...variant,
      available,
    };
  }

  return null;
});

// Check if product has discount
const hasDiscount = computed(() => {
  if (!currentVariant.value) return false;
  const compareAt =
    currentVariant.value.compare_at_price || product.value.compare_at_price;
  const price = currentVariant.value.price || product.value.price;
  return compareAt && compareAt > price;
});

// Format price with proper currency
const formatPrice = (price) => {
  // Get current currency data from window.ShoplineCurrency
  const currencyData = window.ShoplineCurrency || {};
  let moneyFormat = currencyData.format || "${{amount}}";
  
  // If format is just the symbol, append {{amount}} directly with no space
  if (moneyFormat && !moneyFormat.includes('{{amount}}')) {
    moneyFormat = moneyFormat + '{{amount}}';
  }
  
  if (!price && price !== 0) {
    return moneyFormat.replace("{{amount}}", "0.00");
  }
  
  // Parse the price - handle both string and number inputs
  let numPrice = price;
  if (typeof price === "string") {
    // Remove any non-numeric characters except decimal point
    numPrice = parseFloat(price.replace(/[^0-9.-]/g, ''));
  }
  
  if (!numPrice || isNaN(numPrice)) {
    return moneyFormat.replace("{{amount}}", "0.00");
  }
  
  // Prices are in cents, divide by 100 to get the major currency unit
  const priceValue = numPrice / 100;
  
  // Get locale for formatting
  const locale = window.Shopline?.locale?.current || 'en';
  
  // Format with current locale
  const formatter = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: false
  });
  
  const formattedAmount = formatter.format(priceValue);
  
  return moneyFormat.replace('{{amount}}', formattedAmount);
};

// Fetch product data via Shopline AJAX API
const fetchProductData = async (handle) => {
  const response = await fetch(`/api/product/products.json?handle=${handle}`);

  if (!response.ok) {
    throw new Error(`Product not found (status: ${response.status})`);
  }

  const data = await response.json();

  // API returns {products: [...]}
  if (
    data.products &&
    Array.isArray(data.products) &&
    data.products.length > 0
  ) {
    const productData = data.products[0];

    // Ensure variants have proper availability flags
    if (productData.variants) {
      productData.variants = productData.variants.map((v) => ({
        ...v,
        available:
          v.available !== undefined
            ? v.available
            : v.inventory_quantity !== undefined &&
              v.inventory_quantity !== null
            ? v.inventory_quantity > 0
            : !v.sold_out,
      }));
    }

    return {
      ...productData,
      featured_image:
        productData.featured_image?.src ||
        productData.images?.[0]?.src ||
        productData.image ||
        null,
    };
  }

  throw new Error("Product not found");
};

// Open modal with product handle
const openModalWithHandle = async (productHandle) => {
  if (!productHandle) {
    return;
  }

  // Show modal with loading state
  isOpen.value = true;
  isLoading.value = true;
  
  // Prevent body scroll when modal is open
  document.body.style.overflow = 'hidden';

  try {
    const productData = await fetchProductData(productHandle);
    await processProductData(productData);
  } catch (error) {
    isOpen.value = false;
    document.body.style.overflow = '';
  } finally {
    isLoading.value = false;
  }
};

// Open modal with product data (for backward compatibility - redirects to openModalWithHandle)
const openModal = async (productData) => {
  // If string is passed, treat it as a handle
  if (typeof productData === "string") {
    await openModalWithHandle(productData);
    return;
  }

  // For objects with handle property
  if (productData?.handle) {
    await openModalWithHandle(productData.handle);
    return;
  }

};

// Process product data
const processProductData = async (productData) => {
  // Store the product data
  product.value = {
    ...productData,
    options: productData.options || [],
  };

  quantity.value = 1;

  // Reset selected options
  selectedOptions.value = {};

  // Find first available variant
  let selectedVariant = null;
  if (productData.variants && productData.variants.length > 0) {
    // First try to find an available variant
    selectedVariant = productData.variants.find((v) => {
      const available =
        v.available !== undefined
          ? v.available
          : v.inventory_quantity !== undefined && v.inventory_quantity !== null
          ? v.inventory_quantity > 0
          : !v.sold_out;
      return available;
    });

    // If no available variant found, use the first variant anyway
    if (!selectedVariant) {
      selectedVariant = productData.variants[0];
    }
  }

  if (selectedVariant) {
    selectedVariantId.value = selectedVariant.id;

    // Set initial image - check multiple possible image properties
    const variantImage =
      selectedVariant.featured_image?.src ||
      selectedVariant.featured_image ||
      selectedVariant.image?.src ||
      selectedVariant.image;

    if (variantImage) {
      currentImage.value = variantImage;
    } else {
      currentImage.value = productData.featured_image || 
                          productData.image || 
                          (productData.images && productData.images[0]) ||
                          null;
    }

    // Set initial options from selected variant
    if (product.value.options?.length > 0) {
      const newOptions = {};
      product.value.options.forEach((option, index) => {
        // Handle both string options and object options
        const optionName = typeof option === 'object' && option.name ? option.name : option;
        const optionValue = selectedVariant[`option${index + 1}`];
        if (optionValue !== undefined && optionValue !== null) {
          newOptions[optionName] = optionValue;
        }
      });

      selectedOptions.value = newOptions;

      // Force reactivity update
      await nextTick();
    }
  } else {
    // No variants - single product
    currentImage.value = productData.featured_image || 
                         productData.image || 
                         (productData.images && productData.images[0]) ||
                         null;
  }
};

// Close modal
const closeModal = () => {
  isOpen.value = false;
  
  // Restore body scroll
  document.body.style.overflow = '';
};

// Handle variant change from ProductVariantPicker
const handleVariantChange = async (eventOrVariant) => {
  
  // Handle both direct variant and CustomEvent with detail
  let variant;
  if (eventOrVariant && eventOrVariant.detail) {
    // It's a CustomEvent, extract the variant from detail
    variant = Array.isArray(eventOrVariant.detail) ? eventOrVariant.detail[0] : eventOrVariant.detail;
  } else {
    // It's the variant directly
    variant = eventOrVariant;
  }
  
  if (!variant || !variant.id) {
    return;
  }

  selectedVariantId.value = variant.id;

  // Clear and rebuild selected options to ensure reactivity
  if (product.value.options && product.value.options.length > 0) {
    // Replace selected options with new ones
    const newOptions = {};
    product.value.options.forEach((option, index) => {
      // Handle both string options and object options
      const optionName = typeof option === 'object' && option.name ? option.name : option;
      const optionKey = `option${index + 1}`;
      const optionValue = variant[optionKey];
      if (optionValue !== undefined && optionValue !== null) {
        newOptions[optionName] = optionValue;
      }
    });
    
    selectedOptions.value = { ...newOptions }; // Create new object for reactivity
  }

  // Force reactivity update
  await nextTick();
  
  // Update current image based on variant
  const variantImage =
    variant.featured_image?.src ||
    variant.featured_image ||
    variant.image?.src ||
    variant.image ||
    variant.featured_image_v2?.url;

  if (variantImage) {
    currentImage.value = variantImage;
  } else {
    const fallbackImage = product.value.featured_image || 
                         product.value.image || 
                         (product.value.images && product.value.images[0]) ||
                         null;
    currentImage.value = fallbackImage;
  }
};

// Add to cart
const addToCart = async () => {
  // Ensure we have a valid variant selected
  if (!currentVariant.value || !currentVariant.value.id) {
    return;
  }

  // Check if variant is available
  if (!currentVariant.value.available) {
    return;
  }

  if (isAddingToCart.value) return;
  isAddingToCart.value = true;

  try {
    const formData = new FormData();
    formData.append("id", currentVariant.value.id);
    formData.append("quantity", quantity.value.toString());

    const response = await fetch("/cart/add.js", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      // Trigger cart drawer open if available
      if (window.OrionCart && window.OrionCart.openDrawer) {
        window.OrionCart.openDrawer();
        await window.OrionCart.fetchCart();
      }

      // Dispatch custom event
      window.dispatchEvent(
        new CustomEvent("cart:added", {
          detail: {
            product: product.value,
            quantity: quantity.value,
            variant: currentVariant.value,
          },
        })
      );

      // Close modal after successful add
      setTimeout(() => {
        closeModal();
      }, 500);
    }
  } catch (error) {
  } finally {
    setTimeout(() => {
      isAddingToCart.value = false;
    }, 500);
  }
};

// Expose methods for external use
defineExpose({
  openModal,
  openModalWithHandle,
  closeModal,
});

// Watch for changes to currentVariant and update image
watch(currentVariant, (newVariant, oldVariant) => {
  if (newVariant && newVariant !== oldVariant) {
    // Update image when variant changes through option selection
    const variantImage =
      newVariant.featured_image?.src ||
      newVariant.featured_image ||
      newVariant.image?.src ||
      newVariant.image ||
      newVariant.featured_image_v2?.url;

    if (variantImage && variantImage !== currentImage.value) {
      isImageLoading.value = true;
      currentImage.value = variantImage;
    } else if (!variantImage) {
      const fallbackImage = product.value.featured_image || 
                           product.value.image || 
                           (product.value.images && product.value.images[0]) ||
                           null;
      if (fallbackImage !== currentImage.value) {
        isImageLoading.value = true;
      }
      currentImage.value = fallbackImage;
    }
  }
});

// Handle image load completion
const handleImageLoad = () => {
  isImageLoading.value = false;
};

// Handle window resize for desktop detection
const handleResize = () => {
  isDesktop.value = window.innerWidth >= 768;
};

// Add resize listener when component is mounted
window.addEventListener('resize', handleResize);

// Cleanup resize listener on unmount
onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

// Close on escape key
watch(isOpen, (newVal) => {
  if (newVal) {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }
});
</script>
