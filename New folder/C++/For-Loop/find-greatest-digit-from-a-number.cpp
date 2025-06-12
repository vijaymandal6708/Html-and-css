#include<iostream>
using namespace std;
int main()
{

  int num;
  cout<<"Enter a number:";
  cin>>num;
  int digit=0,max=0;

  while(num>0){
    digit=num%10;
    if(digit>max){
      max=digit;
    }
    num=num/10;
  }
  cout<<max;

return 0;
}