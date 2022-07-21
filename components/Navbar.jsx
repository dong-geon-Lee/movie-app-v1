import { useRouter } from "next/router";
import { requests } from "../requests";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="bg-gray-600 p-5 text-gray-200">
      <div className="flex justify-center space-x-10 text-xl sm:text-2xl">
        <p
          className="cursor-pointer hover:text-white"
          onClick={() => router.push(`/?genre=fetchTrending`)}
        >
          {requests.fetchTrending.title}
        </p>

        <p
          className="cursor-pointer hover:text-white"
          onClick={() => router.push(`/?genre=fetchTopRated`)}
        >
          {requests.fetchTopRated.title}
        </p>
      </div>
    </div>
  );
}

//  Navbar 의 목적
//  API 를 2가지 종류로 받는데 필요한 역할을 수행한다.
// requests의 객체 key name을 이용해서 2가지의 API 리소스를 클릭에
// 따라서 다르게 받을 수 있고 그 데이터로 렌딩 페이지를 꾸밀 수 있다.
// 그래서 그 목적을 수행하기 위해서는 query 문을 만들 필요가 있었다.
// 이어서 query 문을 이용해서 onClick 시, 해당 url로 이동되면서
// query (fetchTrending or fetchTopRated)값을 얻을 수 있다.
// 이는 requests의 리소스를 활용하기 위한 의도적인 트릭이다.
// 결과적으로 쿼리를 이용해서 목표를 달성할수있다.
// 시작 url을 /? 형태로 시작했던 이유가 page에 파일을 추가하지 않으려고
// 그랬던것이다. 다이내믹 라우터의 속성이 있으니까 바로 쿼리문으로 시작한다.
