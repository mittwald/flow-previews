import{R as e}from"./index-B-o1Wr-g.js";import"./IconApp-BTi5eST8.js";import{v as T,w,t as D,x as P,y as W}from"./IconWarning-DhEuhoPG.js";import{L as p}from"./Link-CiIxLHHm.js";import{P as A}from"./PropsContextProvider-DWb7RnwM.js";import{d as _}from"./dynamic-DKDa4OpU.js";import{c as G}from"./clsx-B-dksMZM.js";import{T as s}from"./Text-B5qFq-QV.js";import{B as r}from"./Button-BUF17NMx.js";import{I as q}from"./Image-ChrkJv_w.js";import{d as R}from"./dummyText-CX_I_Wpl.js";import{A as O}from"./Avatar-otkdn0iw.js";import{a as j,C as z,M as u}from"./ContextMenuTrigger-BkNlWw0j.js";import{a as F,s as J}from"./storyBackgrounds-GFSAi-dI.js";import{a as K,M as Q}from"./ModalTrigger-BAdVYXnI.js";import{H as U}from"./Heading-Bn-Oekdv.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./flowComponent-D6-TVbjo.js";import"./index-ynQ6n1pc.js";import"./index-DolzVqEf.js";import"./useLocalizedStringFormatter-BQr1rA-c.js";import"./utils-CCebJm36.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-C3EQNDer.js";import"./useFocusRing-CTDVvBmm.js";import"./useFocusable-CjESOWAx.js";import"./EmulatedBoldText-1x_0FOGF.js";import"./Wrap-DQq6jo70.js";import"./Text-CByKVUtS.js";import"./LoadingSpinner-C3b-udH8.js";import"./Button-DpaYcQnV.js";import"./ProgressBar-C7LzY9et.js";import"./Label-BFvRcNt5.js";import"./Hidden-CRdWNeH8.js";import"./useLabel-DrlXsFf-.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./react-children-utilities-D14ImiYi.js";import"./ContextMenu.module-37Y7DEq9.js";import"./Popover-o5rTst5v.js";import"./OverlayTrigger-DHdiavxl.js";import"./RSPContexts-BT50PPhj.js";import"./OverlayArrow-BMY-498z.js";import"./useControlledState-BgxdDqm0.js";import"./Collection-DyVww_gO.js";import"./CollectionBuilder-CRjClK3P.js";import"./Header-Bk-D7IzI.js";import"./Separator-BAc0WD8W.js";import"./SelectionManager-Dnw_ATjh.js";import"./FocusScope-Deam_7e8.js";import"./useEvent-CmPtILZD.js";import"./useCollator-DiB6vpBo.js";import"./VisuallyHidden-lWpahT0S.js";import"./context-Rc-flGIq.js";import"./useSelector-D83Ddg6S.js";import"./Action-B-qRylWW.js";import"./getActionGroupSlot-KvD6pyGF.js";import"./deepHas-qlU7dqTi.js";import"./Overlay-B8TPvZLB.js";import"./Header-CEYghI-s.js";import"./Heading--STTcIhS.js";const V="flow--header-navigation",X="flow--header-navigation--link",Y="flow--header-navigation--button",Z="flow--header-navigation--light",$="flow--header-navigation--dark",a={headerNavigation:V,link:X,button:Y,light:Z,dark:$},l=t=>{const{children:B,className:C,color:c="primary",...H}=t,S=G(a.headerNavigation,a[c],C),b={Link:{wrapWith:e.createElement("li",null),className:a.link,unstyled:!0,children:_(L=>e.createElement(s,{emulateBoldWidth:!0},L.children))},Button:{className:a.button,color:c,variant:"plain",wrapWith:e.createElement("li",null)}};return e.createElement("nav",{className:S,role:"navigation",...H},e.createElement("ul",null,e.createElement(A,{props:b},B)))};l.__docgenInfo={description:"",methods:[],displayName:"HeaderNavigation",props:{className:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:'"primary" | "dark" | "light"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"dark"'},{name:"literal",value:'"light"'}]},description:'@default "primary"'}},composes:["PropsWithChildren"]};const mt={title:"Navigation/HeaderNavigation",component:l,parameters:{controls:{exclude:["className"]}},render:t=>e.createElement(l,{"aria-label":"Header navigation",...t},e.createElement(p,{href:"#"},"Getting startet"),e.createElement(p,{href:"#","aria-current":"page"},"Components"),e.createElement(r,null,e.createElement(T,null))),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},o={},n={render:t=>e.createElement(l,{"aria-label":"Header navigation",...t},e.createElement(r,null,e.createElement(T,null)),e.createElement(r,null,e.createElement(w,null)),e.createElement(K,null,e.createElement(r,null,e.createElement(D,null)),e.createElement(Q,null,e.createElement(U,null,"Notifications"))),e.createElement(j,null,e.createElement(r,null,e.createElement(O,null,e.createElement(q,{alt:"Gopher",src:R.imageSrc}))),e.createElement(z,null,e.createElement(u,null,e.createElement(P,null),e.createElement(s,null,"Profile")),e.createElement(u,null,e.createElement(W,null),e.createElement(s,null,"Logout")))))},i={args:{color:"dark"},parameters:{backgrounds:F}},m={args:{color:"light"},parameters:{backgrounds:J}};var d,g,h;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,E,v;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(v=(E=n.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var k,x,M;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  parameters: {
    backgrounds: storyBackgroundLight
  }
}`,...(M=(x=i.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var N,y,I;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  parameters: {
    backgrounds: storyBackgroundDark
  }
}`,...(I=(y=m.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};const lt=["Default","WithContextMenu","Dark","Light"];export{i as Dark,o as Default,m as Light,n as WithContextMenu,lt as __namedExportsOrder,mt as default};