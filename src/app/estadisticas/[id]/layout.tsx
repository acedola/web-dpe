'use client'
import Subme from '@/components/Subme'

export default function EstadisticasLayout({ children, params }: { children: React.ReactNode, params: { id: number } }){
    return(<>
        <Subme option={params.id} />    
        {children}
        </>) 
}