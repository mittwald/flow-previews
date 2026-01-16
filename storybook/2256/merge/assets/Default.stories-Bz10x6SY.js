import{j as r}from"./iframe-DjKJp4LH.js";import{q as d,a1 as l,_ as g,u,a2 as x}from"./IconWarning-6PZXNPQv.js";import{L as m}from"./Link-B_-7uhNh.js";import{H as s}from"./HeaderNavigation-BF4qnOi0.js";import{B as o}from"./Button-BDEZ1Pgg.js";import{T as p}from"./Text-DIX_PQ8a.js";import{I as h}from"./Image-D9MfVIAZ.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-BxU-tXte.js";import{C as M,M as c}from"./ContextMenu-Bi4-Rrdr.js";import{C as I}from"./ContextMenuTrigger-bYBn2D1O.js";import"./ContextMenuSection-D6Byc7PS.js";import{a as T,M as k}from"./Modal-OAnj8MYb.js";import{H}from"./Heading-BlHRWoOy.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D6qVG3rB.js";import"./index-DwtlgCJu.js";import"./index-PXjpOTa6.js";import"./remote-X6dXUxim.js";import"./useLocalizedStringFormatter-Dnneor8b.js";import"./context-CaWPG6rd.js";import"./utils-DyC1AhIW.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-Cba7eTZL.js";import"./useFocus-DfQL19Qh.js";import"./useFocusRing-BGVhnkul.js";import"./useFocusable-Cypk5WsB.js";import"./dynamic-Cwgd_SYw.js";import"./LoadingSpinner-pyPoMdb7.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DheLTGmH.js";import"./ProgressBar-Bp6bQOCH.js";import"./Label-7z6Dpe4l.js";import"./Hidden-Cj7p_Cun.js";import"./useLabel--MzsjFNv.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DP-AFXYC.js";import"./EmulatedBoldText-CMQt-Xk-.js";import"./Text-DDR-J2dK.js";import"./AlertIcon-DJ6AhYBh.js";import"./Switch-mP0ECEeM.js";import"./useFieldComponent-7yFtRUym.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DZbD7mMm.js";import"./useFormReset-BtBZQ9D7.js";import"./useControlledState-B7AKSDvs.js";import"./VisuallyHidden-BM-dzb4f.js";import"./Dialog-B6ze-qTj.js";import"./RSPContexts-BW0AZj1S.js";import"./OverlayArrow-NBjjGcXc.js";import"./Collection-DCkcEv4P.js";import"./CollectionBuilder-BUtswklx.js";import"./SelectionIndicator-B0FAwcHG.js";import"./Separator-BnnFI041.js";import"./SelectionManager-BjFMgKhL.js";import"./useEvent-D3fHv2-i.js";import"./useCollator-C3dV1__C.js";import"./FocusScope-5Nl-wNMA.js";import"./Action-CS8Seurr.js";import"./context-BJ5dxW4L.js";import"./useStatic-DSbbnRPw.js";import"./getActionGroupSlot-BcFDPTef.js";import"./Popover-DZdPgP5E.js";import"./useOverlayController-CN88K5mF.js";import"./OverlayContextProvider-x3mZph6J.js";import"./OverlayTrigger-JCWGSatN.js";import"./DialogTriggerView-D50OeKtw.js";import"./Overlay-DSVJl3m-.js";import"./ButtonView-Clb97ThZ.js";import"./Flex-B-rg7EcS.js";import"./Heading-YfRwYxPu.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
