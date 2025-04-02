#include<iostream>
using namespace std;
int main()
{

  int num,rev=0,comp;
  cout<<"Enter a number:";
  cin>>num;
  comp=num;

  while(num>0){
    int digit=num%10;
    rev=rev*10+digit;
    num=num/10;
  }
  if(rev==comp){
    cout<<"Palindrome number";
  }
  else{
    cout<<"Not a palindrome number";
  }

return 0;
}