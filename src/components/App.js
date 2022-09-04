import React from "react";
import { Article } from './Article'
import { Header } from './Header'

const App = () => {
    /**
     * Dark by default is false.
     */
    const [dark, setDark] = React.useState(false)

    const darkHandler = () => {
        setDark(prevState => !prevState)
    }

    const style = !dark ? "main white-main" : "main dark-main"

    return (
        <div className={style} >
            <Header />
            <Article darkHandler={darkHandler} dark={dark} />
        </div>
    )
}

export { App }