import{j as r}from"./iframe-BgKMnsqP.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-LAZRyVR3.js";import{L as m}from"./Link-DQzWffQ1.js";import{H as s}from"./HeaderNavigation-n1gjSzeN.js";import{B as o}from"./Button-BtfzhoC2.js";import{T as p}from"./Text-C3i_8DOD.js";import{I as h}from"./Image-D5xoWZSI.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-BzZWgZ5O.js";import{C as M,M as c}from"./MenuItem-BDaUhBvC.js";import{C as I}from"./ContextMenuTrigger-wRUtG6NL.js";import"./ContextMenuSection-DBH05xVc.js";import{M as T}from"./ModalTrigger-DfIM03Yl.js";import{M as k}from"./Modal-Bb86vIfw.js";import{H}from"./Heading-Dr5lCRWs.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-K5lY2cwd.js";import"./index-BfRfH9Zo.js";import"./index-Cjd0WNlk.js";import"./remote-BqVO6mjn.js";import"./useLocalizedStringFormatter-lbar_Hun.js";import"./context-bU_PoVUz.js";import"./utils-DF7rIzyn.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-rZbUMOOr.js";import"./usePress-BRD_gMdl.js";import"./useFocusRing-Do_SyrKm.js";import"./useFocusable-D4mYKpyk.js";import"./dynamic-EDiDAp0E.js";import"./LoadingSpinner-CVpmlYAZ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CpsY86Gq.js";import"./ProgressBar-BWgoyrrO.js";import"./Label-DB6i0Far.js";import"./Hidden-DjEbUam7.js";import"./useLabel-cKqQKm7D.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CrtXW1Io.js";import"./EmulatedBoldText-CGtkaQmh.js";import"./Text-DxRa_Q_m.js";import"./AlertIcon-CcDG2G1r.js";import"./ActionBatch-4ndP-n8L.js";import"./useOverlayController-D55f6wXT.js";import"./useStatic-BGwbdR9P.js";import"./getActionGroupSlot-DyZ1DXI5.js";import"./Popover-DwOIDTsd.js";import"./OverlayContextProvider-B2u_rHsg.js";import"./Dialog-BWmXoaKF.js";import"./RSPContexts-DOCQ2POG.js";import"./OverlayArrow-5gMuSGka.js";import"./useControlledState-CIyJs2jp.js";import"./Collection-DFA5r9t5.js";import"./CollectionBuilder-f0lBOmxU.js";import"./SelectionIndicator-Uu23SvC3.js";import"./Separator-nr_f8Y_b.js";import"./SelectionManager-DVR2wm8O.js";import"./useEvent-y3i9KFGu.js";import"./useCollator-Dqx-tu-j.js";import"./FocusScope-CnP7IT5L.js";import"./VisuallyHidden-CtgyRlvv.js";import"./Switch-CR0u7DKP.js";import"./useFieldComponent-BrPuybAK.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-5q4xvrfU.js";import"./useFormReset-BD4Q_TlS.js";import"./OverlayTrigger-B2K0MccU.js";import"./DialogTriggerView-DWZYR3R2.js";import"./Overlay-jspJFumx.js";import"./ButtonView-DXAFCp_d.js";import"./Flex-Cg9PpE8E.js";import"./Heading-DVJa8yG2.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
