import {Cocktail} from "../models/cocktail.model";


const rootEndpoint = 'https://www.thecocktaildb.com/api/json/v1/1';

export interface Drink {
    idDrink: number;
    strDrink: string;
    strDrinkThumb: string;
    strInstructions: string;
}

class CocktailDbApi {
    searchCocktailsByName(name: string): Promise<Array<Cocktail>> {
        return this.fetchFromApi(`${rootEndpoint}/search.php?s=${name.trim()}`).then((drinks) =>
            this.createCocktails(drinks)
        );
    }

    private fetchFromApi(query: string): Promise<Array<Drink>> {
        return (
            fetch(query)
                // FIXME: JSON parse error when ingredient is not found
                .then((response) => response.json())
                .then((jsonResponse) => jsonResponse.drinks || [])
                .catch((error) => {
                    console.error(error);
                })
        );
    }

    private createCocktails(drinks: Array<Drink>): Array<Cocktail> {
        // Create cocktails
        return drinks.map((drink) => this.createCocktail(drink));
    }

    private createCocktail = (drink: Drink): Cocktail => {
        return new Cocktail(
            drink.idDrink,
            drink.strDrink,
            /*drink.img,*/
            drink.strInstructions,
            drink.strDrinkThumb
        );
    }

}

export default new CocktailDbApi();
