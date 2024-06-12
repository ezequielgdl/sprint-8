import { Component } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces';

@Component({
  selector: 'app-graphs',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './graphs.component.html',
  styleUrl: './graphs.component.css',
})
export class GraphsComponent {
  productData: Product[] = [];
  productLabels: string[] = [];
  productStock: number[] = [];
  colors: string[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.productData = products;
        this.productLabels = this.productData.map(
          (product) => product.description
        );
        this.productStock = this.productData.map(
          (product) => product.stockQuantity
        );
        this.colors = this.generateColors(this.productLabels.length);
        this.pieChartData.labels = this.productLabels;
        this.pieChartData.datasets[0].data = this.productStock;
        this.pieChartData.datasets[0].backgroundColor = this.colors;
        this.pieChartData.datasets[0].borderColor = this.colors;
      },
    });
  }

  generateColors(count: number): string[] {
    const dynamicColors: string[] = [];
    for (let i = 0; i < count; i++) {
      dynamicColors.push(this.getRandomColor());
    }
    return dynamicColors;
  }

  getRandomColor(): string {
    const alpha = '33';
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color + alpha;
  }

  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  public barChartData: ChartData<'bar'> = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40, 23, 34, 45, 66, 89],
        label: 'Work',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        data: [28, 48, 40, 19, 86, 27, 90, 20, 34, 45, 56, 88],
        label: 'Hobby',
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
    ],
  };

  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          font: {
            size: 14,
            weight: 'bold',
          },
          color: 'rgba(0, 0, 0, 0.87)',
          padding: 20,
        },
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (context) {
            const label = context.label || '';
            const value = context.raw || 0;
            return `${label}: ${value}`;
          },
        },
      },
    },
  };

  public pieChartData: ChartData<'pie'> = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [],
        borderColor: [],

        borderWidth: 1,
      },
    ],
  };
}
