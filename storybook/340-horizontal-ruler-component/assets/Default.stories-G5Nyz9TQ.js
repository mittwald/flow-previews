import{R as e}from"./index-BwDkhjyp.js";import"./IconApp-Bb0sM1mV.js";import{o as B,p as y,q as H,r as L,s as P}from"./IconWarning-CLj4DHmJ.js";import"./index-CuJFXN35.js";import{P as A}from"./flowComponent-Bzcp-389.js";import{c as _}from"./clsx-B-dksMZM.js";import{E as q}from"./index-dhKWstfL.js";import"./index-CeXKRVdR.js";import"./index-BYj0i9xS.js";import"./index-ClOqxtRX.js";import{d as w}from"./dummyText-CX_I_Wpl.js";import"./index-CWwTjzb3.js";import{$ as W,C as $,M as p}from"./index-C99FM3s7.js";import{L as u}from"./Link-B6_ZJbhj.js";import{B as r}from"./Button-C-7AlVVr.js";import{A as G}from"./Avatar-CXfun-T8.js";import{I as D}from"./Image-COrYBTFk.js";import{T as d}from"./Text-CitxMihe.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-X5uBQEpu.js";import"./index-B8XB3FuZ.js";import"./index-C4_RQZLY.js";import"./useFocusable-LawXdULP.js";import"./utils-B2_e5HNY.js";import"./usePress-D9jB10HI.js";import"./FocusScope-jcUMjgZJ.js";import"./useEvent-BKNv45VH.js";import"./Dialog-Bjj1S_RZ.js";import"./RSPContexts-Bc9pl35m.js";import"./OverlayArrow-D_7EpnQ2.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-IXxfzPeK.js";import"./useControlledState-C0C-dzuH.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabels-C0fIA4N3.js";import"./VisuallyHidden-X5SqJT1V.js";import"./Collection-B8yNjfsY.js";import"./Popover-D9nPnnAb.js";import"./Separator-YZPjw3E6.js";import"./Text-BgNBscSb.js";import"./deepFindOfType-CmKNZ8si.js";import"./react-children-utilities-CseWD4BL.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-CJYm9ODm.js";import"./Button-CmF3agSr.js";const R="flow--header-navigation",O="flow--header-navigation--link",j="flow--header-navigation--button",z="flow--header-navigation--inverse",o={headerNavigation:R,link:O,button:j,inverse:z},n=t=>{const{children:C,className:b,inverse:c,...M}=t,k=_(o.headerNavigation,c&&o.inverse,b),S={Link:{render:(l,a)=>e.createElement("li",null,e.createElement(l,{...a,className:o.link,unstyled:!0},e.createElement(q,null,a.children)))},Button:{render:(l,a)=>e.createElement("li",null,e.createElement(l,{...a,className:o.button,variant:"plain",inverse:c}))}};return e.createElement("nav",{className:k,role:"navigation",...M},e.createElement("ul",null,e.createElement(A,{props:S},C)))};n.__docgenInfo={description:"",methods:[],displayName:"HeaderNavigation",props:{className:{required:!1,tsType:{name:"string"},description:""},inverse:{required:!1,tsType:{name:"boolean"},description:""}},composes:["PropsWithChildren"]};n.__docgenInfo={description:"",methods:[],displayName:"HeaderNavigation",props:{className:{required:!1,tsType:{name:"string"},description:""},inverse:{required:!1,tsType:{name:"boolean"},description:""}},composes:["PropsWithChildren"]};const we={title:"Navigation/HeaderNavigation",component:n,parameters:{controls:{exclude:["className"]}},render:t=>e.createElement(n,{"aria-label":"Header navigation",...t},e.createElement(u,{href:"#"},"Getting startet"),e.createElement(u,{href:"#","aria-current":"page"},"Components"),e.createElement(r,null,e.createElement(B,null)))},i={},s={render:t=>e.createElement(n,{"aria-label":"Header navigation",...t},e.createElement(r,null,e.createElement(B,null)),e.createElement(r,null,e.createElement(y,null)),e.createElement(r,null,e.createElement(H,null)),e.createElement(W,null,e.createElement(r,null,e.createElement(G,null,e.createElement(D,{alt:"Gopher",src:w.imageSrc}))),e.createElement($,null,e.createElement(p,null,e.createElement(L,null),e.createElement(d,null,"Profile")),e.createElement(p,null,e.createElement(P,null),e.createElement(d,null,"Logout")))))},m={args:{inverse:!0},parameters:{backgrounds:{default:"dark",values:[{name:"dark",value:"#002A7B"}]}}};var g,v,E;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(E=(v=i.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var f,h,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: props => <HeaderNavigation aria-label="Header navigation" {...props}>
      <Button>
        <IconSearch />
      </Button>
      <Button>
        <IconSupport />
      </Button>
      <Button>
        <IconNotification />
      </Button>
      <ContextMenuTrigger>
        <Button>
          <Avatar>
            <Image alt="Gopher" src={dummyText.imageSrc} />
          </Avatar>
        </Button>
        <ContextMenu>
          <MenuItem>
            <IconSettings />
            <Text>Profile</Text>
          </MenuItem>
          <MenuItem>
            <IconLogout />
            <Text>Logout</Text>
          </MenuItem>
        </ContextMenu>
      </ContextMenuTrigger>
    </HeaderNavigation>
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var I,N,T;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    inverse: true
  },
  parameters: {
    backgrounds: {
      default: "dark",
      values: [{
        name: "dark",
        value: "#002A7B"
      }]
    }
  }
}`,...(T=(N=m.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};const We=["Default","WithContextMenu","Inverse"];export{i as Default,m as Inverse,s as WithContextMenu,We as __namedExportsOrder,we as default};
