#include<iostream>
using namespace std;
int main()
{

  int num,min=9;
  cout<<"Enter a number:";
  cin>>num;

  while(num>0){
    int digit=num%10;
    if(digit<min){
      min=digit;
    }
    num=num/10;
  }
  cout<<min;

return 0;
}