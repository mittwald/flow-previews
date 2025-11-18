import{j as r}from"./iframe-Du_qouD_.js";import{y as d,a0 as l,Z as g,C as u,a1 as x}from"./IconWarning-BYd1-Vrn.js";import{L as m}from"./Link-DmpqZIYe.js";import{aa as s,ab as h,M as j,g as f,h as p}from"./Modal-MGKc6uhP.js";import{B as o}from"./Button-BKlVJwIr.js";import{T as c}from"./Text-DSmwKiK5.js";import{I as M}from"./Image-B0yvlgyM.js";import{d as I}from"./dummyText-CX_I_Wpl.js";import{A as T}from"./Avatar-oOQkBEoe.js";import{e as b}from"./FileCardList--2ZieuqZ.js";import"./Section-CP9sTMI1.js";import{H as k}from"./Heading-BD53zFfj.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-rDAUUIs0.js";import"./index-D82te6aO.js";import"./index-Cna9wk2l.js";import"./useLocalizedStringFormatter-BKry4ylq.js";import"./context-56QjP3j7.js";import"./utils-4z-LHo9M.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BYlN_rzy.js";import"./useFocusable-BqYSv_Ya.js";import"./dynamic-DNgOdReL.js";import"./context-DfFGI3iw.js";import"./Button-9sEBXLr3.js";import"./ProgressBar-C8JML2M-.js";import"./Hidden-CaZvTbg6.js";import"./RSPContexts-As5yeo4a.js";import"./Collection-BebXuOLE.js";import"./CollectionBuilder-D1Dgngsg.js";import"./SelectionIndicator-C_AcjXXq.js";import"./Separator-BJxFAi6I.js";import"./browser-BIThWoNI.js";import"./useStatic-6KqxvQye.js";import"./LoadingSpinner-BVVVUtHG.js";import"./LayoutCard-CmyaRvn3.js";import"./Accordion-D5QR60XG.js";import"./ActionGroup-c_vby5Es.js";import"./getActionGroupSlot-h_LfU4fO.js";import"./Alert-Uq-uDDS4.js";import"./AlertIcon-BgpHVoHm.js";import"./AlertBadge-DNhsD8PX.js";import"./Align-CyVr7OuT.js";import"./AvatarStack-B5s0vN09.js";import"./BigNumber-Bu3QLXdy.js";import"./Breadcrumb-CfGUSdKq.js";import"./Legend-BiYpWzHE.js";import"./Color-7P_eHJ9S.js";import"./TableFooterRow-BddxhsDt.js";import"./SkeletonText-DpYKmaWm.js";import"./Content-COgSVb0P.js";import"./Label-DvpwKxrD.js";import"./CounterBadge-DDdYZMsC.js";import"./DonutChart-Bdt4MC04.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Be-RmoYN.js";import"./Header-DGdm1J9_.js";import"./Initials-C70OZOod.js";import"./InlineCode-Bj3DEPPw.js";import"./Separator-eScn2XrM.js";import"./MessageSeparator-Brh9XJMv.js";import"./NavigationGroup-DtZinfMC.js";import"./Notification-C9dD5dH2.js";import"./NotificationProvider-RI2P6NdS.js";import"./ControlledNotification-CTznOicW.js";import"./ProgressBar-CmgKYrsQ.js";import"./Rating-CkwJjaD1.js";import"./Skeleton-DIz56cOV.js";import"./EmulatedBoldText-B6vrvEtA.js";const Rr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(h,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(j,{children:r.jsx(k,{children:"Notifications"})})]}),r.jsxs(b,{children:[r.jsx(o,{children:r.jsx(T,{children:r.jsx(M,{alt:"Gopher",src:I.imageSrc})})}),r.jsxs(f,{children:[r.jsxs(p,{children:[r.jsx(u,{}),r.jsx(c,{children:"Profile"})]}),r.jsxs(p,{children:[r.jsx(x,{}),r.jsx(c,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
