import{j as r}from"./iframe-l1bkuF5f.js";import{u as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-rcKmWr_e.js";import{L as m}from"./Link-Df9iO5Qx.js";import{H as s}from"./HeaderNavigation-VeUMZSoa.js";import{B as o}from"./Button-pfxdB-3A.js";import{T as p}from"./Text-BKhP8tr9.js";import{I as h}from"./Image-DNLJSHkj.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-Bz8hg9cx.js";import{C as M,M as c}from"./MenuItem-C00U3lB0.js";import{C as I}from"./ContextMenuTrigger-CJO9Hwnv.js";import"./ContextMenuSection-ktUqVNzZ.js";import{a as T,M as k}from"./Modal-BaXjVrWM.js";import{H}from"./Heading-DaHrt9QJ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CvyDVUQE.js";import"./index-BKxYFHxl.js";import"./index-BcUcgGWs.js";import"./remote-DAiDHcEq.js";import"./useLocalizedStringFormatter-F2xrId0k.js";import"./context-C-s-FPG6.js";import"./utils-DCQYs-TM.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-jq5Lg4Og.js";import"./usePress-CEqZlFux.js";import"./useFocusRing-DvEP7g7r.js";import"./useFocusable-D4tCxmX8.js";import"./dynamic-BrVBKZhY.js";import"./LoadingSpinner-q7Sk6MlY.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DvXEMDiE.js";import"./ProgressBar-DS8uskay.js";import"./Label-tW_cqKCA.js";import"./Hidden-xK_5A_TS.js";import"./useLabel-Dw5Dmo8O.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BVqvvpC_.js";import"./EmulatedBoldText-Cmh7SSTW.js";import"./Text-CmGzUVny.js";import"./AlertIcon-DudqDlux.js";import"./Action-DCncdG_g.js";import"./context-DTty7kAQ.js";import"./useStatic-BFe86sAb.js";import"./getActionGroupSlot-Cs9bLGLr.js";import"./Popover-DwVIQaA1.js";import"./useOverlayController-C6j4pd50.js";import"./OverlayContextProvider-DvOu6vjy.js";import"./Dialog-DkFD9hxJ.js";import"./RSPContexts-D359D01x.js";import"./OverlayArrow-D02QNQ8I.js";import"./useControlledState-BZaI1cg9.js";import"./Collection-DHw8h3FC.js";import"./CollectionBuilder-BxR2eRiM.js";import"./SelectionIndicator-8EnZgCgK.js";import"./Separator-CBgmYkk4.js";import"./SelectionManager-D4DTSuSz.js";import"./useEvent-F8xm2saN.js";import"./useCollator-Cf6z8j_R.js";import"./FocusScope-CXOryEg0.js";import"./VisuallyHidden-GyOwAGCf.js";import"./Switch-DYwEFgBM.js";import"./useFieldComponent-C26zWsIy.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DqenFEIF.js";import"./useFormReset-B-5bGtDV.js";import"./OverlayTrigger-CsWZNQmA.js";import"./DialogTriggerView-CyOa5KO4.js";import"./Overlay-BhLbgV4g.js";import"./ButtonView-8r0sbocL.js";import"./Flex-DMOY0AFP.js";import"./Heading-B0CySuUv.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
