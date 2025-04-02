#include<iostream>
using namespace std;
int main()
{
  int init,final;
  cout<<"Enter starting point of range:";
  cin>>init;
  cout<<endl<<"Enter ending point of range:";
  cin>>final;

  for(int i=init; i<=final; i++){
    if(i%3==0 && i%5==0){
      cout<<i<<endl;
    }
  }

return 0;
}