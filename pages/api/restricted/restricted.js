import { unstable_getServerSession } from 'next-auth/next'
import { authOptions } from './auth/[...nextauth]'

export default async (req, res) => {
    const session = await unstable_getServerSession(req, res, authOptions)

    if (session) {
        res.send({
            content:
                'Este é um conteúdo protegido. Você pode acessar este conteúdo porque está conectado.'
        })
    } else {
        res.send({
            error: 'Você deve estar conectado para visualizar o conteúdo protegido nesta página.'
        })
    }
}
