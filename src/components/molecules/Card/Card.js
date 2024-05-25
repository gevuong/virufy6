import Title from "~/components/atoms/Title/Title";
import Text from "~/components/atoms/Text/Text";
import ImageAtomLocal from "~/components/atoms/imageAtom/ImageAtomLocal";

export default function Card({
  CardsData,
  CardClassProps
}) {
  return (
    <div className="flex flex-wrap mb-4 text-center items-center w-[100%] justify-center mt-5">
      {CardsData?.map(({ route, name, text, subtitle, id }) => (    
          <div 
            className="flex flex-col text-center items-center card-content" // New class for the card content div
            style={{ 
              marginBottom: '30px',
              marginTop: '4px',
              borderRadius: '0px',
              margin: '20px',
              // height: '450px',
              // boxShadow: '0px 0px 15px 0px rgba(0,0,0,0.75)',
              // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add a semi-transparent background color to make text more readable
              position: 'relative', // Add position relative to the card content div
            }}
            key={id}
          >
            <div 
            style={{
              position: 'absolute', top: 20, zIndex: 1 }}>
            <Text
              Style="subtitle"
              Text={subtitle}
              TextClassProps="text-white"
            />
              </div>
              <div>
            <ImageAtomLocal
              imagesize="375x450"
              border=""
              src={route}
              alt="Image card"
              ImageStyleProps="mt-3"
            />
            
            {/* <div style={{ position: 'absolute', bottom: 0, right: 0, top: 0, left: 0, width: '100%', height: '%', backgroundColor: 'rgba(0, 0, 0, 0.3)' }}></div> */}
             </div>

            <div 
              className="inset-0 bg-black bg-opacity-50 overflow-hidden" 
              id="inner"
              style={{
                position: 'absolute',
                top: 300,
                left: 0,
                right: 0,
                bottom: 0,
                paddingBottom: 0 
              }}
            >
              {name && (
                <Title
                  H="h4"
                  Text={name}
                  TitleClassProps="mt-[20px] text-white"
                  as='span'
                />
              )}
              <Text
                Style="small"
                Text={text}
                TextClassProps="ml-[50px] mr-[50px] mt-[20px] mb-0 text-white"
              />
            </div>
          </div>
      ))}
    </div>
  )
}
