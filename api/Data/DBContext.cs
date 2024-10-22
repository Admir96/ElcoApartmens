using Microsoft.EntityFrameworkCore;
using api.Modal;

namespace api.Data{


public class DBContext : DbContext{
 
     public DBContext(DbContextOptions options )
            : base(options)
        {
        }



        public DbSet<Apartment> Apartments { get; set; }
         public DbSet<BookingRequests> BookingRequest {get; set;}



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Apartment>().HasData(

   new Apartment {
     Id = 1, 
    Price=120,
     Header = "Discover Your Apartment",
      Description = "Explore a serene retreat designed for relaxation. Enjoy spacious living with modern touches and amenities that make your stay unforgettable.",
        Description2 = "SExperience the ultimate blend of style and comfort in this stunning apartment located in the vibrant heart of the city. With modern amenities, spacious interiors, and elegant decor, it’s perfect for both short escapes and longer stays. Enjoy picturesque views and easy access to local attractions, making it an ideal choice for travelers eager to discover the best the city has to offer. Relax and unwind in this inviting space that caters to all your needs while providing a memorable getaway. "+ " Step into a world of tranquility and luxury in this beautifully designed apartment nestled in a serene neighborhood. Featuring contemporary furnishings, ample space, and high-end amenities, it’s the perfect retreat for both leisure and business travelers. Enjoy stunning views and quick access to local hotspots, ensuring a delightful stay filled with exploration and relaxation. This apartment offers a warm and inviting atmosphere that makes every guest feel right at home.",
        
       Amenities = new string[] {"WiFi", "Air Conditioning", "Kitchen", "Free Parking", "Pool", "2 Beds", "City view"},
         ImageUrls = new string[] { "http://localhost:5283/img/pexels-heyho-5998120.png",
                                  "http://localhost:5283/img/pexels-heyho-6492398.png",
                                   "http://localhost:5283/img/pexels-heyho-6283972.png",
                                    "http://localhost:5283/img/link-hoang-UoqAR2pOxMo-unsplash.png",
                                    "http://localhost:5283/img/pexels-heyho-5998120.png",
                                     "http://localhost:5283/img/pexels-s3t-koncepts-1636465088-28853343.png",
                                     "http://localhost:5283/img/pexels-s3t-koncepts-1636465088-28853343.png",
                                     "http://localhost:5283/img/pexels-s3t-koncepts-1636465088-28853343.png",
                                     "http://localhost:5283/img/pexels-s3t-koncepts-1636465088-28853343.png",
                                      "http://localhost:5283/img/pexels-s3t-koncepts-1636465088-28853343.png", }                                                
                },  new Apartment {
                     Id = 2,
                 Price=120, Header = "Your Dream Vocation",
                  Description = "Welcome to your ideal vacation retreat! This beautifully appointed apartment offers a perfect blend of comfort and style, with breathtaking views.",
                    Description2 = "Experience the ultimate blend of style and comfort in this stunning apartment located in the vibrant heart of the city. With modern amenities, spacious interiors, and elegant decor, it’s perfect for both short escapes and longer stays. Enjoy picturesque views and easy access to local attractions, making it an ideal choice for travelers eager to discover the best the city has to offer. Relax and unwind in this inviting space that caters to all your needs while providing a memorable getaway. "+ " Experience the ultimate blend of style and comfort in this stunning apartment located in the vibrant heart of the city. With modern amenities, spacious interiors, and elegant decor, it’s perfect for both short escapes and longer stays. Enjoy picturesque views and easy access to local attractions, making it an ideal choice for travelers eager to discover the best the city has to offer. Relax and unwind in this inviting space that caters to all your needs while providing a memorable getaway.",
                      Amenities = new string[] {"WiFi", "Air Conditioning", "Kitchen", "Free Parking", "Pool", "4 Beds", "City view"},
                      ImageUrls = new string[] {  "http://localhost:5283/img/pexels-heyho-5998120.png",
                                  "http://localhost:5283/img/pexels-heyho-6492398.png",
                                   "http://localhost:5283/img/pexels-heyho-6283972.png",
                                    "http://localhost:5283/img/link-hoang-UoqAR2pOxMo-unsplash.png",
                                    "http://localhost:5283/img/pexels-heyho-5998120.png",
                                     "http://localhost:5283/img/pexels-s3t-koncepts-1636465088-28853343.png",
                                     "http://localhost:5283/img/pexels-s3t-koncepts-1636465088-28853343.png",
                                     "http://localhost:5283/img/pexels-s3t-koncepts-1636465088-28853343.png",
                                     "http://localhost:5283/img/pexels-s3t-koncepts-1636465088-28853343.png",
                                      "http://localhost:5283/img/pexels-s3t-koncepts-1636465088-28853343.png"
                                       }
                  });

                  modelBuilder.Entity<BookingRequests>().HasData(
 
                        new BookingRequests
                        {
                            Id = 1,
                            CustomerName = "Alice Johnson",
                            CustomerEmail = "alice@example.com",
                            StartDate = new DateTime(2024-10-17),
                            EndDate = new DateTime(2024, 10, 20),
                            ApartmentId = 1
                        },
                        new BookingRequests
                        {
                            Id = 2,
                            CustomerName = "Bob Smith",
                            CustomerEmail = "bob@example.com",
                            StartDate = new DateTime(2024, 10, 25),
                            EndDate = new DateTime(2024, 10, 30),
                            ApartmentId = 1
                        },
                          new BookingRequests
                        {
                            Id = 3,
                            CustomerName = "Charlie Brown",
                            CustomerEmail = "charlie@example.com",

                            StartDate = new DateTime(2024, 11, 1),
                            EndDate = new DateTime(2024, 11, 5),
                            ApartmentId = 2
                        }
                    );

        }
 
   }
}
