<?php

namespace App\Http\Controllers;

use App\Models\Feature;
use App\Models\FeatureProperty;
use App\Models\Location;
use App\Models\Property;
use App\Models\PropertyImageGallery;
use App\Models\Type;
use Database\Seeders\PropertyImageGallerySeeder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Str;

use function Termwind\render;

class PropertyController extends Controller
{
    //
    public function propertyCreate()
    {
        $locations = Location::where('status', 1)->get();
        $types = Type::where('status', 1)->get();
        $features = Feature::where('status', 1)->get();
        return Inertia::render(
            "Dashboard/Property/Create",
            [
                'locations'=>$locations,
                'types'=>$types,
                'features'=>$features,
            ]
        );
    }
    public function propertyList()
    {
        $properties = Property::orderby('id', 'desc')->get();
        return Inertia::render("Dashboard/Property/Index", [
            'properties' =>$properties,
        ]);
    }

    public function storeProperty(Request $request)
    {
        dd($request->all());
        $photo = (isset($request['image']) && $request['image']!= "") ? $request['image'] : "";
        if ($photo!="") {
            $ext                    = $photo->getClientOriginalExtension();
            $photoFullName          = time().$photo->getClientOriginalName();
            $uploadPath             = 'images/';
            $success                = $photo->move($uploadPath, $photoFullName);
        }
        $property = Property::create([
            'title'             =>$request->title,
            'slug'              =>Str::slug($request->title) ,
            'location_id'       =>$request->location_id,
            'price'             =>$request->price,
            'type_id'           =>$request->type_id,
            'bed'               =>$request->bed,
            'bath'              =>$request->bath,
            'grage'             =>$request->grage,
            'city'             =>$request->city,
            'zip_code'             =>$request->zip_code,
            'country'             =>$request->country,
            // 'user_id'             =>$request->user_id,
            'sqf'               =>$request->sqf,
            'balcony'               =>$request->balcony,
            'floor'               =>$request->floor,
            'unit_no'               =>$request->unit_no,
            'unit_per_floor'               =>$request->unit_per_floor,
            'maid_room'               =>$request->maid_room,
            'service_charge'               =>$request->service_charge,
            'phone'             =>$request->phone,
            'date'              =>$request->date,
            'description'       =>$request->description,
            'address'           =>$request->address,
            'details'           =>$request->details,
            'map_link'          =>$request->map_link,
            'whatsapp_number'   =>$request->whatsapp_number,
            'created_by'        =>Auth::user()->id,
            'rating'            => 0, //$request->rating,
            'share_link'        =>$request->share_link,
            'share_count'       =>0, //$request->share_count,
            'call_count'        =>0, //$request->call_count,
            'visitor_count'     =>0, //$request->visitor_count,
            'status'            =>1, //$request->status,
            'publisher_status'  =>$request->publisher_status,
            'recived_count'     =>0, //$request->recived_count,
             'image'            => '/'.$uploadPath.$photoFullName,
            'video_link'        =>$request->video_link,
            'meta_title'        => '', //$request->meta_title,
            'meta_description'  =>'', //$request->meta_description,
            'meta_tag'          =>'', //$request->meta_tag,
            'meta_keyward'      =>'', //$request->meta_keyward
        ]);

        if ($property->id) {
            $property = Property::find($property->id);
            $property->property_id = 'FH100251'.$property->id;
            $property->update();

            foreach ($request->feature_id as $feature) {
                $featureData = new FeatureProperty();
                $featureData->property_id   = $property->id;
                $featureData->feature_id    = $feature;
                $featureData->save();
            }
        }
        foreach ($request->image_gallery as $gallery) {
            $photo = (isset($gallery) && $gallery!= "") ? $gallery : "";
            if ($photo!="") {
                $ext                    = $photo->getClientOriginalExtension();
                $gallerFullName          = time().$photo->getClientOriginalName();
                $uploadPath             = 'images/';
                $success                = $photo->move($uploadPath, $gallerFullName);
            }
            $galleriesData = new PropertyImageGallery();
            $galleriesData->property_id =$property->id;
            $galleriesData->images = '/'.$uploadPath.$gallerFullName;
            $galleriesData->save();
        }

        return redirect('/propety-list');
    }

    public function editProperty($id)
    {
        dd($id);
    }

    public function propertyListDetails($id)
    {
        $property = Property::with('type', 'features.ferature', 'user', 'image_galleries', 'location')->find($id);
        return Inertia::render("Dashboard/Property/PropertyListDetails", [
            'property' =>$property,
        ]);
    }
}
