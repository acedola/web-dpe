import Informes from '@/components/Informes';

export default function InformesPage({ params }: { params: { id_s: string } }) {
  return <Informes id_s={parseInt(params.id_s, 10)} />;
}
