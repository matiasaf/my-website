import Head from 'next/head';
import Navbar from '../components/Navbar';

const Profile = () => (
    <div className="text-sans">
        <Head>
            <title>Profile Page</title>
        </Head>
        <Navbar />

        <div className="container mx-auto px-4 text-center">
            <h1 className="font-momo font-bold text-4xl text-blue-300">
                Profile Page
            </h1>
        </div>

        <p className="px-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            eget leo nisl. Aenean sodales consequat justo, nec elementum nunc
            rutrum rutrum. Vestibulum porta sodales ligula a luctus. Cras
            lacinia magna pellentesque sapien vulputate, nec fringilla nulla
            lobortis. Quisque venenatis, urna sit amet posuere rutrum, orci quam
            ultricies eros, at porta lectus massa nec orci. Sed posuere ligula
            ex, finibus tempus ex feugiat sit amet. Sed congue tortor eget dui
            porta sagittis. Integer laoreet turpis nunc, auctor vulputate nunc
            condimentum in. Vivamus eu dictum est. Sed ac augue odio. Donec
            rhoncus, massa et ornare luctus, ante felis elementum dolor, vel
            pharetra mi risus sit amet velit. Vivamus condimentum felis eu odio
            rutrum finibus. Aenean in rhoncus ante, nec facilisis lectus.
            Praesent nulla massa, finibus ut purus ut, euismod semper dui.
            Suspendisse vel vestibulum diam. Curabitur nec sapien diam. Nam
            sollicitudin lectus sapien, id imperdiet lorem malesuada sit amet.
            Integer non sem ac turpis convallis faucibus. Duis eget diam
            interdum, viverra magna ac, aliquet mauris. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Nullam sit amet elit in nisi dapibus malesuada eu eu augue. Duis
            vestibulum ipsum ut nisi faucibus, nec dapibus felis mattis. Nullam
            sollicitudin mi in dui sodales aliquam. Nam lobortis lacus vitae
            pellentesque consequat. Aliquam dui odio, viverra id ante eget,
            cursus maximus purus. Suspendisse congue mauris sapien, vel aliquam
            lorem laoreet non. Vivamus feugiat libero vel ante vehicula, eu
            maximus mauris hendrerit. Fusce malesuada quam hendrerit velit
            volutpat tempus. Mauris in mauris libero. Maecenas nisi odio,
            vulputate eget dictum quis, mattis ut mi. Etiam a neque pellentesque
            nulla dictum bibendum. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Curabitur dignissim sodales metus volutpat
            pulvinar. Fusce tempor eros nisl, vel aliquam libero tempor at.
            Donec facilisis tortor sit amet nunc porttitor, faucibus euismod
            eros dignissim. Fusce varius felis sed enim commodo, id luctus sem
            bibendum. Sed suscipit leo a arcu facilisis, consectetur
            pellentesque justo euismod. Ut iaculis eu purus non accumsan.
            Vivamus pretium laoreet justo eget dapibus. Donec in mi venenatis,
            vehicula lorem at, gravida massa. In non nisl nibh. In hac habitasse
            platea dictumst. Sed et semper tellus, nec bibendum risus. Ut et
            ultricies leo. Sed rutrum tempor augue, vel auctor enim blandit nec.
            Morbi bibendum, urna ut consectetur feugiat, nibh ipsum imperdiet
            magna, sed cursus neque sapien vel metus. Pellentesque dignissim
            nisl sed pulvinar interdum. Integer efficitur euismod felis, vitae
            tincidunt justo ullamcorper consequat. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Mauris accumsan massa at vehicula suscipit. In fringilla neque at
            gravida cursus. Etiam ut massa id dui feugiat aliquam quis vel
            felis. Phasellus dictum maximus lorem, a sollicitudin leo tempor at.
            Etiam imperdiet porta nunc, scelerisque luctus justo tempus eget.
        </p>
    </div>
);

export default Profile;
