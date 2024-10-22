import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  standalone: true,
  selector: 'app-another',
  templateUrl: './app-another.component.html',
  styleUrls: ['./app-another.component.css'],
  imports: [
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatIconModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatSnackBarModule
  ],
})
export class AppAnotherComponent {
  // Combine date range and name into one FormGroup
  readonly form = new FormGroup({
    range: new FormGroup({
      start: new FormControl<Date | null>(null),
      end: new FormControl<Date | null>(null),
    }),
    name: new FormControl<string | null>(null),
  });

  // Store the submitted data
  savedData: any = null;
  dateDifference: number | null = null; // Variable to store date difference

  constructor(private snackBar: MatSnackBar) {}

  // Method to handle form submission and perform calculation
  onSubmit() {
    const start = this.form.controls.range.get('start')?.value;
    const end = this.form.controls.range.get('end')?.value;

    if (start && end) {
      this.savedData = {
        dateRange: { start, end },
        name: this.form.controls.name.value
      };

      // Calculate difference in days
      this.dateDifference = this.calculateDateDifference(start, end);
    } else {
      this.snackBar.open('Please select both start and end dates.', 'Close', { duration: 3000 });
      return;
    }

    // Log data to console
    console.log('Saved Data:', this.savedData);
    console.log('Date Difference (in days):', this.dateDifference);

    // Show success message with snackbar
    this.snackBar.open('Data saved and calculation done!', 'Close', {
      duration: 3000,
    });
  }

  // Method to calculate the difference between two dates
  calculateDateDifference(startDate: Date, endDate: Date): number {
    const start = new Date(startDate).getTime();
    const end = new Date(endDate).getTime();
    const differenceInMilliseconds = end - start;
    return Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24)); 
  }
}
