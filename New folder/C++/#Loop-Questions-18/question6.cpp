#include<iostream>
using namespace std;
int main()
{
  int num,ans=0;
  cout<<"Enter a number:";
  cin>>num;
  
  for(int i=1; i<=10; i++){
    ans=num*i;
    // or it can be  ans=ans+num  ans=num*i
    cout<<ans<<endl;
  }

return 0;
}