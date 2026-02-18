import{j as r}from"./iframe-BDFzVZbC.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-aDXn3__r.js";import{L as m}from"./Link-De5vpNn4.js";import{H as s}from"./HeaderNavigation-BqR5-ZHI.js";import{B as o}from"./Button-C7bK1-uf.js";import{T as p}from"./Text-DCO-oE1a.js";import{I as h}from"./Image-CcCPbOie.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-2EGNp_NC.js";import{C as M,M as c}from"./MenuItem-P9sFSRWj.js";import{C as I}from"./ContextMenuTrigger-CwB4PFht.js";import"./ContextMenuSection-rEkP8dNP.js";import{M as T}from"./ModalTrigger-czE7G-go.js";import{M as k}from"./Modal-Bz96LWDI.js";import{H}from"./Heading-D5c-TU0p.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CcRyJRwo.js";import"./index-P1fb0se1.js";import"./index-CcbRX2xZ.js";import"./remote-C6miTdu_.js";import"./useLocalizedStringFormatter-BejhQiE3.js";import"./context-sVk6h2Ud.js";import"./utils-DRqoG6OW.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-BE-kuowd.js";import"./usePress-DJEnnjGh.js";import"./useFocusRing-CxM1MJ0B.js";import"./useFocusable-nLh15Hem.js";import"./dynamic-78IPl_xO.js";import"./LoadingSpinner-CPBqqCdo.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-ibrCxHHX.js";import"./ProgressBar-BO2kVTFg.js";import"./Label-CHSQ9cWG.js";import"./Hidden-HzHXzaYV.js";import"./useLabel-D8fV0T39.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-D6pVd-JB.js";import"./EmulatedBoldText-qk6rk8uL.js";import"./Text-5CWdwzmY.js";import"./AlertIcon-tKcNuTH2.js";import"./ActionBatch-dkJpCMmD.js";import"./useOverlayController-Bb-vbpCY.js";import"./useStatic-DKe6XZbW.js";import"./getActionGroupSlot-DJwqOljU.js";import"./Popover-DEUzSgQe.js";import"./OverlayContextProvider-ClMrYLWB.js";import"./Dialog-C2-FJ5MR.js";import"./RSPContexts-CK_xwACt.js";import"./OverlayArrow-BhJrUQVC.js";import"./useControlledState-CxpqxoPE.js";import"./Collection-C1wNqiGx.js";import"./CollectionBuilder-DtnVmW1Z.js";import"./SelectionIndicator-S2R90Jld.js";import"./Separator-DZXWrML2.js";import"./SelectionManager-BvzKXH6i.js";import"./useEvent-DOEbfCcC.js";import"./useCollator-DGEP0NQr.js";import"./FocusScope-Djn4bjzo.js";import"./VisuallyHidden-DL89d0r2.js";import"./Switch-iBmBwcV_.js";import"./useFieldComponent-DJTCy7fJ.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-RYb4ELwE.js";import"./useFormReset-CQpdwD5T.js";import"./OverlayTrigger-BwyAupi1.js";import"./DialogTriggerView-Cjt2-PSq.js";import"./Overlay-DkdcKSQA.js";import"./ButtonView-Co3oQwB4.js";import"./Flex-DbvEsOwD.js";import"./Heading-CoT4JWE4.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
