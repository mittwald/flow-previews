import{j as r}from"./iframe-DXKyl4qq.js";import{q as d,a1 as l,_ as g,u,a2 as x}from"./IconWarning-BTtxekbk.js";import{L as m}from"./Link-CEK7ew7i.js";import{H as s}from"./HeaderNavigation-CTKGYCM3.js";import{B as o}from"./Button-0acoIVQZ.js";import{T as p}from"./Text-DlQihciA.js";import{I as h}from"./Image-B6BoT_La.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-BC8WAal1.js";import{C as M,M as c}from"./ContextMenu-B6ZDxDpz.js";import{C as I}from"./ContextMenuTrigger-fF4tX0bh.js";import"./ContextMenuSection-BIRP1Ixf.js";import{a as T,M as k}from"./Modal-DrzG1luk.js";import{H}from"./Heading-C5r2I8c5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CGVR20ME.js";import"./index-CGttF0w9.js";import"./index-CK0x1Z6h.js";import"./remote-5V97MXBJ.js";import"./useLocalizedStringFormatter-DsWoRU9M.js";import"./context-C5-138xc.js";import"./utils-Cgx1j8_A.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-BAjbVDBz.js";import"./usePress-MFF54RNh.js";import"./useFocusRing-DoixN5z_.js";import"./useFocusable-DAwaDAhU.js";import"./dynamic-CaArDE2O.js";import"./LoadingSpinner-NKyffFLh.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-O8jlFCas.js";import"./ProgressBar-C7LcFD3o.js";import"./Label-Dkou43m_.js";import"./Hidden-CaezFR51.js";import"./useLabel-CXFTMfS2.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-Q1FjFR8E.js";import"./EmulatedBoldText-Bw3TIL22.js";import"./Text-Dy69l_TS.js";import"./AlertIcon-BU8g3GYG.js";import"./Switch-BEXipD0H.js";import"./useFieldComponent-DrLbNusb.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-uqciZ7Ue.js";import"./useFormReset-Cw-gwOYV.js";import"./useControlledState-DW1EgN0_.js";import"./VisuallyHidden-XnRwWdWi.js";import"./Dialog-B1psX4sF.js";import"./RSPContexts-DBmlKLt8.js";import"./OverlayArrow-BvQnSdeu.js";import"./Collection-9k1PtGDv.js";import"./CollectionBuilder-Ur5Id6rg.js";import"./SelectionIndicator-BncnqGmj.js";import"./Separator-CtwDwrgV.js";import"./SelectionManager-Dx4eaKjX.js";import"./useEvent-B4GDMgLt.js";import"./useCollator-D4u7p9z_.js";import"./FocusScope-CeuTnAxx.js";import"./Action-eA8jYG3_.js";import"./context-9N5Shw7P.js";import"./useStatic-CdHxY_ZS.js";import"./getActionGroupSlot-CBJ6_xHE.js";import"./Popover-aE3BG6iV.js";import"./useOverlayController-jwGD9Xed.js";import"./OverlayContextProvider-M458RI5v.js";import"./OverlayTrigger-BY_70k08.js";import"./DialogTriggerView-BYh7Znwz.js";import"./Overlay-Bnvmlph2.js";import"./ButtonView-vjQ-21-e.js";import"./Flex-f3Fu5N7L.js";import"./Heading-CG4_-w1-.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
