<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class Payments extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    public function attributes()
    {
        return[
            'toUserId' => 'usuario',
            'valor' => 'valor de transacción'
        ];
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'valor' => 'required|numeric|min:1',
            'toUserId' => 'required|exist:users'
        ];
    }

    public function messages()
    {
        return [
            'valor.required' => 'El :attribute es obligatorio.',
            'valor.numeric' => 'El :attribute debe ser de tipo númerico.',
            'valor.min' => 'El :attribute de la transacción debe ser mayor a 1.',
            'toUserId.required' => 'El :attribute es obligatorio.'
        ];
    }
}
