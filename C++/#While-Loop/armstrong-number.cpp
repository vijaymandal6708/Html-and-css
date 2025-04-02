#include<iostream>
using namespace std;
int main()
{
  int num,ans=0,temp;
  cout<<"Enter a number:";
  cin>>num;
  temp=num;

  while(num>0){
    int digit=num%10;
    ans+=digit*digit*digit;
    num=num/10;
    }
    if(ans==temp){
      cout<<"Armstrong.";
    }
    else{
      cout<<"Not an Armstrong.";
    }

  return 0;
}