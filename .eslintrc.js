module.exports = {
  root: true,
  extends: [
    'next/core-web-vitals',
    // You can add more extends here if needed
  ],
  rules: {
    // Disable all rules
    'react-hooks/exhaustive-deps': 'off',
    '@next/next/no-html-link-for-pages': 'off',
    // Add more rules to disable as needed
  },
};
