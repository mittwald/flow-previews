import{j as r}from"./iframe-n3VOiEf5.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-BKHoIgIa.js";import{L as m}from"./Link-GSlAfwA0.js";import{H as s}from"./HeaderNavigation-DLhB5UWS.js";import{B as o}from"./Button-gwePC8r8.js";import{T as p}from"./Text-CwVjZxCT.js";import{I as h}from"./Image-CbfNw6Mt.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-DWNc0D-e.js";import{C as M,M as c}from"./MenuItem-3p5cxjdq.js";import{C as I}from"./ContextMenuTrigger-CdM56nvW.js";import"./ContextMenuSection-MotZbouy.js";import{M as T}from"./ModalTrigger-UUwUoA68.js";import{M as k}from"./Modal-B-xEtS1E.js";import{H}from"./Heading-C6n9bJf2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-xlJ5dlMA.js";import"./index-Bqd_wUB4.js";import"./index-CHzAo02W.js";import"./remote-CWx46e_E.js";import"./useLocalizedStringFormatter-BFx8pFGn.js";import"./context-DhQskmxc.js";import"./utils-BTX3Dk-t.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-Di5Kz97s.js";import"./usePress-CVHN3NRW.js";import"./useFocusRing-50iWl84k.js";import"./useFocusable-ZTBPsPh1.js";import"./dynamic-DgHDUJEW.js";import"./LoadingSpinner-BZywMYAM.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dt8pRNpU.js";import"./ProgressBar-C4tpbq9V.js";import"./Label-CZ6Ig0wh.js";import"./Hidden-8NzXPPVn.js";import"./useLabel-DpN8AhZi.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DXFXi5M2.js";import"./EmulatedBoldText-eIBSog0P.js";import"./Text-BWj5dCJ1.js";import"./AlertIcon-DtfTxuVy.js";import"./ActionBatch-B7NWJImq.js";import"./useOverlayController-BNiAcUvH.js";import"./useStatic-CMDkRNZz.js";import"./getActionGroupSlot-CP2KeStW.js";import"./Popover-BLdDdbLq.js";import"./OverlayContextProvider-BOvHDlNa.js";import"./Dialog-Be8vTliz.js";import"./RSPContexts-DzW0xATd.js";import"./OverlayArrow-Tc6q1y2y.js";import"./useControlledState-17a16_5D.js";import"./Collection-2dWh1OBC.js";import"./CollectionBuilder-pL0vDcKt.js";import"./SelectionIndicator-QXVr0AO7.js";import"./Separator-XftYj5HO.js";import"./SelectionManager-Bh8KZa3d.js";import"./useEvent-D6V5lpJs.js";import"./useCollator-BWOk8TKb.js";import"./FocusScope-BBR4OeS8.js";import"./VisuallyHidden-DCK-vxP3.js";import"./Switch-DsBZ3dut.js";import"./useFieldComponent-6hUMLoYk.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CoPURb0B.js";import"./useFormReset-C-KjP2af.js";import"./OverlayTrigger-CSrVMpec.js";import"./DialogTriggerView-C7D0F8zI.js";import"./Overlay-DXNeIFBA.js";import"./ButtonView-CrXGo-AL.js";import"./Flex-i6CO50OO.js";import"./Heading-Dk8PIdV3.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
