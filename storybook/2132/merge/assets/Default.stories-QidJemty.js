import{j as r}from"./iframe-U-SQzk2U.js";import{u as d,a0 as l,Z as g,y as u,a1 as x}from"./IconWarning-CDCEBJyf.js";import{L as m}from"./Link-C1W3HrwR.js";import{a8 as s,a9 as h,M as j,e as f,f as p}from"./TimeField-CC_Pyjeg.js";import{B as o}from"./Button-B_mH5guI.js";import{T as c}from"./Text-MZxPcWY_.js";import{I as M}from"./Image-fMegGqHo.js";import{d as I}from"./dummyText-CX_I_Wpl.js";import{A as T}from"./Avatar-Dp_xN1xq.js";import{c as k}from"./FileCardList-BFx3LKHI.js";import"./Section-Cs2_EqxV.js";import{H as S}from"./Heading-LgN9kaRj.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B4D8aI1U.js";import"./index-CCRDw9Jm.js";import"./index-CS9SnKd_.js";import"./useLocalizedStringFormatter-DxYjk-pp.js";import"./context-DG48XepE.js";import"./utils-DoPZZ_D6.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-B2IDcSiC.js";import"./useFocusable-Ctp8Cukd.js";import"./Accordion-ZeIRJCaw.js";import"./dynamic-BNi_8Fxs.js";import"./ActionGroup-QOnDMJ0K.js";import"./getActionGroupSlot-BsOJ1KeF.js";import"./useStatic-BAhUJhAM.js";import"./Alert-PBaqSyU5.js";import"./AlertIcon-81NvLES1.js";import"./AlertBadge-BDdG2Xyu.js";import"./Align-BaKWMIPi.js";import"./Popover-BJPafbQW.js";import"./context-ChAoIJrl.js";import"./Button-DBw5Ol_w.js";import"./ProgressBar-CipRA_mB.js";import"./Hidden-D2mi6DaR.js";import"./RSPContexts-CXcRuCAV.js";import"./Collection-D30Phmso.js";import"./CollectionBuilder-CnentVFR.js";import"./SelectionIndicator-CV40_W2v.js";import"./Separator-BXP_D1Un.js";import"./browser-w1PF0DBJ.js";import"./OverlayTrigger-BjYUeewY.js";import"./ControlledNotification-CprxFH82.js";import"./TableFooterRow-DhmvhUbW.js";import"./SkeletonText-B7Idi9Co.js";import"./AvatarStack-BziCuf6l.js";import"./Badge-DINRYIZ4.js";import"./BigNumber-DxxIndo0.js";import"./Breadcrumb-C7c-KnuV.js";import"./Legend-Iz7Sss5n.js";import"./Color-DHmCSMDw.js";import"./Content-DqP6eARh.js";import"./Label-C3BVuxS7.js";import"./ContextualHelpTrigger-G5U05qXX.js";import"./CounterBadge-DERld0YM.js";import"./DonutChart-CG4udGsV.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CQRWQTua.js";import"./Header-D2ZfwLZJ.js";import"./Initials-CdiKdV33.js";import"./InlineCode-CY3vRQgR.js";import"./PopoverTrigger-Coxd46NM.js";import"./LoadingSpinner-CC-MYLRK.js";import"./Separator-DjGJVRMe.js";import"./Message-DV2VcofZ.js";import"./MessageSeparator-DMC7QGGP.js";import"./NavigationGroup-BXxl9KBJ.js";import"./Notification-tY-Mb6kR.js";import"./NotificationProvider-BrhLMx6A.js";import"./ProgressBar-BwkFEgmn.js";import"./Rating-worVxwfb.js";import"./Skeleton-D7CUbSzy.js";import"./EmulatedBoldText-2j5mm0bP.js";const Fr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},i={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(h,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(j,{children:r.jsx(S,{children:"Notifications"})})]}),r.jsxs(k,{children:[r.jsx(o,{children:r.jsx(T,{children:r.jsx(M,{alt:"Gopher",src:I.imageSrc})})}),r.jsxs(f,{children:[r.jsxs(p,{children:[r.jsx(u,{}),r.jsx(c,{children:"Profile"})]}),r.jsxs(p,{children:[r.jsx(x,{}),r.jsx(c,{children:"Logout"})]})]})]})]})},e={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Jr=["Default","WithContextMenu","Dark","Light"];export{e as Dark,t as Default,n as Light,i as WithContextMenu,Jr as __namedExportsOrder,Fr as default};
