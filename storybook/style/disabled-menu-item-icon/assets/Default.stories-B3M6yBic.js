import{R as e}from"./index-Cs7sjTYM.js";import"./IconApp-Cq7w81Gv.js";import{t as T,u as w,r as D,v as P,w as W}from"./IconWarning-Br8lrsfP.js";import{L as p}from"./Link-CwU07PA3.js";import{P as A}from"./PropsContextProvider-CRusYdr1.js";import{d as _}from"./dynamic-DKDa4OpU.js";import{c as G}from"./clsx-B-dksMZM.js";import{T as s}from"./Text-34Ntf1C-.js";import{B as r}from"./Button-NaS3OEb0.js";import{I as q}from"./Image-CdV7uWK9.js";import{d as R}from"./dummyText-CX_I_Wpl.js";import{A as O}from"./Avatar-BJvRINaC.js";import{a as j,C as z,M as u}from"./ContextMenuTrigger-D4CN8Xmn.js";import{a as F,s as J}from"./storyBackgrounds-GFSAi-dI.js";import{a as K,M as Q}from"./ModalTrigger-BxfHsNO9.js";import{H as U}from"./Heading-4myMjjMv.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-aK1NJH1f.js";import"./index-j_f0pOtZ.js";import"./index-Cf-03bMR.js";import"./useLocalizedStringFormatter-TZkCr3Qr.js";import"./utils-Cd8r7pc9.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-Dcn7RY69.js";import"./useFocusRing-CqFdZJbR.js";import"./useFocusable-CKybZYMg.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Wrap-DQq6jo70.js";import"./Text-Bnjm0IRl.js";import"./LoadingSpinner-BjtHmDWI.js";import"./Button-DKDQv6qd.js";import"./ProgressBar-K2upHjuk.js";import"./Label-C-iBdzH7.js";import"./Hidden-C2kgQquV.js";import"./useLabel-BA8WH6BO.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./react-children-utilities-CdZndyK3.js";import"./ContextMenu.module-68N5lvfm.js";import"./Popover-BHhrYwo0.js";import"./OverlayTrigger-gwEYNro4.js";import"./RSPContexts-BseA8goh.js";import"./OverlayArrow-BrbzJDKz.js";import"./useControlledState-B7K2eYzO.js";import"./FocusScope-DxaEUeh1.js";import"./getScrollParent-CcmJp979.js";import"./VisuallyHidden-BOk7_Rfy.js";import"./context-BaWiGzwN.js";import"./useSelector-D67vXuM3.js";import"./Action-C08M7-Wx.js";import"./getActionGroupSlot-CHh0Yuh4.js";import"./deepFindOfType-BylCc5Xi.js";import"./Collection-BdcdgcY_.js";import"./CollectionBuilder-B4BE-ZOx.js";import"./Header-3zDVqz72.js";import"./Separator-ZOqStrt8.js";import"./useMenuTrigger-VDhsuUiF.js";import"./SelectionManager-BkcLa_O0.js";import"./useEvent-BjqsPY1I.js";import"./useCollator-tPR4bsZ_.js";import"./Header-Ds4_nfHF.js";import"./Heading-CG14-WVD.js";const V="flow--header-navigation",X="flow--header-navigation--link",Y="flow--header-navigation--button",Z="flow--header-navigation--light",$="flow--header-navigation--dark",a={headerNavigation:V,link:X,button:Y,light:Z,dark:$},l=t=>{const{children:B,className:C,color:c="primary",...H}=t,S=G(a.headerNavigation,a[c],C),b={Link:{wrapWith:e.createElement("li",null),className:a.link,unstyled:!0,children:_(L=>e.createElement(s,{emulateBoldWidth:!0},L.children))},Button:{className:a.button,color:c,variant:"plain",wrapWith:e.createElement("li",null)}};return e.createElement("nav",{className:S,role:"navigation",...H},e.createElement("ul",null,e.createElement(A,{props:b},B)))};l.__docgenInfo={description:"",methods:[],displayName:"HeaderNavigation",props:{className:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:'"primary" | "dark" | "light"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"dark"'},{name:"literal",value:'"light"'}]},description:'@default "primary"'}},composes:["PropsWithChildren"]};const lt={title:"Navigation/HeaderNavigation",component:l,parameters:{controls:{exclude:["className"]}},render:t=>e.createElement(l,{"aria-label":"Header navigation",...t},e.createElement(p,{href:"#"},"Getting startet"),e.createElement(p,{href:"#","aria-current":"page"},"Components"),e.createElement(r,null,e.createElement(T,null))),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},o={},n={render:t=>e.createElement(l,{"aria-label":"Header navigation",...t},e.createElement(r,null,e.createElement(T,null)),e.createElement(r,null,e.createElement(w,null)),e.createElement(K,null,e.createElement(r,null,e.createElement(D,null)),e.createElement(Q,null,e.createElement(U,null,"Notifications"))),e.createElement(j,null,e.createElement(r,null,e.createElement(O,null,e.createElement(q,{alt:"Gopher",src:R.imageSrc}))),e.createElement(z,null,e.createElement(u,null,e.createElement(P,null),e.createElement(s,null,"Profile")),e.createElement(u,null,e.createElement(W,null),e.createElement(s,null,"Logout")))))},i={args:{color:"dark"},parameters:{backgrounds:F}},m={args:{color:"light"},parameters:{backgrounds:J}};var d,g,h;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,E,v;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(M=(x=i.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var N,I,y;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  parameters: {
    backgrounds: storyBackgroundDark
  }
}`,...(y=(I=m.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};const st=["Default","WithContextMenu","Dark","Light"];export{i as Dark,o as Default,m as Light,n as WithContextMenu,st as __namedExportsOrder,lt as default};
