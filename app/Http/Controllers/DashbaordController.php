<?php

namespace App\Http\Controllers;

use App\Models\PropertyRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashbaordController extends Controller
{
   

    public function dashboard()
    {
        return Inertia::render('Dashboard/Index'); 
    }

    public function adminHome()
    {
        return Inertia::render('Dashboard/UserDashboard');   
    }

    public function requestPropertyList() {
        $property_request = PropertyRequest::where('status',1)->orderBy('id','desc')->get();
        return Inertia::render('Dashboard/RequestProperty/RequestProperty', [
            'property_request'=> $property_request,
        ]);
    }

}