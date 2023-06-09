import { Grid } from "@nextui-org/react"
import { FC } from "react"
import { FavoriteCardPokemon } from "./FavoriteCardPokemon"
// declare props
interface Props {
    pokemons: number[]
}


export const FavoritePokemons: FC<Props> = ({ pokemons }) => {
    return (
        <Grid.Container gap={2} direction='row' justify="flex-start">
            {
                pokemons.map((id) => (
                    <FavoriteCardPokemon key={id} id={id} />
                ))
            }
        </Grid.Container>
    )
}
