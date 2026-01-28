import{j as r}from"./iframe-HHIIuBER.js";import{u as d,a1 as l,_ as g,y as u,a2 as x}from"./IconWarning-CPuUEZGY.js";import{L as m}from"./Link-CB4tGySl.js";import{H as s}from"./HeaderNavigation-Cauy7RF7.js";import{B as o}from"./Button-D9uXd6kS.js";import{T as p}from"./Text-1gTdtZLR.js";import{I as h}from"./Image-Dg7RrKBi.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-Agd_jw9_.js";import{C as M,M as c}from"./MenuItem-pKG3ChGI.js";import{C as I}from"./ContextMenuTrigger-BEMJsYmt.js";import"./ContextMenuSection-CTAuboSL.js";import{a as T,M as k}from"./Modal-CtJM5EEY.js";import{H}from"./Heading-Dy213gst.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Bj-yCW37.js";import"./index-GTbupaTN.js";import"./index-CXDCOpiF.js";import"./remote-MyOm1NIW.js";import"./useLocalizedStringFormatter-BQVDI3r4.js";import"./context-BwOS-W-N.js";import"./utils-Cg0Q0SJj.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus--KWf2FGc.js";import"./usePress-DR7SsbUT.js";import"./useFocusRing-4HIuR3kq.js";import"./useFocusable-CK9MQKQ0.js";import"./dynamic-UvYry7O0.js";import"./LoadingSpinner-DsMp8zOw.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-B3mdCDJz.js";import"./ProgressBar-2UTBzJPE.js";import"./Label-DYUVUuL-.js";import"./Hidden-B0PUXGbF.js";import"./useLabel-5SH0-wGx.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BiwdkBmz.js";import"./EmulatedBoldText-DygQZkyN.js";import"./Text-XNblTka2.js";import"./AlertIcon-CK1OfGfa.js";import"./Action-_oJPJyM7.js";import"./context-D550pjOP.js";import"./useStatic-CHenPBZg.js";import"./getActionGroupSlot-DxN6Z1_y.js";import"./Popover-vPNRkUgo.js";import"./useOverlayController-CPglRTe1.js";import"./OverlayContextProvider-C_3PlVFc.js";import"./Dialog-17xgL67A.js";import"./RSPContexts-DTcyqJ2O.js";import"./OverlayArrow-BDTM6fDd.js";import"./useControlledState-DbjjrDzt.js";import"./Collection-CvBP3D3N.js";import"./CollectionBuilder-O9kuHpIB.js";import"./SelectionIndicator-D4-zI_jf.js";import"./Separator-C2NuKe-C.js";import"./SelectionManager-sYUHP04o.js";import"./useEvent-Btkolbn2.js";import"./useCollator-h0FVZg7K.js";import"./FocusScope-BRQqWTqz.js";import"./VisuallyHidden-W06uk0vU.js";import"./Switch-CtGhC7sB.js";import"./useFieldComponent-DUw61_cc.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-qjPeUCQ1.js";import"./useFormReset-9uO05BU2.js";import"./OverlayTrigger-CzuKQCYE.js";import"./DialogTriggerView-BRURPWQw.js";import"./Overlay-p234BFMR.js";import"./ButtonView-QAfAhpRw.js";import"./Flex-CRNUqJau.js";import"./Heading-BMnEpmdL.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
