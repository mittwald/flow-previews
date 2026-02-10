import{j as r}from"./iframe-1XlmVqd5.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-B1VVAKEh.js";import{L as m}from"./Link-BSlR1LLq.js";import{H as s}from"./HeaderNavigation-BtFP2_wZ.js";import{B as o}from"./Button-QkNnHSXc.js";import{T as p}from"./Text-DoMRIGKc.js";import{I as h}from"./Image-QRzxutCB.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-3YJQgKUR.js";import{C as M,M as c}from"./MenuItem-BL5ggs-y.js";import{C as I}from"./ContextMenuTrigger-Bpqq4uO2.js";import"./ContextMenuSection-5WkAJf8V.js";import{a as T,M as k}from"./Modal-BRYJl4pW.js";import{H}from"./Heading-BHa3WEIV.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Uz-OX7bY.js";import"./index-Ba7AqYg5.js";import"./index-TUds5Kez.js";import"./remote-BMRYc7VB.js";import"./useLocalizedStringFormatter--9VaGy1Y.js";import"./context-cVtndIAK.js";import"./utils-DcI_f0WL.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-B3hq9TNr.js";import"./usePress-CBxBnL8r.js";import"./useFocusRing-nXz5Fj6s.js";import"./useFocusable-BsD1LxMy.js";import"./dynamic-pa5Mho8z.js";import"./LoadingSpinner-BDWb_Uug.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DLO0tbpP.js";import"./ProgressBar-DD_sZ9Wb.js";import"./Label-Dzg72Lo7.js";import"./Hidden-D2eIjlR0.js";import"./useLabel-CWL3lRor.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BzXr98QP.js";import"./EmulatedBoldText-BjX1lTTJ.js";import"./Text-DC6xHoyY.js";import"./AlertIcon-B1ETMix0.js";import"./Action-edoqU8Tu.js";import"./context-DAZ5ICmo.js";import"./useStatic-BBkG9kKa.js";import"./getActionGroupSlot-DkGLvBLQ.js";import"./Popover-DWs4oiku.js";import"./useOverlayController-NHPQla43.js";import"./OverlayContextProvider-D7BkXl4r.js";import"./Dialog-RsR3YLab.js";import"./RSPContexts-Dq529x8m.js";import"./OverlayArrow-DrpYygg_.js";import"./useControlledState-DjEU-0mZ.js";import"./Collection-BIbHEmyb.js";import"./CollectionBuilder-D7UVwhHW.js";import"./SelectionIndicator-qE_U9bCq.js";import"./Separator-CgzWDgSR.js";import"./SelectionManager-_Sb55NGi.js";import"./useEvent-pApi9dyH.js";import"./useCollator-CY9Dy9g3.js";import"./FocusScope-cwCTJx2V.js";import"./VisuallyHidden-Dm6nphJv.js";import"./Switch-DMZJKQb_.js";import"./useFieldComponent--2vv_KDv.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DDOFhGTk.js";import"./useFormReset-DNo3mt-e.js";import"./OverlayTrigger-DCCWO6LH.js";import"./DialogTriggerView-DtLXkt2U.js";import"./Overlay-CQJMVtI0.js";import"./ButtonView-DfAFlmFQ.js";import"./Flex-Di-3D8xN.js";import"./Heading-CLPLrGSK.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
