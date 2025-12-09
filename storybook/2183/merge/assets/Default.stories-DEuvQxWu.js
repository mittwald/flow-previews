import{j as r}from"./iframe-BfTJ8OoU.js";import{u as d,a0 as l,Z as g,y as u,a1 as x}from"./IconWarning-CnDmU8KM.js";import{L as m}from"./Link-fRrhQgjx.js";import{a8 as s,a9 as h,M as j,e as f,f as p}from"./TimeField-Dni6ZWL5.js";import{B as o}from"./Button-CAnEum-p.js";import{T as c}from"./Text-ChPpwgcs.js";import{I as M}from"./Image-D7QRJIgn.js";import{d as I}from"./dummyText-CX_I_Wpl.js";import{A as T}from"./Avatar-DBLpjnAX.js";import{c as k}from"./FileCardList-Crd4-rJi.js";import"./Section-ieM08Mfc.js";import{H as S}from"./Heading-C_Cd2XWG.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-pKtaUqJb.js";import"./mergeRefs-C4nh5J5i.js";import"./index-wBRAyXy5.js";import"./useLocalizedStringFormatter-BuC6mQ9L.js";import"./context-DfwvGs8v.js";import"./utils-CAkX6XFC.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-D-g0YXE4.js";import"./useFocusable-DTCTS8eh.js";import"./Accordion-EetxEBhv.js";import"./dynamic-BLLy2Odl.js";import"./ActionGroup-BXvzv2B4.js";import"./Alert-CFx8_uD8.js";import"./AlertIcon-Bk9PFIDr.js";import"./AlertBadge-zn-1W_0t.js";import"./Align-DLans5uB.js";import"./Popover-DxokbZnr.js";import"./context-DqfyIwOm.js";import"./Button-v46gVvAB.js";import"./ProgressBar-BquNzOVV.js";import"./Hidden-Chv29Vof.js";import"./RSPContexts-B_hP9IPu.js";import"./Collection-B-SpNygI.js";import"./CollectionBuilder-Cew6fxQL.js";import"./SelectionIndicator-BLntbEi9.js";import"./Separator-B1RL2fWY.js";import"./browser-_NOMM9Cq.js";import"./useStatic-DZbTJ5BB.js";import"./OverlayTrigger-CvXwRqat.js";import"./TableFooterRow-BfBKGOJY.js";import"./SkeletonText-BAh3LYCP.js";import"./AvatarStack-BHU-_pXB.js";import"./Badge-B1Bj-2mY.js";import"./BigNumber-BzAzuR-m.js";import"./Breadcrumb-DO48AN_q.js";import"./Legend-D59IIsbr.js";import"./Color-BcE30bux.js";import"./Content-BbEJXFUy.js";import"./Label-OsD2mDHN.js";import"./ContextualHelpTrigger-BBU6ZCx4.js";import"./CounterBadge-qpjoO2b-.js";import"./DonutChart-DSkqB0Nj.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-D4r4pUSf.js";import"./Header-DgEQtgXz.js";import"./Initials-DNuviWyX.js";import"./InlineCode-OjIKEpaK.js";import"./PopoverTrigger-zZ3JKVIV.js";import"./LoadingSpinner-CDSlajDH.js";import"./Separator-B5S4ffvA.js";import"./Message-Bivfjnxf.js";import"./MessageSeparator-BWNjQn1R.js";import"./NavigationGroup-JMiAIgUz.js";import"./Notification-6ZwISdx7.js";import"./NotificationProvider-BNxs8g7x.js";import"./ProgressBar-BlJq2aYe.js";import"./Rating-BodFdmqC.js";import"./Skeleton--CLyUYrz.js";import"./EmulatedBoldText-Do8p-rFi.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(h,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(j,{children:r.jsx(S,{children:"Notifications"})})]}),r.jsxs(k,{children:[r.jsx(o,{children:r.jsx(T,{children:r.jsx(M,{alt:"Gopher",src:I.imageSrc})})}),r.jsxs(f,{children:[r.jsxs(p,{children:[r.jsx(u,{}),r.jsx(c,{children:"Profile"})]}),r.jsxs(p,{children:[r.jsx(x,{}),r.jsx(c,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
