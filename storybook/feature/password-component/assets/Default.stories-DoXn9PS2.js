import{R as e}from"./index-BwDkhjyp.js";import"./IconApp-D5gedeYa.js";import{o as T,p as w,n as D,q as P,r as W}from"./IconWarning-DT8hSaQm.js";import{L as c}from"./Link-Chr1yMF6.js";import{P as A}from"./PropsContextProvider-DwTel3aB.js";import{d as _}from"./dynamic-DKDa4OpU.js";import{c as q}from"./clsx-B-dksMZM.js";import{E as G}from"./EmulatedBoldText-B1t6hs5E.js";import{B as r}from"./Button-86gkFkCw.js";import{T as p}from"./Text-xMX89lYJ.js";import{I as R}from"./Image-CgS8BSY6.js";import{d as O}from"./dummyText-CX_I_Wpl.js";import{A as j}from"./Avatar-OOyrRuLB.js";import{a as z,C as F,M as u}from"./ContextMenuTrigger-BtKIOhjD.js";import{s as J,a as K}from"./storyBackgrounds-BHxp8d-8.js";import{a as Q,M as U}from"./ModalTrigger-BTppStbh.js";import{H as V}from"./Heading-BMx6bwiN.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-B5uZ4s1Y.js";import"./index-DVe9vSxq.js";import"./index-B8XB3FuZ.js";import"./utils-CcQIssJO.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-CqD9eiQF.js";import"./useFocusable-BcMbiAJh.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-5UBwHS6-.js";import"./useLocalizedStringFormatter-CbSA8sNn.js";import"./Button-CJW8IwaF.js";import"./Text-22vGTmcn.js";import"./react-children-utilities-CseWD4BL.js";import"./ContextMenu.module-68N5lvfm.js";import"./PopoverTrigger-auuHu7tU.js";import"./OverlayTrigger-B-iEVEid.js";import"./RSPContexts-Bc9pl35m.js";import"./OverlayArrow-BERv84ls.js";import"./number-nHrFdSb-.js";import"./useControlledState-C0C-dzuH.js";import"./FocusScope-BuxQ1peU.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-kg7v6Afk.js";import"./VisuallyHidden-DA6R-bu4.js";import"./context-DcNveDbd.js";import"./useSelector-Be3r6XND.js";import"./Action-CatRQW-r.js";import"./deepFindOfType-CmKNZ8si.js";import"./Collection-wxk3VkXl.js";import"./Header-tof3fAA-.js";import"./Separator-mwJ01TZq.js";import"./useMenuTrigger-CUKl09yl.js";import"./SelectionManager-7Pq-D15P.js";import"./useEvent-m5sATXdH.js";import"./Header-DVchM5wQ.js";const X="flow--header-navigation",Y="flow--header-navigation--link",Z="flow--header-navigation--button",$="flow--header-navigation--light",ee="flow--header-navigation--dark",a={headerNavigation:X,link:Y,button:Z,light:$,dark:ee},m=t=>{const{children:B,className:C,color:s="primary",...H}=t,S=q(a.headerNavigation,a[s],C),b={Link:{wrapWith:e.createElement("li",null),className:a.link,unstyled:!0,children:_(L=>e.createElement(G,null,L.children))},Button:{className:a.button,color:s,variant:"plain",wrapWith:e.createElement("li",null)}};return e.createElement("nav",{className:S,role:"navigation",...H},e.createElement("ul",null,e.createElement(A,{props:b},B)))};m.__docgenInfo={description:"",methods:[],displayName:"HeaderNavigation",props:{className:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:'"primary" | "dark" | "light"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"dark"'},{name:"literal",value:'"light"'}]},description:'@default "primary"'}},composes:["PropsWithChildren"]};const et={title:"Navigation/HeaderNavigation",component:m,parameters:{controls:{exclude:["className"]}},render:t=>e.createElement(m,{"aria-label":"Header navigation",...t},e.createElement(c,{href:"#"},"Getting startet"),e.createElement(c,{href:"#","aria-current":"page"},"Components"),e.createElement(r,null,e.createElement(T,null))),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},n={},o={render:t=>e.createElement(m,{"aria-label":"Header navigation",...t},e.createElement(r,null,e.createElement(T,null)),e.createElement(r,null,e.createElement(w,null)),e.createElement(Q,null,e.createElement(r,null,e.createElement(D,null)),e.createElement(U,null,e.createElement(V,null,"Notifications"))),e.createElement(z,null,e.createElement(r,null,e.createElement(j,null,e.createElement(R,{alt:"Gopher",src:O.imageSrc}))),e.createElement(F,null,e.createElement(u,null,e.createElement(P,null),e.createElement(p,null,"Profile")),e.createElement(u,null,e.createElement(W,null),e.createElement(p,null,"Logout")))))},i={args:{color:"dark"},parameters:{backgrounds:J}},l={args:{color:"light"},parameters:{backgrounds:K}};var d,g,f;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,E,v;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: props => <HeaderNavigation aria-label="Header navigation" {...props}>
      <Button>
        <IconSearch />
      </Button>
      <Button>
        <IconSupport />
      </Button>
      <ModalTrigger>
        <Button>
          <IconNotification />
        </Button>
        <Modal>
          <Heading>Notifications</Heading>
        </Modal>
      </ModalTrigger>
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
}`,...(v=(E=o.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var k,x,M;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  parameters: {
    backgrounds: storyBackgroundLight
  }
}`,...(M=(x=i.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var N,I,y;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  parameters: {
    backgrounds: storyBackgroundDark
  }
}`,...(y=(I=l.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};const tt=["Default","WithContextMenu","Dark","Light"];export{i as Dark,n as Default,l as Light,o as WithContextMenu,tt as __namedExportsOrder,et as default};
