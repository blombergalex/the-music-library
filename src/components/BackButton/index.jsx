import Button from '../Button'

const BackButton = ({choice, updatePage}) => {

const handleClick = () => {
    {choice === 'library' ? updatePage(null) : ''}
}

return(
    < Button onClick={handleClick} buttonName={'Back to library'} />
    )
}

export default BackButton