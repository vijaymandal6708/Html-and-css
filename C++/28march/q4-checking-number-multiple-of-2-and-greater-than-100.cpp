#include<iostream>
using namespace std;
int main()
{
  int num;
  cout<<"Enter a number:";
  cin>>num;

  (num%2==0 && num>100)? cout<<"true": cout<<"false";

return 0;
}