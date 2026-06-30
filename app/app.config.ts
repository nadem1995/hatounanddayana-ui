export default defineAppConfig({
  ui: {
    pageColumns: {
      base: 'columns-3 md:columns-4 lg:columns-6  lg:gap-8 gap-2'
    },
    navigationMenu: {
      slots: {
        link: 'text-brand-forest/90 text-[16px] transition-colors duration-200'
      },
      compoundVariants: [
        // Inactive: no hover background
        {
          disabled: false,
          active: false,
          variant: 'pill',
          class: {
            link: 'hover:text-brand-forest hover:before:!bg-transparent'
          }
        },
        // Active: full color + bottom border, no background
        {
          variant: 'pill',
          active: true,
          highlight: false,
          class: {
            link: 'text-brand-forest font-bold border-b border-brand-forest before:!bg-transparent hover:before:!bg-transparent'
          }
        }
      ]
    }

  }
});
