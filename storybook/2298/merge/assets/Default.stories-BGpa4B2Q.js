import{j as r}from"./iframe-DITN2CQJ.js";import{u as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-CkCNWluG.js";import{L as m}from"./Link-CaOo1PrT.js";import{H as s}from"./HeaderNavigation-D05KY2sT.js";import{B as o}from"./Button-CLzuKoaU.js";import{T as p}from"./Text-CADg3_Hr.js";import{I as h}from"./Image-uOs0VAgc.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-BTURB4EG.js";import{C as M,M as c}from"./MenuItem-B0IVaRLd.js";import{C as I}from"./ContextMenuTrigger-D54Q62Gr.js";import"./ContextMenuSection-CqDMtRiW.js";import{a as T,M as k}from"./Modal-BbYa5W-e.js";import{H}from"./Heading-DKeH_-ca.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-dTWTX0ol.js";import"./index-DMvUg0Ng.js";import"./index-CwMYtruy.js";import"./remote-C6sL0hfk.js";import"./useLocalizedStringFormatter-Bu36a-Wr.js";import"./context-DSmvJi-9.js";import"./utils-BKdkt1x6.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-jV9bksDI.js";import"./usePress-Bo3aLfgI.js";import"./useFocusRing-DGbEI6JP.js";import"./useFocusable-DLFLzCMb.js";import"./dynamic-BTg8la0V.js";import"./LoadingSpinner-BNTqIab3.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-9nZEjgFJ.js";import"./ProgressBar-DwMRU30B.js";import"./Label-B4MEtlDn.js";import"./Hidden-C_aQw1AA.js";import"./useLabel-DxgBaz-V.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BAwbicjx.js";import"./EmulatedBoldText-BtAVmnSC.js";import"./Text-C3mpKQD6.js";import"./AlertIcon-C5wCr6jC.js";import"./Action-2qaAsuOc.js";import"./context-DvDSM24h.js";import"./useStatic-CpFYvUzY.js";import"./getActionGroupSlot-ZZyd_ZT4.js";import"./Popover-FA_JZE95.js";import"./useOverlayController-T6amjECI.js";import"./OverlayContextProvider-Dgir1kFJ.js";import"./Dialog-74mAI6R3.js";import"./RSPContexts-1XCmuogP.js";import"./OverlayArrow-IBPtGci-.js";import"./useControlledState-CEL2ngQO.js";import"./Collection-tRMlz9kZ.js";import"./CollectionBuilder-B14_oKNG.js";import"./SelectionIndicator-tBe1rngb.js";import"./Separator-DJanDtF2.js";import"./SelectionManager-C1JHyJxB.js";import"./useEvent-ByNOcoAW.js";import"./useCollator-CnUW-4Ed.js";import"./FocusScope-1T1zyEBb.js";import"./VisuallyHidden-Mqey0SE0.js";import"./Switch-BWQbZH3l.js";import"./useFieldComponent-CFjzq3ou.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Ivt3qRQx.js";import"./useFormReset-DRsSvhwB.js";import"./OverlayTrigger-Bs0oRsy1.js";import"./DialogTriggerView-CadiAf7K.js";import"./Overlay-DjwOHOTX.js";import"./ButtonView-Cvj-tSsY.js";import"./Flex-DUYiMjec.js";import"./Heading-DwqLUz9F.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
