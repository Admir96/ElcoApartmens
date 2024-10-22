using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.Modal
{
  public class Apartment
{
  [Key]
    public int Id { get; set; }
    public int Price {get; set;}
    public required string Header { get; set; }
    public required string Description { get; set; }
    public required string Description2 { get; set; }
  
  public required string[]  Amenities {get;set;}

    public List<BookingRequests> BookingRequest { get; set; } = new List<BookingRequests>();

      public required string[] ImageUrls { get; set; }
}
}