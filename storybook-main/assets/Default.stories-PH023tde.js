import{j as r}from"./iframe-CAXopRTx.js";import{u as d,a0 as l,Z as g,y as u,a1 as x}from"./IconWarning-CZAvow1a.js";import{L as m}from"./Link-D9RFi070.js";import{a8 as s,a9 as h,M as j,e as f,f as p}from"./TimeField-AvIAec-n.js";import{B as o}from"./Button-Ctv-dB52.js";import{T as c}from"./Text-BF5hWH0r.js";import{I as M}from"./Image-DfNgiqKc.js";import{d as I}from"./dummyText-CX_I_Wpl.js";import{A as T}from"./Avatar-DLDydU_T.js";import{c as k}from"./FileCardList-CpJRlD7z.js";import"./Section-DhxlZfa0.js";import{H as S}from"./Heading-kGKtBlX4.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BV-EFtmJ.js";import"./mergeRefs-C_4KEy1o.js";import"./index-9z8TnNhf.js";import"./useLocalizedStringFormatter-0XeO7SJn.js";import"./context-NOf08-wC.js";import"./utils-Dzmr5ZRW.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DTLGJlTA.js";import"./useFocusable-CGAuhRwL.js";import"./Accordion-BN6dZ4oC.js";import"./dynamic-D21vqi9G.js";import"./ActionGroup-DKCSrD6Z.js";import"./Alert-BmpR03pc.js";import"./AlertIcon-CPsr1mMB.js";import"./AlertBadge-DFIj-iNs.js";import"./Align-B2qDxo9l.js";import"./Popover-Tc25RGFF.js";import"./context-B6djjyHK.js";import"./Button-Chz2mIUC.js";import"./ProgressBar-Dw7oROZh.js";import"./Hidden-DOod4g1Z.js";import"./RSPContexts-BuWbS9Uz.js";import"./Collection-Bc328CGA.js";import"./CollectionBuilder-TpkYGVLd.js";import"./SelectionIndicator-dypojMNo.js";import"./Separator-BMVIHcHI.js";import"./browser-Byp0bOe_.js";import"./useStatic-B1gRKxid.js";import"./OverlayTrigger-Bjc5GfEu.js";import"./TableFooterRow-BQ4TOCow.js";import"./SkeletonText-B_tzDs56.js";import"./AvatarStack-DUfYWTId.js";import"./Badge-BFCmhw44.js";import"./BigNumber-Cyz0DTSh.js";import"./Breadcrumb-C1rkvIvu.js";import"./Legend-BJ6Ck0Hy.js";import"./Color-B5km2NmY.js";import"./Content-BXyxWnVJ.js";import"./Label-Cxhs4ZYP.js";import"./ContextualHelpTrigger-Dj6mrcgU.js";import"./CounterBadge-BL38auu8.js";import"./DonutChart-CcFbTUD3.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Be_vBexi.js";import"./Header-BScDeb9f.js";import"./Initials-W36NzcvX.js";import"./InlineCode-CkLg5Zr5.js";import"./PopoverTrigger-Dqa8sMRl.js";import"./LoadingSpinner-CoC4LtwE.js";import"./Separator-DxMsHozP.js";import"./Message-7lyTqTqh.js";import"./MessageSeparator-CQ1CLCTT.js";import"./NavigationGroup-C4JnuN_r.js";import"./Notification-Dq2Soo6r.js";import"./NotificationProvider-BPY70jq3.js";import"./ProgressBar-r_4SSeaH.js";import"./Rating-B9iG1IJI.js";import"./Skeleton-Dmrl1knY.js";import"./EmulatedBoldText-DePsUjt1.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(h,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(j,{children:r.jsx(S,{children:"Notifications"})})]}),r.jsxs(k,{children:[r.jsx(o,{children:r.jsx(T,{children:r.jsx(M,{alt:"Gopher",src:I.imageSrc})})}),r.jsxs(f,{children:[r.jsxs(p,{children:[r.jsx(u,{}),r.jsx(c,{children:"Profile"})]}),r.jsxs(p,{children:[r.jsx(x,{}),r.jsx(c,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
