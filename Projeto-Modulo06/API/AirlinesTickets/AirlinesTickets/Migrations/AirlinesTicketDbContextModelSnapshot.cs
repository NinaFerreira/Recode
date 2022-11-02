﻿// <auto-generated />
using System;
using AirlinesTickets.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace AirlinesTickets.Migrations
{
    [DbContext(typeof(AirlinesTicketDbContext))]
    partial class AirlinesTicketDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.10")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("AirlinesTickets.Models.Cliente", b =>
                {
                    b.Property<int>("IdCliente")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("IdCliente"), 1L, 1);

                    b.Property<string>("CPF")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Idade")
                        .HasColumnType("int");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("ViagemId")
                        .HasColumnType("int");

                    b.HasKey("IdCliente");

                    b.ToTable("Cliente");
                });

            modelBuilder.Entity("AirlinesTickets.Models.Contato", b =>
                {
                    b.Property<int>("IdContato")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("IdContato"), 1L, 1);

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Mensagem")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("IdContato");

                    b.ToTable("Contato");
                });

            modelBuilder.Entity("AirlinesTickets.Models.Viagem", b =>
                {
                    b.Property<int>("IdViagem")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("IdViagem"), 1L, 1);

                    b.Property<int?>("Cliente")
                        .HasColumnType("int");

                    b.Property<DateTime>("DataIda")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("DataVolta")
                        .HasColumnType("datetime2");

                    b.Property<string>("Destino")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Origem")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Valor")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("IdViagem");

                    b.HasIndex("Cliente")
                        .IsUnique()
                        .HasFilter("[Cliente] IS NOT NULL");

                    b.ToTable("Viagem");
                });

            modelBuilder.Entity("AirlinesTickets.Models.Viagem", b =>
                {
                    b.HasOne("AirlinesTickets.Models.Cliente", "cliente")
                        .WithOne("viagem")
                        .HasForeignKey("AirlinesTickets.Models.Viagem", "Cliente");

                    b.Navigation("cliente");
                });

            modelBuilder.Entity("AirlinesTickets.Models.Cliente", b =>
                {
                    b.Navigation("viagem");
                });
#pragma warning restore 612, 618
        }
    }
}
