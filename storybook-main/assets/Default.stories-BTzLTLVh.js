import{j as r}from"./iframe-DJlgDtsR.js";import{u as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-Cyya3L9S.js";import{L as m}from"./Link-N3wxOvKL.js";import{H as s}from"./HeaderNavigation-0Ks14LHn.js";import{B as o}from"./Button-B5mEMvcP.js";import{T as p}from"./Text-B6SLv6do.js";import{I as h}from"./Image-CNyN-n8g.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-Cml40zwQ.js";import{C as M,M as c}from"./MenuItem-n1E6LY_G.js";import{C as I}from"./ContextMenuTrigger-tKwsdOZD.js";import"./ContextMenuSection-BF9OA7h1.js";import{a as T,M as k}from"./Modal-CLIoSXJ0.js";import{H}from"./Heading-CCdNJUMi.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-1zQAiLcC.js";import"./index-De4rcGI5.js";import"./index-Ds6_MS6L.js";import"./remote-CayAs8X4.js";import"./useLocalizedStringFormatter-D9db5kL2.js";import"./context-XFPr5nuV.js";import"./utils-xFKhKznh.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-oMd_AJz-.js";import"./usePress-CWKDBuw6.js";import"./useFocusRing-BhR5IplG.js";import"./useFocusable-CsEyjS4C.js";import"./dynamic-BhViPMj5.js";import"./LoadingSpinner-DvQzlWjD.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DjTNcQDc.js";import"./ProgressBar-Cf6O9vZh.js";import"./Label-BBNmyes_.js";import"./Hidden-4sLzj03B.js";import"./useLabel-KImy5Ex-.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-C6YBs1UC.js";import"./EmulatedBoldText-BsjtvuiU.js";import"./Text-DD0-81CT.js";import"./AlertIcon-nCFQHvgi.js";import"./Action-BHdfveoT.js";import"./context-TnNtslmb.js";import"./useStatic-kKtkdJS1.js";import"./getActionGroupSlot-Clzrx9gl.js";import"./Popover-Cjed0IxS.js";import"./useOverlayController-BccrWtDH.js";import"./OverlayContextProvider-CVHBadgO.js";import"./Dialog-BOJlWGO4.js";import"./RSPContexts-CxGwKclm.js";import"./OverlayArrow-BjaGoVRT.js";import"./useControlledState-C0KUsyk2.js";import"./Collection-Cl6v0tCD.js";import"./CollectionBuilder-D_QdfbH9.js";import"./SelectionIndicator-DnAH24RP.js";import"./Separator-BojWZdSH.js";import"./SelectionManager-ESuaU6yM.js";import"./useEvent-CxJg3RaJ.js";import"./useCollator-Bm61inwz.js";import"./FocusScope-C9j0_60-.js";import"./VisuallyHidden-BJ_y0FNA.js";import"./Switch-CcrNsicY.js";import"./useFieldComponent-Bmr1JhS0.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CM_n9fyv.js";import"./useFormReset-yK5dVmLs.js";import"./OverlayTrigger-02q3wf6R.js";import"./DialogTriggerView-DYDuc4xI.js";import"./Overlay-E49g9TLw.js";import"./ButtonView-DYK5nmKx.js";import"./Flex-Do_msoEo.js";import"./Heading-CTyW73LR.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
