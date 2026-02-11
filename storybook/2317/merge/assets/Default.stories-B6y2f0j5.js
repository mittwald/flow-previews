import{j as r}from"./iframe-wn9t8CHT.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-B-Wnft1S.js";import{L as m}from"./Link-CQfFXbKR.js";import{H as s}from"./HeaderNavigation-CrL5SJNb.js";import{B as o}from"./Button-CkMrcy8B.js";import{T as p}from"./Text-vlZ105c0.js";import{I as h}from"./Image-CtlB3IAL.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-DvoQqnc6.js";import{C as M,M as c}from"./MenuItem-DxOEw03f.js";import{C as I}from"./ContextMenuTrigger-DR20zaH3.js";import"./ContextMenuSection-a_hWYWcP.js";import{a as T,M as k}from"./Modal-C26Lgvqb.js";import{H}from"./Heading-BtcPMLbU.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CQL_Hol9.js";import"./index-Daog0jgF.js";import"./index-DGBNuX5e.js";import"./remote-BKPU2Q50.js";import"./useLocalizedStringFormatter-BW5ArTpm.js";import"./context-DUIKEoYM.js";import"./utils-BBqjM3mV.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-Dfm-Pt4C.js";import"./usePress-febwKXtN.js";import"./useFocusRing-4Aw-0NUA.js";import"./useFocusable-MJ0CU3Gf.js";import"./dynamic-Ce3zwrtf.js";import"./LoadingSpinner-C5pntlan.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C_8bimI7.js";import"./ProgressBar-DYDTpv9y.js";import"./Label-vEkUlCU_.js";import"./Hidden-B0JF82fI.js";import"./useLabel-CfKSfnQU.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-C4GSjbSD.js";import"./EmulatedBoldText-BRurVn-6.js";import"./Text-CigTZLQg.js";import"./AlertIcon-CswpW_U3.js";import"./Action-CYz45Lq2.js";import"./context-DvLe6BQ8.js";import"./useStatic-Dq0n5AIR.js";import"./getActionGroupSlot-DC-fIdha.js";import"./Popover-CB12jP-7.js";import"./useOverlayController-BCCPmC-G.js";import"./OverlayContextProvider-DPqnyBOx.js";import"./Dialog-QaAGaw4t.js";import"./RSPContexts-CP6K_mUq.js";import"./OverlayArrow-Dlbb_9eh.js";import"./useControlledState-Ckzcuwb2.js";import"./Collection-Dabp6tSw.js";import"./CollectionBuilder-Dc9k3CRr.js";import"./SelectionIndicator-Drl_jI2J.js";import"./Separator-D7rNCrfy.js";import"./SelectionManager-CyQywfav.js";import"./useEvent-msC5Saat.js";import"./useCollator-ia3Kz-2A.js";import"./FocusScope-Cff801J_.js";import"./VisuallyHidden-Rhd9Lwfr.js";import"./Switch-CL4HrYnl.js";import"./useFieldComponent-CuQvVX64.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BeRAf5ZK.js";import"./useFormReset-BfPrTbq9.js";import"./OverlayTrigger-DiExDdE4.js";import"./DialogTriggerView-DT30g8-0.js";import"./Overlay-xzvGL7B7.js";import"./ButtonView-B4rdbM1Q.js";import"./Flex-DEh1sHci.js";import"./Heading-BifW3h1d.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
