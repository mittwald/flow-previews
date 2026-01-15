import{j as r}from"./iframe-DA37PzgD.js";import{q as d,a1 as l,_ as g,u,a2 as x}from"./IconWarning-DMc9nDIB.js";import{L as m}from"./Link-yESZXTxq.js";import{H as s}from"./HeaderNavigation-BXZ3CTsf.js";import{B as o}from"./Button-C_3hQ6qU.js";import{T as p}from"./Text-CKy5VQ2_.js";import{I as h}from"./Image-XmwLqecN.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-D2qchoY4.js";import{C as M,M as c}from"./ContextMenu-BAl6IZ0U.js";import{C as I}from"./ContextMenuTrigger-CE49cPBe.js";import"./ContextMenuSection-DYM7NU_i.js";import{a as T,M as k}from"./Modal-CGIeSLvg.js";import{H}from"./Heading-IQrV0yVS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DxL-Dn0k.js";import"./index-BgSlp0g3.js";import"./index-CccRe4nm.js";import"./remote-BJWo5b31.js";import"./useLocalizedStringFormatter-C1YnvIwi.js";import"./context-KzPqYKh3.js";import"./utils-DtYp6psM.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress--pFlH7xw.js";import"./useFocus-Ck97lmu1.js";import"./useFocusRing-GdKi_2te.js";import"./useFocusable-_BBBrAx0.js";import"./dynamic-Cec-XZha.js";import"./LoadingSpinner-YNnYvyP0.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BzF7Ww8-.js";import"./ProgressBar-Dk36AjFP.js";import"./Label-D_nNHFmP.js";import"./Hidden-CyblAlwf.js";import"./useLabel-CrQo68aR.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-Tq-Ovndo.js";import"./EmulatedBoldText-CMCwPeqW.js";import"./Text-VNYIIeBR.js";import"./AlertIcon-BbDcA2fv.js";import"./Switch-AEyhg5N0.js";import"./useFieldComponent-DTrWN6Rf.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Y0erzZpk.js";import"./useFormReset-ChjOdAw3.js";import"./useControlledState-izS5uoD6.js";import"./VisuallyHidden-C_Tup-b1.js";import"./Dialog-hpWxHudW.js";import"./RSPContexts-DnMMFVEJ.js";import"./OverlayArrow-BTxrL9C1.js";import"./Collection-Br_xwhc2.js";import"./CollectionBuilder-DSPHiwuI.js";import"./SelectionIndicator-D-mCry-j.js";import"./Separator-uGGsp39Q.js";import"./SelectionManager-WiFwd4h7.js";import"./useEvent-D5fcY2Sa.js";import"./useCollator-BaT-QBRk.js";import"./FocusScope-CIeecyJ9.js";import"./Action-hYBLKXUj.js";import"./context-Cc9V1wfK.js";import"./useStatic-ChmTLNpH.js";import"./getActionGroupSlot-wxzu3uZW.js";import"./Popover-CcmaDUys.js";import"./useOverlayController-h5OHZ8gf.js";import"./OverlayContextProvider-DWmJMYYY.js";import"./OverlayTrigger-BLRGcvFA.js";import"./DialogTriggerView-CSCt4gDW.js";import"./Overlay-D07LEg30.js";import"./ButtonView-0dv953X9.js";import"./Flex-CtEX2zP1.js";import"./Heading-C-vMGDS8.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
