type StartarSVGProps = {
  color?: string
  className?: string
}

/**
 * Renders a star SVG element.
 * @param {StartarSVGProps} [color='#ee4d2d'] - The color of the star. Default value is '#ee4d2d'.
 * @param {string} [className='h-4 w-4'] - The CSS class name for the SVG element. Default value is 'h-4 w-4'.
 * @returns {JSX.Element} The rendered SVG element.
 */
export default function StarSVG({ color = '#ee4d2d', className = 'h-4 w-4' }: StartarSVGProps): JSX.Element {
  return (
    <svg enableBackground='new 0 0 15 15' viewBox='0 0 15 15' x={0} y={0} className={className}>
      <polygon
        points='7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        fill={color}
      />
    </svg>
  )
}
