type ChevronRightProps = {
  className?: string
  color?: string
}

/**
 * Renders a ChevronLeft component.
 * @param {string} color - The color of the chevron. Default: #b2b7c0
 * @param {string} className - The CSS class of the chevron. Default: h-4 w-4
 * @returns {JSX.Element} The rendered ChevronLeft component.
 */
export default function ChevronLeft({ color = '#b2b7c0', className = 'h-4 w-4' }: ChevronRightProps): JSX.Element {
  return (
    <div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className={className}
        color={color}
      >
        <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5' />
      </svg>
    </div>
  )
}
