const style = { width: 200, backgroundColor: 'white', borderRadius: 10, borderColor: "grey", borderWidth: 1, padding: 10 };

export function PostComponent({ name, subtitle, time, image, description }) {
    return ( <div style={style}>
        <div style={{ display: "flex" }}>
            <img src={image} style={{
                width: 30,
                height: 30,
                borderRadius: 20
            }} alt="" />
            <div style={{ fontSize: 10, marginLeft: 10 }}>
                <b>{name}</b>
            <div>{subtitle}</div>
            {time !== undefined ? (<div style={{ display: "flex" }}>
                <div>{time}</div>
                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdkG0O0uh0JpEO1NJ-Ya0M3Kz44Msmi3ZaIA&sg"} style={{ width: 12, height: 12, marginLeft: 2 }}  alt="" />
                </div>) : null}
        </div>
    </div>
    <div style={{ fontSize: 12 }}>
        {description}
    </div>
    </div>
    );
}