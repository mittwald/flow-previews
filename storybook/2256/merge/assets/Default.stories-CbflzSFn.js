import{j as r}from"./iframe-Bc-jwLWq.js";import{q as d,a1 as l,_ as g,u,a2 as x}from"./IconWarning-BPpigV-o.js";import{L as m}from"./Link-CVWtB-w0.js";import{H as s}from"./HeaderNavigation-Bpdu6VTV.js";import{B as o}from"./Button-DRfNiyCG.js";import{T as p}from"./Text-Bs06tnQB.js";import{I as h}from"./Image-CqUE2Y_L.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-V3eohZA0.js";import{C as M,M as c}from"./ContextMenu-D5tnVRpu.js";import{C as I}from"./ContextMenuTrigger-BEhNMwiU.js";import"./ContextMenuSection-DJB6II09.js";import{a as T,M as k}from"./Modal--4s-eSmP.js";import{H}from"./Heading-Av026-5J.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DGcImTRM.js";import"./index-CElyulra.js";import"./index-Ct8kadYq.js";import"./remote-CficONz5.js";import"./useLocalizedStringFormatter-C0QVYeul.js";import"./context-BDmep644.js";import"./utils-BIv87FRG.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-NBjG5NMF.js";import"./useFocus-C6ldElRQ.js";import"./useFocusRing-B0jLa-Vk.js";import"./useFocusable-DIXmUg59.js";import"./dynamic-CTlJFVeg.js";import"./LoadingSpinner-D9DMVpgJ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-HPdphaJl.js";import"./ProgressBar-CdyMER2G.js";import"./Label-B3yduWiM.js";import"./Hidden-BOhzI0oW.js";import"./useLabel-BfZDlGh7.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-Cfl6H5sa.js";import"./EmulatedBoldText-CZY7LDuf.js";import"./Text-DgSTzWgU.js";import"./AlertIcon-DCb6GQr1.js";import"./Switch-BRJuQHTv.js";import"./useFieldComponent-ahSSNXad.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BnDjMcw1.js";import"./useFormReset-DFcj21LA.js";import"./useControlledState-IlB9I5Xo.js";import"./VisuallyHidden-CmlM99K4.js";import"./Dialog-BLkrUNfj.js";import"./RSPContexts-pS-AnHir.js";import"./OverlayArrow-C2KXIoV9.js";import"./Collection-BCq2XeeE.js";import"./CollectionBuilder-CKD3RAIJ.js";import"./SelectionIndicator-BwDlTF6c.js";import"./Separator-jBiWh72R.js";import"./SelectionManager-Bz5s9XnK.js";import"./useEvent-sz969hj6.js";import"./useCollator-XCIFooBT.js";import"./FocusScope-Bs4WKWZW.js";import"./Action-BW1QHV35.js";import"./context-CAc_7aQG.js";import"./useStatic-D2AFXt6d.js";import"./getActionGroupSlot-DJ6HE5sS.js";import"./Popover-BnXLjntA.js";import"./useOverlayController-DoFosNgE.js";import"./OverlayContextProvider-BB6WVLCg.js";import"./OverlayTrigger-Cc-9XWER.js";import"./DialogTriggerView-C5w2hliJ.js";import"./Overlay-OSaKqjK7.js";import"./ButtonView-BKhjZf5-.js";import"./Flex-6q1F9fXD.js";import"./Heading-DpsZJGvr.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
