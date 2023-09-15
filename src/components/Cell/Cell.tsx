interface CellProps {
  number: number
  letter?: string
  status?: string
}

export function Cell({ number, letter, status }: CellProps) {
  const className = status ? `cell ${status}` : 'cell'

  return (
    <span key={number} className={className}>
      {letter}
    </span>
  )
}
