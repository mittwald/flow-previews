import{j as r}from"./iframe-C7yh_Fu5.js";import{u as d,a0 as l,Z as g,y as u,a1 as x}from"./IconWarning-U8_aSafZ.js";import{L as m}from"./Link-DWHk52qz.js";import{a8 as s,a9 as h,M as j,e as f,f as p}from"./TimeField-Dy-rfgDv.js";import{B as o}from"./Button-BwVKQ9X7.js";import{T as c}from"./Text-CSanHafV.js";import{I as M}from"./Image-CciUOm_j.js";import{d as I}from"./dummyText-CX_I_Wpl.js";import{A as T}from"./Avatar-CxKCuxf-.js";import{c as k}from"./FileCardList-BcFGfAyG.js";import"./Section-eGYkYIra.js";import{H as S}from"./Heading-gezzzJQU.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-C-EG-5z2.js";import"./mergeRefs-g85mVkDf.js";import"./index-Cevz_HyD.js";import"./useLocalizedStringFormatter-DQ2_29OK.js";import"./context-CEhtXY7m.js";import"./utils-BIDryOLh.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-C2uVCvlL.js";import"./useFocusable-CCwjyRCK.js";import"./Accordion-D4DEJSnq.js";import"./dynamic-BAOBaIPk.js";import"./ActionGroup-DnTsE6iz.js";import"./Alert-BD9-BdYZ.js";import"./AlertIcon-2MV1Vkb6.js";import"./AlertBadge-D2DN6G_u.js";import"./Align-H7fb-fs1.js";import"./Popover-CQFnWxW5.js";import"./context-w3GWYnpb.js";import"./Button-iBtMEWbi.js";import"./ProgressBar-hejX-OOI.js";import"./Hidden-Du0bIFmN.js";import"./RSPContexts-DMbDFkhS.js";import"./Collection-BgKMjwD7.js";import"./CollectionBuilder-DKESVVhe.js";import"./SelectionIndicator-Bux7VXrO.js";import"./Separator-Di2JOJWZ.js";import"./browser-DU0Se26V.js";import"./useStatic-BPJ4UqdO.js";import"./OverlayTrigger-D2xYBiFg.js";import"./TableFooterRow-CVFXLu5s.js";import"./SkeletonText-DnggfzER.js";import"./AvatarStack-CuhKRn3f.js";import"./Badge-CrGIL66e.js";import"./BigNumber-DhmUzvWc.js";import"./Breadcrumb-0czp_nKF.js";import"./Legend-CBzh6EDX.js";import"./Color-B2lIhlIc.js";import"./Content-CL7mIcPh.js";import"./Label-oyZIArrA.js";import"./ContextualHelpTrigger-B1UysYmx.js";import"./CounterBadge-DOJFQA8N.js";import"./DonutChart-PBUZonP2.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-VCS6qRmj.js";import"./Header-C9QET4gC.js";import"./Initials-28ES132L.js";import"./InlineCode-xv-tSnAa.js";import"./PopoverTrigger-C9LEo84-.js";import"./LoadingSpinner-4S8XnzlY.js";import"./Separator-oc_HtEXN.js";import"./Message-BiBJDh9p.js";import"./MessageSeparator-DJOJRQwh.js";import"./NavigationGroup-kwM4BGZf.js";import"./Notification-DLYTxmIW.js";import"./NotificationProvider-BR-b_KFd.js";import"./ProgressBar-BczdTP0z.js";import"./Rating-DCrUaEZd.js";import"./Skeleton-fkyP2s-f.js";import"./EmulatedBoldText-CiGN-vVw.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(h,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(j,{children:r.jsx(S,{children:"Notifications"})})]}),r.jsxs(k,{children:[r.jsx(o,{children:r.jsx(T,{children:r.jsx(M,{alt:"Gopher",src:I.imageSrc})})}),r.jsxs(f,{children:[r.jsxs(p,{children:[r.jsx(u,{}),r.jsx(c,{children:"Profile"})]}),r.jsxs(p,{children:[r.jsx(x,{}),r.jsx(c,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...n.parameters?.docs?.source}}};const zr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,zr as __namedExportsOrder,wr as default};
