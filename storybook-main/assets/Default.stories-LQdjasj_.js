import{j as r}from"./iframe-agbTJ2rk.js";import{u as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-DBJeVzaP.js";import{L as m}from"./Link-CBy_1vaz.js";import{H as s}from"./HeaderNavigation-Dc1Jmufx.js";import{B as o}from"./Button-Br9Yc6cY.js";import{T as p}from"./Text-DmtEYLwi.js";import{I as h}from"./Image-RHNRQHKJ.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-DCgjjy5J.js";import{C as M,M as c}from"./MenuItem-D_fehzWt.js";import{C as I}from"./ContextMenuTrigger-Dui7MfUM.js";import"./ContextMenuSection-BNQ2j9mF.js";import{a as T,M as k}from"./Modal-BWZswrjI.js";import{H}from"./Heading-CGG9RSyu.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Tp6-knTL.js";import"./index-Ck1XmQF-.js";import"./index-DPEh44cd.js";import"./remote-zpHok2y4.js";import"./useLocalizedStringFormatter-DfJx7LFE.js";import"./context-DNnfn7OO.js";import"./utils-Cg5Rmuuc.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-BFA9Y66r.js";import"./usePress-DrXmkjxU.js";import"./useFocusRing-Df3re3NP.js";import"./useFocusable-Dcrl6Kh-.js";import"./dynamic-9PkN5S4U.js";import"./LoadingSpinner-CHOtYrBZ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-KwBkKB1A.js";import"./ProgressBar-Dtf2TWy6.js";import"./Label-Da0PgXCv.js";import"./Hidden-DehNc1Kw.js";import"./useLabel-COQ7NCDT.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DcYn1DNE.js";import"./EmulatedBoldText-_6M-JboB.js";import"./Text-B3pB98UM.js";import"./AlertIcon-DN21MApN.js";import"./Action-KXOin-yd.js";import"./context-Dm2xLzXZ.js";import"./useStatic-C0pFV-a-.js";import"./getActionGroupSlot-_GbbmTSO.js";import"./Popover-T-SqMr4y.js";import"./useOverlayController-CpxxUC1a.js";import"./OverlayContextProvider-CL8tIiF7.js";import"./Dialog-A1OcXUz0.js";import"./RSPContexts-H7hhohAE.js";import"./OverlayArrow-CJVRO-c0.js";import"./useControlledState-JGLxFfPu.js";import"./Collection-BaJavd6-.js";import"./CollectionBuilder-DOQcLAsT.js";import"./SelectionIndicator-DWRc_aAr.js";import"./Separator-CPdY11g5.js";import"./SelectionManager-CzUgCcIX.js";import"./useEvent-CRzL3U9d.js";import"./useCollator-CQ6xU2WO.js";import"./FocusScope-COCAXuyM.js";import"./VisuallyHidden-C-SP4JvM.js";import"./Switch-jTbk2U30.js";import"./useFieldComponent-Bdg-2oVH.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DCnWm9YF.js";import"./useFormReset-DoFpeMzh.js";import"./OverlayTrigger-BiKcN0tL.js";import"./DialogTriggerView-H0SCw3R3.js";import"./Overlay-Ckk8QGtW.js";import"./ButtonView-C09bK-pd.js";import"./Flex-8kZ2m8LN.js";import"./Heading-Clp5RNdF.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
