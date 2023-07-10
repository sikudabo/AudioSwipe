import ReactApexChart from 'react-apexcharts';
// @mui
import { Card, CardHeader, Box } from '@mui/material';
// components
import { useChart } from '../../../utils/charts';
import { colors } from '../../../components';

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
      fillSeriesColor: true,
      y: {
        formatter: (y: number | undefined) => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(0)}`;
          }
          return y;
        },
      },
    },
  });

  return (
    <Card style={{ borderRadius: 5 }} elevation={5}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 1, paddingLeft: 20 }}>
        <p style={{ fontSize: 28, fontWeight: 900, marginBottom: 1, }}>
          {title}
        </p>
        <p>
          {subheader}
        </p>
      </div>
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="line" series={chartData} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
