/**
 * Created by lucas on 3/1/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';

const getTemperature = weather => weather.main.temp;

class WeatherList extends Component {

    renderWeather(cityData) {

        const name = cityData.city.name;
        const temps = cityData.list.map(getTemperature);
        console.log(temps)

        return (
            <tr key={name}>
                <td>{name}</td>
                <td>
                    <Chart data={temps} color="orange" />
                </td>
            </tr>
        );
    }

    render() {

        return (

            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperatura</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );

    }
};

function mapStateToProps({weather}) {
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);