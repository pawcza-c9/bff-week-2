export default function Lights() {
    return (
        <>
            {/*An ambient light that creates a soft light against the object */}
            <ambientLight intensity={0.5} />
            {/*An directional light which aims form the given position */}
            <directionalLight position={[10, 10, 5]} intensity={1} />
            {/*An point light, basically the same as directional. This one points from under */}
            <pointLight position={[0, -10, 5]} intensity={1} />
        </>
    );
}
