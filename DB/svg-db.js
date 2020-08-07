const svgData = {
    baseSvg:"version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 180 252' xml:space='preserve'",
    innerBorder: "<g class='INNER_BORDER'><path d='M0,0.42v251.67h179V0.42H0z M173,246.08H6.33v-240H173V246.08z'/></g>",
    outerBorder:"<g class='OUTER_BORDER'><path d='M0,0v252.25h179.5V0H0z M176.5,249.5H3.33V3.17H176.5V249.5z'/></g>",
    background:"<rect class='BACKGROUND' x='0.5' y='1.5' width='178' height='249'/>",
    bottomBar: "<rect class='BOTTOM_BAR' x='0' y='0' width='167.41' height='1.19'></rect>",
    bottomBack: "<rect class='BOTTOM_BACK' x='0' y='0' width='167.41' height='15'/>",
    setInfoBack: "<rect x='0' y='3.5' width='23.26' height='7'/>",
    topRect: "<rect class='TOP_RECT' x='1.67' y='0.42' width='177.33' height='22'/>",
    hpShapes: "<g class='HP_SHAPES'><polygon points='135,19 135,-2 166.5,-4.64 166.5,19'/><rect x='142.25' y='11.17' width='17.33' height='19'/><text transform='translate(146.5,26)' class='MINI_HP'>HP</text></g>",
    typeBars: {
        iconBlock: "",
        textBlock: ""
    },
    costOffside: "<polygon points='8.71,11.44 1.7,11.44 1.7,2.83 12.71,2.83'/>",
    costIcon: "<polygon points='12.07,9.46 1.06,9.46 5.06,0.85 16.07,0.85'/>",
    setIcons: {
        rg: "<circle cx='3.96' cy='3.92' r='0.97'/><g><path d='M5.7,4.67C5.41,5.34,4.75,5.81,3.96,5.81S2.51,5.34,2.23,4.67H1.39c0.32,1.12,1.35,1.93,2.58,1.93 c1.22,0,2.25-0.81,2.58-1.93C6.55,4.67,5.7,4.67,5.7,4.67z'/></g><path d='M2.52,3.93V3.92c0-0.8,0.65-1.45,1.45-1.45s1.45,0.65,1.45,1.45v0.01h1.23V3.92c0-1.47-1.2-2.68-2.68-2.68 S1.3,2.44,1.3,3.92v0.01C1.3,3.93,2.52,3.93,2.52,3.93z'/>",
        gs: "<g><path d='M3,6.3c0,0-0.3-0.6,0-1.1s0.7-0.9,0.5-1.3C3.3,3.4,3,3.2,3,3.2s0.1,0.5-0.3,1c0,0-0.2,0.2-0.2,0.6 c0,0-1-1.4,0.3-2.4c0,0,1.1,0.5,1.1,1.6c0,0,1.8-1.3,0.3-2.8c0,0-0.1,0.3-0.7,0.7C3.5,2,3.4,2.1,3.4,2.1S3,1.7,3.1,1.3 c0,0-1.8,0.6-1.9,2.3S3,6.3,3,6.3z'/><path d='M6.5,5c0,0-0.1-0.6-0.8-0.7c0,0,1.6-1.9-0.6-2.8c0,0,1,1.4-0.6,2.8l-0.1,0c0,0,0.1,0,0.1,0 c0.3,0,0.6,0.3,0.6,0.6c0,0.3-0.3,0.6-0.6,0.6C4.2,5.6,4,5.3,4,4.9C4,4.9,4,4.8,4,4.7C3.8,4.9,3.1,5.6,3.6,6.2 c0.6,0.7,1.7,0.5,2.3-0.1S6.5,5.3,6.5,5z'/></g>",
        rs: "<g><polygon points='1.9,5.3 2.7,4.8 2.7,3.2 1.9,2.8'/><polygon points='2.9,2.9 3.6,2.5 3.6,1.6 2.1,2.5'/><polygon points='3.6,5.6 2.9,5.2 2.1,5.6 3.6,6.5'/><polygon points='4.8,5.2 4,5.6 4,6.5 5.5,5.6'/><polygon points='3.1,3.2 3.1,4.9 3.8,5.3 4.6,4.9 4.6,3.2 3.8,2.8'/><polygon points='5.5,4.6 4.9,3.5 4.9,4.8 5.7,5.3 5.7,4.2'/><polygon points='4.9,2.1 4,1.6 4,2.5 4.1,2.5'/></g><g><polygon points='5.9,2.4 6.6,2.8 5.9,3.2 5.5,3.9 5.1,3.2 4.4,2.8 5.1,2.4 5.5,1.6'/></g>",
        dp: "<g><path d='M5.8,1.3H2.3L1.2,4.7L4,6.7l2.9-2.1L5.8,1.3z M4,5.3c-0.9,0-1.6-0.7-1.6-1.6S3.1,2.1,4,2.1s1.6,0.7,1.6,1.6S4.9,5.3,4,5.3z'/><path d='M4,2.6c-0.6,0-1.1,0.5-1.1,1.1c0,0.6,0.5,1.1,1.1,1.1c0.6,0,1.1-0.5,1.1-1.1C5.1,3.1,4.6,2.6,4,2.6z M4,4.4 c-0.3,0-0.6-0.2-0.6-0.5C3.5,3.9,3.6,4,3.7,4c0.4,0,0.7-0.3,0.7-0.7c0-0.1,0-0.1,0-0.2c0.2,0.1,0.3,0.3,0.3,0.5 C4.7,4.1,4.4,4.4,4,4.4z'/></g>",
        xy: "<g><polygon points='3.9,3.5 6,1.8 4.7,1.8 3.9,2.6 3.1,1.8 1.9,1.8 	'/><polygon points='3.5,3.8 1.4,2.1 1.4,3.8 2.5,4.7 	'/><polygon points='3.9,4.2 2.9,5.1 2.9,5.4 3.9,6.5 5,5.4 5,5.1'/><polygon points='4.4,3.8 5.4,4.7 6.4,3.8 6.4,2.1'/></g>",
        eg: "<path d='M6.7,3.1L5.1,2.8C5,2.6,4.8,2.5,4.6,2.4L3.9,0.9L3.1,2.4C2.9,2.5,2.8,2.6,2.6,2.8L1,3l1.1,1.1c0,0.2,0.1,0.5,0.2,0.7L2,6.3 l1.4-0.7c0.1,0,0.3,0.1,0.4,0.1c0.1,0,0.2,0,0.4,0l1.3,0.7L5.3,4.9c0.1-0.2,0.2-0.5,0.2-0.7L6.7,3.1z M4.5,5L3.8,4.7L3.2,5l0.1-0.7 L2.8,3.7l0.7-0.1L3.9,3l0.3,0.7l0.7,0.1L4.4,4.3L4.5,5z'/>"
    },
    typeIcons: {
        grass: "<path d='M6.08,1.51c0,0-3.15-0.15-4.21,1.35s0.15,2.85,0.15,2.85l0.53-0.55V3.24l0.51,1.4l0.67-0.71L3.6,2.49 l0.52,1.03l1.06-1.11L4.37,3.73L5.4,3.99L4.04,4.26l-0.49,0.8l1.4,0.28L3.21,5.61L2.78,6.32c0,0,2.25,0.6,3-0.9 S6.08,1.51,6.08,1.51z'/>",
        fire: "<path d='M4.41,5.77c1.61,0.1,1.78-1.49,1.78-1.49c0.05-1.04-0.44-1.6-0.89-1.89c-0.02-0.01-0.05,0-0.09,0.03 C5.3,2.54,5.36,2.69,5.36,2.85c0,0.37-0.3,0.67-0.67,0.67c-0.37,0-0.67-0.3-0.67-0.67c0-0.33,0.24-0.61,0.56-0.66 c0.01-0.05,0.02-0.08,0.02-0.08V1.88c0.07-0.76-0.72-1.23-0.72-1.23c0.18,1.1-0.34,1.08-1.1,1.93S2.3,4.39,2.3,4.39 C1.97,3.92,2.08,3,2.08,3C1.53,4.36,1.75,4.96,1.81,5.16c0.12,0.4,0.79,1.5,2.18,1.5c1.28,0,1.69-0.59,1.79-0.79 c-0.04,0.06-0.26,0.3-1.27,0.3c-0.78,0-1.11-0.43-1.24-0.73C3.18,5.31,3.14,5.15,3.14,4.99c0-0.48,0.39-0.88,0.88-0.88 c0.48,0,0.88,0.39,0.88,0.88C4.89,5.33,4.69,5.63,4.41,5.77z'/>",
        water: "<path d='M4,1.1c0,0-1.9,2.7-1.9,3.7c0,1,0.8,1.9,1.9,1.9s1.9-0.8,1.9-1.9C5.9,3.8,4,1.1,4,1.1z M4,6.1 c-0.7,0-1.3-0.6-1.3-1.3c0-0.3,0.1-0.5,0.2-0.7c0,0.1,0,0.1,0,0.2C3,5,3.6,5.5,4.2,5.5c0.4,0,0.8-0.2,1-0.5C5.2,5.6,4.7,6.1,4,6.1z'/>",
        electric: "<polygon points='2.67,1.68 4.79,1.68 5.69,4.67 4.37,4.67 5.14,7.01 1.63,3.35 3.2,3.35'/>",
        psychic: "<path d='M5.59,6.43C5.36,6.56,5.16,6.64,4.93,6.72C4.7,6.79,4.47,6.84,4.24,6.87C4.18,6.88,4.12,6.89,4.06,6.89 L3.97,6.89l-0.1,0c-0.07,0-0.14,0-0.2-0.02C3.6,6.86,3.53,6.86,3.47,6.84C3.21,6.78,2.98,6.67,2.76,6.55 C2.33,6.29,1.98,5.91,1.72,5.48C1.47,5.03,1.33,4.53,1.31,4.03C1.29,3.91,1.31,3.77,1.32,3.64c0.01-0.13,0.04-0.26,0.07-0.39 c0.08-0.26,0.18-0.52,0.34-0.73c0.31-0.45,0.75-0.76,1.2-0.96c0.23-0.1,0.47-0.18,0.72-0.23c0.12-0.03,0.25-0.05,0.39-0.06 c0.13-0.01,0.29-0.01,0.42,0.01c0.27,0.04,0.51,0.1,0.75,0.2c0.24,0.09,0.47,0.22,0.69,0.38c0.43,0.31,0.8,0.81,0.9,1.38 c0.03,0.14,0.03,0.28,0.04,0.42c-0.01,0.14-0.01,0.26-0.03,0.4C6.75,4.32,6.66,4.6,6.49,4.86C6.33,5.11,6.08,5.32,5.82,5.45 c-0.26,0.13-0.53,0.18-0.78,0.2C4.78,5.67,4.56,5.67,4.28,5.63C4.02,5.59,3.74,5.49,3.52,5.31C3.29,5.14,3.12,4.89,3.03,4.64 C2.93,4.38,2.9,4.13,2.91,3.87c0-0.28,0.14-0.61,0.37-0.81c0.23-0.2,0.49-0.28,0.74-0.33c0.07-0.01,0.12-0.02,0.21-0.02 c0.09,0,0.15,0.01,0.23,0.03c0.14,0.03,0.29,0.1,0.42,0.2C5.01,3.05,5.1,3.2,5.15,3.34C5.2,3.49,5.2,3.63,5.2,3.76 C5.2,3.89,5.19,4.03,5.12,4.19C5.08,4.26,5.04,4.34,4.96,4.41C4.93,4.44,4.88,4.47,4.84,4.5C4.8,4.52,4.75,4.54,4.71,4.55 C4.52,4.6,4.36,4.56,4.23,4.51C4.09,4.46,3.97,4.39,3.86,4.28c-0.1-0.1-0.1-0.26,0-0.37c0.1-0.1,0.26-0.1,0.36-0.01l0.01,0.01 c0.05,0.04,0.12,0.08,0.18,0.1c0.07,0.02,0.13,0.02,0.16,0.01c0.02-0.01,0.03-0.02,0.05-0.06c0.02-0.05,0.03-0.13,0.03-0.21 c0-0.17-0.05-0.3-0.13-0.36c-0.04-0.03-0.1-0.06-0.17-0.07C4.27,3.32,4.23,3.32,4.13,3.34C3.96,3.37,3.8,3.44,3.7,3.54 c-0.1,0.09-0.14,0.2-0.14,0.35c0,0.36,0.13,0.7,0.37,0.87C4.06,4.84,4.21,4.89,4.38,4.9c0.16,0.01,0.37-0.01,0.54-0.05 c0.18-0.04,0.33-0.11,0.45-0.2C5.48,4.56,5.55,4.46,5.6,4.34C5.65,4.22,5.69,4.08,5.7,3.91c0.01-0.08,0-0.17,0.01-0.25 c-0.01-0.07,0-0.15-0.02-0.22C5.66,3.29,5.6,3.16,5.53,3.03c-0.07-0.13-0.17-0.26-0.3-0.37C4.21,1.52,2.13,2.63,2.26,4 c0,0.37,0.08,0.73,0.23,1.05c0.16,0.32,0.4,0.62,0.7,0.83c0.15,0.11,0.31,0.2,0.47,0.25C3.7,6.15,3.75,6.16,3.79,6.17 c0.04,0.01,0.08,0.02,0.12,0.02L3.97,6.2l0.07,0c0.05,0,0.1,0,0.15,0c0.2,0,0.39-0.02,0.59-0.06c0.19-0.04,0.4-0.1,0.56-0.16 l0.02-0.01c0.13-0.05,0.28,0.01,0.34,0.14C5.74,6.23,5.69,6.36,5.59,6.43z'/>",
        fighting: "<g><rect x='2.38' y='1.84' width='0.82' height='3.46'/><polygon points='2.02,6.33 1.53,6.33 1.04,4.69 1.53,3.12 2.02,3.12'/><rect x='5.63' y='1.84' width='0.82' height='3.46'/><rect x='4.55' y='1.84' width='0.82' height='3.46'/><rect x='3.51' y='1.84' width='0.82' height='3.46'/><rect x='2.38' y='3.53' width='4.08' height='2.82'/></g>",
        rock: "<g><polygon points='2.2,5.53 4.88,3.89 5.74,1.56 3.29,1.56 1.07,3.77 1.26,5.37'/><polygon points='2.97,5.72 4.92,4.44 5.74,5.21 4.69,6.5'/><polygon points='5.97,4.82 5.47,4.01 6.28,1.67 6.94,3.7'/></g>",
        ground: "<g><polygon points='2.6,6.4 6.9,6.4 5.6,1.5 3.9,1.5'/><polygon points='3.1,2.5 2.1,2.5 1.2,6.4 2.1,6.4'/></g>",
        poison: "<path d='M6.7,3.5c0-1.3-1.2-2.3-2.8-2.3s-2.8,1-2.8,2.3c0,0.7,0.4,1.4,1,1.8C2.1,5.5,2,5.7,2,5.9 c0,0.4,0.3,0.7,0.7,0.7c0.3,0,0.5-0.2,0.6-0.5C3.4,6.4,3.7,6.6,4,6.6c0.3,0,0.5-0.2,0.6-0.4c0.1,0.2,0.4,0.4,0.6,0.4 c0.4,0,0.7-0.3,0.7-0.7c0-0.2-0.1-0.4-0.2-0.5C6.3,4.9,6.7,4.3,6.7,3.5z M4,4.7c-0.9,0-1.5-0.5-1.5-1.2S3.1,2.4,4,2.4 s1.5,0.5,1.5,1.2S4.8,4.7,4,4.7z'/>",
        bug: "<g><path d='M5.9,2.7C5.5,3.1,4.9,3.4,4.4,3.4c0,0.2-0.1,0.5-0.1,1.1c0,1.1,0.6,1.9,0.9,2.3c0.8-0.4,1.4-1.3,1.4-2.3 C6.6,3.8,6.3,3.2,5.9,2.7z'/><path d='M3.9,4.6c0-0.6-0.1-0.9-0.2-1.2c-0.5-0.1-1-0.3-1.4-0.7C1.8,3.2,1.6,3.8,1.6,4.5c0,1,0.6,1.9,1.5,2.3 C3.3,6.4,3.9,5.4,3.9,4.6z'/><path d='M4.7,2.1l0.6-0.6L5.1,1.3L4.3,2C4.3,2,4.2,2,4.1,2C4,2,3.9,2,3.9,2L3.1,1.3L2.9,1.5l0.6,0.6 C3.2,2.1,3,2.2,2.8,2.4c0.4,0.3,0.8,0.5,1.3,0.5c0.5,0,0.9-0.2,1.3-0.5C5.2,2.2,5,2.1,4.7,2.1z'/></g>",
        ice: "<g><polygon points='3.48,4.09 2.2,3.33 0.86,4.09 2.18,4.93'/><polygon points='3.79,3.83 3.84,3.8 3.84,2.25 2.39,1.38 2.39,3'/><polygon points='3.8,4.35 2.34,5.29 2.34,6.76 3.84,5.85 3.84,4.37'/><polygon points='4.56,4.04 5.84,4.81 7.17,4.05 5.86,3.2'/><polygon points='4.25,4.3 4.2,4.33 4.2,5.89 5.64,6.76 5.64,5.14'/><polygon points='4.24,3.79 5.7,2.84 5.7,1.38 4.2,2.28 4.2,3.76'/></g>",
        ghost: "<path d='M6,5.8L6,5.8C6.4,5.3,6.7,4.7,6.7,4c0-1.5-1.2-2.7-2.7-2.7S1.3,2.5,1.3,4c0,0.9,0.4,1.6,1,2.1l0,0 c0,0,0.9,1.1,4,0.4C6.4,6.5,5.9,6.3,6,5.8z M3,4.3C2.6,4.3,2.3,4,2.3,3.7c0-0.2,0.1-0.4,0.3-0.6c0,0,0,0,0,0.1 c0,0.4,0.3,0.6,0.6,0.6c0.1,0,0.2,0,0.3-0.1C3.6,4.1,3.3,4.3,3,4.3z M5,4.3c-0.3,0-0.6-0.3-0.6-0.6c0.1,0.1,0.2,0.1,0.3,0.1 c0.4,0,0.6-0.3,0.6-0.6c0,0,0,0,0-0.1c0.2,0.1,0.3,0.3,0.3,0.6C5.7,4,5.4,4.3,5,4.3z'/>",
        flying: "<path d='M5.44,4.61c0-0.03,0.01-0.04,0.01-0.07c1.11-0.36,1.26-1.18,1.26-1.18C6.26,3.69,5.56,3.78,4.97,3.8 c-0.43,0-0.77-0.04-0.87-0.06l0,0c0.47,0,0.88-0.06,1.22-0.17c0-0.02-0.02-0.04-0.03-0.06c1.66-0.61,1.74-2.22,1.74-2.22 S6.41,2.22,3.35,2.22c-1.16,0-2.11,0.94-2.11,2.11s0.94,2.11,2.11,2.11c0.69,0,1.3-0.33,1.69-0.84l-0.3-0.01 C4.87,5.56,4.98,5.53,5.1,5.49c0.02-0.03,0.04-0.06,0.05-0.09c0.82-0.31,1.23-0.89,1.23-0.89C6.01,4.69,5.58,4.76,5.21,4.77 C4.85,4.76,4.59,4.71,4.59,4.71C4.91,4.71,5.2,4.67,5.44,4.61z'/>",
        dragon: "<g transform='translate(0,-.5)'><path d='M3.1,5.5c0.1-0.4,0.4-1,0.4-1l-2,0.7c0.2,1,1.1,1.8,2.1,2C3.1,6.6,3,6,3.1,5.5z'/><path d='M4.2,1.8C4.2,1.8,4.1,1.8,4.2,1.8L4.2,1.8c-0.1,0,0.4-0.9,0.1-1.4c0,0-0.4,1.1-1.4,1.8l0,0 c-0.1,0-1.1,0.1-1.6,2.1l3-0.6V3.2h0.1V2.7c0.2,0.2,0.4,0.4,0.4,0.8C5.2,3.6,5.4,4,5.4,4.6c0,0.8-0.6,1.3-1.3,1.3 c-0.1,0-0.3,0-0.4-0.1C3.8,6.5,4.3,6.9,4.8,7C6,6.8,6.9,5.7,6.9,4.4C6.9,2.9,5.7,1.8,4.2,1.8z M2.2,3.4L3,2.5L3.1,3 C3,3,2.9,3.5,2.2,3.4z'/></g>",
        dark: "<path d='M4,1.3C2.5,1.3,1.3,2.5,1.3,4S2.5,6.7,4,6.7S6.7,5.5,6.7,4S5.5,1.3,4,1.3z M4,6.2c-0.3,0-0.5,0-0.7-0.1 C4.2,5.8,4.8,5,4.8,4S4.2,2.2,3.3,1.9C3.5,1.8,3.8,1.8,4,1.8c1.2,0,2.2,1,2.2,2.2S5.2,6.2,4,6.2z'/>",
        steel: "<path d='M5.6,1.5h-3L1,4.1l1.5,2.6h3l1.5-2.6L5.6,1.5z M4.1,5.4C3.3,5.4,2.7,4.8,2.7,4c0-0.8,0.6-1.4,1.4-1.4 c0.8,0,1.4,0.6,1.4,1.4C5.4,4.8,4.8,5.4,4.1,5.4z'/>",
        fairy: "<path d='M7.05,4.01L5.68,3.1l0.25-1.02L4.9,2.34L4.06,1.02L3.2,2.35L2.13,2.08L2.4,3.14L1.07,4.01l1.32,0.86L2.13,5.89 l1.05-0.25l0.88,1.36l0.89-1.37l0.99,0.26L5.69,4.89L7.05,4.01z M4.5,4.45L4.06,5.13L3.62,4.46L2.93,4.01l0.69-0.45l0.44-0.67 l0.42,0.66l0.71,0.47L4.5,4.45z'/>",
        normal: "<path d='M4.04,6.72c-1.47,0-2.67-1.2-2.67-2.67s1.2-2.67,2.67-2.67s2.67,1.2,2.67,2.67S5.51,6.72,4.04,6.72z M4.04,2.51c-0.85,0-1.53,0.69-1.53,1.53c0,0.85,0.69,1.53,1.53,1.53c0.85,0,1.53-0.69,1.53-1.53C5.57,3.2,4.88,2.51,4.04,2.51z'/>"
    },
    typeFontIconCodes: {
        pkmn: "&#xe90d",
        grass: "&#xe909",
        fire: "&#xe906",
        water: "&#xe912",
        electric: "&#xe903",
        psychic: "&#xe90f",
        fighting: "&#xe905",
        rock: "&#xe910",
        ground: "&#xe90a",
        poison: "&#xe90e",
        bug: "&#xe900",
        ice: "&#xe90a",
        flying: "&#xe907",
        dragon: "&#xe902",
        dark: "&#xe901",
        steel: "&#xe911",
        fairy: "&#xe904",
        normal: "&#xe90c"
    },
    specNameIcons: {
        mega: "<polygon class='MEGA' transform='translate(0,0)' points='10.9,1.1 10.9,1.1 10.9,1.1 8.8,4.9 8.6,4.9 6.3,1.1 6.3,1.1 6.3,1.1 6.3,1.1 6.2,1.1 3.1,1.1 3.1,1.1  0.5,1.1 3.1,5.4 3.1,5.4 3.1,14.6 6.3,14.6 6.3,9.3 6.4,9.3 8.3,12.6 9.1,12.6 10.8,9.6 10.9,9.6 10.9,14.6 14.1,14.6 14.1,1.1'/>",
        gmax: "<path class='GMAX' transform='translate(0,0)' d='M14.6,5.1l-0.4-0.5l-0.6,0.5v0l-1.8,1.4c0,0,0,0,0,0H7.6v2.7h3v1.6c-0.6,0.4-1.4,0.7-2.2,0.7 c-2.1,0-3.8-1.6-3.8-3.6c0-2,1.7-3.6,3.8-3.6c1,0,1.9,0.4,2.6,1l3.3-2.6l-0.6-0.5l-1.9,0.3c-1-0.6-2.2-0.9-3.5-0.9 c-3.7,0-6.8,2.9-6.8,6.4c0,3.5,3,6.4,6.8,6.4c2.1,0,4-0.9,5.3-2.4V7.8L14.6,5.1z'/>",
        hundredPercent: "<g class='ONE_HUNDRED_PERCENT'><polygon points='4,2 2.7,2 1.2,2 2.7,4.7 2.7,14.3 6.1,14.3 6.1,2'/><path d='M6.8,8.4v5.8h6.9V8.4H6.8z M11.1,12H9.3v-1.5h1.8V12z'/><path d='M6.8,2v5.8h6.9V2H6.8z M11.1,5.6H9.3V4.1h1.8V5.6z'/></g>"
    }
}

const TOP_CONTENT_OFFSET = "6,4";

const TOP_TYPE_SCALE = 2.25;
const TOP_TYPE_TWO_OFFSET = "15,0";

const NAME_SINGLE_TYPE_OFFSET = "20,13.5";
const NAME_DUAL_TYPE_OFFSET = "36,13.5";

const HP_OFFSET_DOUBLE_DIGIT = "142.5,14";
const HP_OFFSET_TRIPLE_DIGIT = "139.5,14";

const STAGE_OFFSET = "0,25.5";
const STAGE_MOD_OFFSET = 0;
const STAGE_SHAPE_WARP = {
    basic: 20,
    stage1: 26,
    stage2: 26,
    mega: 18,
    gmax: 20,
    baby: 18
};
const STAGE_MAIN_TEXT_OFFSET = "30,6.5";

const TYPE_BARS_OFFSET = "24.5,36";
const TYPE_BAR_ONE_OFFSET = "0,0";
const TYPE_BAR_ICON_POLYGON = "<polygon points='4.48,0.51 18.55,0.51 14.55,7.51 0.51,7.51'/>";
const TYPE_BAR_ICON_OFFSET = "5.5,0";
const TYPE_BAR_TEXT_OFFSET = "22,6";

const SPEC_DMG_BOOST_OFFSET = "130,34.75";
SPEC_DMG_BOOST_TEXT_OFFSET = "15,7.25";

const SKILL_COST_ICON_TYPE_OFFSET = "4.5,1.25";

const SKILL_DMG_TYPE_POLYGON = "<polygon points='22,11.4 0,11.4 4,2.8 22,2.8'/>";
const SKILL_DMG_TYPE_ICON_OFFSET = "5,3.25";
const SKILL_DMG_MOD_ICON_PLUS = "<polygon points='4.8,2.4 3.6,2.4 3.6,1.2 2.5,1.2 2.5,2.4 1.3,2.4 1.3,3.5 2.5,3.5 2.5,4.7 3.6,4.7 3.6,3.5 4.8,3.5' />";
const SKILL_DMG_MOD_ICON_MULT = "<polygon points='4.7,3.8 3.9,3 4.7,2.1 3.9,1.3 3,2.1 2.2,1.3 1.4,2.1 2.2,3 1.4,3.8 2.2,4.6 3,3.8 3.9,4.6' />";
const SKILL_DESC_TYPE_OFFSET = "9,26";

const TYPE_EFFECT_OFFSET = "15,-7";
const TYPE_WEAK_GROUP = "<g><rect class='fill-white' x='10' y='10' width='8' height='10'/><text transform='translate(11,17)'>W</text></g>";
const TYPE_RESIST_GROUP = "<g><rect class='fill-white' x='10' y='10' width='8' height='10'/><text transform='translate(12,17)'>R</text></g>";
const TYPE_ICON_LIST_OFFSET = "20,11";

const RETREAT_COST_OFFSET = "147,0";