import{j as r}from"./iframe-DYssR0ZO.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-BhLXBIfL.js";import{L as m}from"./Link-BfMlRe4o.js";import{H as s}from"./HeaderNavigation-DFFx6F-b.js";import{B as o}from"./Button-DWrm_dbc.js";import{T as p}from"./Text-S9F4vE2H.js";import{I as h}from"./Image-CLpKtQd9.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-4_SNYsOw.js";import{C as M,M as c}from"./MenuItem-DyA5bZH_.js";import{C as I}from"./ContextMenuTrigger-DM3g_ry9.js";import"./ContextMenuSection-DyHCMP-N.js";import{M as T}from"./ModalTrigger-C_TFeEXL.js";import{M as k}from"./Modal-CmAFXMHf.js";import{H}from"./Heading-De8T3vTM.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DsQfvZ8R.js";import"./index-BiQ39dcD.js";import"./index-DD53_4h2.js";import"./remote-cHYIdIzb.js";import"./useLocalizedStringFormatter-lpvT_cvb.js";import"./context-CUXiPoRo.js";import"./utils-C3q1cDFY.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-CQpADUyl.js";import"./usePress-xSc99ptM.js";import"./useFocusRing-CMEZAWj2.js";import"./useFocusable-CmCmEjiW.js";import"./dynamic-3BYImiyG.js";import"./LoadingSpinner-lL7MHRW7.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dmp7BHEZ.js";import"./ProgressBar-RP_su0Fk.js";import"./Label-DSpHRERt.js";import"./Hidden-CFJfk2M-.js";import"./useLabel-BksUhJpA.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BciskJv3.js";import"./EmulatedBoldText-BT8wvojV.js";import"./Text-C48KhL8P.js";import"./AlertIcon-AvW8zEgb.js";import"./ActionBatch-Cjtwd20r.js";import"./useOverlayController-BfbCDLsY.js";import"./useStatic-BJkvCPdg.js";import"./getActionGroupSlot-CBN4XHqD.js";import"./Popover-BQzuMW4U.js";import"./OverlayContextProvider-C4hsr81s.js";import"./Dialog-DF_yv1N5.js";import"./RSPContexts-CDW_96-t.js";import"./OverlayArrow-Cf72_x8q.js";import"./useControlledState-CDSB3NYp.js";import"./Collection-DXdmtnJo.js";import"./CollectionBuilder-rMlba9-K.js";import"./SelectionIndicator-02MGjaw1.js";import"./Separator-DtudkoI4.js";import"./SelectionManager-CofrV8Dv.js";import"./useEvent-fKqzN6WM.js";import"./useCollator-CCP6S8mH.js";import"./FocusScope-CNZRDNpk.js";import"./VisuallyHidden-B8I9N7kv.js";import"./Switch-D2UxYnkJ.js";import"./useFieldComponent-MDeHyLVI.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-TsqRqfMK.js";import"./useFormReset-CxfaiCUr.js";import"./OverlayTrigger-BzADejGr.js";import"./DialogTriggerView-CeCW_e9m.js";import"./Overlay-CBBWFTg2.js";import"./ButtonView-BsRNqhDl.js";import"./Flex-CDdSdzbN.js";import"./Heading-CZjnkckI.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
