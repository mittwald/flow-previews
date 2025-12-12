import{j as r}from"./iframe-DEcBxJMv.js";import{t as d,$ as l,Y as g,x as u,a0 as x}from"./IconWarning-BC7HEquB.js";import{L as m}from"./Link-CPvKToX3.js";import{a8 as s,a9 as h,M as j,e as f,f as p}from"./TimeField-Dm82K8tp.js";import{B as o}from"./Button-SrFk_XSt.js";import{T as c}from"./Text-BBAymND1.js";import{I as M}from"./Image-CcShDLXX.js";import{d as I}from"./dummyText-CX_I_Wpl.js";import{A as T}from"./Avatar-bYuIu1Zy.js";import{c as k}from"./FileCardList-Bi3qt08T.js";import"./Section-DBHphcZQ.js";import{H as S}from"./Heading-DVq-3Nns.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-MiOt2FVz.js";import"./mergeRefs-sinOTIgX.js";import"./index-BqRQQrKV.js";import"./remote-DoDHjwnJ.js";import"./useLocalizedStringFormatter-BRb5cwJZ.js";import"./context-CCmXnIub.js";import"./utils-UdYzeLBf.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-D_wOvvGC.js";import"./useFocusable-BmM1dgKm.js";import"./Accordion-BLxSKLD2.js";import"./dynamic-BupQFwyZ.js";import"./ActionGroup-DvFbVXMb.js";import"./Alert-Bj8aMttH.js";import"./AlertIcon-B311quy6.js";import"./AlertBadge-DgPHrTJs.js";import"./Align-DJzhUqNo.js";import"./Popover-C7mJHuVQ.js";import"./context-font-zWS.js";import"./Button-BxMepmz1.js";import"./ProgressBar-EpRxxAE3.js";import"./Hidden-D2mpT24u.js";import"./RSPContexts-WhR4y82c.js";import"./Collection-DpX_tac4.js";import"./CollectionBuilder-DE4qpmv-.js";import"./SelectionIndicator-Cf3jtetL.js";import"./Separator-UL7-w-P3.js";import"./browser-BXvtU8ie.js";import"./useStatic-BAiSxx7G.js";import"./OverlayTrigger-u_RpKHc5.js";import"./TableFooterRow-C_lpJ_Ld.js";import"./SkeletonText-DAnNzdg5.js";import"./AvatarStack-DTmDz1dE.js";import"./Badge-bbz8daB-.js";import"./BigNumber-BlHVGSpu.js";import"./Breadcrumb-GNNk4mVy.js";import"./Legend-C5yWylkj.js";import"./Color-B19feJBC.js";import"./Content-ClXCVH_y.js";import"./Label-DKovwxNh.js";import"./ContextualHelpTrigger-PNpDQr7A.js";import"./CounterBadge-BITuIXzG.js";import"./DonutChart-DfevOAtY.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Cw2rsL0x.js";import"./Header-DifY7CnZ.js";import"./Initials-TsKejgdG.js";import"./InlineCode-BkoHhJoS.js";import"./PopoverTrigger-BYjVsibp.js";import"./LoadingSpinner-BVhceB8v.js";import"./Separator-Cmo-OklH.js";import"./Message-Dzzvnonj.js";import"./MessageSeparator-DMvMYf8R.js";import"./NavigationGroup-DIvfJjdh.js";import"./Notification-DUi0yP4R.js";import"./NotificationProvider-Qm9FlLcY.js";import"./ProgressBar-ULT9xIn5.js";import"./Rating-C0VI3x7Z.js";import"./Skeleton-B3H61kIa.js";import"./EmulatedBoldText-CK8KF88J.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},i={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(h,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(j,{children:r.jsx(S,{children:"Notifications"})})]}),r.jsxs(k,{children:[r.jsx(o,{children:r.jsx(T,{children:r.jsx(M,{alt:"Gopher",src:I.imageSrc})})}),r.jsxs(f,{children:[r.jsxs(p,{children:[r.jsx(u,{}),r.jsx(c,{children:"Profile"})]}),r.jsxs(p,{children:[r.jsx(x,{}),r.jsx(c,{children:"Logout"})]})]})]})]})},e={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
