<?php

namespace App\Http\Controllers;

use App\Models\BannerInfo;
use App\Models\Feature;
use App\Models\TopHeader;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;

class SettingController extends Controller
{
    public function settings()
    {
        return Inertia::render("Dashboard/Settings/Settings");
    }



    // Feature List
    public function featureList()
    {
        $features = Feature::all();
        return Inertia::render("Dashboard/Feature/Index", [
            'features'=>$features,
        ]);
    }

    public function featureCreate()
    {
        return Inertia::render('Dashboard/Feature/Create');
    }

    public function storeFeature(Request $request)
    {

        $photo = (isset($request['image']) && $request['image']!= "") ? $request['image'] : "";
        if ($photo!="") {
            $ext                    = $photo->getClientOriginalExtension();
            $photoFullName          = time().$photo->getClientOriginalName();
            $uploadPath             = 'furnished-icon/';
            $success                =  $photo->move($uploadPath, $photoFullName);
        }

        $feature = Feature::create([
            'feature_name'  => $request->title,
            'description'   => $request->description,
            'icon'          => '/'.$uploadPath.$photoFullName,
            'status'        => '1',
        ]);

        return redirect('/feature-list');
    }

    public function editFeature($id)
    {
        $feature = Feature::find($id);
        // return $property;

        return Inertia::render("Dashboard/Feature/Edit", [
            'features' =>$feature,

        ]);
    }

    public function updateFeature(Request $request)
    {
        $feature = Feature::find($request->id);
        if($request['image']) {
            $image_path = public_path($feature->icon);
            if (File::exists($image_path)) {
                // File::delete($image_path);
                unlink($image_path);
            }
            $photo = (isset($request['image']) && $request['image']!= "") ? $request['image'] : "";
            if ($photo!="") {
                $ext                    = $photo->getClientOriginalExtension();
                $photoFullName          = time().$photo->getClientOriginalName();
                $uploadPath             = 'furnished-icon/';
                $success                = $photo->move($uploadPath, $photoFullName);
            }
            $feature->icon = '/'.$uploadPath.$photoFullName;
            $feature->update();
        }
        $feature->update([
            'feature_name'  => $request->title,
            'description'   => $request->description
        ]);
        return redirect('/feature-list');
    }

    public function featureDestroy($id)
    {
        $feature = Feature::find($id);
        $image_path = public_path($feature->icon);

        if (File::exists($image_path)) {
            // File::delete($image_path);
            unlink($image_path);
        }
        $feature->delete();
        return redirect('/feature-list');
    }

    // Top Header List
    public function topHeaderList()
    {
        $topHeaders = TopHeader::all();
        return Inertia::render(
            "Dashboard/TopHeader/Index",
            [
        'topHeaders'=>$topHeaders,
    ]
        );
    }
    public function topHeaderCreate()
    {
        return Inertia::render('Dashboard/TopHeader/Create');
    }

    public function storeTopHeader(Request $request)
    {

        $topHeader = TopHeader::create([
            'title'=> $request->title,
            'phone'=> $request->phone,
            'logo_image'=> '',
            'status' => '1',
        ]);
        //return $topHeader;
        return redirect('/top-header-list');
    }


    // Banner Information
    public function bannerList()
    {
        $bannerInfos = BannerInfo::all();
        return Inertia::render("Dashboard/Banner/Index", [
            'bannerInfos'=>$bannerInfos,
        ]);
    }
    public function bannerCreate()
    {
        return Inertia::render('Dashboard/Banner/Create');
    }

    public function storeBanner(Request $request)
    {
        $banner = BannerInfo::create([
            'title'=> $request->title,
            'description'=> $request->description,
            'banner_image'=> '',
            'status' => '1',
        ]);
        //return $banner;
        return redirect('/banner-list');
    }

    public function imageCreate()
    {
        return Inertia::render('Dashboard/Image/Create');

    }
    public function storeImageUpload(Request $request)
    {
        dd($request->all());
    }
}
