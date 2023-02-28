<?php

namespace App\Http\Controllers;

use App\Models\BannerInfo;
use App\Models\Location;
use App\Models\Property;
use App\Models\TopHeader;
use App\Models\Type;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $types = Type::orderBy('id', 'asc')->take(3)->get();
        $property = Property::with('type','user','location')->orderBy('id', 'desc')->take(8)->get();
        $logo = TopHeader::orderBy('id', 'desc')->first();
        $locations = Location::all();
        $banner = BannerInfo::orderBy('id', 'desc')->first();
        $url = url()->current();
        // $cookie = Cookie::queue('test-cookie', $url, 120);
        $totalCount = [
            'totalProperty'=> Property::where('status',1)->count(),
            'rentCount'=>'1000',
            'totalResponse' => '2500',//Property::where()->count(),
            'total_user'=>User::count(),
        ];
        return Inertia::render('Home',
        [
            'types' => $types,
            'properties' => $property,
            'logo' =>$logo,
            'locations'=>$locations,
            'banners'=>$banner,
            'totalCount' => $totalCount
        ]);
    }
   
}
