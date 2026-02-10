import{j as r}from"./iframe-BAXQY30e.js";import{u as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-NY-vs6K4.js";import{L as m}from"./Link-CMQ5K8Q-.js";import{H as s}from"./HeaderNavigation-DJx7RkMH.js";import{B as o}from"./Button-CvDqM7Lu.js";import{T as p}from"./Text-CsFAJPGd.js";import{I as h}from"./Image-DCBcfCxf.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-BsK31Qqf.js";import{C as M,M as c}from"./MenuItem-BBMlYpLg.js";import{C as I}from"./ContextMenuTrigger-YnZfWB7j.js";import"./ContextMenuSection-CYSyIaWU.js";import{a as T,M as k}from"./Modal-DPS3LEC8.js";import{H}from"./Heading-B7OcLMTv.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BWoWQ3Dz.js";import"./index-D8IPWXYD.js";import"./index-BAu7LBGH.js";import"./remote-X8ibHJNw.js";import"./useLocalizedStringFormatter-D2lE0ZvY.js";import"./context-Ch7cvv9N.js";import"./utils-CPq9a2_3.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-Bjv2U0Px.js";import"./usePress-0WoXV1eK.js";import"./useFocusRing-eOVByyHK.js";import"./useFocusable-B7f7k6Nb.js";import"./dynamic-0Mu-qEnq.js";import"./LoadingSpinner-JX83AFJj.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Ca5Nx2F5.js";import"./ProgressBar-DOlyg40u.js";import"./Label-CoIwZGGV.js";import"./Hidden-CaIV9czF.js";import"./useLabel-XkQiS-6W.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-7M05TLI2.js";import"./EmulatedBoldText-RGEYlPNA.js";import"./Text-CgyRU_jx.js";import"./AlertIcon-C4A5rqth.js";import"./Action-CDH3oaiQ.js";import"./context-DKCDV3-b.js";import"./useStatic-rplOn2Qs.js";import"./getActionGroupSlot-CKOsA57z.js";import"./Popover-QPtZRDcu.js";import"./useOverlayController-BH8EoD-J.js";import"./OverlayContextProvider-CtvKPXhV.js";import"./Dialog-BnZvghEV.js";import"./RSPContexts-D7b7jdF8.js";import"./OverlayArrow-DrnF7GNT.js";import"./useControlledState-BIans2ur.js";import"./Collection-C9Jq2g2r.js";import"./CollectionBuilder-B4l66tZC.js";import"./SelectionIndicator-m0lWLhXd.js";import"./Separator-5yzWA0zP.js";import"./SelectionManager-DXFhF9eC.js";import"./useEvent-KMkh1PvS.js";import"./useCollator-DxEFZJkY.js";import"./FocusScope-PoiaPb2X.js";import"./VisuallyHidden-qM1rInXZ.js";import"./Switch-BU_mJz-I.js";import"./useFieldComponent-RBMXOPsB.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DMcDxhma.js";import"./useFormReset-CqoQKslx.js";import"./OverlayTrigger-CKjWJPQI.js";import"./DialogTriggerView-BJJ1pvyx.js";import"./Overlay-CKSBlJv6.js";import"./ButtonView-DderywPS.js";import"./Flex-CDS-bgHv.js";import"./Heading-o5Ph-k-z.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
