import{j as r}from"./iframe-Bas3a7fO.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-9FMOeqa7.js";import{L as m}from"./Link-CvzlSJYo.js";import{H as s}from"./HeaderNavigation-8YZSX44M.js";import{B as o}from"./Button-CCev3q47.js";import{T as p}from"./Text-D06q46lu.js";import{I as h}from"./Image-TGym18Lo.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-EKXZa-Na.js";import{C as M,M as c}from"./MenuItem-B8Aei4Jr.js";import{C as I}from"./ContextMenuTrigger-U1mVf7Ux.js";import"./ContextMenuSection-BzeJokDv.js";import{M as T}from"./ModalTrigger-CWQ5fO7p.js";import{M as k}from"./Modal-CZas3fxE.js";import{H}from"./Heading-BvcJIgQi.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DM0zlvyg.js";import"./index-BsE7CccI.js";import"./index-CuTcGtc9.js";import"./remote-CQRN9i7s.js";import"./useLocalizedStringFormatter-DWSvb_Dh.js";import"./context-C6ovHfpS.js";import"./utils-eswKxOcw.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-BpOhXbga.js";import"./usePress-BXALpkIT.js";import"./useFocusRing--4ecJhRH.js";import"./useFocusable-Dz64TW3s.js";import"./dynamic-CtBYvx23.js";import"./LoadingSpinner-CaJGFcVk.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-cgxxNusA.js";import"./ProgressBar-C3VsHXts.js";import"./Label-CAS-GA4h.js";import"./Hidden-JsWJU2dF.js";import"./useLabel-AX-jpDlX.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CI0OqVn7.js";import"./EmulatedBoldText-DWlWNctj.js";import"./Text-Di9JAG-3.js";import"./AlertIcon-CfXFBmoz.js";import"./ActionBatch-Ctg3LC0z.js";import"./useOverlayController-Bne___mw.js";import"./useStatic-LTDZm_8J.js";import"./getActionGroupSlot-DxyevWSt.js";import"./Popover-DFE_w-KD.js";import"./OverlayContextProvider-DoMgXFZI.js";import"./Dialog-BsJqG9mx.js";import"./RSPContexts-BxdWTHUz.js";import"./OverlayArrow-B1y4rBya.js";import"./useControlledState-DnKF_srQ.js";import"./Collection-C8pnnMLO.js";import"./CollectionBuilder-0TvFeMg9.js";import"./SelectionIndicator-C1UYqe1w.js";import"./Separator-BhW3WF_H.js";import"./SelectionManager-jyyo19U7.js";import"./useEvent-CDJhLR4c.js";import"./useCollator-CKG6FCAG.js";import"./FocusScope-yn2ZelXu.js";import"./VisuallyHidden-DwReVjRm.js";import"./Switch-DPJxCsS4.js";import"./useFieldComponent-CHbV_zSr.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-obAaIAHP.js";import"./useFormReset-C6M9OYlp.js";import"./OverlayTrigger-BU9PdTSa.js";import"./DialogTriggerView-D9aUp3bv.js";import"./Overlay-CKC1BDXC.js";import"./ButtonView-fFevQyKz.js";import"./Flex-BYJmVhKw.js";import"./Heading-CIj0isr2.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
