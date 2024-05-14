import{R as e}from"./index-BwDkhjyp.js";import"./IconApp-D-kcT16p.js";import{o as S,p as P,q as A,r as W,s as _}from"./IconWarning-Cw7drCLR.js";import"./index-DRPLF6b1.js";import{P as q}from"./flowComponent-B3-LTTWn.js";import{c as F}from"./clsx-B-dksMZM.js";import{E as $}from"./index-dhKWstfL.js";import"./index-Bm7Ce7um.js";import"./index-C0kgWbNG.js";import"./index-BKAfeY52.js";import{d as G}from"./dummyText-CX_I_Wpl.js";import"./index-CrWKfo3O.js";import{$ as D,C as R,M as u}from"./index-CseK0um6.js";import{L as d}from"./Link-CWeksfmF.js";import{B as a}from"./Button-C-TBIYN-.js";import{A as O}from"./Avatar-BfsWB2nf.js";import{I as j}from"./Image-BmMC8weQ.js";import{T as g}from"./Text-B0HvyfcO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B8XB3FuZ.js";import"./index-DDlP1Cgs.js";import"./useFocusable-Ddi47NB9.js";import"./utils-D7InqjV7.js";import"./usePress-BZaguEpt.js";import"./FocusScope-4iKrC6rw.js";import"./useEvent-BkyXxHlT.js";import"./Dialog-CeEUt42U.js";import"./RSPContexts-Bc9pl35m.js";import"./OverlayArrow-BBzZ3ne4.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-BaJnhnaM.js";import"./useControlledState-C0C-dzuH.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabels-DFbr5jK-.js";import"./VisuallyHidden-DV81ojJ5.js";import"./Collection-D_WRBQDn.js";import"./Popover-C71TfZyc.js";import"./Text-nCCH5eH7.js";import"./deepFindOfType-CmKNZ8si.js";import"./react-children-utilities-CseWD4BL.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-D3fzZb_z.js";import"./Button-tv1ba3Dw.js";const z="flow--header-navigation",J="flow--header-navigation--link",K="flow--header-navigation--button",o={headerNavigation:z,link:J,button:K,"static-black":"flow--header-navigation--static-black","static-white":"flow--header-navigation--static-white"},r=t=>{const{children:T,className:C,color:p="primary",...M}=t,H=F(o.headerNavigation,o[p],C),L={Link:{render:(m,n)=>e.createElement("li",null,e.createElement(m,{...n,className:o.link,unstyled:!0},e.createElement($,null,n.children)))},Button:{render:(m,n)=>e.createElement("li",null,e.createElement(m,{...n,className:o.button,variant:"plain",color:p}))}};return e.createElement("nav",{className:H,role:"navigation",...M},e.createElement("ul",null,e.createElement(q,{props:L},T)))};r.__docgenInfo={description:"",methods:[],displayName:"HeaderNavigation",props:{className:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:'"primary" | "static-black" | "static-white"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"static-black"'},{name:"literal",value:'"static-white"'}]},description:'@default "primary"'}},composes:["PropsWithChildren"]};r.__docgenInfo={description:"",methods:[],displayName:"HeaderNavigation",props:{className:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:'"primary" | "static-black" | "static-white"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"static-black"'},{name:"literal",value:'"static-white"'}]},description:'@default "primary"'}},composes:["PropsWithChildren"]};const qe={title:"Navigation/HeaderNavigation",component:r,parameters:{controls:{exclude:["className"]}},render:t=>e.createElement(r,{"aria-label":"Header navigation",...t},e.createElement(d,{href:"#"},"Getting startet"),e.createElement(d,{href:"#","aria-current":"page"},"Components"),e.createElement(a,null,e.createElement(S,null))),argTypes:{color:{control:"inline-radio",options:["primary","static-black","static-white"]}}},i={},l={render:t=>e.createElement(r,{"aria-label":"Header navigation",...t},e.createElement(a,null,e.createElement(S,null)),e.createElement(a,null,e.createElement(P,null)),e.createElement(a,null,e.createElement(A,null)),e.createElement(D,null,e.createElement(a,null,e.createElement(O,null,e.createElement(j,{alt:"Gopher",src:G.imageSrc}))),e.createElement(R,null,e.createElement(u,null,e.createElement(W,null),e.createElement(g,null,"Profile")),e.createElement(u,null,e.createElement(_,null),e.createElement(g,null,"Logout")))))},s={args:{color:"static-black"},parameters:{backgrounds:{default:"dark",values:[{name:"dark",value:"#E0EBFF"}]}}},c={args:{color:"static-white"},parameters:{backgrounds:{default:"dark",values:[{name:"dark",value:"#002A7B"}]}}};var v,f,E;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:"{}",...(E=(f=i.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var h,k,b;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(b=(k=l.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var x,N,I;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    color: "static-black"
  },
  parameters: {
    backgrounds: {
      default: "dark",
      values: [{
        name: "dark",
        value: "#E0EBFF"
      }]
    }
  }
}`,...(I=(N=s.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var y,B,w;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    color: "static-white"
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
}`,...(w=(B=c.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};const Fe=["Default","WithContextMenu","StaticBlack","StaticWhite"];export{i as Default,s as StaticBlack,c as StaticWhite,l as WithContextMenu,Fe as __namedExportsOrder,qe as default};
