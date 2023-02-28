<?php

namespace App\Http\Controllers;

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
            return Inertia::render('Dashboard/Admin');   
    }

}
