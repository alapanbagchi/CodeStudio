import { PropsWithChildren } from 'react';
import styles from './Button.module.css'

interface ButtonProps {
    type: 'primary' | 'secondary';
    disabled?: boolean;
    handleClick?: () => void;
}

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

const Button = (props: PropsWithChildren<ButtonProps>) => {
    return (
        <button
            disabled={props.disabled} 
            onClick={props.handleClick} 
            className={`${styles.btn} ${styles[props.type]}`}
        >
            {props.children}
        </button>
    );
};

export default Button;