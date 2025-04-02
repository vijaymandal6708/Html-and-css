#include<iostream>
using namespace std;
int main()
{
  int num,temp,ans=0;
  cout<<"Enter a number:";
  cin>>num;
  temp=num;

  while(num>0){
    int digit=num%10;
    ans=ans*10+digit;
    num=num/10;
  }

  cout<<ans;

return 0;
}