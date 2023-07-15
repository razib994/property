<?php

namespace App\Http\Controllers;

use App\Models\Location;
use App\Models\TopHeader;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $logo = TopHeader::orderBy('id', 'desc')->first();
        $locations = Location::all();
        //   $url = url()->current();

        return Inertia::render(
            'Home',
            [
            'logo' =>$logo,
            'locations'=>$locations,
            ]
        );
    }

}
