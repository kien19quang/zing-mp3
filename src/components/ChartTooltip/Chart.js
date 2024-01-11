import classNames from "classnames/bind";
import styles from './Chart.module.scss'
import React from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Media from '../Media/Media';


const cx = classNames.bind(styles)
function Chart({ width, height }) {
    const data = [
        {
            name: '21:00',
            uv: 4000,
            pv: 2400,
            pc: 8500
        }, {
            name: '23:00',
            uv: 2500,
            pv: 1398,
            pc: 5200
        }, {
            name: '01:00',
            uv: 2000,
            pv: 3800,
            pc: 5800
        }, {
            name: '03:00',
            uv: 2780,
            pv: 3908,
            pc: 5800
        }, {
            name: '05:00',
            uv: 1890,
            pv: 3200,
            pc: 4500
        }, {
            name: '07:00',
            uv: 2390,
            pv: 3800,
            pc: 8900
        }, {
            name: '09:00',
            uv: 3490,
            pv: 4300,
            pc: 3500
        }, {
            name: '11:00',
            uv: 5490,
            pv: 6300,
            pc: 3200
        }, {
            name: '13:00',
            uv: 4490,
            pv: 5000,
            pc: 4000
        }, {
            name: '15:00',
            uv: 3590,
            pv: 4300,
            pc: 5800
        }, {
            name: '17:00',
            uv: 4490,
            pv: 4300,
            pc: 3600
        },
        {
            name: '19:00',
            uv: 4590,
            pv: 4300,
            pc: 3000
        },
    ];

    return (
        <LineChart
            width={width}
            height={height}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="1 7" vertical={false} />
            <XAxis
                axisLine={false}
                tickSize={false}
                tickMargin={10}
                dataKey="name"
            />
            <Tooltip content={<Media chartMedia classNames={cx('media-tooltip')} />} />
            <Line type="monotone" dataKey="pv" stroke="rgb(39, 189, 156)" strokeWidth={2} activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="rgb(227, 80, 80)" strokeWidth={2} />
            <Line type="monotone" dataKey="pc" stroke="rgb(74, 144, 226)" strokeWidth={2} />
        </LineChart>
    );
}

export default Chart;

