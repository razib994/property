<?php

namespace App\Http\Controllers;

use App\Models\Location;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class LocationController extends Controller
{
    public function locationList()
    {
        $locations = Location::all();
        return Inertia::render('Dashboard/Location/Index', [
			'locations'              => $locations,
			
		]);
       
    }
    public function locationCreate()
    {
        return Inertia::render('Dashboard/Location/Create');
    }

  

    public function storeLocation(Request $request) {
      
        $location = Location::create([
            'location_name'=> $request->location_name,
            'slug'=> '',
            'description'=> $request->description,
            'image'=> '',
            'status' => '1',
        ]);
        //return $feature;
        return redirect('/location-list');
        }
}
