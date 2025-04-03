#include<iostream>
using namespace std;
int main()
{
  int age;
  cout<<"Enter your age:";
  cin>>age;

  if(age>=18){
    cout<<"vote";
  }
  else if(age>=0 && age<18){
    cout<<"not eligible to vote";
  }


return 0;
}