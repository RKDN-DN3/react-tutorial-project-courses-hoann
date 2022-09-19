import React, { useEffect, useState } from 'react';
import Loading from 'react-loading';
import classnames from 'classnames/bind';
import { useParams, Link } from 'react-router-dom';

import style from '../cocktails.module.scss';

const cx = classnames.bind(style);

function CocktailDetail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [cocktail, setCocktail] = useState(null);

    useEffect(() => {
        setLoading(true);
        async function getCocktail() {
            try {
                const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
                const data = await response.json();
                if (data.drinks) {
                    const {
                        strDrink: name,
                        strDrinkThumb: image,
                        strAlcoholic: info,
                        strCategory: category,
                        strGlass: glass,
                        strInstructions: instructions,
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                    } = data.drinks[0];
                    const ingredients = [
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                    ];
                    const newCocktail = {
                        name,
                        image,
                        info,
                        category,
                        glass,
                        instructions,
                        ingredients,
                    };
                    setCocktail(newCocktail);
                } else {
                    setCocktail(null);
                }
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        }
        getCocktail();
    }, [id]);

    if (loading) {
        return (
            <section className={cx('section')} style={{ display: 'flex', justifyContent: 'center' }}>
                <Loading type="bars" color="#2680c0" />;
            </section>
        );
    }
    if (!cocktail) {
        return <h2 className={cx('section-title')}>no cocktail to display</h2>;
    } else {
        const { name, image, category, info, glass, instructions, ingredients } = cocktail;
        return (
            <section className={cx('section', 'cocktail-section')}>
                <Link to="/cocktails" className={cx('btn', 'btn-primary')}>
                    back home
                </Link>
                <h2 className={cx('section-title')}>{name}</h2>
                <div className={cx('drink')}>
                    <img src={image} alt={name}></img>
                    <div className={cx('drink-info')}>
                        <p>
                            <span className={cx('drink-data')}>name :</span> {name}
                        </p>
                        <p>
                            <span className={cx('drink-data')}>category :</span> {category}
                        </p>
                        <p>
                            <span className={cx('drink-data')}>info :</span> {info}
                        </p>
                        <p>
                            <span className={cx('drink-data')}>glass :</span> {glass}
                        </p>
                        <p>
                            <span className={cx('drink-data')}>instructons :</span> {instructions}
                        </p>
                        <p>
                            <span className={cx('drink-data')}>ingredients :</span>
                            {ingredients.map((item, index) => {
                                return item ? <span key={index}> {item}</span> : null;
                            })}
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}

export default CocktailDetail;
