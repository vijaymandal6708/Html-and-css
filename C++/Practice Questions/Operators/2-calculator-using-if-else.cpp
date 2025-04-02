#include<iostream>
using namespace std;

int main() {
  float a,b;
  char operation;
  cout<<"Enter two numbers:";
  cin>>a>>b;
  cout<<"Enter '+' for addition";
  cout<<endl<<"Enter '-' for subtraction";
  cout<<endl<<"Enter '*' for multiplication";
  cout<<endl<<"Enter '/' for division"<<endl<<endl;
  cin>>operation;

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