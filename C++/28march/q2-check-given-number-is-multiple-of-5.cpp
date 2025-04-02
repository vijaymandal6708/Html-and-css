#include<iostream>
using namespace std;
int main()
{
  int num;
  cout<<"Enter a number:";
  cin>>num;

  (num%5==0)? cout<<"multiple of 5": cout<<"not multiple of 5";

return 0;
}