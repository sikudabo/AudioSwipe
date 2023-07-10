import ReactApexChart from 'react-apexcharts';
// @mui
import { Card, CardHeader, Box } from '@mui/material';
// components
import { useChart } from '../../../utils/charts';

// ----------------------------------------------------------------------

type LikesAndDislikesChartProps = {
  title?: string;
  subheader?: string;
  chartData: Array<any>;
  chartLabels: Array<string>;
}

export default function LikesAndDislikesChart({ 
  title, 
  subheader, 
  chartLabels, 
  chartData, 
  ...other }: LikesAndDislikesChartProps) 
{
  const chartOptions = useChart({
    plotOptions: { bar: { columnWidth: '16%' } },
    fill: { type: chartData.map((i) => i.fill) },
    labels: chartLabels,
    xaxis: { type: 'datetime' },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y: number | undefined) => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(0)} visits`;
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
