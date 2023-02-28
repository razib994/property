<?php

namespace App\Http\Controllers;

use App\Models\Type;
use Illuminate\Http\Request;
use Inertia\Inertia;

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
    
    
        public function storeType(Request $request) {
            $type = Type::create([
                'title'=>$request->title,
                'slug'=>'',
                'description'=>$request->title,
                'image'=>'',
                'status'=>'1'
            ]);
            return redirect('/type-list');
        }
}
