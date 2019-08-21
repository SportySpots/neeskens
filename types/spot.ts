import { UUID } from './utils'
import { Game } from './game'
import { Sport } from './sport'

export interface Address {
    uuid: UUID
    lat: number
    lng: number
    formatted_address: string
}

export interface Image {
    image: string
}

export interface Spot {
    id: string
    uuid: UUID
    name: string
    images: Image[]
    games: Game[]
    amenities: any[]
    sports: Sport[]
    address: Address
}
