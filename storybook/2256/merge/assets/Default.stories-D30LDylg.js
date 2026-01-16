import{j as r}from"./iframe-Dcjk2TLd.js";import{q as d,a1 as l,_ as g,u,a2 as x}from"./IconWarning-4NWKkNon.js";import{L as m}from"./Link-Dn0s-zAw.js";import{H as s}from"./HeaderNavigation-DmTbFj6a.js";import{B as o}from"./Button-D-jN4scm.js";import{T as p}from"./Text-lyGbob8n.js";import{I as h}from"./Image-BxBK7Z6D.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-CDpNJtbL.js";import{C as M,M as c}from"./ContextMenu-DM86Jpqz.js";import{C as I}from"./ContextMenuTrigger-8w9onLng.js";import"./ContextMenuSection-C6gJgggW.js";import{a as T,M as k}from"./Modal-BAZcoa7H.js";import{H}from"./Heading-BDZY2GXQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DUQvMGjf.js";import"./index-j2LaL0Dv.js";import"./index-DmOV_yi6.js";import"./remote-B1sU4u7F.js";import"./useLocalizedStringFormatter-DSXGmj0V.js";import"./context-pAIzfbng.js";import"./utils-C4npX7la.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-CbiP5Rr9.js";import"./useFocus-B7gP7G3p.js";import"./useFocusRing-HFiDNYir.js";import"./useFocusable-K4tA3zQn.js";import"./dynamic-D8BmLFRX.js";import"./LoadingSpinner-BbHp37hM.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-D3PtZgc0.js";import"./ProgressBar-lCiNiuDc.js";import"./Label-BZUq_rhq.js";import"./Hidden-CKziqW6n.js";import"./useLabel-CKc5oqWD.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-B8c1tkp7.js";import"./EmulatedBoldText-CjCUgZSU.js";import"./Text-zDtUk3hp.js";import"./AlertIcon-CZw-AcP9.js";import"./Switch-Cg1N9Ugm.js";import"./useFieldComponent-1tG_hIZF.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BSsXWzYc.js";import"./useFormReset-DcYsnWfg.js";import"./useControlledState-DBXDF7mL.js";import"./VisuallyHidden-D01b8Wlz.js";import"./Dialog-Cncwnvc2.js";import"./RSPContexts-0k8dpTCB.js";import"./OverlayArrow-Pu-KF2yi.js";import"./Collection-CNopuRoq.js";import"./CollectionBuilder-DaoTf73F.js";import"./SelectionIndicator-BH1NdgMT.js";import"./Separator-DtdWWDk6.js";import"./SelectionManager-i-R_bo58.js";import"./useEvent-jxPbXkhM.js";import"./useCollator-CvofTPx7.js";import"./FocusScope-CNP9Koh8.js";import"./Action-D6NQe9wE.js";import"./context-Dbo8u0HC.js";import"./useStatic-DYXSIhuP.js";import"./getActionGroupSlot-Cfz4NNN9.js";import"./Popover-v14vQrIU.js";import"./useOverlayController-Bka7Uz7O.js";import"./OverlayContextProvider-BL4zS0NQ.js";import"./OverlayTrigger-Cf-WmxV6.js";import"./DialogTriggerView-09icvsrZ.js";import"./Overlay-Cih70UUa.js";import"./ButtonView-hKSw8y6j.js";import"./Flex-CGzmukht.js";import"./Heading-DGchSox2.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
