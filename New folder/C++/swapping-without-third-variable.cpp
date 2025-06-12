#include<iostream>
using namespace std;
int main()
{
  int num1=30, num2=60;

  num1= num1+num2;
  num2= num1-num2;
  num1= num1-num2;

  cout<<num1<<endl<<num2;
return 0;
}