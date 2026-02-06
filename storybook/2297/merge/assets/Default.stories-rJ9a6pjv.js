import{j as r}from"./iframe-bYrN4iqU.js";import{u as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-m_DFVeXI.js";import{L as m}from"./Link-DPWKKiRI.js";import{H as s}from"./HeaderNavigation-wCU3ABfk.js";import{B as o}from"./Button-BXFpqU-p.js";import{T as p}from"./Text-Ggj8lIEk.js";import{I as h}from"./Image-DJulf9ic.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-DH9wr49V.js";import{C as M,M as c}from"./MenuItem-BBH1ugLq.js";import{C as I}from"./ContextMenuTrigger-De9uu2YY.js";import"./ContextMenuSection-BqvB1DY5.js";import{a as T,M as k}from"./Modal-D7lqkoLd.js";import{H}from"./Heading-tEMYcZaF.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DKWMiQh4.js";import"./index-BecUo0Hm.js";import"./index-ByZhX1CH.js";import"./remote-zHy9wvpL.js";import"./useLocalizedStringFormatter-gsFqTt9C.js";import"./context-Hrlbzros.js";import"./utils-B3voqzat.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-DIDqk3LI.js";import"./usePress-CHP3pRkH.js";import"./useFocusRing-D4lo4_Zr.js";import"./useFocusable-fXM7Y9pN.js";import"./dynamic-CHbvz_qx.js";import"./LoadingSpinner-jOE_2qaU.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BmdWdjlP.js";import"./ProgressBar-Df7WbfFD.js";import"./Label-BHh_gacH.js";import"./Hidden-kCI5Fish.js";import"./useLabel-xelku7uN.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CHbB-bBA.js";import"./EmulatedBoldText-Dg0kR_8L.js";import"./Text-Dj7c1Gq2.js";import"./AlertIcon-fl_R2PKX.js";import"./Action-BReqqCkr.js";import"./context-CIgtX0DK.js";import"./useStatic-ByHvTm37.js";import"./getActionGroupSlot-9Vl-KgEl.js";import"./Popover-LLtPuoZ9.js";import"./useOverlayController-DrRVhmF6.js";import"./OverlayContextProvider-CcBeb8cT.js";import"./Dialog-CxLv1-pk.js";import"./RSPContexts-CblVL1A7.js";import"./OverlayArrow-CBzM-Xoe.js";import"./useControlledState-hBcxnaS2.js";import"./Collection-k_p8jiFF.js";import"./CollectionBuilder-B7QPPD_O.js";import"./SelectionIndicator-MjQ5C6Rd.js";import"./Separator-CVohJStV.js";import"./SelectionManager-CkqK1ezZ.js";import"./useEvent-BnAk5cqF.js";import"./useCollator-CUuaB6UV.js";import"./FocusScope-DaLeJatZ.js";import"./VisuallyHidden-DAWjrZx-.js";import"./Switch-CJhW4ezu.js";import"./useFieldComponent-CM1iSrAB.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CM2KRk1e.js";import"./useFormReset-Cb31B_gj.js";import"./OverlayTrigger-Ck0Q03CL.js";import"./DialogTriggerView-IG7EACbV.js";import"./Overlay-C7lm44jm.js";import"./ButtonView-Dq6BfzVS.js";import"./Flex-BXEjTozc.js";import"./Heading-CY9qodVf.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
