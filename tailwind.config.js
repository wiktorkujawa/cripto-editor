/* eslint-env node */
// prettier-ignore
module.exports = {
  content: [
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    "src/components/**/*.vue",
    "src/pages/**/*.vue",
    "src/**/**/*.vue",
  ],
  theme: {
    extend: {
      fontSize: {
        hero: [`${48 / 16}rem`, {
          lineHeight: '1.5'
        }],
        h1: [`${40 / 16}rem`, {
          lineHeight: '1.5'
        }],
        h2: [`${36 / 16}rem`, {
          lineHeight: '1.5'
        }],
        h3: [`${34 / 16}rem`, {
          lineHeight: '1.5'
        }],
        h4: [`${32 / 16}rem`, {
          lineHeight: '1.5'
        }],
        h5: [`${28 / 16}rem`, {
          lineHeight: '1.5'
        }],
        h6: [`${26 / 16}rem`, {
          lineHeight: '1.5'
        }],
        h7: [`${24 / 16}rem`, {
          lineHeight: '1.5'
        }],
        h8: [`${20 / 16}rem`, {
          lineHeight: '1.5'
        }],
        h9: [`${18 / 16}rem`, {
          lineHeight: '1.5'
        }],
        h10: [`${14 / 16}rem`, {
          lineHeight: '1.5'
        }],
        h11: [`${12 / 16}rem`, {
          lineHeight: '1.5'
        }],
        p1: [`${24 / 16}rem`, {
          lineHeight: '1.75'
        }],
        p2: [`${16 / 16}rem`, {
          lineHeight: '2'
        }],
        p3: [`${14 / 16}rem`, {
          lineHeight: '2'
        }],
        p4: [`${12 / 16}rem`, {
          lineHeight: '2'
        }],
        eyebrow1: [`${14 / 16}rem`, {
          letterSpacing: '0.3em',
          lineHeight: '1.5'
        }],
        eyebrow2: [`${12 / 16}rem`, {
          letterSpacing: '0.3em',
          lineHeight: '1.5'
        }],
        eyebrow3: [`${9 / 16}rem`, {
          letterSpacing: '0.3em',
          lineHeight: '1.5'
        }],
        d1: [`${72 / 16}rem`, {
          lineHeight: '1.15'
        }],
        d2: [`${56 / 16}rem`, {
          lineHeight: '1.15'
        }],
        d3: [`${48 / 16}rem`, {
          lineHeight: '1.15'
        }],
        d4: [`${38 / 16}rem`, {
          lineHeight: '1.15'
        }],
        d5: [`${34 / 16}rem`, {
          lineHeight: '1.15'
        }],
        d6: [`${30 / 16}rem`, {
          lineHeight: '1.15'
        }]
      },
    },
  },
  plugins: [],
};
