import React, {Fragment} from 'react';
import style from './Button.module.scss'

interface Props {
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
    children?: React.ReactNode
}

const Button = ({ onClick, type, children }: Props) => {
    return (
        <Fragment>
            <button
                onClick={onClick} 
                type={type} 
                className={style.buttonSubmit}
            >
                {children}
            </button>
        </Fragment>
    )
}

// class Button extends React.Component<{
//     children: string,
//     type?: "button" | "submit" | "reset" | undefined,
//     onClick?: () => void
// }> {
//     render() {
//         const {type = "button", onClick} = this.props
//         return (
//             <Fragment>
//                 <button onClick={onClick} type={this.props.type} className={style.buttonSubmit}>
//                     {this.props.children}
//                 </button>
//             </Fragment>
//         )
//     }
// }

export default Button;