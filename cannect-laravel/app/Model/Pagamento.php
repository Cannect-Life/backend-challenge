<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;


class Pagamento extends Model
{
    protected $table = 'tb_pagamento';
    protected $fillable = [ 'valor','cpf','titular','numero','data_expiracao','bandeira', 'cvv'];
    //protected $dates = ['created_at', 'updated_at'];
    protected $primaryKey = 'id';
    public $timestamps = false;
    

     public static function SelectPagamento()
    {   
        $query = DB::table('tb_pagamento')
         ->orderBy('id', 'desc');  
          $query->selectRaw('valor as valor, cpf as cpf,titular as titular,numero as numero, data_expiracao as data_expiracao, cvv as cvv ');     
                
        return $query->get();
    
       
    }
  
}
