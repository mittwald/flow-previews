import{j as r}from"./iframe-B9DmQEvm.js";import{t as d,$ as l,Y as g,x as u,a0 as x}from"./IconWarning-DHbLseiS.js";import{L as m}from"./Link-DZQzqDqQ.js";import{a8 as s,a9 as h,M as j,e as f,f as p}from"./TimeField-BCrDwFv1.js";import{B as o}from"./Button-Dm4Gj0Ue.js";import{T as c}from"./Text-DWnECR1V.js";import{I as M}from"./Image-BrfuIr9u.js";import{d as I}from"./dummyText-CX_I_Wpl.js";import{A as T}from"./Avatar-Bx2ST7JM.js";import{c as k}from"./FileCardList-BAmcrG49.js";import"./Section-C_OhuZda.js";import{H as S}from"./Heading-DwjnBE1G.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D4WQNPB7.js";import"./mergeRefs-D6R5gGm4.js";import"./index-CFtXvdW-.js";import"./remote-pOc8vwOE.js";import"./useLocalizedStringFormatter-BIKdkDCX.js";import"./context-f4__Yrtg.js";import"./utils-Oe4-zNeB.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CcbQunlU.js";import"./useFocusable-CWuYRGi_.js";import"./Accordion-D4jAtFpD.js";import"./dynamic-D9zzs7eg.js";import"./ActionGroup-BPBZMd0G.js";import"./Alert-C2lbq4BB.js";import"./AlertIcon-DNW_OXFb.js";import"./AlertBadge-C6Me14oL.js";import"./Align-DPuLyLOo.js";import"./Popover-UpR8ui09.js";import"./context-CWF20r0U.js";import"./Button-aNJWqsMX.js";import"./ProgressBar-2zujtr-f.js";import"./Hidden-CljRM6Hn.js";import"./RSPContexts-CotCKDbU.js";import"./Collection-hhJxclBU.js";import"./CollectionBuilder-BT6nUxaY.js";import"./SelectionIndicator-DK0swjPr.js";import"./Separator-CBfW85A4.js";import"./browser-B5MMVHjZ.js";import"./useStatic-D5S9NXQn.js";import"./OverlayTrigger-BPc83cwF.js";import"./TableFooterRow-B35Rsrml.js";import"./SkeletonText-ZPaTyog7.js";import"./AvatarStack-_PkufGBz.js";import"./Badge-DmsrCf-1.js";import"./BigNumber-DHP9TJHn.js";import"./Breadcrumb-LOJeBKLO.js";import"./Legend-Bh3IkHhT.js";import"./Color-DhQB_epS.js";import"./Content-JADEg-IW.js";import"./Label-CdjTRCcN.js";import"./ContextualHelpTrigger-dKYi-1DA.js";import"./CounterBadge-Cls8KRo_.js";import"./DonutChart-B9esqjeH.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DEET8u9H.js";import"./Header-DeL33C6q.js";import"./Initials-Dn2eAsB4.js";import"./InlineCode-C2pHeQEX.js";import"./PopoverTrigger-BccW7zFf.js";import"./LoadingSpinner-CoK93z8B.js";import"./Separator-fewq4lm1.js";import"./Message-CS9r66Cj.js";import"./MessageSeparator-B3ZhQOA7.js";import"./NavigationGroup-bOs2Paa-.js";import"./Notification-D4DyPezB.js";import"./NotificationProvider-HN69aTqY.js";import"./ProgressBar-CZYj1IvA.js";import"./Rating-BgHH720o.js";import"./Skeleton-xhKc-iSZ.js";import"./EmulatedBoldText-CcFQw1kW.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},i={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(h,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(j,{children:r.jsx(S,{children:"Notifications"})})]}),r.jsxs(k,{children:[r.jsx(o,{children:r.jsx(T,{children:r.jsx(M,{alt:"Gopher",src:I.imageSrc})})}),r.jsxs(f,{children:[r.jsxs(p,{children:[r.jsx(u,{}),r.jsx(c,{children:"Profile"})]}),r.jsxs(p,{children:[r.jsx(x,{}),r.jsx(c,{children:"Logout"})]})]})]})]})},e={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...n.parameters?.docs?.source}}};const zr=["Default","WithContextMenu","Dark","Light"];export{e as Dark,t as Default,n as Light,i as WithContextMenu,zr as __namedExportsOrder,wr as default};
