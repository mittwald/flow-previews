import{j as r}from"./iframe-C8tsaODo.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-Up7WC4e0.js";import{L as m}from"./Link-BlP_epyf.js";import{H as s}from"./HeaderNavigation-rCsDERbZ.js";import{B as o}from"./Button-BxguJBhT.js";import{T as p}from"./Text-BE7lE0T8.js";import{I as h}from"./Image-DAA04arH.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-CKeDR-Ie.js";import{C as M,M as c}from"./MenuItem-CGP4GFxP.js";import{C as I}from"./ContextMenuTrigger-Cu8jMjZj.js";import"./ContextMenuSection-BnK78UMz.js";import{M as T}from"./ModalTrigger-C9a62RJ1.js";import{M as k}from"./Modal-BYMO-zFY.js";import{H}from"./Heading-BUyGvYSI.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BTZ0wFju.js";import"./index-CLgTDDI2.js";import"./index-BNoG6unV.js";import"./remote-Ckar2tK9.js";import"./useLocalizedStringFormatter-Bu8yFg8Y.js";import"./context-BwdmRhET.js";import"./utils-CdcYI7XL.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-D0DC1KKH.js";import"./platform-Dz8CwCz0.js";import"./usePress-vv50L64r.js";import"./useFocusRing-DauayxVe.js";import"./useFocusable-BW2xec3w.js";import"./dynamic-DA7vjxZL.js";import"./LoadingSpinner-C-PnKOui.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dm2nITC7.js";import"./ProgressBar-DplTBNX0.js";import"./Label-D1q-_ISO.js";import"./Hidden-BspDtBD-.js";import"./useLabel-oJhcJRxp.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-qgMJ3NzC.js";import"./EmulatedBoldText-RMBLGP7I.js";import"./Text-BkxlIu3p.js";import"./AlertIcon-DJlFLAIk.js";import"./ActionBatch-BUyIhhJw.js";import"./useOverlayController-Bf797MvO.js";import"./useStatic-jSI8PS8c.js";import"./getActionGroupSlot-C3_vSruP.js";import"./Popover-D8RRHCNj.js";import"./OverlayContextProvider-Buisu9vo.js";import"./Dialog-CNeqByqP.js";import"./RSPContexts-DtfJrVYY.js";import"./OverlayArrow-CxwkoRJi.js";import"./useControlledState-CN29789s.js";import"./Collection-Drvm3BjC.js";import"./CollectionBuilder-CUdEZ73w.js";import"./SelectionIndicator-5GEQvOaX.js";import"./Separator-AhH2lqvH.js";import"./SelectionManager-BzBOXU82.js";import"./useEvent-520ieM62.js";import"./useCollator-q3kgEL61.js";import"./FocusScope-DFjW_d09.js";import"./VisuallyHidden-hgCntKQk.js";import"./Switch-ojjFiW1l.js";import"./useFieldComponent-FgbLRzY4.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Bupsl8Wu.js";import"./useFormReset-BpTKK099.js";import"./OverlayTrigger-xIqGS4XS.js";import"./DialogTriggerView-s2vCJh02.js";import"./Overlay-BnyG3_RP.js";import"./ButtonView-CjeFZr2s.js";import"./Flex-CcRj0a-w.js";import"./Heading-LrX14EbB.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},i={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},e={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...n.parameters?.docs?.source}}};const zr=["Default","WithContextMenu","Dark","Light"];export{e as Dark,t as Default,n as Light,i as WithContextMenu,zr as __namedExportsOrder,wr as default};
