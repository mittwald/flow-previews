import{R as e}from"./index-B-o1Wr-g.js";import"./IconApp--rto3B0B.js";import{v as T,w,t as D,x as P,y as W}from"./IconWarning-C7RtCnUV.js";import{L as p}from"./Link-C3npivZV.js";import{P as A}from"./PropsContextProvider-BHq6Fnml.js";import{d as _}from"./dynamic-DKDa4OpU.js";import{c as G}from"./clsx-B-dksMZM.js";import{T as s}from"./Text-Cl00oEZR.js";import{B as r}from"./Button-DL4zOTEl.js";import{I as q}from"./Image-BHYQX0CW.js";import{d as R}from"./dummyText-CX_I_Wpl.js";import{A as O}from"./Avatar-D_KFb-03.js";import{a as j,C as z,M as u}from"./ContextMenuTrigger-hBJ4j0eR.js";import"./ContextMenuSection-BrbuS3OG.js";import{a as F,s as J}from"./storyBackgrounds-GFSAi-dI.js";import{a as K,M as Q}from"./ModalTrigger-BPnZ5Ab8.js";import{H as U}from"./Heading-Cx3jvWcZ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./flowComponent-SXQnFwcy.js";import"./index-ynQ6n1pc.js";import"./index-DolzVqEf.js";import"./useLocalizedStringFormatter-BQr1rA-c.js";import"./utils-7gTBvjqH.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-C3EQNDer.js";import"./useFocusRing-CTDVvBmm.js";import"./useFocusable-BXVt7Q_3.js";import"./browser-B3hGj0u-.js";import"./EmulatedBoldText-1x_0FOGF.js";import"./Wrap-DQq6jo70.js";import"./useAltKeySelectionProps-Dqsvf2Or.js";import"./Text-R-rrVGxo.js";import"./LoadingSpinner-D3THsmJZ.js";import"./Button-CFfO75lD.js";import"./ProgressBar-BQAJCbMD.js";import"./Label-CqgmsInd.js";import"./Hidden-CRdWNeH8.js";import"./useLabel-DrlXsFf-.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./react-children-utilities-D14ImiYi.js";import"./deepHas-qlU7dqTi.js";import"./Initials-DV3qKvQK.js";import"./Popover-DJI0CRYC.js";import"./OverlayTrigger-DBMCsseW.js";import"./context-HWij4CCA.js";import"./useSelector-iQqgW7gO.js";import"./Dialog-ugMEkBXT.js";import"./RSPContexts-BT50PPhj.js";import"./OverlayArrow-CuXMKzfT.js";import"./useControlledState-BgxdDqm0.js";import"./Collection-CYXS91v-.js";import"./CollectionBuilder-cPXIJfS-.js";import"./Separator-C4vObYq_.js";import"./SelectionManager-Dnw_ATjh.js";import"./FocusScope-Deam_7e8.js";import"./useEvent-CmPtILZD.js";import"./useCollator-DiB6vpBo.js";import"./VisuallyHidden-lWpahT0S.js";import"./Action-nwH1LYxm.js";import"./getActionGroupSlot-Ctir2FTR.js";import"./Switch-DmbSlbsw.js";import"./Label-_TQx26eL.js";import"./useToggleState-C-A--gcY.js";import"./useFormReset-DMREOE0P.js";import"./Overlay-CW_3TDd8.js";import"./Header-gKSh-KKu.js";import"./Heading-CrY40Q5a.js";const V="flow--header-navigation",X="flow--header-navigation--link",Y="flow--header-navigation--button",Z="flow--header-navigation--light",$="flow--header-navigation--dark",a={headerNavigation:V,link:X,button:Y,light:Z,dark:$},l=t=>{const{children:B,className:C,color:c="primary",...H}=t,S=G(a.headerNavigation,a[c],C),b={Link:{wrapWith:e.createElement("li",null),className:a.link,unstyled:!0,children:_(L=>e.createElement(s,{emulateBoldWidth:!0},L.children))},Button:{className:a.button,color:c,variant:"plain",wrapWith:e.createElement("li",null)}};return e.createElement("nav",{className:S,role:"navigation",...H},e.createElement("ul",null,e.createElement(A,{props:b},B)))};l.__docgenInfo={description:"",methods:[],displayName:"HeaderNavigation",props:{className:{required:!1,tsType:{name:"string"},description:"The elements class name."},color:{required:!1,tsType:{name:"union",raw:'"primary" | "dark" | "light"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"dark"'},{name:"literal",value:'"light"'}]},description:'The color of the header navigation. @default "primary"'}},composes:["PropsWithChildren"]};const gt={title:"Navigation/HeaderNavigation",component:l,parameters:{controls:{exclude:["className"]}},render:t=>e.createElement(l,{"aria-label":"Header navigation",...t},e.createElement(p,{href:"#"},"Getting startet"),e.createElement(p,{href:"#","aria-current":"page"},"Components"),e.createElement(r,null,e.createElement(T,null))),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},o={},n={render:t=>e.createElement(l,{"aria-label":"Header navigation",...t},e.createElement(r,null,e.createElement(T,null)),e.createElement(r,null,e.createElement(w,null)),e.createElement(K,null,e.createElement(r,null,e.createElement(D,null)),e.createElement(Q,null,e.createElement(U,null,"Notifications"))),e.createElement(j,null,e.createElement(r,null,e.createElement(O,null,e.createElement(q,{alt:"Gopher",src:R.imageSrc}))),e.createElement(z,null,e.createElement(u,null,e.createElement(P,null),e.createElement(s,null,"Profile")),e.createElement(u,null,e.createElement(W,null),e.createElement(s,null,"Logout")))))},i={args:{color:"dark"},parameters:{backgrounds:F}},m={args:{color:"light"},parameters:{backgrounds:J}};var d,g,h;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,E,v;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(I=(y=m.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};const ht=["Default","WithContextMenu","Dark","Light"];export{i as Dark,o as Default,m as Light,n as WithContextMenu,ht as __namedExportsOrder,gt as default};
