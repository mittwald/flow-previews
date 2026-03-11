import{j as r}from"./iframe-C0EFV5oe.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-Xp-mdAXG.js";import{L as m}from"./Link-C5C7q4c3.js";import{H as s}from"./HeaderNavigation-B4XrzUuT.js";import{B as o}from"./Button-BqN-Pb_Z.js";import{T as p}from"./Text-DOyzWtc3.js";import{I as h}from"./Image-Ca_yb6wX.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-W0uNQuG9.js";import{C as M,M as c}from"./MenuItem-DOcffqKI.js";import{C as I}from"./ContextMenuTrigger-RXQqOYFx.js";import"./ContextMenuSection-CeWW7BcO.js";import{M as T}from"./ModalTrigger-Dh1j6UNL.js";import{M as k}from"./Modal-C71hUzD9.js";import{H}from"./Heading-CZ1StJHC.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DYluwTXq.js";import"./index-a1BVMwGa.js";import"./index-CT8mMXvE.js";import"./remote-CJHR20lz.js";import"./useLocalizedStringFormatter-COxbXONP.js";import"./context-8WtOcV7b.js";import"./utils-BH6nMpvt.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-Kf_jHJpa.js";import"./usePress-KZK5hlL_.js";import"./useFocusRing-DMB6fTXa.js";import"./useFocusable-DZVtVQHs.js";import"./dynamic-DNPsW2Gv.js";import"./LoadingSpinner-AXwRYWdI.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DHla6nGC.js";import"./ProgressBar-BJi6WIHx.js";import"./Label-CdL3Pj-c.js";import"./Hidden-BTRmRI8a.js";import"./useLabel-C2wPJC8Z.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-yoNZwNd3.js";import"./EmulatedBoldText-12IhiA7q.js";import"./Text-BncBp0aM.js";import"./AlertIcon-C23FUlLu.js";import"./ActionBatch-BKp4oeCQ.js";import"./useOverlayController-DSjMGOL2.js";import"./useStatic-BaJc0e4A.js";import"./getActionGroupSlot-9D_vBtIQ.js";import"./Popover-CLY6HSe2.js";import"./OverlayContextProvider-CfXne1yD.js";import"./Dialog-DJ2-3VRx.js";import"./RSPContexts-DN9Cbb61.js";import"./OverlayArrow-DU6ABYYb.js";import"./useControlledState-BnTyVv5N.js";import"./Collection-CeBXcKv1.js";import"./CollectionBuilder-NEfM2aTk.js";import"./SelectionIndicator-CiCpZhmm.js";import"./Separator-Cd1GHDKW.js";import"./SelectionManager-0ETMkcPZ.js";import"./useEvent-BSnLayA0.js";import"./useCollator-Dw-CzaIq.js";import"./FocusScope-BRWQwIZz.js";import"./VisuallyHidden-BtDJhMaH.js";import"./Switch-CGDsTKBH.js";import"./useFieldComponent-Becw-9Qv.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-exBklheb.js";import"./useFormReset-D0RWbzMx.js";import"./OverlayTrigger-Dw0FnMHR.js";import"./DialogTriggerView-B7MKS-pg.js";import"./Overlay-Z2wG9VEn.js";import"./ButtonView-BsJw5G4L.js";import"./Flex-CRYKgtbH.js";import"./Heading-B3GE8mEs.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
