<?php

namespace App\Http\Controllers;

use App\Models\Location;
use App\Models\Property;
use App\Models\TopHeader;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Cookie;
use Inertia\Inertia;
use PharIo\Manifest\Url;

class FrontendController extends Controller
{
    public function about()
    {
        $locations = Location::all();
        $logo = TopHeader::orderBy('id', 'desc')->first();
        $totalCount = [
            'totalProperty'=> Property::where('status',1)->count(),
            'rentCount'=>'1000',
            'totalResponse' => '2500',//Property::where()->count(),
            'total_user'=>User::count(),
        ];
        return Inertia::render('About',[
            'logo' =>$logo,
            'totalCount' => $totalCount,
            'locations' => $locations
        ]);
    }
    public function contact()
    {
        $locations = Location::all();
        $logo = TopHeader::orderBy('id', 'desc')->first();
        return Inertia::render('Contact',[
            'logo' =>$logo,
            'locations' => $locations
        ]);
    }
    public function blog()
    {
        $locations = Location::all();
        $logo = TopHeader::orderBy('id', 'desc')->first();
        $totalCount = [
            'totalProperty'=> Property::where('status',1)->count(),
            'rentCount'=>'1000',
            'totalResponse' => '2500',//Property::where()->count(),
            'total_user'=>User::count(),
        ];
        return Inertia::render('Blog',[
            'logo' =>$logo,
            'totalCount' => $totalCount,
            'locations' => $locations
        ]);
    }
    public function property()
    {
        $locations = Location::all();
        $logo = TopHeader::orderBy('id', 'desc')->first();
        $property = Property::with('type','user','location')->orderBy('id', 'desc')->take(12)->get();
        return Inertia::render('Property',[
            'logo' =>$logo,
            'properties'=>$property,
            'locations' => $locations
        ]);
    }
    public function propertyDetails($location, $itemId)
    {
        $locations = Location::all();
        $property = Property::with('type','features.ferature','user','image_galleries','location')->find($itemId);
        $similarProperty = Property::with('type','features.ferature','user','image_galleries','location')->where('location_id', $property->location_id)->get()->take(4);
        $logo = TopHeader::orderBy('id', 'desc')->first();
        return Inertia::render("PropertyDetails", [
            'property'          => $property,
            'similarProperty'   => $similarProperty,
            'logo'              =>$logo,
            'locations'         => $locations
        ]);
    }

    public function termsConditions()
    {
        $logo = TopHeader::orderBy('id', 'desc')->first();
        return Inertia::render("TermsCondition",[
            'logo' =>$logo,
        ]);
    }

    public function privacyPolicy()
    {
        $logo = TopHeader::orderBy('id', 'desc')->first();
        return Inertia::render("PrivacyPolicy",[
            'logo' =>$logo,
        ]);
    }
    public function blogDetails()
    {
        $logo = TopHeader::orderBy('id', 'desc')->first();
        return Inertia::render("BlogDetails",[
            'logo' =>$logo,
        ]);
    }
    public function corporateIndex() {
        $logo = TopHeader::orderBy('id', 'desc')->first();
        return Inertia::render("Corporate",[
            'logo' =>$logo,
        ]);
    }

    public function areaLocation($location) {
        $locations = Location::all();
        $locationID = Location::where('slug', $location)->first()->id;
        $property = Property::with('type','user','location')->where('location_id', $locationID)->orderBy('id', 'desc')->get();
        $logo = TopHeader::orderBy('id', 'desc')->first();
        // dump($property);
        // die();
        return Inertia::render("LocationProperty", [
            'properties' => $property,
            'logo' =>$logo,
            'locations' => $locations
        ]);
        
    }

    public function cookieData() {

        // $current = url()->current();
        // dd($current);
        // Cookie::queue('test-cookie', 'Setting Cookie from ItSolutionStuff.com', 120);
  
        // return response()->json(['Cookie set successfully.']);

        $value = Cookie::get('test-cookie');
        dd($value);

        // Cookie::forget('test-cookie');
        // Cookie::forget('test-cookie-2');
  
        // dd('Cookie removed successfully.');
    }
}
