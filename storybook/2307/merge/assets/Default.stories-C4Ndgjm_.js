import{j as r}from"./iframe-XxUhdOIM.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-HmbpUhBv.js";import{L as m}from"./Link-BVBHyD56.js";import{H as s}from"./HeaderNavigation-BZx9eAIe.js";import{B as o}from"./Button-CGELadBW.js";import{T as p}from"./Text-Cnwgd4MT.js";import{I as h}from"./Image-BaNx1Pph.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-CwGmjvqE.js";import{C as M,M as c}from"./MenuItem-Cf3SsIGm.js";import{C as I}from"./ContextMenuTrigger-DnfKci63.js";import"./ContextMenuSection-CrLbr6yo.js";import{a as T,M as k}from"./Modal-DcI73C00.js";import{H}from"./Heading-zbsC8ORu.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CoC0P7KZ.js";import"./index-CHNtIY8f.js";import"./index-BSqFjc_t.js";import"./remote-6r6BNiZ9.js";import"./useLocalizedStringFormatter-C41xTvax.js";import"./context-DoTCerLu.js";import"./utils-BCq0Cvc3.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-EZLK-muK.js";import"./usePress-C6bNQEHg.js";import"./useFocusRing-B4cqEnOC.js";import"./useFocusable-BMaOCfpv.js";import"./dynamic-DlcFrL20.js";import"./LoadingSpinner-eRWTE9TH.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C5sfG3Jr.js";import"./ProgressBar-DoY0_w5k.js";import"./Label-ChQ-hUoB.js";import"./Hidden-Bb8MHfhN.js";import"./useLabel-BmkrUKzN.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DmOXQPuo.js";import"./EmulatedBoldText-p9aRLsBg.js";import"./Text-CyqmbAxA.js";import"./AlertIcon-B-eIAqAY.js";import"./Action-uIBgr6h7.js";import"./context-DxgidNIJ.js";import"./useStatic-BtKbO9c7.js";import"./getActionGroupSlot-UY0N-ZIa.js";import"./Popover-CwounBp0.js";import"./useOverlayController-BEKeYHy5.js";import"./OverlayContextProvider-DKE9AqME.js";import"./Dialog-Cu17hg-L.js";import"./RSPContexts-CtuUzpub.js";import"./OverlayArrow-4i6vqPwo.js";import"./useControlledState-BjbUFAiJ.js";import"./Collection-Cp4O_cQl.js";import"./CollectionBuilder-CZOzXtpj.js";import"./SelectionIndicator-BvCJtDxS.js";import"./Separator-B_vWzLB2.js";import"./SelectionManager-BFRX4BxM.js";import"./useEvent-CS7e6qWg.js";import"./useCollator-C4FEsSYx.js";import"./FocusScope-Bd3CxSOo.js";import"./VisuallyHidden-BH7c3L8h.js";import"./Switch-Cz6V9ytY.js";import"./useFieldComponent-DmQ0NGCO.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DECANOCk.js";import"./useFormReset-CjY5_fDt.js";import"./OverlayTrigger-B9bnxvcN.js";import"./DialogTriggerView-C7kmpAG-.js";import"./Overlay-CLKBiVpB.js";import"./ButtonView-BOkSZ7Ty.js";import"./Flex-CTk6BdsO.js";import"./Heading-CZTrf3Od.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
