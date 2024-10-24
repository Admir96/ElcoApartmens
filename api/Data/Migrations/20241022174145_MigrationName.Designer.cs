﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using api.Data;

#nullable disable

namespace api.Data.Migrations
{
    [DbContext(typeof(DBContext))]
    [Migration("20241022174145_MigrationName")]
    partial class MigrationName
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.10")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("api.Modal.Apartment", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Amenities")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Description2")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Header")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ImageUrls")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Price")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Apartments");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Amenities = "[\"WiFi\",\"Air Conditioning\",\"Kitchen\",\"Free Parking\",\"Pool\",\"2 Beds\",\"City view\"]",
                            Description = "Explore a serene retreat designed for relaxation. Enjoy spacious living with modern touches and amenities that make your stay unforgettable.",
                            Description2 = "SExperience the ultimate blend of style and comfort in this stunning apartment located in the vibrant heart of the city. With modern amenities, spacious interiors, and elegant decor, it’s perfect for both short escapes and longer stays. Enjoy picturesque views and easy access to local attractions, making it an ideal choice for travelers eager to discover the best the city has to offer. Relax and unwind in this inviting space that caters to all your needs while providing a memorable getaway.  Step into a world of tranquility and luxury in this beautifully designed apartment nestled in a serene neighborhood. Featuring contemporary furnishings, ample space, and high-end amenities, it’s the perfect retreat for both leisure and business travelers. Enjoy stunning views and quick access to local hotspots, ensuring a delightful stay filled with exploration and relaxation. This apartment offers a warm and inviting atmosphere that makes every guest feel right at home.",
                            Header = "Discover Your Apartment",
                            ImageUrls = "[\"http://localhost:5283/img/pexels-heyho-5998120.png\",\"http://localhost:5283/img/pexels-heyho-6492398.png\",\"http://localhost:5283/img/pexels-heyho-6283972.png\",\"http://localhost:5283/img/link-hoang-UoqAR2pOxMo-unsplash.png\",\"http://localhost:5283/img/pexels-heyho-5998120.png\",\"http://localhost:5283/img/pexels-s3t-koncepts-1636465088-28853343.png\",\"http://localhost:5283/img/pexels-s3t-koncepts-1636465088-28853343.png\",\"http://localhost:5283/img/pexels-s3t-koncepts-1636465088-28853343.png\",\"http://localhost:5283/img/pexels-s3t-koncepts-1636465088-28853343.png\",\"http://localhost:5283/img/pexels-s3t-koncepts-1636465088-28853343.png\"]",
                            Price = 120
                        },
                        new
                        {
                            Id = 2,
                            Amenities = "[\"WiFi\",\"Air Conditioning\",\"Kitchen\",\"Free Parking\",\"Pool\",\"4 Beds\",\"City view\"]",
                            Description = "Welcome to your ideal vacation retreat! This beautifully appointed apartment offers a perfect blend of comfort and style, with breathtaking views.",
                            Description2 = "Experience the ultimate blend of style and comfort in this stunning apartment located in the vibrant heart of the city. With modern amenities, spacious interiors, and elegant decor, it’s perfect for both short escapes and longer stays. Enjoy picturesque views and easy access to local attractions, making it an ideal choice for travelers eager to discover the best the city has to offer. Relax and unwind in this inviting space that caters to all your needs while providing a memorable getaway.  Experience the ultimate blend of style and comfort in this stunning apartment located in the vibrant heart of the city. With modern amenities, spacious interiors, and elegant decor, it’s perfect for both short escapes and longer stays. Enjoy picturesque views and easy access to local attractions, making it an ideal choice for travelers eager to discover the best the city has to offer. Relax and unwind in this inviting space that caters to all your needs while providing a memorable getaway.",
                            Header = "Your Dream Vocation",
                            ImageUrls = "[\"http://localhost:5283/img/pexels-heyho-5998120.png\",\"http://localhost:5283/img/pexels-heyho-6492398.png\",\"http://localhost:5283/img/pexels-heyho-6283972.png\",\"http://localhost:5283/img/link-hoang-UoqAR2pOxMo-unsplash.png\",\"http://localhost:5283/img/pexels-heyho-5998120.png\",\"http://localhost:5283/img/pexels-s3t-koncepts-1636465088-28853343.png\",\"http://localhost:5283/img/pexels-s3t-koncepts-1636465088-28853343.png\",\"http://localhost:5283/img/pexels-s3t-koncepts-1636465088-28853343.png\",\"http://localhost:5283/img/pexels-s3t-koncepts-1636465088-28853343.png\",\"http://localhost:5283/img/pexels-s3t-koncepts-1636465088-28853343.png\"]",
                            Price = 120
                        });
                });

            modelBuilder.Entity("api.Modal.BookingRequests", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("ApartmentId")
                        .HasColumnType("int");

                    b.Property<string>("CustomerEmail")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CustomerName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("EndDate")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("StartDate")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.HasIndex("ApartmentId");

                    b.ToTable("BookingRequest");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            ApartmentId = 1,
                            CustomerEmail = "alice@example.com",
                            CustomerName = "Alice Johnson",
                            EndDate = new DateTime(2024, 10, 20, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            StartDate = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified).AddTicks(1997)
                        },
                        new
                        {
                            Id = 2,
                            ApartmentId = 1,
                            CustomerEmail = "bob@example.com",
                            CustomerName = "Bob Smith",
                            EndDate = new DateTime(2024, 10, 30, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            StartDate = new DateTime(2024, 10, 25, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        },
                        new
                        {
                            Id = 3,
                            ApartmentId = 2,
                            CustomerEmail = "charlie@example.com",
                            CustomerName = "Charlie Brown",
                            EndDate = new DateTime(2024, 11, 5, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            StartDate = new DateTime(2024, 11, 1, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        });
                });

            modelBuilder.Entity("api.Modal.BookingRequests", b =>
                {
                    b.HasOne("api.Modal.Apartment", null)
                        .WithMany("BookingRequest")
                        .HasForeignKey("ApartmentId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("api.Modal.Apartment", b =>
                {
                    b.Navigation("BookingRequest");
                });
#pragma warning restore 612, 618
        }
    }
}
