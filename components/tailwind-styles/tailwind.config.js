// tailwind config de intercath
module.exports = {
  mode: 'all',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      inset: {
        76: '0.76rem',
      },
      top: {
        76: '0.76rem',
      },
      colors: {
        primary: '#5D75F9',
        secondary: '#1D2A48',
        third: '#9EC6FA',
        'dark-blue': '#111827',
        'light-blue': '#9EBCF6',
      },
      fontSize: {
        'extra-small': '0.5rem',
      },
      zIndex: {
        negative: -1,
      },
      minWidth: {
        64: '64px',
      },
      maxWidth: {
        32: '32px',
        36: '36px',
        64: '64px',
        94: '94px',
        136: '136px',
      },
      minHeight: {
        64: '64px',
        94: '94px',
        136: '136px',
      },
      maxHeight: {
        24: '24px',
        32: '32px',
        64: '64px',
        94: '94px',
        136: '136px',
      },
      backgroundColor: {
        primary: '#5D75F9',
        secondary: '#1D2A48',
        third: '#9EC6FA',
        'dark-blue': '#111827',
        tag_status_1: '#EFF6FF',
        tag_status_2: '#CFFAFE',
        tag_status_3: '#D1FAE5',
        tag_status_4: '#FEF3C7',
        tag_status_5: '#FEE2E2',
        tag_status_6: '#EDE9FE',
        tag_status_7: '#FCE7F3',
        tag_status_8: '#E0E7FF',
        tag_status_9: '#DBEAFE',
        tag_status_10: '#F3F4F6',
        blue_purple: '#9EBCF6',
      },
      textColor: {
        tag_status_1: '#3B82F6',
        tag_status_2: '#155E75',
        tag_status_3: '#065F46',
        tag_status_4: '#B45309',
        tag_status_5: '#991B1B',
        tag_status_6: '#5B21B6',
        tag_status_7: '#9D174D',
        tag_status_8: '#3730A3',
        tag_status_9: '#1E40AF',
        tag_status_10: '#1F2937',
      },
      fontFamily: {
        body: ['Montserrat'],
      },
    },
  },
  variants: {
    extend: {},
  }
};