#include<iostream>
using namespace std;

int main() {
  int a;
  cout<<"enter year:";
  cin>>a;
  if(a%4==0 || a%400==0){
    cout<<"leap year";
  }
  else{
    cout<<"not leap year";
  }
  return 0;
}