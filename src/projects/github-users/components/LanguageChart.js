import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { useGlobalContext } from '../Context/context';
import classnames from 'classnames/bind';

import styles from './userInfo.module.scss';

const cx = classnames.bind(styles);
// Preparing the chart data

function Language() {
    const { githubRepo } = useGlobalContext();

    let languages = githubRepo.reduce((total, item) => {
        const { language, stargazers_count } = item;
        if (!language) return total;

        if (!total[language]) {
            total[language] = { label: language, value: 1, star: stargazers_count };
        } else {
            total[language] = { ...total[language], value: total[language].value + 1, star: total[language].star + 1 };
        }

        return total;
    }, {});

    const mostLanguage = Object.values(languages);
    const mostStar = Object.values(languages).map((item) => {
        return { ...item, value: item.star };
    });

    //stars
    const stars = githubRepo.reduce(
        (total, item) => {
            const { stargazers_count, name, forks } = item;
            total.stars[stargazers_count] = { label: name, value: stargazers_count };
            total.forks[forks] = { label: name, value: forks };
            return total;
        },
        { stars: {}, forks: {} },
    );

    // Create a JSON object to store the chart configurations
    const chartConfigs = {
        type: 'pie2d', // The chart type
        width: '100%', // Width of the chart
        height: '350', // Height of the chart
        dataFormat: 'json', // Data type
        dataSource: {
            // Chart Configuration
            chart: {
                caption: 'Languages', //Set the chart caption
                theme: 'fusion', //Set the theme for your chart
                showlegend: '0',
                decimals: 0,
            },
            // Chart Data - from step 2
            data: mostLanguage,
        },
    };

    const chartDonutConfigs = {
        type: 'doughnut2d',
        width: '100%',
        height: '350',
        dataFormat: 'json',
        dataSource: {
            chart: {
                caption: 'Stars Per Language',
                theme: 'fusion',
                showlegend: '0',
                decimals: 0,
                showPercentValues: 0,
            },
            data: mostStar,
        },
    };

    const chartPopularConfigs = {
        type: 'column2d',
        width: '100%',
        height: '350',
        dataFormat: 'json',
        dataSource: {
            chart: {
                caption: 'Most Popular',
                theme: 'fusion',
                showlegend: '0',
                decimals: 0,
                showPercentValues: 0,
                xAxisName: 'Repos',
                yAxisName: 'Stars',
                xAxisNameFontSize: '16px',
                yAxisNameFontSize: '16px',
            },
            data: Object.values(stars.stars).slice(-5).reverse(),
        },
    };

    const chartForkConfigs = {
        type: 'bar2d',
        width: '100%',
        height: '350',
        dataFormat: 'json',
        dataSource: {
            chart: {
                caption: 'Most Forked',
                theme: 'fusion',
                showlegend: '0',
                decimals: 0,
                showPercentValues: 0,
                xAxisName: 'Forks',
                yAxisName: 'Repos',
                xAxisNameFontSize: '16px',
                yAxisNameFontSize: '16px',
            },
            data: Object.values(stars.forks).slice(-5).reverse(),
        },
    };

    ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

    return (
        <div className={cx('section')}>
            <div className={cx('section-center', 'section-info')}>
                <ReactFC {...chartConfigs}></ReactFC>
                <ReactFC {...chartPopularConfigs}></ReactFC>
            </div>
            <div className={cx('section-center', 'section-info')}>
                <ReactFC {...chartDonutConfigs}></ReactFC>
                <ReactFC {...chartForkConfigs}></ReactFC>
            </div>
        </div>
    );
}

export default Language;
