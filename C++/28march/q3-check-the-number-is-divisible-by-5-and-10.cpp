#include<iostream>
using namespace std;
int main()
{
  int num;
  cout<<"Enter a number:";
  cin>>num;

  (num%5==0 && num%10==0)? cout<<"divisible": cout<<"not divisible";

return 0;
}