<?php

namespace App\Http\Controllers;

use App\Mail\UserInformationMail;
use App\Models\Location;
use App\Models\Property;
use App\Models\PropertyRequest;
use App\Models\TopHeader;
use App\Models\Type;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use PharIo\Manifest\Url;

class FrontendController extends Controller
{
    public function about()
    {
        $locations = Location::all();
        $logo = TopHeader::orderBy('id', 'desc')->first();
        $totalCount = [
            'totalProperty'=> Property::where('status', 1)->count(),
            'rentCount'=>'1000',
            'totalResponse' => '2500',//Property::where()->count(),
            'total_user'=>User::count(),
        ];
        return Inertia::render('About', [
            'logo' =>$logo,
            'totalCount' => $totalCount,
            'locations' => $locations
        ]);
    }
    public function contact()
    {
        $locations = Location::all();
        $logo = TopHeader::orderBy('id', 'desc')->first();
        return Inertia::render('Contact', [
            'logo' =>$logo,
            'locations' => $locations
        ]);
    }

    public function faq()
    {
        $locations = Location::all();
        $logo = TopHeader::orderBy('id', 'desc')->first();
        return Inertia::render('Faq', [
            'logo' =>$logo,
            'locations' => $locations
        ]);
    }

    public function blog()
    {
        $locations = Location::all();
        $logo = TopHeader::orderBy('id', 'desc')->first();
        $totalCount = [
            'totalProperty'=> Property::where('status', 1)->count(),
            'rentCount'=>'1000',
            'totalResponse' => '2500',//Property::where()->count(),
            'total_user'=>User::count(),
        ];
        return Inertia::render('Blog', [
            'logo' =>$logo,
            'totalCount' => $totalCount,
            'locations' => $locations
        ]);
    }
    public function property()
    {
        $locations = Location::all();
        $logo = TopHeader::orderBy('id', 'desc')->first();
        $type = Type::orderBy('id', 'desc')->get();
        $property = Property::with('type', 'user', 'location', 'image_galleries')->orderBy('id', 'desc')->take(12)->get();
        return Inertia::render('Property', [
            'logo' =>$logo,
            'properties'=>$property,
            'locations' => $locations,
            'types' => $type
        ]);
    }
    public function propertyOwner()
    {
        $locations = Location::all();
        $logo = TopHeader::orderBy('id', 'desc')->first();
        return Inertia::render('PropertyOwner', [
            'logo' =>$logo,
            'locations' => $locations
        ]);
    }


    public function propertyDetails($location, $itemId)
    {

        $locations = Location::all();
        $types = Type::all();
        $property = Property::with('type', 'features.ferature', 'user', 'image_galleries', 'location')->find($itemId);
        $similarProperty = Property::with('type', 'features.ferature', 'user', 'image_galleries', 'location')->where('location_id', $property->location_id)->get()->take(4);
        $logo = TopHeader::orderBy('id', 'desc')->first();

        return Inertia::render("PropertyDetails", [
            'property'          => $property,
            'similarProperty'   => $similarProperty,
            'logo'              =>$logo,
            'locations'         => $locations,
            'types'         => $types
        ]);
    }

    public function termsConditions()
    {
        $logo = TopHeader::orderBy('id', 'desc')->first();
        return Inertia::render("TermsCondition", [
            'logo' =>$logo,
        ]);
    }

    public function privacyPolicy()
    {
        $logo = TopHeader::orderBy('id', 'desc')->first();
        return Inertia::render("PrivacyPolicy", [
            'logo' =>$logo,
        ]);
    }
    public function blogDetails()
    {
        $logo = TopHeader::orderBy('id', 'desc')->first();
        return Inertia::render("BlogDetails", [
            'logo' =>$logo,
        ]);
    }
    public function corporateIndex()
    {
        $locations = Location::all();
        $logo = TopHeader::orderBy('id', 'desc')->first();
        return Inertia::render("Corporate", [
            'logo' =>$logo,
            'locations' => $locations
        ]);
    }

    public function cookies()
    {
        $logo = TopHeader::orderBy('id', 'desc')->first();
        return Inertia::render("Cookies", [
            'logo' =>$logo,
        ]);
    }

    public function siteMap()
    {
        $logo = TopHeader::orderBy('id', 'desc')->first();
        return Inertia::render("SiteMap", [
            'logo' =>$logo,
        ]);
    }

    public function getRequest()
    {
        $logo = TopHeader::orderBy('id', 'desc')->first();
        return Inertia::render("Request", [
            'logo' =>$logo,
        ]);
    }
    public function areaLocation($location)
    {
        if($location == 'furnished-apartment-for-rent-in-gulshan') {
            $location = 'gulshan';
        }
        if($location == 'furnished-apartment-for-rent-in-banani') {
            $location = 'banani';
        }
        if($location == 'furnished-apartment-for-rent-in-baridhara-diplomatic-zone') {
            $location = 'baridhara';
        }
        if($location == 'furnished-apartment-for-rent-in-bashundhara') {
            $location = 'bashundhara';
        }
        $locations = Location::all();
        $locationID = Location::where('slug', $location)->first()->id;
        $location_name = Location::where('slug', $location)->first()->location_name;
        $types = Type::all();
        $property = Property::with('type', 'user', 'location', 'image_galleries')->where('location_id', $locationID)->orderBy('id', 'desc')->get();
        $logo = TopHeader::orderBy('id', 'desc')->first();
        // dump($property);
        // die();
        return Inertia::render("LocationProperty", [
            'properties' => $property,
            'logo' =>$logo,
            'locations' => $locations,
            'location_name' => $location_name,
            'types'=> $types,
        ]);
    }

    public function cookieData()
    {
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

    public function propertyRequest(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'phone' => 'required',
            'message' => 'required',
        ]);

        $requestProperty = PropertyRequest::create([
                'name' => $request->name,
                'email' => $request->email,
                'phone' => $request->phone,
                'message' => $request->message,
                'property_id' => $request->property_id,
                'date' => date('Y-m-d'),
        ]);

        if ($requestProperty) {
            $details = [
                'name' => $request->name,
                'property_title' => $request->title,
                'property_url' => request()->getSchemeAndHttpHost().'/area/'.$request->location.'/'.$request->property_id,
                'property_id' => $request->property_id,
                'mobile' => $request->phone,
                'message' => $request->message,
                'email' => $request->email,
            ];

            Mail::to('razibeee2012@gmail.com')->send(new \App\Mail\MyTestMail($details));
        }
        return redirect()->back()->with('success', 'Your Request Send Successfully');
    }

     public function search(Request $request)
     {
         $pricePrivious = $request->price-49999;
         $locations = Location::all();
         $logo = TopHeader::orderBy('id', 'desc')->first();
         $type = Type::orderBy('id', 'desc')->get();
         $property = Property::with('type', 'user', 'location', 'image_galleries')->orderBy('id', 'desc');
         if ($request->location!=null) {
             $property->where('location_id', 'like', $request->location);
         }
         if ($request->property_id!=null) {
             $property->where('property_id', 'like', $request->property_id);
         }
         if ($request->price!=null) {
             $property->where('price', '>=', $pricePrivious)
             ->where('price', '<', $request->price);
         }

         $data = $property->get();
         ;
         return Inertia::render('PropertySearch', [
             'logo' =>$logo,
             'properties'=>$data,
             'locations' => $locations,
             'types' => $type
         ]);
     }

     public function clientRegistration()
     {

         $logo = TopHeader::orderBy('id', 'desc')->first();
         return Inertia::render("ClientsRegistration", [
             'logo' =>$logo,
         ]);


     }





     public function contactOwner()
     {
         $logo = TopHeader::orderBy('id', 'desc')->first();
         return Inertia::render("ContactOwnerForm", [
             'logo' =>$logo,
         ]);
     }
     public function contactCorporate()
     {
         $logo = TopHeader::orderBy('id', 'desc')->first();
         return Inertia::render("ContactCorportate", [
             'logo' =>$logo,
         ]);
     }
     public function contactTenlent()
     {
         $logo = TopHeader::orderBy('id', 'desc')->first();
         return Inertia::render("ContactTenant", [
             'logo' =>$logo,
         ]);
     }
     public function contactWantKnow()
     {
         $logo = TopHeader::orderBy('id', 'desc')->first();
         return Inertia::render("ContactWantKnow", [
             'logo' =>$logo,
         ]);
     }
     public function postClientData(Request $request)
     {
         $request->validate([
             'name' => 'required',
             'phone' => 'required',
         ]);

         $user = User::create([
                 'name' => $request->name,
                 'email' => $request->email,
                 'phone' => $request->phone,
                 'password' => Hash::make($request->phone),
                 'is_admin' => 1,
         ]);

         if ($user) {
             $details = [
                 'name' => $request->name,
                 'email' => $request->email,
                 'password' => $request->phone,
                 'phone' => $request->phone,

             ];

             Mail::to('razibeee2012@gmail.com')->send(new UserInformationMail($details));
         }
         return redirect()->back()->with('success', 'Your Request Send Successfully');
     }
}
