import{j as r}from"./iframe-BBHdjMJ6.js";import{u as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-CyXtdbqA.js";import{L as m}from"./Link-K9AShZA3.js";import{H as s}from"./HeaderNavigation-DmKcqgSF.js";import{B as o}from"./Button-P5io5pgW.js";import{T as p}from"./Text--O-2RTYx.js";import{I as h}from"./Image-3Hk1p5R-.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-Cu5dlAXZ.js";import{C as M,M as c}from"./MenuItem-B0Nfemai.js";import{C as I}from"./ContextMenuTrigger-B8815q0u.js";import"./ContextMenuSection-jSS7omV8.js";import{a as T,M as k}from"./Modal-B1085d6W.js";import{H}from"./Heading-vAH38JYJ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Dr_ijNQm.js";import"./index-DnL9UocU.js";import"./index-FWsSj9e8.js";import"./remote-BykRkK4-.js";import"./useLocalizedStringFormatter-BwLVFU66.js";import"./context-XjgBcoVm.js";import"./utils-gePwv3Li.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-CRClO8Jv.js";import"./usePress-BicAkDgM.js";import"./useFocusRing-ClLYF0Wy.js";import"./useFocusable-CfkxnlZA.js";import"./dynamic-Cm-8a2Jt.js";import"./LoadingSpinner-Crr5qNPb.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DU6B0w55.js";import"./ProgressBar-C-Wzcy4_.js";import"./Label-Cq91lcPj.js";import"./Hidden-DJEpRFXv.js";import"./useLabel-CDbjeNSC.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BpCzgQab.js";import"./EmulatedBoldText-DKBJ0QzH.js";import"./Text-CkngT02A.js";import"./AlertIcon-BGgK2Oqf.js";import"./Action-qWLGDSFj.js";import"./context-DiIk_s_n.js";import"./useStatic-C9-mjYGz.js";import"./getActionGroupSlot-DTels04I.js";import"./Popover-ZlNB2WlB.js";import"./useOverlayController-CB3s63Hy.js";import"./OverlayContextProvider-Co9CnEOm.js";import"./Dialog-BeRC8Qw9.js";import"./RSPContexts-C5-K-EZi.js";import"./OverlayArrow-D6Rp8cyC.js";import"./useControlledState-CTrYQ-In.js";import"./Collection-C6Dl6i0H.js";import"./CollectionBuilder-DfMW8xNP.js";import"./SelectionIndicator-DJhqJXB-.js";import"./Separator-Dx2ExPSk.js";import"./SelectionManager-CKq6y8XV.js";import"./useEvent-0gy1gNIh.js";import"./useCollator-CP6m8uNZ.js";import"./FocusScope-0pM5bnV4.js";import"./VisuallyHidden-D-7oSl-x.js";import"./Switch-DHg5Zxe0.js";import"./useFieldComponent-DcHfvLKR.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DFbImMV5.js";import"./useFormReset-CMCffA9I.js";import"./OverlayTrigger-xwaQ_4qt.js";import"./DialogTriggerView-TrXihQOK.js";import"./Overlay-BAgbyXr5.js";import"./ButtonView-CbJs68it.js";import"./Flex-CDtMYqx3.js";import"./Heading-UXRD4YW7.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const wr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,wr as __namedExportsOrder,qr as default};
