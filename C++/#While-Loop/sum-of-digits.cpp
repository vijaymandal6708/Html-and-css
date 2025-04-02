#include<iostream>
using namespace std;
int main()
{

  int num,digit,sum=0;
  cout<<"Enter a Number:";
  cin>>num;

  while(num>0)
  {
    int digit=num%10;
    sum=digit+sum;
    num/=10;
  }

  cout<<sum;

return 0;
}