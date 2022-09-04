package classes;

import crud.CRUD;
import java.sql.SQLException;
/**
 * * @author Nina
 */
public class Viagem {

    private Integer id;
    private String origem;
    private String destino;
    private String valor;
    private String data_ida;
    private String data_volta;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getOrigem() {
        return origem;
    }

    public void setOrigem(String origem) {
        this.origem = origem;
    }

    public String getDestino() {
        return destino;
    }

    public void setDestino(String destino) {
        this.destino = destino;
    }

    public String getValor() {
        return valor;
    }

    public void setValor(String valor) {
        this.valor = valor;
    }

    public String getData_ida() {
        return data_ida;
    }

    public void setData_ida(String data_ida) {
        this.data_ida = data_ida;
    }

    public String getData_volta() {
        return data_volta;
    }

    public void setData_volta(String data_volta) {
        this.data_volta = data_volta;
    }

    public void CadastrarViagem(Viagem viagem) {
        try {
            CRUD crud = new CRUD();
            String query = "INSERT INTO Viagem (origem, destino, data_ida, data_volta, valor)  VALUES('" +  viagem.origem + "' ,'" 
            + viagem.destino + "', '" + viagem.data_ida + "', '" + viagem.data_volta +"', '" + viagem.valor + "')";

            crud.Cadastrar(query);
            System.out.println("Viagem cadastrada com sucesso, boa viagem!");
            
        } catch (Exception e) {
            System.out.println("Não foi possivel cadastrar a viagem.");
        }
    }

    public void AtualizarViagem(Viagem viagem) {
        try {
            if (viagem.id > 0) {

                CRUD crud = new CRUD();
                String query = "UPDATE Viagem  SET origem = '" + viagem.origem + "' , destino = ' " + viagem.destino
                        + "', data_ida = '" + viagem.data_ida + "', data_volta = '" + viagem.data_volta
                        + "', valor = '" + viagem.valor + "' WHERE id = " + viagem.id;

                crud.Atualizar(query);
                System.out.println("Viagem atualizada com sucesso, boa viagem!");
            }
            else{
                  System.out.println("Informe o Id da viagem que deseja alterar, jutamente com os novos dados.");
            }

        } catch (Exception e) {
            System.out.println("Não foi possivel apagar a viagem.");
        }
    }

    public void ApagarViagem(int id) {
        try {
            if (id > 0) {
                CRUD crud = new CRUD();
                String clienteVInculado = "UPDATE Cliente SET viagem_id = null WHERE viagem_id = " +id;
                crud.Atualizar(clienteVInculado);
                
                String query = "DELETE FROM Viagem WHERE id = " + id;
                crud.Deletar(query);
                System.out.println("Viagem cancelada.");

            } else {
                System.out.println("Você precisa informa a viagem que deseja cancelar.");
            }

        } catch (Exception e) {
            System.out.println("Não foi possivel apagar a viagem.");
        }
    }

    public Viagem ConsultaViagem(int id) {
        try {
            CRUD crud = new CRUD();
            String query = "SELECT * FROM Viagem WHERE id = " + id;
            var viagem2 = crud.Consultar(query);
            Viagem viagemconsulta = new Viagem();

            if (viagem2.next()) {
                viagemconsulta.setId(viagem2.getInt("id"));
                viagemconsulta.setOrigem(viagem2.getString("origem"));
                viagemconsulta.setDestino(viagem2.getString("destino"));
                viagemconsulta.setValor(viagem2.getString("valor"));
                viagemconsulta.setData_ida(viagem2.getString("data_ida"));
                viagemconsulta.setData_volta(viagem2.getString("data_volta"));
            }

            crud.Desconectar();
            return viagemconsulta;

        } catch (SQLException e) {
            System.out.println("Não foi possivel realizar a consulta da viagem.");
            return null;
        }
    }
    
     public void ConsultaViagens() {
        try {
            CRUD crud = new CRUD();
            String query = String.format("SELECT * FROM Viagem");
            var viagens = crud.Consultar(query);

            System.out.println("");
            System.out.println("RESULTADO DA CONSULTA DE TODOS AS VIAGENS");
            System.out.println("##########################################"
                    + "#####################################################################");
            System.out.println("# ID ###        ORIGEM       ###          DESTINO   "
                    + "       ###   DATA IDA   ###   DATA VOLTA   ####   VALOR   #");
             System.out.println("##########################################"
                    + "#####################################################################");
            while (viagens.next()) {
                System.out.println("# " + viagens.getInt("id") + "  ### " + viagens.getString("origem")
                        + " ### " + viagens.getString("destino") + "  ### " + viagens.getString("data_ida") + "  ### "
                        + viagens.getString("data_volta") + "  ### " + viagens.getString("valor") + "  # ");
            }
            
            System.out.println("##########################################"
                    + "#####################################################################");
            crud.Desconectar();

        } catch (SQLException e) {
            System.out.println("Não foi possivel realizar a consulta.");

        }
    }
}
