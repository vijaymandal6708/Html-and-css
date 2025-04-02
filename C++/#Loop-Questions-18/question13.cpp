#include<iostream>
using namespace std;
int main()
{
  int start,end;
  cout<<"Enter starting point:";
  cin>>start;
  cout<<"Enter ending point:";
  cin>>end;

  for(int i=start; i<=end; i++){
    int count=0;
    for(int j=2; j<i; j++){
      if(i%j==0){
        count++;
        break;
      }
    }
    if(count<1){
      cout<<i<<endl;
    }
  }

return 0;
}