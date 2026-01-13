import{j as r}from"./iframe-CF9WEugj.js";import{q as d,a1 as l,_ as g,u,a2 as x}from"./IconWarning-DXWyAVP8.js";import{L as m}from"./Link-CL-5SkjD.js";import{H as s}from"./HeaderNavigation-CUOvl8G-.js";import{B as o}from"./Button-Dt7_Feft.js";import{T as p}from"./Text-Czdsn8RZ.js";import{I as h}from"./Image-BNBZ_Z0k.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-DTioLuX0.js";import{C as M,M as c}from"./ContextMenu-DeTI5k7j.js";import{C as I}from"./ContextMenuTrigger-CKc2z3rW.js";import"./ContextMenuSection-ChhzEL-I.js";import{a as T,M as k}from"./Modal-DhoW535a.js";import{H}from"./Heading-CDe2moQI.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BxrvjkvO.js";import"./index-C69BrDNc.js";import"./index-DHfgQlLW.js";import"./remote-DKS26xip.js";import"./useLocalizedStringFormatter-DYCIwR0v.js";import"./context-Bi2P07EN.js";import"./utils-B4BZttt0.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-DuLNiG6M.js";import"./useFocus-DZR1guyz.js";import"./useFocusRing-Ddjb8e7x.js";import"./useFocusable-CSB6sBEJ.js";import"./dynamic-DQFpeFdM.js";import"./LoadingSpinner-CdxOiWQd.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button--TTYmuFt.js";import"./ProgressBar-BnLxRH_4.js";import"./Label-DWGH1ubm.js";import"./Hidden-Dk3zZO8j.js";import"./useLabel-DF6AwuO5.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CV2qUG2E.js";import"./EmulatedBoldText--WvdXsxT.js";import"./Text-wlSF0gym.js";import"./AlertIcon-Ck6cmA9H.js";import"./Switch-OpasMww3.js";import"./useFieldComponent-B3P2g6wY.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DWZRhZpT.js";import"./useFormReset-w9h9-zRZ.js";import"./useControlledState-C05rL349.js";import"./VisuallyHidden-C66z9jQL.js";import"./Dialog-Dbq5Vprd.js";import"./RSPContexts-DsXbJK4N.js";import"./OverlayArrow-CtiJ0l0O.js";import"./Collection-B5WHZIaw.js";import"./CollectionBuilder-DOv_JUaO.js";import"./SelectionIndicator-CwdThPwI.js";import"./Separator-DX3N9c3E.js";import"./SelectionManager-u6mq2cJr.js";import"./useEvent-DJoiCzFm.js";import"./useCollator-Cuc5YyeJ.js";import"./FocusScope-Dw5dGdxw.js";import"./Action-DBGOtx5u.js";import"./context-Dm_RzWW0.js";import"./useStatic-De5kLziu.js";import"./getActionGroupSlot-Cyy_QqE0.js";import"./Popover-Cnq1gXmI.js";import"./useOverlayController-CbGkJu3W.js";import"./OverlayContextProvider-BjE0srji.js";import"./OverlayTrigger-ZNA0xvDx.js";import"./DialogTriggerView-BK5QB_3_.js";import"./Overlay-Cuj0RgmJ.js";import"./ButtonView-ClexYkyB.js";import"./Flex-nekA88FP.js";import"./Heading-DsznpHXx.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
