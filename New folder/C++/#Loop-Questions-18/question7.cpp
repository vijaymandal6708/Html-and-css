#include<iostream>
using namespace std;
int main()
{
  int num;
  cout<<"Enter a number:";
  cin>>num;

  for(int i=2; i<num; i++){
    if(num%i==0){
      cout<<"not a prime";
      return 0;
    }
  }
  cout<<"prime";

return 0;
}