import{j as r}from"./iframe-CH-PGbIe.js";import{u as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-BrtiYPUm.js";import{L as m}from"./Link-DAc9zWmn.js";import{H as s}from"./HeaderNavigation-DKh1QIVT.js";import{B as o}from"./Button-Dl-iCxcF.js";import{T as p}from"./Text-DUTVzyy5.js";import{I as h}from"./Image-DHsJ9mZZ.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-D_XhaOGG.js";import{C as M,M as c}from"./MenuItem-T_T0HTHx.js";import{C as I}from"./ContextMenuTrigger--KtB7eik.js";import"./ContextMenuSection-NNPlO46F.js";import{a as T,M as k}from"./Modal-DOuWaKq4.js";import{H}from"./Heading-BkfS56Xz.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Cx8afA-p.js";import"./index-JjjT5_3a.js";import"./index-yvyiz2TD.js";import"./remote-NkxELaCk.js";import"./useLocalizedStringFormatter-UQrIwX21.js";import"./context-BEPAk1pi.js";import"./utils-BUbYN1U7.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-C-u_ZFsP.js";import"./usePress-CjXzQGxt.js";import"./useFocusRing-CuUFHyYZ.js";import"./useFocusable-DX9jgPLa.js";import"./dynamic-DYPsp9rr.js";import"./LoadingSpinner-BVg6Htwb.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BxJ7LcYT.js";import"./ProgressBar-BvIgs7se.js";import"./Label-YvP3zR1_.js";import"./Hidden-BHNvmzaU.js";import"./useLabel-BBwXLpG2.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-Bk_hun62.js";import"./EmulatedBoldText-DLXz_2Ie.js";import"./Text-C_Kx-nbJ.js";import"./AlertIcon-Cf4_Rc8_.js";import"./Action-CX67yONB.js";import"./context-BsZ7lsCx.js";import"./useStatic-DyjFLUOF.js";import"./getActionGroupSlot-BkUFYgi5.js";import"./Popover-E9WcTTGu.js";import"./useOverlayController-DE9i1G--.js";import"./OverlayContextProvider-C92IYoS4.js";import"./Dialog-LWxSnoH8.js";import"./RSPContexts-CFzFD81a.js";import"./OverlayArrow-BxBE_adq.js";import"./useControlledState-BQPo69mZ.js";import"./Collection-BTj5Zmqj.js";import"./CollectionBuilder-D_HWiiHS.js";import"./SelectionIndicator-DFgYB22t.js";import"./Separator-D7Dxs4fR.js";import"./SelectionManager-Cy9wSm_1.js";import"./useEvent-DmJ5-BvT.js";import"./useCollator-NRPLm61h.js";import"./FocusScope-Com4Ovel.js";import"./VisuallyHidden-BZmadp8e.js";import"./Switch-BHYJCOuH.js";import"./useFieldComponent-R38s1k2Z.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CSKOmrza.js";import"./useFormReset-DarrOQyz.js";import"./OverlayTrigger-BCj6WW1R.js";import"./DialogTriggerView-Bk--NiDN.js";import"./Overlay-DrRFaJW9.js";import"./ButtonView-B_eZj1aS.js";import"./Flex-DiMIxR5t.js";import"./Heading-DuD4iKmL.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
