import { TypePhase, useTypedSuperpower } from './useTypedSuperpower'
import cn from 'classnames'

type Props = {
  superpowers: string[]
}

export const Superpowers = ({ superpowers }: Props) => {
  const { typedSuperpower, selectedSuperpower, phase, resume } =
    useTypedSuperpower(superpowers)

  return (
    <h2
      className="flex flex-col lg:block text-center pt-12 text-5xl tracking-tight text-gray-900 md:text-6xl"
      onClick={resume}
    >
      <span className="mb-2 lg:mb-0 text-[#fff]">We read everything you like</span>{' '}
      <span
        className={cn('text-[#FF7143] pt-4 pb-12 min-h-[10rem]', {
          ['end-cursor']: phase !== TypePhase.Deleting,
          ['blinking']: phase === TypePhase.Pausing,
        })}
        aria-label={selectedSuperpower}
      >
        {typedSuperpower}
      </span>{' '}
      <span className="mb-2 lg:mb-0 text-[#fff]">books</span>
    </h2>
  )
}