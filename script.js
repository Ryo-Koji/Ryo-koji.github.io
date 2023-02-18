if (window.DeviceMotionEvent) {
  window.addEventListener("devicemotion", function(event) {
    var acceleration = event.accelerationIncludingGravity.z;
    var previousTime = null;
    var previousSpeed = 0;
    var speed = 0;

    function calculateSpeed(acceleration) {
      var currentTime = new Date().getTime();

      if (previousTime !== null) {
        var timeDiff = currentTime - previousTime;

        // 速度を計算する
        speed = previousSpeed + acceleration * timeDiff;
      }

      // 前の速度と時間を保存する
      previousSpeed = speed;
      previousTime = currentTime;

      return speed;
    }

    // 速度を更新する
    var speed = calculateSpeed(acceleration);
    document.getElementById("speed").innerHTML = speed.toFixed(2) + " m/s";
  });
}
