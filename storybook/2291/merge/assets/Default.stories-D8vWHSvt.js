import{j as r}from"./iframe-CGL3Ztd8.js";import{u as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-CMBZCdTm.js";import{L as m}from"./Link-CU2-FrDI.js";import{H as s}from"./HeaderNavigation-Bp0u69fT.js";import{B as o}from"./Button-CdFi_Gvp.js";import{T as p}from"./Text-_sa0OuU0.js";import{I as h}from"./Image-BaPPl3Mh.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-Bvs6nUeN.js";import{C as M,M as c}from"./MenuItem-IyrCa7vr.js";import{C as I}from"./ContextMenuTrigger-C_yY_JWj.js";import"./ContextMenuSection-DZtKonlo.js";import{a as T,M as k}from"./Modal-V-AQtNT5.js";import{H}from"./Heading-DBE0Oj6w.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-WiCTTjdG.js";import"./index-P9tp8qCw.js";import"./index-eHspQkB2.js";import"./remote-DEzwzibY.js";import"./useLocalizedStringFormatter-BjebV3sn.js";import"./context-BN4qQIb1.js";import"./utils-BPLHaINM.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-XDda6gbt.js";import"./usePress-BpWTOkQr.js";import"./useFocusRing-BtxSiiWP.js";import"./useFocusable-MZ2jhLFm.js";import"./dynamic-C8bvHICk.js";import"./LoadingSpinner-ChXboWO2.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CySqxiup.js";import"./ProgressBar-C4R_ruZv.js";import"./Label-BHYpf9e5.js";import"./Hidden-CROh8dKk.js";import"./useLabel-Dh-HsBYa.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-Dk-cIrUN.js";import"./EmulatedBoldText-CAg0SlO2.js";import"./Text-BKxs7Hdx.js";import"./AlertIcon-DM1knw9_.js";import"./Action-D7FDWjoF.js";import"./context-B-HkcFzY.js";import"./useStatic-aF_CYkuk.js";import"./getActionGroupSlot-D2X8q845.js";import"./Popover-xu2ddB-n.js";import"./useOverlayController-C-uD8HEe.js";import"./OverlayContextProvider-vRTj2eZJ.js";import"./Dialog-D5rIpj4K.js";import"./RSPContexts-Dbu6eLkb.js";import"./OverlayArrow-BX1C_Ifh.js";import"./useControlledState-DjoZo3jd.js";import"./Collection-De-gN1c8.js";import"./CollectionBuilder-DX9xRdaS.js";import"./SelectionIndicator-CKCmLDiO.js";import"./Separator-CQ2yo0aI.js";import"./SelectionManager-BkQuw4FT.js";import"./useEvent-C3Ld1mH0.js";import"./useCollator-COOm3BGU.js";import"./FocusScope-CzHXyZUV.js";import"./VisuallyHidden-DvGmoJqV.js";import"./Switch-CdwZf2cz.js";import"./useFieldComponent-CHIggLRE.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BJPuNlqH.js";import"./useFormReset-C_UBUwcF.js";import"./OverlayTrigger-BmiisdnS.js";import"./DialogTriggerView-D_UzvFUS.js";import"./Overlay-BTaB3tsY.js";import"./ButtonView-DVA4InJ8.js";import"./Flex-DpB0iAGW.js";import"./Heading-CeHJVvL3.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
