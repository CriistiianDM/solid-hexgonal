using System;

namespace menssage.Infrastructure {

    public interface IPersonData
    {
        string name { get; set; }
        string country { get; set; }
        decimal salary { get; set; }
        int age { get; set; }
    }

    /**
      * Class for set data
    */
    public abstract class IntData
    {
        public abstract void InsertData();
    }

    public class IntDataUser : IntData , IPersonData
    {
        public string name { get; set; }
        public string country { get; set; }
        public int age { get; set; }

        public override void InsertData()
        {
            Console.WriteLine("Insert your fullname:");
            this.name = Console.ReadLine();

            Console.WriteLine("Insert your Country:");
            this.country = Console.ReadLine();
            
            Console.WriteLine("Insert your age old:");
            this.age = this.convertStringToInt(Console.ReadLine());

            Console.WriteLine("Insert your salary:");
            this.age = this.convertStringToInt(Console.ReadLine());
        }

        /**
          * Convert string to int
        */
        private int convertStringToInt(string text) 
        {
            return int.TryParse(text, out int age) ? age : 0;
        }
    }
}
