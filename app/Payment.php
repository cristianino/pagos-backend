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

    public function scopeCreateWithSaldo($query, $request)
    {
        $saldo = Saldo::where('user_id', $request->userFrom);
        $saldo->saldo = $saldo - $request->valor;
        $saldo->update();
        return $query->create($request->all());
    }
}
