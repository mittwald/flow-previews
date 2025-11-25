import{j as r}from"./iframe-56IBTyTv.js";import{u as d,a0 as l,Z as g,y as u,a1 as x}from"./IconWarning-DWxFADKK.js";import{L as m}from"./Link-gAUYFHTC.js";import{a7 as s,a8 as h,M as j,e as f,f as p}from"./TimeField-DFBvkPXF.js";import{B as o}from"./Button-CFrxsoAe.js";import{T as c}from"./Text-D89DiGla.js";import{I as M}from"./Image-Clsgyrfz.js";import{d as I}from"./dummyText-CX_I_Wpl.js";import{A as T}from"./Avatar-n5CHccvP.js";import{c as k}from"./FileCardList-FudbpZWY.js";import"./Section-CWOxkqLh.js";import{H as S}from"./Heading-C8An-zqi.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Bnm9-YIt.js";import"./mergeRefs-Cyrc671G.js";import"./index-CFQkVl6N.js";import"./useLocalizedStringFormatter-CJPwUZ4n.js";import"./context-C94D1Tcb.js";import"./utils-By6OiP0m.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CwXi6gl-.js";import"./useFocusable-Ctb1BwR8.js";import"./Accordion-zGlAAwDO.js";import"./dynamic-CXTlw0o3.js";import"./ActionGroup-J5RwwMSR.js";import"./Alert-KjDlqK_2.js";import"./AlertIcon-DXhK-bl3.js";import"./AlertBadge-CSdPQEPk.js";import"./Align-BexLs-oj.js";import"./Popover-BfnMJAl3.js";import"./context-C8voyd_c.js";import"./Button-Bg0OEiur.js";import"./ProgressBar-BjWRzbkF.js";import"./Hidden-BYV7a_dx.js";import"./RSPContexts-ONk7znnk.js";import"./Collection-BYrAemKx.js";import"./CollectionBuilder-Bc4oKRVn.js";import"./SelectionIndicator-DENIl1oK.js";import"./Separator-BgOKs_kR.js";import"./browser-DgtGg3YC.js";import"./useStatic-BFaumh86.js";import"./OverlayTrigger-BjNrDJjP.js";import"./TableFooterRow-CKg0W8E3.js";import"./SkeletonText-D5ouES9k.js";import"./AvatarStack-C2OuNUTw.js";import"./Badge-BorAN_Zo.js";import"./BigNumber-BK1aV7_F.js";import"./Breadcrumb-DCvkjqRg.js";import"./Legend-pkpzEGV_.js";import"./Color-BHlBrJNB.js";import"./Content-fBwvLB0a.js";import"./Label-XId0FOSA.js";import"./ContextualHelpTrigger-jAzey3OP.js";import"./CounterBadge-BLzRgZI1.js";import"./DonutChart-CblbZ-Gl.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DIclsztf.js";import"./Header-BsQFcaSy.js";import"./Initials-lP5x31RC.js";import"./InlineCode-Dotm0ZC8.js";import"./PopoverTrigger-CUNBmLil.js";import"./LoadingSpinner-DIFU_u_Q.js";import"./Separator-Cc_0uyhZ.js";import"./Message-BPeVl3z6.js";import"./MessageSeparator-B8eILiD5.js";import"./NavigationGroup-_2LkB9uU.js";import"./Notification-iD7WbJZd.js";import"./NotificationProvider-cB8fVvxQ.js";import"./ProgressBar-Dh_0DhV8.js";import"./Rating-CvVeafk5.js";import"./Skeleton-S1htOct_.js";import"./EmulatedBoldText-BnqixNdP.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(h,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(j,{children:r.jsx(S,{children:"Notifications"})})]}),r.jsxs(k,{children:[r.jsx(o,{children:r.jsx(T,{children:r.jsx(M,{alt:"Gopher",src:I.imageSrc})})}),r.jsxs(f,{children:[r.jsxs(p,{children:[r.jsx(u,{}),r.jsx(c,{children:"Profile"})]}),r.jsxs(p,{children:[r.jsx(x,{}),r.jsx(c,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
