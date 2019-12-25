import { NgModule } from  '@angular/core';
import { 
	MatNativeDateModule,
	MatIconModule,
	MatButtonModule,
	MatCheckboxModule, 
	MatToolbarModule, 
	MatCardModule,
	MatFormFieldModule,
	MatInputModule,
	MatRadioModule,
	MatListModule,
	MatExpansionModule,
	MatDialogModule,
	MatBadgeModule,
	MatSelectModule,
	MatProgressSpinnerModule
} from  '@angular/material';
import { MatDatepickerModule } from  '@angular/material/datepicker';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
@NgModule({
	imports: [
		MatNativeDateModule,
		MatDatepickerModule,
		MatIconModule,
		MatButtonModule,
		MatCheckboxModule, 
		MatToolbarModule,
		FormsModule, 
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		MatListModule,
		MatRadioModule,
		MatGridListModule,
		MatExpansionModule,
		MatDialogModule,
		MatBadgeModule,
		MatSelectModule,
		MatProgressSpinnerModule
	],
	exports: [
		MatNativeDateModule,
		FormsModule,
		MatDatepickerModule,
		MatIconModule,
		MatButtonModule,
		MatCheckboxModule, 
		MatToolbarModule, 
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		MatListModule,
		MatRadioModule,
		MatGridListModule,
		MatExpansionModule,
		MatDialogModule,
		MatBadgeModule,
		MatSelectModule,
		MatProgressSpinnerModule
	],
 
})
 
export  class  MyMaterialModule { }