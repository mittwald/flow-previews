import{j as r}from"./iframe-CaMmm6JB.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-CjIU5uAw.js";import{L as m}from"./Link-DkYjPJkt.js";import{H as s}from"./HeaderNavigation-D-aAEUBP.js";import{B as o}from"./Button-Ccdb4ZyB.js";import{T as p}from"./Text-BytpHB1v.js";import{I as h}from"./Image-B4yU2oz9.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-CyqxrIla.js";import{C as M,M as c}from"./MenuItem-ChR2trh0.js";import{C as I}from"./ContextMenuTrigger-BuJIwjoP.js";import"./ContextMenuSection-CGa5WiYd.js";import{M as T}from"./ModalTrigger-DWx-rkC3.js";import{M as k}from"./Modal-D-BKA9RG.js";import{H}from"./Heading-6UA8ouUH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-7fKv1TmI.js";import"./index-D879hO5r.js";import"./index-bUizOk6y.js";import"./remote-B2IWJRNM.js";import"./useLocalizedStringFormatter-DvVfJ2n5.js";import"./context-COlkIlq2.js";import"./utils-BWel_6vJ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-CsmVawkN.js";import"./usePress-Bq52eadg.js";import"./useFocusRing-D0nVGfyc.js";import"./useFocusable-D5loONxI.js";import"./dynamic-CCT0rfWD.js";import"./LoadingSpinner-D3IBMWR2.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Br8oe_nB.js";import"./ProgressBar-CBFdsoCo.js";import"./Label-GJfJgND5.js";import"./Hidden-_lt-y3bc.js";import"./useLabel-BlkmcG0L.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DBmSqQ-l.js";import"./EmulatedBoldText-Bldq9nM5.js";import"./Text-DltKapPO.js";import"./AlertIcon-CCMwGOFg.js";import"./ActionBatch-Q41d4eeq.js";import"./useOverlayController-DaRRxB6Y.js";import"./useStatic-CQKXHPrs.js";import"./getActionGroupSlot-xPMU2Lcl.js";import"./Popover-DzUJnTX8.js";import"./OverlayContextProvider-_LkIzv60.js";import"./Dialog-YsZQ1_o0.js";import"./RSPContexts-HzcDbyvj.js";import"./OverlayArrow-BudvLkgn.js";import"./useControlledState-DS3iWteE.js";import"./Collection-YKpSfmi_.js";import"./CollectionBuilder-2gYZy5f8.js";import"./SelectionIndicator-C8xVf-92.js";import"./Separator-Du64Ymo6.js";import"./SelectionManager-DL58XFN7.js";import"./useEvent-DMru7c0E.js";import"./useCollator-CLVgUaDj.js";import"./FocusScope-BSI7m-fZ.js";import"./VisuallyHidden-CJ5e0jZZ.js";import"./Switch-COCFAiCk.js";import"./useFieldComponent-l9GEjfOW.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DeOLjKQe.js";import"./useFormReset-B22K348z.js";import"./OverlayTrigger-BDzY0sMA.js";import"./DialogTriggerView-DlW9M8qm.js";import"./Overlay-DFrCfT03.js";import"./ButtonView-VN2wxJGS.js";import"./Flex-BB0MY87d.js";import"./Heading-DZNcobqI.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
