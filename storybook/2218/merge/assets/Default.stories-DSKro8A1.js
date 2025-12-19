import{j as r}from"./iframe-BVdPrJ3b.js";import{s as d,$ as l,Y as g,J as u,a0 as x}from"./IconWarning-YADbbYCH.js";import{L as m}from"./Link-BxsHgSUR.js";import{H as s}from"./HeaderNavigation-FTPV1pXi.js";import{B as o}from"./Button-DWZoHS5b.js";import{T as p}from"./Text-nQWL8z2r.js";import{I as h}from"./Image-sdgtEqvY.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-BwdZlrCf.js";import{C as M,M as c}from"./MenuItem-DJFJ98tk.js";import{C as I}from"./ContextMenuTrigger-CKq-K9ZB.js";import"./ContextMenuSection-97x_J9aj.js";import{a as T,M as k}from"./Modal-B5nJ1ajU.js";import{H}from"./Heading-CFOSEH3z.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-od4I0R-N.js";import"./index-i9F-e6Sd.js";import"./index-BWMeLKrj.js";import"./remote-CTgJkn4z.js";import"./useLocalizedStringFormatter-CWJICem7.js";import"./context-D026yTy_.js";import"./utils-BEq1Wr11.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-DUwPxRbX.js";import"./useFocus-DKH0A8r5.js";import"./useFocusRing-D6WsekYV.js";import"./useFocusable-CP0kX89o.js";import"./dynamic-VccpDVll.js";import"./LoadingSpinner-DBvrX9Qx.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BCUp5wJP.js";import"./ProgressBar-D7sWQ_td.js";import"./Label-kfmO3nvk.js";import"./Hidden-Dqh1ls-B.js";import"./useLabel-CZZK6Myr.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DSBfFWZr.js";import"./EmulatedBoldText-BVln2yP5.js";import"./Text-CmXVeCCc.js";import"./AlertIcon-BrrSUnxf.js";import"./Action-D5COu0gZ.js";import"./context-CCTeyNcb.js";import"./useStatic-BX7NV0z1.js";import"./getActionGroupSlot-l8kcu2OD.js";import"./Popover-Cqwaieux.js";import"./useOverlayController-xrHTUCYk.js";import"./OverlayContextProvider-D_N4RW7r.js";import"./Dialog-BIQQDMqR.js";import"./RSPContexts-Bdb5uPWt.js";import"./OverlayArrow-DJuQPxkq.js";import"./useControlledState-CgIeep-j.js";import"./Collection-BL4wwMNo.js";import"./CollectionBuilder-CV7Ejkkp.js";import"./SelectionIndicator-BRRaId4S.js";import"./Separator-oDuFt3L8.js";import"./SelectionManager-C_oDRx_o.js";import"./useEvent-DCTAoM_e.js";import"./useCollator-CjJjrWZi.js";import"./FocusScope-Bh-KjmdJ.js";import"./VisuallyHidden-BtVtJU_V.js";import"./Switch-DaD-7JH2.js";import"./useFieldComponent-Pua8aj4t.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-D2AlcaAf.js";import"./useFormReset-DipgmSs2.js";import"./OverlayTrigger-BdaWs8nX.js";import"./DialogTriggerView-H9NqT_Tm.js";import"./Overlay-BaWwC-IF.js";import"./ButtonView-CuoPDwV8.js";import"./Flex-DJbeeCY7.js";import"./Heading-BpzKqMX-.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const $r=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,$r as __namedExportsOrder,Yr as default};
