import React from 'react';
import { Select, MenuItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const CollectionOverview = () => {

    // State for selecting month
    const [month, setMonth] = React.useState('1');

    const handleChange = (event: any) => {
        setMonth(event.target.value);
    };

    // Chart color
    const theme = useTheme();
    const plasticColor = '#D3D3D3'; // Classic light grey for plastic (Bottles Collected)
    const treeColor = '#5f6344'; // Custom color for Trees Planted

    // Chart options
    const options: any = {
        chart: {
            type: 'bar',
            fontFamily: "'Plus Jakarta Sans', sans-serif;",
            foreColor: '#adb0bb',
            toolbar: {
                show: false,
            },
            height: 300,
        },
        colors: [plasticColor, treeColor],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: ['40%', '60%'], // First item is for "Bottles Collected" (smaller), second for "Trees Planted" (larger)
                borderRadius: 4,
            },
        },
        stroke: {
            show: true,
            width: 4,
            colors: ["transparent"],
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: true,
            position: 'top',
        },
        grid: {
            borderColor: 'rgba(0,0,0,0.1)',
            strokeDashArray: 3,
        },
        yaxis: {
            title: {
                text: 'Count',
            },
        },
        xaxis: {
            categories: ['16/08', '17/08', '18/08', '19/08', '20/08', '21/08', '22/08', '23/08'],
            title: {
                text: 'Date',
            },
        },
        tooltip: {
            theme: 'dark',
            fillSeriesColor: false,
        },
    };

    // Chart data
    const series = [
        {
            name: 'Bottles Collected',
            data: [100, 150, 120, 200, 180, 220, 160, 190],
        },
        {
            name: 'Trees Planted',
            data: [20, 30, 35, 23, 24, 33, 21, 27],
        },
    ];

    return (
       
            <Chart
                options={options}
                series={series}
                type="bar"
                height={370}
                width="100%"
            />
      
    );
};

export default CollectionOverview;
