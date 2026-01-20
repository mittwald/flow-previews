import{j as r}from"./iframe-C5hcdLE6.js";import{q as d,a1 as l,_ as g,u,a2 as x}from"./IconWarning-BGpxRwU-.js";import{L as m}from"./Link-RRZAz5HG.js";import{H as s}from"./HeaderNavigation-BIh-u5nB.js";import{B as o}from"./Button-CzDqHNvA.js";import{T as p}from"./Text-D8uazRXK.js";import{I as h}from"./Image-CRZjLDFs.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-ssQ6-Ue6.js";import{C as M,M as c}from"./ContextMenu-D421fdTg.js";import{C as I}from"./ContextMenuTrigger-DEsmcf_G.js";import"./ContextMenuSection-Bm4KM0hd.js";import{a as T,M as k}from"./Modal-BQbnAAC0.js";import{H}from"./Heading-DWTXooi-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DfDzLOdb.js";import"./index-CrcBTJfi.js";import"./index-ClIq6yug.js";import"./remote-DfH19er1.js";import"./useLocalizedStringFormatter-DggJiG-V.js";import"./context-E1uxYtQv.js";import"./utils-B3GIFt3C.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-CyQlFp9g.js";import"./useFocus-Fr_BfSOs.js";import"./useFocusRing-B86g4qKF.js";import"./useFocusable-xzWj-wm9.js";import"./dynamic-DE5jfE1R.js";import"./LoadingSpinner-hJnys7-d.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CX4O7Muw.js";import"./ProgressBar-Cgmeu2qU.js";import"./Label-Cdw77YDw.js";import"./Hidden-CzLEuVYW.js";import"./useLabel-DIyDpHH2.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BJ6k16eC.js";import"./EmulatedBoldText-G7OdIUUd.js";import"./Text-79_FySwa.js";import"./AlertIcon-DM3zFbIf.js";import"./Switch-Bxb3DPvF.js";import"./useFieldComponent-t_EOnv-a.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-ZZPmhJzz.js";import"./useFormReset-BnJ7w8Tn.js";import"./useControlledState-C9jQ4AxE.js";import"./VisuallyHidden-n5FPXG3E.js";import"./Dialog-D66iw0U8.js";import"./RSPContexts-BMj0h4_3.js";import"./OverlayArrow-DN70rght.js";import"./Collection-DXvYJhLm.js";import"./CollectionBuilder-CZUA7JnX.js";import"./SelectionIndicator-B5s74P3-.js";import"./Separator-DaQ1DUjO.js";import"./SelectionManager-Bbl3GIce.js";import"./useEvent-Drml-VA-.js";import"./useCollator-C0ggjMz1.js";import"./FocusScope-CQ3JVi5A.js";import"./Action-CDW165y9.js";import"./context-kwHKhOde.js";import"./useStatic-CWBOctoH.js";import"./getActionGroupSlot-CVriiRzc.js";import"./Popover-CdmUaf65.js";import"./useOverlayController-BWvUtZsb.js";import"./OverlayContextProvider-CVTCD2MZ.js";import"./OverlayTrigger-DT2_gJPw.js";import"./DialogTriggerView-CPaNcdTJ.js";import"./Overlay-DQxt2rlf.js";import"./ButtonView-CK7zDOKv.js";import"./Flex-iAWnET4r.js";import"./Heading-Y84dBjpP.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
