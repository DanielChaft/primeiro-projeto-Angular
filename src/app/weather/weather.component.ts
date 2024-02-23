import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {
  constructor(private builder: FormBuilder, private WeatherService: WeatherService){ }

  locationsForm = this.builder.group({
    city: ['', Validators.required]
  });

  weatherData: any;
  locations: any;
  selectedLocation: any;

  obterRegioes(){
    let city = String(this.locationsForm.get('city')?.value);
    
    this.WeatherService.getlatlon(city).subscribe(data => {
      this.locations = data;
      console.log(data);
    });
  }
}
