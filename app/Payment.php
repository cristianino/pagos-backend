<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    public function userTo()
    {
        return $this->hasOne('App/User');
    }

    public function userFrom()
    {
        return $this->hasOne('App/User');
    }
}
