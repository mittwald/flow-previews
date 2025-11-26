import{j as r}from"./iframe-QYf_yreC.js";import{y as d,a0 as l,Z as g,C as u,a1 as x}from"./IconWarning-CJ0iL8xC.js";import{L as m}from"./Link-VGOGyvf3.js";import{ab as s,ac as h,M as j,g as f,h as p}from"./Modal-BZuSJnKZ.js";import{B as o}from"./Button-ClcJ4r4J.js";import{T as c}from"./Text-DYo1hnMM.js";import{I as M}from"./Image-CSQDDycD.js";import{d as I}from"./dummyText-CX_I_Wpl.js";import{A as T}from"./Avatar-B_ln5OAs.js";import{e as b}from"./FileCardList-DTUmUWf5.js";import"./Section-B2DHZKCC.js";import{H as k}from"./Heading-Ztp4MNID.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BlD0f313.js";import"./index-DrqlcLhB.js";import"./index-Dl4zJFgP.js";import"./useLocalizedStringFormatter-BSKtfzGO.js";import"./context-DoHwa-Uz.js";import"./utils-9temXcui.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CKFComO5.js";import"./useFocusable-Bm9MC9Cg.js";import"./dynamic-DxvJo010.js";import"./context-BGZffbOF.js";import"./Button-BY7Kz_qM.js";import"./ProgressBar-BpNDlZ7L.js";import"./Hidden-D4BgLsni.js";import"./RSPContexts-CQ49TXVP.js";import"./Collection-DjuEe1dE.js";import"./CollectionBuilder-Ce2bTmZV.js";import"./SelectionIndicator-DHFL4Bc-.js";import"./Separator-DJyRay3v.js";import"./browser-BbcMJkiW.js";import"./useStatic-CgWt-Vtk.js";import"./LoadingSpinner-DyzLehc_.js";import"./Flex-FeaqVm2Q.js";import"./Accordion-QaDyvb9t.js";import"./ActionGroup-CNS7lIAN.js";import"./Alert-bj_Y0zgx.js";import"./AlertIcon-DGipYwqO.js";import"./AlertBadge-ClDIorBf.js";import"./Align-B8IK4Kvb.js";import"./AvatarStack-S7hrW2Du.js";import"./BigNumber-Ct2H2kB1.js";import"./Breadcrumb-B5Ha9Tr5.js";import"./Legend-BN69fYiw.js";import"./Color-Bp6xg0fX.js";import"./TableFooterRow-DqL_vA4D.js";import"./SkeletonText-DntNO9xb.js";import"./Content-ysq6PY7h.js";import"./Label-DkpOuIpZ.js";import"./CounterBadge-CnGG8oCU.js";import"./DonutChart-Bw-cC5fd.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CrN3wwhj.js";import"./Header-NzTBG9RN.js";import"./Initials-D93mZZQg.js";import"./InlineCode-Y0cx0rl0.js";import"./LayoutCard-C6WMVQDl.js";import"./Separator-vqPdnx36.js";import"./MessageSeparator-C5w9jueb.js";import"./NavigationGroup-DrewGvf7.js";import"./Notification-Dfr21Mg6.js";import"./NotificationProvider-Cnm_GiLp.js";import"./ControlledNotification-CA1OLKqo.js";import"./ProgressBar-D7-_y3N0.js";import"./Rating-4NQ2FU04.js";import"./Skeleton-CnrauAdF.js";import"./EmulatedBoldText-BUtEOorO.js";const Rr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(h,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(j,{children:r.jsx(k,{children:"Notifications"})})]}),r.jsxs(b,{children:[r.jsx(o,{children:r.jsx(T,{children:r.jsx(M,{alt:"Gopher",src:I.imageSrc})})}),r.jsxs(f,{children:[r.jsxs(p,{children:[r.jsx(u,{}),r.jsx(c,{children:"Profile"})]}),r.jsxs(p,{children:[r.jsx(x,{}),r.jsx(c,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Zr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Zr as __namedExportsOrder,Rr as default};
