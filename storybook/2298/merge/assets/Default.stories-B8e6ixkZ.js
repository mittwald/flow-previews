import{j as r}from"./iframe-P-BtG9en.js";import{u as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-NSWHp5YX.js";import{L as m}from"./Link-Vx4jQ_pt.js";import{H as s}from"./HeaderNavigation-RTrRxz9O.js";import{B as o}from"./Button-BDKyvND0.js";import{T as p}from"./Text-WQ3bdi2b.js";import{I as h}from"./Image-BcRUrCbN.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-CVRvbsDI.js";import{C as M,M as c}from"./MenuItem-BX3sQ_NV.js";import{C as I}from"./ContextMenuTrigger-DAnP2pgI.js";import"./ContextMenuSection-DCh3mp1Z.js";import{a as T,M as k}from"./Modal-Cpn_uusB.js";import{H}from"./Heading-CnpYSlBq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BpgWfaNt.js";import"./index-B7vbb8bW.js";import"./index-BvXbw6Ik.js";import"./remote-CHm5B1ZS.js";import"./useLocalizedStringFormatter-DMM5tmNP.js";import"./context-DgQkEglP.js";import"./utils-B0ReHH5J.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-CaaZ7Vn6.js";import"./usePress-DdsYmr0S.js";import"./useFocusRing-CySMD5sm.js";import"./useFocusable-BT9LLfcI.js";import"./dynamic-NZeYY7PB.js";import"./LoadingSpinner-CEdiZrnd.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CkYmzEte.js";import"./ProgressBar-DT6X9kMn.js";import"./Label-Dy2C0Oyl.js";import"./Hidden-_62Uq0iE.js";import"./useLabel-DQN1qZoA.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CAs7Gyq6.js";import"./EmulatedBoldText-Dkyjs4gQ.js";import"./Text-Cuc5X3SS.js";import"./AlertIcon-D-lULPsb.js";import"./Action-BXaB41c4.js";import"./context-DzeViRSK.js";import"./useStatic-CkdzkAMF.js";import"./getActionGroupSlot-CoTv8oDB.js";import"./Popover-mshniZ9g.js";import"./useOverlayController-N6VWZ_a7.js";import"./OverlayContextProvider-c997mKVu.js";import"./Dialog-CXomJO1p.js";import"./RSPContexts-Jnosxnes.js";import"./OverlayArrow-BfX9M7HU.js";import"./useControlledState-CF2gRUje.js";import"./Collection-C65VUZYL.js";import"./CollectionBuilder-DTl13Dsz.js";import"./SelectionIndicator-DSNo1Dq6.js";import"./Separator-DqzDCiom.js";import"./SelectionManager-Bov5sZzJ.js";import"./useEvent-D5tDHFnx.js";import"./useCollator-Cdxl-D7M.js";import"./FocusScope-DOTGny1g.js";import"./VisuallyHidden-DdvDFx4J.js";import"./Switch-JzMieC5k.js";import"./useFieldComponent-DCdIumPj.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DaxdEKB-.js";import"./useFormReset-EHJI2p2K.js";import"./OverlayTrigger-C73x-77s.js";import"./DialogTriggerView-QpDCmnq1.js";import"./Overlay-UHK4Mx1-.js";import"./ButtonView-CwOL1ZjU.js";import"./Flex-HTQYjDtp.js";import"./Heading-BpHPsioq.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
