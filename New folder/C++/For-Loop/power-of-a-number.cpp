#include<iostream>
using namespace std;
int main()
{

  int num,power,ans=1;
  cout<<"Enter base:";
  cin>>num;
  cout<<"Enter power:";
  cin>>power;


  for(int i=1; i<=power; i++){
    ans=ans*num;
  }

  cout<<ans;


return 0;
}