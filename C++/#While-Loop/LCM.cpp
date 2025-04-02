#include<iostream>
using namespace std;
int main()
{
  int num1,num2,max,i;
  cout<<"Enter two numbers:";
  cin>>num1>>num2;

  max=(num1>num2)? num1:num2;
  i=max;

  while(1){
    if(i%num1==0 && i%num2==0)
    {
      break;
    }
    i=max+i;
  }

  cout<<i;



return 0;
}