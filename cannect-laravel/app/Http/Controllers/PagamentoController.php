<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\Model\Pagamento;

class PagamentoController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
       
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function createPag(Request $request)
    {
        $obj;
       // arrumando a data padrão SQL
        $mes = substr($request['cartao']['data_expiracao'], 0, 2);
        $ano =  substr($request['cartao']['data_expiracao'], 3, 7 );
        $data_expiracao = $ano.'-'.$mes;

        // caso haja uma virgula no lugar do ponto separando o valor
        $valor = str_replace(',','.',$request['valor']);

        // verificando se o objeto cartão existe se sim descontruo ele
        if($request['cartao'] != 'undefined'){
            $obj = ([
                "valor"=> (float)$valor,
                "cpf"=> $request['cpf'],
                "titular"=> $request['cartao']['titular'],
                "numero"=> $request['cartao']['numero'],
                "data_expiracao"=> $data_expiracao,
                "bandeira"=> $request['cartao']['bandeira'],
                "cvv" => $request['cartao']['cvv']
            ]);
        }else{
            $obj = $request;
        }
        if(!$this->validarInfo($obj)){
            return 'Por favor preenchar os Campos corretamente';
        }
        Pagamento::create($obj);   
        return 'Salvo com sucesso!';
    }
    public function selectPag()
    {
        return Pagamento::SelectPagamento();
        
    }

    public function deletePag($id)
    {        
        Pagamento:: where('id', $id)->delete();
        return 'Apagado com sucesso!! ';
        
    }
     public function updatePag(Request $request,$id)
    {         
        
         $obj;
       // arrumando a data padrão SQL
        $mes = substr($request['cartao']['data_expiracao'], 0, 2);
        $ano =  substr($request['cartao']['data_expiracao'], 3, 7 );
        $data_expiracao = $ano.'-'.$mes;

        // caso haja uma virgula no lugar do ponto separando o valor
        $valor = str_replace(',','.',$request['valor']);

        // verificando se o objeto cartão existe se sim descontruo ele
        if($request['cartao'] != 'undefined'){
            $obj = ([
                "valor"=> (float)$valor,
                "cpf"=> $request['cpf'],
                "titular"=> $request['cartao']['titular'],
                "numero"=> $request['cartao']['numero'],
                "data_expiracao"=> $data_expiracao,
                "bandeira"=> $request['cartao']['bandeira'],
                "cvv" => $request['cartao']['cvv']
            ]);
        }else{
            $obj = $request;
        }        
        
        if(!$this->validarInfo($obj)){
            return 'Por favor preenchar os Campos corretamente';
        }
        

        Pagamento::where('id',$id)->update($obj);
        return 'Alterado com sucesso!! ';
        
    }

    // função para validar as informações 
    public function validarInfo($obj)
    {
        
          if($obj['valor'] == '' || $obj['valor'] == null){
                return false;
            }  
            if($obj['cpf']== '' || $obj['cpf'] == null || strlen($obj['cpf']) < 11){
                return false;
            }         
            if($obj['titular'] == '' || $obj['titular'] == null){
                return false;
            }
           if($obj['numero'] == '' || $obj['numero'] == null|| strlen($obj['numero']) < 13 ){
                return false;
            } 
            if($obj['data_expiracao'] == '' || $obj['data_expiracao'] == null ){
                return false;
            }              
            if($obj['bandeira'] == '' || $obj['bandeira'] == null){
                return false;
            }         
            if($obj['cvv']== '' || $obj['cvv']== null || strlen($obj['cvv']) < 3 || strlen($obj['cvv']) > 4){
                return false;
            }
        

          return true; 


    }
}