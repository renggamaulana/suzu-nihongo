import { useRouter } from 'next/router';

export default function Jlpt() {

    const router = useRouter();
    const { id } = router.query;

    return(
        <div>
            <h1>Dynamic Page for ID: {id}</h1>
        </div>
    )
}