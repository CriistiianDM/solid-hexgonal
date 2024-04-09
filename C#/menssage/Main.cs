using System;
using menssage.Infrastructure;

namespace menssage
{
    class Program
    {
        static void Main(string[] args)
        {
            IntData intUserData = new IntDataUser();
            intUserData.InsertData();
        }
    }

}