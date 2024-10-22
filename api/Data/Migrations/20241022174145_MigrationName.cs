using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace api.Data.Migrations
{
    /// <inheritdoc />
    public partial class MigrationName : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Apartments",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Price = table.Column<int>(type: "int", nullable: false),
                    Header = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description2 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Amenities = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ImageUrls = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Apartments", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "BookingRequest",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CustomerName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CustomerEmail = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    StartDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    EndDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ApartmentId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BookingRequest", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BookingRequest_Apartments_ApartmentId",
                        column: x => x.ApartmentId,
                        principalTable: "Apartments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Apartments",
                columns: new[] { "Id", "Amenities", "Description", "Description2", "Header", "ImageUrls", "Price" },
                values: new object[,]
                {
                    { 1, "[\"WiFi\",\"Air Conditioning\",\"Kitchen\",\"Free Parking\",\"Pool\",\"2 Beds\",\"City view\"]", "Explore a serene retreat designed for relaxation. Enjoy spacious living with modern touches and amenities that make your stay unforgettable.", "SExperience the ultimate blend of style and comfort in this stunning apartment located in the vibrant heart of the city. With modern amenities, spacious interiors, and elegant decor, it’s perfect for both short escapes and longer stays. Enjoy picturesque views and easy access to local attractions, making it an ideal choice for travelers eager to discover the best the city has to offer. Relax and unwind in this inviting space that caters to all your needs while providing a memorable getaway.  Step into a world of tranquility and luxury in this beautifully designed apartment nestled in a serene neighborhood. Featuring contemporary furnishings, ample space, and high-end amenities, it’s the perfect retreat for both leisure and business travelers. Enjoy stunning views and quick access to local hotspots, ensuring a delightful stay filled with exploration and relaxation. This apartment offers a warm and inviting atmosphere that makes every guest feel right at home.", "Discover Your Apartment", "[\"http://localhost:5283/img/pexels-heyho-5998120.png\",\"http://localhost:5283/img/pexels-heyho-6492398.png\",\"http://localhost:5283/img/pexels-heyho-6283972.png\",\"http://localhost:5283/img/link-hoang-UoqAR2pOxMo-unsplash.png\",\"http://localhost:5283/img/pexels-heyho-5998120.png\",\"http://localhost:5283/img/pexels-s3t-koncepts-1636465088-28853343.png\",\"http://localhost:5283/img/pexels-s3t-koncepts-1636465088-28853343.png\",\"http://localhost:5283/img/pexels-s3t-koncepts-1636465088-28853343.png\",\"http://localhost:5283/img/pexels-s3t-koncepts-1636465088-28853343.png\",\"http://localhost:5283/img/pexels-s3t-koncepts-1636465088-28853343.png\"]", 120 },
                    { 2, "[\"WiFi\",\"Air Conditioning\",\"Kitchen\",\"Free Parking\",\"Pool\",\"4 Beds\",\"City view\"]", "Welcome to your ideal vacation retreat! This beautifully appointed apartment offers a perfect blend of comfort and style, with breathtaking views.", "Experience the ultimate blend of style and comfort in this stunning apartment located in the vibrant heart of the city. With modern amenities, spacious interiors, and elegant decor, it’s perfect for both short escapes and longer stays. Enjoy picturesque views and easy access to local attractions, making it an ideal choice for travelers eager to discover the best the city has to offer. Relax and unwind in this inviting space that caters to all your needs while providing a memorable getaway.  Experience the ultimate blend of style and comfort in this stunning apartment located in the vibrant heart of the city. With modern amenities, spacious interiors, and elegant decor, it’s perfect for both short escapes and longer stays. Enjoy picturesque views and easy access to local attractions, making it an ideal choice for travelers eager to discover the best the city has to offer. Relax and unwind in this inviting space that caters to all your needs while providing a memorable getaway.", "Your Dream Vocation", "[\"http://localhost:5283/img/pexels-heyho-5998120.png\",\"http://localhost:5283/img/pexels-heyho-6492398.png\",\"http://localhost:5283/img/pexels-heyho-6283972.png\",\"http://localhost:5283/img/link-hoang-UoqAR2pOxMo-unsplash.png\",\"http://localhost:5283/img/pexels-heyho-5998120.png\",\"http://localhost:5283/img/pexels-s3t-koncepts-1636465088-28853343.png\",\"http://localhost:5283/img/pexels-s3t-koncepts-1636465088-28853343.png\",\"http://localhost:5283/img/pexels-s3t-koncepts-1636465088-28853343.png\",\"http://localhost:5283/img/pexels-s3t-koncepts-1636465088-28853343.png\",\"http://localhost:5283/img/pexels-s3t-koncepts-1636465088-28853343.png\"]", 120 }
                });

            migrationBuilder.InsertData(
                table: "BookingRequest",
                columns: new[] { "Id", "ApartmentId", "CustomerEmail", "CustomerName", "EndDate", "StartDate" },
                values: new object[,]
                {
                    { 1, 1, "alice@example.com", "Alice Johnson", new DateTime(2024, 10, 20, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified).AddTicks(1997) },
                    { 2, 1, "bob@example.com", "Bob Smith", new DateTime(2024, 10, 30, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2024, 10, 25, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 3, 2, "charlie@example.com", "Charlie Brown", new DateTime(2024, 11, 5, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2024, 11, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) }
                });

            migrationBuilder.CreateIndex(
                name: "IX_BookingRequest_ApartmentId",
                table: "BookingRequest",
                column: "ApartmentId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BookingRequest");

            migrationBuilder.DropTable(
                name: "Apartments");
        }
    }
}
