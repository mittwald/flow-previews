import{j as r}from"./iframe-DcHapM8k.js";import{q as d,a1 as l,_ as g,u,a2 as x}from"./IconWarning-8t1q80cl.js";import{L as m}from"./Link-VWWhibvp.js";import{H as s}from"./HeaderNavigation-Ck3SUdHJ.js";import{B as o}from"./Button-C1DQEdG6.js";import{T as p}from"./Text-BqUUaAMX.js";import{I as h}from"./Image-CtEir0AQ.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-Dan4vXzm.js";import{C as M,M as c}from"./ContextMenu-DHk9U1Rx.js";import{C as I}from"./ContextMenuTrigger-BObfAlM2.js";import"./ContextMenuSection-Bxsn88Zf.js";import{a as T,M as k}from"./Modal-DfBhoX30.js";import{H}from"./Heading-CSFiGnXH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-F2rlWCYo.js";import"./index-DtEczAXX.js";import"./index-Ba4Wgmch.js";import"./remote-CrHpKc5j.js";import"./useLocalizedStringFormatter--D1phWvd.js";import"./context-Camfekg3.js";import"./utils-BN-Wf9GB.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-DRRwHOXQ.js";import"./useFocus-ZXD30Rmm.js";import"./useFocusRing-Dt3gTaal.js";import"./useFocusable-CPQk5Kbw.js";import"./dynamic-B-FNOw2F.js";import"./LoadingSpinner-DeuQI20n.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DGX0xFqX.js";import"./ProgressBar-Dz7b_e2x.js";import"./Label-Cc29pwI9.js";import"./Hidden-BBxp_Bwo.js";import"./useLabel-DVAEGcEm.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BhJkGPhR.js";import"./EmulatedBoldText-BsmORSBd.js";import"./Text-KTnK0cez.js";import"./AlertIcon-aSf31ti-.js";import"./Switch-BGR4Cs8k.js";import"./useFieldComponent-DLXIz4kk.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-ChVg7G-C.js";import"./useFormReset-DByFRxt8.js";import"./useControlledState-CD18I4-6.js";import"./VisuallyHidden-ZuD5qc8D.js";import"./Dialog-gML-GktL.js";import"./RSPContexts-DXTQnhuO.js";import"./OverlayArrow-Ct2arrPt.js";import"./Collection-y5T8eap-.js";import"./CollectionBuilder-edhcBSCU.js";import"./SelectionIndicator-nDWEY-Pb.js";import"./Separator-DyT19d9_.js";import"./SelectionManager-cayBw_JG.js";import"./useEvent-FsYqvuuv.js";import"./useCollator-CvGBdlrR.js";import"./FocusScope-DwQWTV3n.js";import"./Action-CLgptl7p.js";import"./context-C5BkLhj5.js";import"./useStatic-lCMR7rr_.js";import"./getActionGroupSlot-BZTJVxAa.js";import"./Popover-8k6-3DAC.js";import"./useOverlayController-CLiM05Jw.js";import"./OverlayContextProvider-By_DTOub.js";import"./OverlayTrigger-2_tOKmYE.js";import"./DialogTriggerView-DPMzhCJ9.js";import"./Overlay-RjFcvtIE.js";import"./ButtonView-Bx--fAkF.js";import"./Flex-CbanK84G.js";import"./Heading-DlC7g6iA.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
