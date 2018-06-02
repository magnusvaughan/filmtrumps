<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <!-- Styles -->
    <link rel="stylesheet" href="{{ mix('/css/app.css') }}">
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <h1 class="text-center">Welcome to Horror Trumps</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <h2 class="text-center">Player 1</h2>
                @foreach($monster1 as $monster)
                <div class="card">
                    <!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
                    <div class="card-body">
                        <h5 class="card-title">{{$monster->name}}</h5>
                        <p>Physical Strength: {{$monster->physical_strength}}</p>
                        <p>Fear Factor: {{$monster->fear_factor}}</p>
                        <p>Killing Power: {{$monster->killing_power}}</p>
                        <p>Horror Rating: {{$monster->horror_rating}}</p>
                        <a href="#" class="btn btn-primary">Fight!</a>
                    </div>
                </div>
                @endforeach
            </div>
            <div class="col-md-6">
                <h2 class="text-center">Player 2</h2>
                @foreach($monster2 as $monster)
                    <div class="card">
                        <!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
                        <div class="card-body">
                            <h5 class="card-title">{{$monster->name}}</h5>
                            <p>Physical Strength: {{$monster->physical_strength}}</p>
                            <p>Fear Factor: {{$monster->fear_factor}}</p>
                            <p>Killing Power: {{$monster->killing_power}}</p>
                            <p>Horror Rating: {{$monster->horror_rating}}</p>
                            <a href="#" class="btn btn-primary">Fight!</a>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
    </div>
</body>
</html>