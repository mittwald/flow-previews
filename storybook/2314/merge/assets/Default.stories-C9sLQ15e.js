import{j as r}from"./iframe-CLJtUSH1.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-RoA_lEUP.js";import{L as m}from"./Link-DvmAFOUy.js";import{H as s}from"./HeaderNavigation-ez2JOX11.js";import{B as o}from"./Button-BdSBoC_f.js";import{T as p}from"./Text-B6Fe6olk.js";import{I as h}from"./Image-CSgg8lWs.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-CqMvIYSu.js";import{C as M,M as c}from"./MenuItem-9e_I_Uqa.js";import{C as I}from"./ContextMenuTrigger-Ca6zLyWt.js";import"./ContextMenuSection-DdrBdwjw.js";import{a as T,M as k}from"./Modal-C4-X2FOM.js";import{H}from"./Heading-D34LHmW0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-ddZp4AYb.js";import"./index-CLGZrIuY.js";import"./index-C5KxKItK.js";import"./remote-B_1lzL7i.js";import"./useLocalizedStringFormatter-DOmCW1HP.js";import"./context-DZMEEftG.js";import"./utils-DvtEjNbs.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-CAJuP4TC.js";import"./usePress-bTiOWaRI.js";import"./useFocusRing-lsntDLZI.js";import"./useFocusable-DsRGTtrf.js";import"./dynamic-6if2hzUD.js";import"./LoadingSpinner-D1C6LJRF.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DGFUplit.js";import"./ProgressBar-eED3hhac.js";import"./Label-zeGTIhsR.js";import"./Hidden-BOcIw6_e.js";import"./useLabel-DV7QK5Z-.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BMt8iY1_.js";import"./EmulatedBoldText-BqLHzBf0.js";import"./Text-COsBjVJz.js";import"./AlertIcon-Gt2BTk8C.js";import"./Action-B5Dc0NVU.js";import"./context-jvIE4x8v.js";import"./useStatic-Dks4Zmqh.js";import"./getActionGroupSlot-Dbbh_IGy.js";import"./Popover-Drep9alX.js";import"./useOverlayController-DZqu7_3H.js";import"./OverlayContextProvider-BNfa_JMj.js";import"./Dialog-BGKaFNBq.js";import"./RSPContexts-CY0Qb7bk.js";import"./OverlayArrow-Do6HgTy2.js";import"./useControlledState-BRozYY3l.js";import"./Collection-7_iGck5f.js";import"./CollectionBuilder-BRZppff8.js";import"./SelectionIndicator-Dn3j6216.js";import"./Separator-CviJc1fV.js";import"./SelectionManager-BfDKXohP.js";import"./useEvent-B0QpT_fK.js";import"./useCollator-CG3ZLIsg.js";import"./FocusScope-DhCz7nLk.js";import"./VisuallyHidden-CPqjoTjm.js";import"./Switch-D0ff03JI.js";import"./useFieldComponent-BH0Y7qa0.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CEJOIwSj.js";import"./useFormReset-3JYpIfMS.js";import"./OverlayTrigger-B7jN7CHJ.js";import"./DialogTriggerView-ORMTmxtC.js";import"./Overlay-BObJrktF.js";import"./ButtonView-DmFKtMwL.js";import"./Flex-DA-nAuln.js";import"./Heading-4RYn6yie.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
