import{j as r}from"./iframe-b3Ga2wpf.js";import{t as d,$ as l,Y as g,x as u,a0 as x}from"./IconWarning-C84U4k_5.js";import{L as m}from"./Link-fVLJAih1.js";import{a8 as s,a9 as h,M as j,e as f,f as p}from"./TimeField-CtNImo6o.js";import{B as o}from"./Button-B9AKUFf2.js";import{T as c}from"./Text-DIbSGP69.js";import{I as M}from"./Image-pfb7qnpC.js";import{d as I}from"./dummyText-CX_I_Wpl.js";import{A as T}from"./Avatar-DRdoqq5g.js";import{c as k}from"./FileCardList-Cu-7JGuA.js";import"./Section-DpTqM0_J.js";import{H as S}from"./Heading-BGN7eCNA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D77bvxtu.js";import"./mergeRefs-Bi5mFM62.js";import"./index-EgQfkxQH.js";import"./remote-DrytLFaS.js";import"./useLocalizedStringFormatter-Dw2puoxj.js";import"./context-D39ROL5s.js";import"./utils-DpwAoq2B.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DyTaHyNc.js";import"./useFocusable-CNSeA0E2.js";import"./Accordion-DJRFgKSV.js";import"./dynamic-D7f7XAFP.js";import"./ActionGroup-C8Oe2XUd.js";import"./Alert-BFE5O_K9.js";import"./AlertIcon-BoIjIGQk.js";import"./AlertBadge-Dc59NCSn.js";import"./Align-DkScujGZ.js";import"./Popover-C3t-XhdJ.js";import"./context-DvKCdNAh.js";import"./Button-Dn9RG0lS.js";import"./ProgressBar-CqHSuyvS.js";import"./Hidden-D7Ffx1fO.js";import"./RSPContexts-CzK-yBpk.js";import"./Collection-staaIP_8.js";import"./CollectionBuilder-DkVC1udd.js";import"./SelectionIndicator-H6x9m8Fd.js";import"./Separator-CC7MupLF.js";import"./browser-C0SY9BaM.js";import"./useStatic-DjEoLORA.js";import"./OverlayTrigger-9eU9gIuc.js";import"./TableFooterRow-CtVIdWAI.js";import"./SkeletonText-6MyMR-o8.js";import"./AvatarStack-Bm59_WJp.js";import"./Badge-CmiaY70P.js";import"./BigNumber-jt1NPm7F.js";import"./Breadcrumb-BZ7G-TEM.js";import"./Legend-BeSc5K-M.js";import"./Color-q6pWurkX.js";import"./Content-CZqLB91a.js";import"./Label-BM4rj9TZ.js";import"./ContextualHelpTrigger-B4h5NCtb.js";import"./CounterBadge-Dnci99L1.js";import"./DonutChart-D0dIo1ZK.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Dp1INIeU.js";import"./Header-HXXe6hHp.js";import"./Initials-BTQbHA9Y.js";import"./InlineCode-BynVVMmO.js";import"./PopoverTrigger-aR-yTA7m.js";import"./LoadingSpinner-C8TYwtnu.js";import"./Separator-C1t0NjGv.js";import"./Message-CJlFlLd8.js";import"./MessageSeparator-Dfvdn_tJ.js";import"./NavigationGroup-gO8yiDJt.js";import"./Notification-Biyx_ImO.js";import"./NotificationProvider-CZZ8UITu.js";import"./ProgressBar-DU1jY53e.js";import"./Rating-C6_n-TNa.js";import"./Skeleton-DwbvfRV4.js";import"./EmulatedBoldText-BWSYK2_K.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},i={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(h,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(j,{children:r.jsx(S,{children:"Notifications"})})]}),r.jsxs(k,{children:[r.jsx(o,{children:r.jsx(T,{children:r.jsx(M,{alt:"Gopher",src:I.imageSrc})})}),r.jsxs(f,{children:[r.jsxs(p,{children:[r.jsx(u,{}),r.jsx(c,{children:"Profile"})]}),r.jsxs(p,{children:[r.jsx(x,{}),r.jsx(c,{children:"Logout"})]})]})]})]})},e={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
