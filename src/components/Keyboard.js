// Components
import KbdBox from './KbdBox'

function Keyboard({ addChar }) {

    const kbdRows = [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        ['z', 'x', 'c', 'v', 'b', 'n', 'm']
    ]

    return (
        <div className='absolute bottom-0 w-full'>
            <div className='flex flex-col justify-center items-center mb-6'>
                { kbdRows.map( (row, crow) => <div key={ crow } className='flex'>{ row.map( (col, ccol) => <KbdBox key={ 'K' + crow + ccol } addChar={ addChar } inchar={ col } /> ) }</div> ) }
            </div>
        </div>
    )
}

export default Keyboard