import styles from './Dropdown.module.css';
import { useState } from 'react';

interface DropdownProps {
    options: { id: string | number; name: string }[];
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    label: string;
    name: string;
}


const Dropdown = (props: DropdownProps) => {
    const { options, value, onChange, label, name, ...rest } = props;
    const [selectedValue, setSelectedValue] = useState(value);

    const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(e.target.value);
        onChange(e);
    };

    return (
        <div className={styles.container}>
            {label && <label htmlFor={name}>{label}</label>}
            <select
                className={styles.select}
                id={name}
                name={name}
                value={selectedValue}
                onChange={handleOnChange}
                {...rest}
            >
                <option value="">Select</option>
                {options.map((option) => (
                    <option key={option.id} value={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;