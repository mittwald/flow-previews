import{j as r}from"./iframe-CIhdjqSz.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-NrGPSND5.js";import{L as m}from"./Link-PpAdeeeE.js";import{H as s}from"./HeaderNavigation-CHy-XSAb.js";import{B as o}from"./Button--NFWCTgK.js";import{T as p}from"./Text-DgrqnOua.js";import{I as h}from"./Image-BDWGEQ5x.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-dxv8AFxx.js";import{C as M,M as c}from"./MenuItem-JBoS3pEj.js";import{C as I}from"./ContextMenuTrigger-CCML0O9_.js";import"./ContextMenuSection-B32Hv_M2.js";import{M as T}from"./ModalTrigger-7L6y-1G7.js";import{M as k}from"./Modal-BPdWM4cS.js";import{H}from"./Heading-DFMRUW3K.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BeD38kgF.js";import"./index-OQlE9mt9.js";import"./index-D2Zvq_HV.js";import"./remote-C6ukCFNy.js";import"./useLocalizedStringFormatter-BU74X8dt.js";import"./context-C9Id__Ro.js";import"./utils-3Ll5mTsj.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-CB1MjZml.js";import"./usePress-BAXbDaCF.js";import"./useFocusRing-ChVqcxnp.js";import"./useFocusable-DArPbii_.js";import"./dynamic-DC2aGj60.js";import"./LoadingSpinner-CnQRgWlh.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DTpgNeLS.js";import"./ProgressBar-uXwD_3g9.js";import"./Label-D3zNzQRu.js";import"./Hidden-BpzDMW_9.js";import"./useLabel-wcYinYgg.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BTfojbbK.js";import"./EmulatedBoldText-DYoDUL8u.js";import"./Text-BWZGL9q7.js";import"./AlertIcon-DlNCugjU.js";import"./ActionBatch-DvjVnKvH.js";import"./useOverlayController-DM_j6n2m.js";import"./useStatic-BON1q5w1.js";import"./getActionGroupSlot-BLtRHpNa.js";import"./Popover-BtssMKQJ.js";import"./OverlayContextProvider-D7G_WMz6.js";import"./Dialog-BaKpGYJ_.js";import"./RSPContexts-FgSmVkcq.js";import"./OverlayArrow-C-y_PFkG.js";import"./useControlledState-Bhs9bgfq.js";import"./Collection-CCRp5-Dk.js";import"./CollectionBuilder-NdwpQU0D.js";import"./SelectionIndicator-BybBuRuw.js";import"./Separator-CvRy5z-e.js";import"./SelectionManager-BQHZJ_z4.js";import"./useEvent-kjaJonnh.js";import"./useCollator-DNIGrhrL.js";import"./FocusScope-DnRcaDs5.js";import"./VisuallyHidden-Szd7uPuS.js";import"./Switch-C36cgj48.js";import"./useFieldComponent-BDBEatho.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BgmV9dKe.js";import"./useFormReset-CCc0UGFI.js";import"./OverlayTrigger-DlE73CJz.js";import"./DialogTriggerView-hhXUY9V9.js";import"./Overlay-knx40pXC.js";import"./ButtonView-DCesTJ_4.js";import"./Flex-JT-R-kzn.js";import"./Heading-N3mW0_Ma.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
