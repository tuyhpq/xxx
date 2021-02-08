<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="text-center">
              <img
                src="https://graph.facebook.com/me/picture?type=large&amp;access_token=EAAAAZAw4FxQIBAJAiHyXM9r75HLjlNNZCL30qBMktFvv3GKbhwWK9BP2aiNSKVOpZChsnb6CoKC5LSl3ZB68OBfOQ6uDSBQjMieR8fZCOkDUfqZCYZAke0fbEPEAdei4pAni3JSydKJkyNZC4hRvoH1GRH5fg2NqGQ2QHuZBXNmpYFiQ910YpgeeY"
                class="profile-user-img img-fluid img-circle"
              />
            </div>
            <h3 class="profile-username text-center">
              <a href="https://www.facebook.com/profile.php?id=100003656768174">Nguyễn Tuyết Linh</a>
            </h3>

            <ul class="list-group list-group-unbordered mb-3">
              <li class="list-group-item">
                <p class="font-weight-bold">ID</p>
                <p>{{ $store.state.user.id }}</p>
              </li>
            </ul>

            <ul class="list-group list-group-unbordered mb-3">
              <li class="list-group-item">
                <p class="font-weight-bold">Access Token</p>
                <p>{{ $store.state.user.accessToken }}</p>
              </li>
            </ul>

            <ul class="list-group list-group-unbordered mb-3">
              <li class="list-group-item">
                <p class="font-weight-bold">Cookie</p>
                <p>{{ $store.state.user.cookie }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
