#include<iostream>
using namespace std;
int main()
{
  int num;
  cout<<"Enter a number:";
  cin>>num;

  if(num>=0 && num<=40){
    cout<<"D";
  }
  else if(num>40 && num<=60){
    cout<<"C";
  }
  else if(num>60 && num<=80){
    cout<<"B";
  }
  else if(num>80 && num<=90){
    cout<<"A";
  }
  else{
    cout<<"Invalid Input";
  }

return 0;
}