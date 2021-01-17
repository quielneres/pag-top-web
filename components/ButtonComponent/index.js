import styles from './button.module.css'
import Link from 'next/link'
import {Button} from '@material-ui/core';

export default function ButtonComponet() {
    return (
        <>
            <Link
                href={'/'}
                className={{color: 'red'}}>
                <Button className={styles.btn}
                        component="a">
                    Sing up
                </Button>
            </Link>
        </>
    );
}
