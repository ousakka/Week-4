let count = 0;

function display()
{
    document.getElementById("count").textContent=count;
}

function increase()
{
    count++;
    display();
}

function decrease()
{
    count--;
    display();
}

function Reset()
{
    count=0;
    display();
}

