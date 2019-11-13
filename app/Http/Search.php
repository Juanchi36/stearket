<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Search extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'userEmail',
        'gameName'
    ];
}
