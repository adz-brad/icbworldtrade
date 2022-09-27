import './src/styles/global.css'

export const wrapPageElement = ({ element }) => {
    return (
        <>
            <Navbar/>
            {element}
        </>
    )
}