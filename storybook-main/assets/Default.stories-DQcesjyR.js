import{j as r}from"./iframe-BoiTaxGN.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-DctWBCm0.js";import{L as m}from"./Link-BXD_Kg0Z.js";import{H as s}from"./HeaderNavigation-CcJkJ64c.js";import{B as o}from"./Button-MYsVPgLO.js";import{T as p}from"./Text-ClfpXeTF.js";import{I as h}from"./Image-D6AayUUg.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-P2YueCDD.js";import{C as M,M as c}from"./MenuItem-CDDy6p-6.js";import{C as I}from"./ContextMenuTrigger-CEzSc6a_.js";import"./ContextMenuSection-CBBb0XeQ.js";import{M as T}from"./ModalTrigger-B3QWcGmE.js";import{M as k}from"./Modal-BCaxB9zM.js";import{H}from"./Heading-9cwIlFFB.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-5SfKf5nB.js";import"./index-CnTFVdv3.js";import"./index-B9o0n-vC.js";import"./remote-C4jG3DXh.js";import"./useLocalizedStringFormatter-jQztqgXA.js";import"./context-hlBZKj-7.js";import"./utils-RetFhwyR.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-BSOUAoQt.js";import"./usePress-DoLCzapA.js";import"./useFocusRing-VutGkHGx.js";import"./useFocusable-CNuWQ5Vu.js";import"./dynamic-X8snMUB4.js";import"./LoadingSpinner-BBdroSRA.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BZbFxF4O.js";import"./ProgressBar-L18yOCjI.js";import"./Label-eoW__4rU.js";import"./Hidden-BZRUsILE.js";import"./useLabel-B8QgbILE.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-zBSS86_h.js";import"./EmulatedBoldText-vFeun45o.js";import"./Text-DnUg5-aR.js";import"./AlertIcon-B1VBridV.js";import"./ActionBatch-D2Yqxa5D.js";import"./useOverlayController-BbkltkAX.js";import"./useStatic-bFyj34a0.js";import"./getActionGroupSlot-CkMRx6Vr.js";import"./Popover-CKTt2h1_.js";import"./OverlayContextProvider-Bv8Ja9wo.js";import"./Dialog-BL8T3CnU.js";import"./RSPContexts-9T8dsftx.js";import"./OverlayArrow-vd9UrCyT.js";import"./useControlledState-DJPWuI7p.js";import"./Collection-BswXFc7F.js";import"./CollectionBuilder-7YZ1XDUD.js";import"./SelectionIndicator-BQPOHDPg.js";import"./Separator-CUdWNTXS.js";import"./SelectionManager-BSZzvdD0.js";import"./useEvent-CSRhnpf0.js";import"./useCollator-CCHmo4fs.js";import"./FocusScope-p908I3Or.js";import"./VisuallyHidden-CML_0Z6P.js";import"./Switch-B3p6hgi_.js";import"./useFieldComponent-DiiGd8t3.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BHW6-QSh.js";import"./useFormReset-DsmV2EC6.js";import"./OverlayTrigger-Db6so5Mf.js";import"./DialogTriggerView-C5uIlAdd.js";import"./Overlay-CDL6WOnf.js";import"./ButtonView-Jmrl6E5f.js";import"./Flex-BlwptNjQ.js";import"./Heading-BcC1Qw26.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
