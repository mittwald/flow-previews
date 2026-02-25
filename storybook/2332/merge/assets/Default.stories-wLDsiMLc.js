import{j as r}from"./iframe-5GKEjLm3.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-B10RUVd-.js";import{L as m}from"./Link-jAKiSqkX.js";import{H as s}from"./HeaderNavigation-DlMvCJGt.js";import{B as o}from"./Button-DbzE4WUt.js";import{T as p}from"./Text-4Jq61r3V.js";import{I as h}from"./Image-HKeXParI.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-BniHAPzD.js";import{C as M,M as c}from"./MenuItem-D2duf7b_.js";import{C as I}from"./ContextMenuTrigger-B1GDRxix.js";import"./ContextMenuSection-BLAYEuJ8.js";import{M as T}from"./ModalTrigger-DE2IYHB7.js";import{M as k}from"./Modal-lgO2eFy3.js";import{H}from"./Heading-BfDqySHg.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BrPxhm-E.js";import"./index-DZHRuSdS.js";import"./index-CxI-AdtT.js";import"./remote-DrqTcZe1.js";import"./useLocalizedStringFormatter-foHAfgmM.js";import"./context-CYoVNjzy.js";import"./utils-DZdTZXxi.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-BEqaOfOz.js";import"./usePress-CYa1OoRC.js";import"./useFocusRing-CsUwZj84.js";import"./useFocusable-BDWe4YTb.js";import"./dynamic-BSdZm6V5.js";import"./LoadingSpinner-Bp8vDBpW.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CslHKHnR.js";import"./ProgressBar-CehyS7IW.js";import"./Label-CD-Ily5W.js";import"./Hidden-CVK_WTqz.js";import"./useLabel-sguPTXZB.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DpyY6Jfh.js";import"./EmulatedBoldText-Dw9vtGzr.js";import"./Text-jTefV10v.js";import"./AlertIcon-xcA2PG-d.js";import"./ActionBatch-C4EMIU3M.js";import"./useOverlayController-DTNq5pfb.js";import"./useStatic-BQSB_Jfu.js";import"./getActionGroupSlot-06aUfNYP.js";import"./Popover-DZrgFB6y.js";import"./OverlayContextProvider-CsuZ0G7f.js";import"./Dialog-BTalxjOJ.js";import"./RSPContexts-AhaMx3-_.js";import"./OverlayArrow-C_Skf-4I.js";import"./useControlledState-D9ovZV70.js";import"./Collection-DOmJuy3e.js";import"./CollectionBuilder-DAbTUazM.js";import"./SelectionIndicator-C_xwSetB.js";import"./Separator-BxdVDEg-.js";import"./SelectionManager-rbmArbuf.js";import"./useEvent-_LgPAmJ5.js";import"./useCollator-COkB7H3x.js";import"./FocusScope-BteWf5AP.js";import"./VisuallyHidden-BfZLOvo3.js";import"./Switch-Dt4C60wz.js";import"./useFieldComponent-B3twwSIL.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-B10ceIL5.js";import"./useFormReset-Bzn3Tj6K.js";import"./OverlayTrigger-DMEpenBq.js";import"./DialogTriggerView-DxHd5f4G.js";import"./Overlay-BOgy6OMv.js";import"./ButtonView-CWXAC1Vh.js";import"./Flex-tVpMcloB.js";import"./Heading-kRLjhOcq.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
