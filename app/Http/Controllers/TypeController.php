<?php

namespace App\Http\Controllers;

use App\Models\Type;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;

use function Termwind\render;

class TypeController extends Controller
{
    public function typeList()
    {
        $types = Type::all();
        return Inertia::render('Dashboard/Type/Index', [
            'types'              => $types,

        ]);

        return Inertia::render('Dashboard/Type/Index');
    }
    public function typeCreate()
    {
        return Inertia::render('Dashboard/Type/Create');
    }


    public function storeType(Request $request)
    {
        $type = Type::create([
            'title'=>$request->title,
            'slug'=>Str::slug($request->title),
            'description'=>$request->title,
            'image'=>'',
            'status'=>'1'
        ]);
        return redirect('/type-list');
    }

    public function editType($id)
    {
        $type = Type::find($id);
        return Inertia::render('Dashboard/Type/Edit', [
            'type'              => $type,

        ]);
    }
    public function updateType(Request $request)
    {
        $type = Type::find($request->id);
        if($request['image']) {
            $image_path = public_path($type->icon);
            if (File::exists($image_path)) {
                // File::delete($image_path);
                unlink($image_path);
            }
            $photo = (isset($request['image']) && $request['image']!= "") ? $request['image'] : "";
            if ($photo!="") {
                $ext                    = $photo->getClientOriginalExtension();
                $photoFullName          = time().$photo->getClientOriginalName();
                $uploadPath             = 'images/';
                $success                = $photo->move($uploadPath, $photoFullName);
            }
            $type->icon = '/'.$uploadPath.$photoFullName;
            $type->update();
        }
        $type->update([
            'title'  => $request->title,
            'description'   => $request->description
        ]);
        return redirect('/type-list');
    }
    public function destroyType($id)
    {
        $type = Type::find($id);
        $type->delete();
        return redirect('/type-list');
    }




}
