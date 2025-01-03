import { useParams } from 'react-router-dom';
import { DetailsPage } from '../../components/Pages/DetailsPage';

export function OreDetails() {
    const { id } = useParams();

    return <DetailsPage id={id} subject="ores" singularSubject="Ore" />;
}
