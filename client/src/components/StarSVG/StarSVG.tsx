type StartarSVGProps = {
  color?: string
  size?: number
}

/**
 * Renders a star SVG icon with the specified color and size.
 * @param {string} color - The color of the star, default is '#ee4d2d'.
 * @param {number} size - The size of the star. If size is less than 10, the width will be 'size' and height will be 'size' with an aspect ratio of 1:1. Otherwise, the width will be 4 and height will be 4.
 * @return {JSX.Element} The SVG element representing the star.
 */

export default function StarSVG({ color = '#ee4d2d', size }: StartarSVGProps) {
  return (
    <svg
      enableBackground='new 0 0 15 15'
      viewBox='0 0 15 15'
      x={0}
      y={0}
      className={size && size < 10 ? `w-${size} h-${size}` : 'h-4 w-4'}
    >
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
