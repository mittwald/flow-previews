import{j as r}from"./iframe-l3dQPg2D.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-C2C4Ye1P.js";import{L as m}from"./Link-C3SyFAUG.js";import{H as s}from"./HeaderNavigation-BkWxuGuM.js";import{B as o}from"./Button-CVhESpos.js";import{T as p}from"./Text-Cd9ftiQT.js";import{I as h}from"./Image-BTqXmfMm.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-BPsREcLP.js";import{C as M,M as c}from"./MenuItem-C9keqCYD.js";import{C as I}from"./ContextMenuTrigger-hiy0Yh-d.js";import"./ContextMenuSection-C_ZfDCN7.js";import{a as T,M as k}from"./Modal-CraD6Y7r.js";import{H}from"./Heading-Cf_VYr3b.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BopG63Mr.js";import"./index-C4NaKCSa.js";import"./index-BnwDl3XO.js";import"./remote-VRbYHHBV.js";import"./useLocalizedStringFormatter-DUXcPKxv.js";import"./context-bJyTUMD1.js";import"./utils-BpR6PJXM.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-BoIaqFAK.js";import"./usePress-CLrRc3iw.js";import"./useFocusRing-Sg4LsORI.js";import"./useFocusable-CewhyE_c.js";import"./dynamic-CCyGrJK3.js";import"./LoadingSpinner-p4NafINf.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dfp0w4eo.js";import"./ProgressBar-DjNwNSer.js";import"./Label-zTT8xDTv.js";import"./Hidden-D7QtMOwf.js";import"./useLabel-Bgm61Ocu.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-vgtThTGE.js";import"./EmulatedBoldText-CAbtCiS8.js";import"./Text-CND2PMao.js";import"./AlertIcon-C6xXCfYQ.js";import"./Action-BglyJGiG.js";import"./context-BBlsigfO.js";import"./useStatic-BdWyaTNp.js";import"./getActionGroupSlot-Dy_Fxu9H.js";import"./Popover-pewrL_I7.js";import"./useOverlayController-Df50joLL.js";import"./OverlayContextProvider-yNeb3roI.js";import"./Dialog-ByCdR2Sm.js";import"./RSPContexts-D9dFuQ_b.js";import"./OverlayArrow-BBo0Td8e.js";import"./useControlledState-DV6ufSFw.js";import"./Collection-3pd5EYPv.js";import"./CollectionBuilder-BWIBmgEn.js";import"./SelectionIndicator-DJKLLJ3b.js";import"./Separator-70ZL6L0X.js";import"./SelectionManager-D6KTmYmL.js";import"./useEvent-D7GEvC9q.js";import"./useCollator-BSc7Uwep.js";import"./FocusScope-Cs1Wy-O3.js";import"./VisuallyHidden-D5CUP-QC.js";import"./Switch-D2_2gEK2.js";import"./useFieldComponent-CTh-2D00.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BD6TnVKE.js";import"./useFormReset-mKOiKuYb.js";import"./OverlayTrigger-CR9Slz1y.js";import"./DialogTriggerView-iuNPal8A.js";import"./Overlay-Bc-ue0mh.js";import"./ButtonView-DNKUy4ei.js";import"./Flex-DC9g2iGq.js";import"./Heading-D-Y77gHO.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
