package classes;

import crud.CRUD;
import java.sql.SQLException;
import java.util.Date;

/**
 * @author Nina
 */
public class Cliente {

    private int id;

    private String nome;

    private String data_nascimento;

    private String telefone;

    private String cpf;

    private Viagem viagem;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getData_nascimento() {
        return data_nascimento;
    }

    public void setData_nascimento(String data_nascimento) {
        this.data_nascimento = data_nascimento;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public Viagem getViagem() {
        return viagem;
    }

    public void setViagem(Viagem viagem) {
        this.viagem = viagem;
    }

    public void CadastrarCliente(Cliente cliente) {
        try {
            CRUD crud = new CRUD();
            String query = "INSERT INTO Cliente (nome, data_nascimento, cpf, telefone, viagem_id) "
                    + " VALUES('" + cliente.getNome() + "', '" + cliente.getData_nascimento() + "', '" + cliente.getCpf() + "', '" + cliente.getTelefone()
                    + "', " + (cliente.getViagem().getId() != null && cliente.getViagem().getId() != 0? cliente.getViagem().getId() : null ) + ")";

            crud.Cadastrar(query);
            System.out.println("Cliente cadastrado com sucesso!");

        } catch (Exception e) {
            System.out.println("Não foi possivel realizar o cadastrado do cliente.");
        }
    }

    public void AtualizarCliente(Cliente cliente) {
        try {
            if (cliente.id > 0) {
                CRUD crud = new CRUD();
                String query = "UPDATE Cliente "
                        + " SET nome = '" + cliente.getNome() + "', data_nascimento = '" + cliente.getData_nascimento() + "' , cpf = '" + cliente.getCpf()
                        + "', telefone = '" + cliente.getTelefone() + "', viagem_id =" 
                        +(cliente.getViagem().getId() != null && cliente.getViagem().getId() != 0? cliente.getViagem().getId() : null ) + " WHERE id = " + cliente.id;
                
                crud.Atualizar(query);
                System.out.println("Cliente atualizado com sucesso!");

            } else {
                System.out.println("Não foi possivel atualizar o cliente, informe o id e os dados para realizar a atualização.");
            }

        } catch (Exception e) {
            System.out.println("Não foi possivel realizar a atualização do cliente.");
        }
    }

    public void ApagarCliente(int id) {
        try {
            if (id > 0) {
                CRUD crud = new CRUD();
                String query = "DELETE FROM Cliente WHERE id = " + id;
                
                crud.Deletar(query);
                System.out.println("Cliente apagado.");
            } else {
                System.out.println("Não foi possivel apagar o cliente, informe o id para deleta-lo.");
            }

        } catch (Exception e) {
            System.out.println("Não foi possivel realizar a atualização do cliente.");
        }
    }

    public Cliente ConsultaCliente(int id) {
        try {
            if (id > 0) {

                CRUD crud = new CRUD();
                String query = "SELECT * FROM Cliente WHERE id = " + id;
                var cliente2 = crud.Consultar(query);
                Cliente clienteconsulta = new Cliente();

                if (cliente2.next()) {
                    clienteconsulta.setId(cliente2.getInt("id"));
                    clienteconsulta.setNome(cliente2.getString("nome"));
                    clienteconsulta.setCpf(cliente2.getString("cpf"));
                    clienteconsulta.setData_nascimento(cliente2.getString("data_nascimento"));
                    clienteconsulta.setTelefone(cliente2.getString("telefone"));
                    Viagem viagem = new Viagem();
                    viagem.setId(cliente2.getInt("viagem_id"));
                    clienteconsulta.setViagem(viagem);
                }
                 crud.Desconectar();
                 return clienteconsulta;
                
            }
            else{
                System.out.println("Não foi possivel localizar o Cliente, informe um Id.");
                return null;
            }
           
        } catch (SQLException e) {
            System.out.println("Não foi possivel localizar o Cliente.");
            return null;
        }
    }

    public void ConsultaClientes() {
        try {
            CRUD crud = new CRUD();
            String query = String.format("SELECT * FROM Cliente");
            var clientes = crud.Consultar(query);

            System.out.println("");
            System.out.println("RESULTADO DA CONSULTA DE TODOS OS CLIENTES");
            System.out.println("##########################################"
                    + "#####################################################################");
            System.out.println("# ID ###        NOME       ###          CPF   "
                    + "       ###   DATA NASCIMENTO   ###   TELEFONE   ####   ID VIAGEM   #");
            System.out.println("##########################################"
                    + "#####################################################################");
            
            while(clientes.next()) {
                System.out.println("# " + clientes.getString("id")  + "  ### " + clientes.getString("nome") + " ### " + clientes.getString("cpf")
                + "  ### " + clientes.getString("data_nascimento")  + "  ### " + clientes.getString("telefone") + "  ### " 
                        + clientes.getInt("viagem_id") + " # ");
            }

            System.out.println("##########################################"
                    + "#####################################################################");
            crud.Desconectar();
            
        } catch (SQLException e) {
            System.out.println("Não foi possivel realizar a consulta.");

        }
    }

}
