<?php

namespace App\Http\Controllers;

use App\Models\Property;
use App\Models\PropertyRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashbaordController extends Controller
{
    public function dashboard()
    {
        $totalProperty = Property::where('status', 1)->count();
        $userCount = User::where('is_admin', 1)->count();
        $requestCount = PropertyRequest::count();
        $property = Property::where('status', 1)->take(5)->get()->transform(function ($item) {
            return [
                'id'        => $item->id,
                'title'     => $item->title,
                'sqf'       => $item->sqf,
                'price'     => $item->price,
                'slug'      => $item->slug,
            ];
        });
        $latest_request = PropertyRequest::where('status', 1)->take(5)->get()->transform(function ($item) {
            return [
                'id'        => $item->id,
                'name'     => $item->name,
                'phone'       => $item->phone,
                'property_title'     => $item->property ? $item->property->title : "",
                'date'      => $item->date,
            ];
        });

        return Inertia::render('Dashboard/Index', [
            'totalProperty' => $totalProperty,
            'userCount' => $userCount,
            'requestCount' => $requestCount,
            'latest_request' => $latest_request,
            'property' => $property,
        ]);
    }

    public function adminHome()
    {

        return Inertia::render('Dashboard/UserDashboard');
    }

    public function requestPropertyList()
    {
        $property_request = PropertyRequest::where('status', 1)->orderBy('id', 'desc')->get();
        return Inertia::render('Dashboard/RequestProperty/RequestProperty', [
            'property_request' => $property_request,
        ]);
    }

}
