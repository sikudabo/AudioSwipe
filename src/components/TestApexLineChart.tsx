import PropTypes from 'prop-types';
import ReactApexChart from 'react-apexcharts';
import styled from '@emotion/styled';
// @mui
import { Card, CardHeader, Box } from '@mui/material';
// components
import useChart from './useChart';
import { colors } from './colors';

// ----------------------------------------------------------------------

type AppWebsiteVisitsProps = {
    title?: string;
    subheader?: string,
    chartData: Array<any>;
    chartLabels: Array<string>;
}

export default function AppWebsiteVisits({ 
    title, 
    subheader, 
    chartLabels, 
    chartData, 
    ...other 
}: AppWebsiteVisitsProps) {
  const chartOptions = useChart({
    plotOptions: { bar: { columnWidth: '16%' } },
    fill: { type: chartData.map((i) => i.fill) },
    labels: chartLabels,
    xaxis: { type: 'datetime' },
    tooltip: {
      shared: true,
      fillSeriesColor: colors.black,
      intersect: false,
      y: {
        formatter: (y: number) => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(0)}`;
          }
          return y;
        },
      },
    },
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="line" series={chartData} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
