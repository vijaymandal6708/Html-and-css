#include<iostream>
using namespace std;
int main()
{
  int num,ans=0,temp,start,end,i,count=0;
  cout<<"Enter start:";
  cin>>start>>end;

  for( i=start; i<=end; i++){
    while(i>0){
    temp=i;
    int digit=i%10;
    ans=ans+(digit*digit*digit);
    i=i/10;
    }
    if(ans==temp){
      count++;
    }
  }
  if(count==1){
    cout<<i<<endl;
  }

  count=0;
  

return 0;
}