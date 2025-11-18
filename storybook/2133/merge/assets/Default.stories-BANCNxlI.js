import{j as r}from"./iframe-pZiTyeCe.js";import{y as d,a0 as l,Z as g,C as u,a1 as x}from"./IconWarning-DP7Cql9d.js";import{L as m}from"./Link-DwSr3nzc.js";import{ac as s,ad as h,M as j,h as f,i as p}from"./Modal-BNWk3nM6.js";import{B as o}from"./Button-C3Yaasdf.js";import{T as c}from"./Text-BJ5OGBwu.js";import{I as M}from"./Image-BDSNKL5x.js";import{d as I}from"./dummyText-CX_I_Wpl.js";import{A as T}from"./Avatar-28QHBiJA.js";import{e as k}from"./FileCardList-CvkPGy21.js";import"./Section-DMGyew6W.js";import{H as S}from"./Heading-Bf30zfAP.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-RbA6ktt2.js";import"./index-CECtKB63.js";import"./index-5w2LD9ey.js";import"./useLocalizedStringFormatter-D7qk7Uno.js";import"./context-CZnL3ok6.js";import"./utils-DLNdnmti.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-C0k47PYu.js";import"./useFocusable-BUWes4as.js";import"./dynamic-kx5B2hFn.js";import"./context-CQ20wrAw.js";import"./Button-oVsIJRaP.js";import"./ProgressBar-DUC-K2Ya.js";import"./Hidden-B2yPOVbh.js";import"./RSPContexts-U_yzxMR5.js";import"./Collection-aJCyzdhX.js";import"./CollectionBuilder-CcVz4A8R.js";import"./SelectionIndicator-6fhscOQO.js";import"./Separator-YouxGU0I.js";import"./browser-BsEa2SY6.js";import"./useStatic-CgWkj8lf.js";import"./LoadingSpinner-CtehKW-p.js";import"./LayoutCard-BwA4FEKt.js";import"./Accordion-Dl5VlGwV.js";import"./ActionGroup-B37LObZH.js";import"./getActionGroupSlot-0C1vq_w_.js";import"./Alert-Cy4CnGLM.js";import"./AlertIcon-BgFDbno9.js";import"./AlertBadge-CVrWVY-b.js";import"./Align-r0lwyQhH.js";import"./AvatarStack-Cbu4yl0s.js";import"./BigNumber-mDDEeEsg.js";import"./Breadcrumb-CDViVy_M.js";import"./Legend-CwSdijCm.js";import"./Color-DvAn_R7b.js";import"./TableFooterRow-CzICUB9D.js";import"./SkeletonText-C-ydvLZR.js";import"./Content-gnlwq7We.js";import"./Label-Bq8cCkbx.js";import"./CounterBadge-CSRpIA9_.js";import"./DonutChart-BLGzoFBa.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-f1piE0b5.js";import"./Header-DeQ2PPHG.js";import"./Initials-BCJAZPXj.js";import"./InlineCode-DyEQE0gj.js";import"./Separator-D1pVlz0K.js";import"./MessageSeparator-CK-bXqSq.js";import"./NavigationGroup-Bi7YdcqL.js";import"./Notification-DG8G0-jK.js";import"./NotificationProvider-BbthnAYF.js";import"./ControlledNotification-DOsia725.js";import"./ProgressBar-C2sbZ2Wx.js";import"./Rating-ADLOBIR8.js";import"./Skeleton-DKhYDlyl.js";import"./EmulatedBoldText-DxtYD21w.js";const Rr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(h,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(j,{children:r.jsx(S,{children:"Notifications"})})]}),r.jsxs(k,{children:[r.jsx(o,{children:r.jsx(T,{children:r.jsx(M,{alt:"Gopher",src:I.imageSrc})})}),r.jsxs(f,{children:[r.jsxs(p,{children:[r.jsx(u,{}),r.jsx(c,{children:"Profile"})]}),r.jsxs(p,{children:[r.jsx(x,{}),r.jsx(c,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
