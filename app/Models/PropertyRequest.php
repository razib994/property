<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PropertyRequest extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'phone',
        'property_id',
        'message',
        'date',
        'status',
    ];

    public function property()
    {
        return $this->belongsTo(Property::class);
    }
}