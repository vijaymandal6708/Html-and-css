#include<iostream>
using namespace std;
int main()
{
  int num,ans=0;
  cout<<"Enter a number:";
  cin>>num;

  for(int i=1; i<=num; i++){
    ans=ans+(i*i);
  }
  cout<<ans;

return 0;
}