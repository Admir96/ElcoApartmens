using System.ComponentModel.DataAnnotations;


namespace api.Modal
{
  public class BookingRequests
{   
 
  [Key]
    public int Id { get; set; }

    [Required]
    public required string CustomerName { get; set; }

    [Required]
    [EmailAddress]
    public required string CustomerEmail { get; set; }

    [Required]
    public DateTime StartDate { get; set; }

    [Required]
    public DateTime EndDate { get; set; }

    public int ApartmentId { get; set; }
}
}