#include<iostream>
using namespace std;

int main() {
  float a,b;
  char operation;
  cout<<"Enter expression like = 2+5,10-2,8*5,20/2"<<endl<<"Enter your expression:";
  cin>>a>>operation>>b;

  if(operation=='+')
  {
    cout<<endl<<"The sum of these two numbers is:"<<a+b;
  }

  else if(operation=='-')
  {
    cout<<endl<<"The difference of these two numbers is:"<<a-b;
  }

  else if(operation=='*')
  {
    cout<<endl<<"The sum product these two numbers is:"<<a*b;
  }

  else if(operation=='/')
  {
    cout<<endl<<"The quotient of these two numbers is:"<<a/b;
  }

  else{
    cout<<"You have entered an invalid operation";
  }
  
  return 0; 
}