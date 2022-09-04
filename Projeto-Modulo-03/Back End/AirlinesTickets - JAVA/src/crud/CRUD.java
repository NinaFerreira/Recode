package crud;

import config.ConexaoBD;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

/**
 * @author Nina
 */
public class CRUD {
    
    private ConexaoBD conexao = null;
    private Connection conn = null;
    
    public ResultSet Consultar(String query) {
        conexao = new ConexaoBD();
        conn = conexao.conectar();
        try {
            Statement stm = conn.createStatement();
            ResultSet resultado = stm.executeQuery(query);
            
            return  resultado ;
        } catch (SQLException ex) {
            System.out.println("Não foi possivel realizar a consulta.");
        } 
        return null;
    }

    public boolean Cadastrar(String query) {
        conexao = new ConexaoBD();
        conn = conexao.conectar();

        try {
            Statement stm = conn.createStatement();
            return stm.execute(query);

        } catch (SQLException ex) {
            System.out.println(ex);
            return false;

        } finally {
            conexao.desconectar(conn);
        }
    }

    public boolean Deletar(String query) {
        conexao = new ConexaoBD();
        conn = conexao.conectar();

        try {
            Statement stm = conn.createStatement();
            return stm.execute(query);
            
        } catch (SQLException ex) {
            System.out.println("Não foi possivel deletar.");
            return false;
        } finally {
            conexao.desconectar(conn);
        }
    }

    public boolean Atualizar(String query) {
        conexao = new ConexaoBD();
        conn = conexao.conectar();

        try {
            Statement stm = conn.createStatement();
            return stm.execute(query);

        } catch (SQLException ex) {
            System.out.println("Não foi possivel realizar a atualização.");
            return false;

        } finally {
            conexao.desconectar(conn);
        }
    }
    
    public void Desconectar(){
         conexao.desconectar(conn);
    }
}
