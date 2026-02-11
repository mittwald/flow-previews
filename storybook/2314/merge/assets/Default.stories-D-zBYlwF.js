import{j as r}from"./iframe-CtuK0rEJ.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-BSe4G4Pm.js";import{L as m}from"./Link-Bs4WRFZu.js";import{H as s}from"./HeaderNavigation-DCTs5CBq.js";import{B as o}from"./Button-CC2cGGC1.js";import{T as p}from"./Text-CyAseKfN.js";import{I as h}from"./Image-B9Yq-m4j.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-MceGsVvw.js";import{C as M,M as c}from"./MenuItem-BETsrok5.js";import{C as I}from"./ContextMenuTrigger-CVlgkSBU.js";import"./ContextMenuSection-J2A0uHtm.js";import{a as T,M as k}from"./Modal-CVRntsHd.js";import{H}from"./Heading-BbatUer_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BsiSvDfm.js";import"./index-DyfnOEiT.js";import"./index-DPf65gvx.js";import"./remote-DD8nhYq_.js";import"./useLocalizedStringFormatter-C0fwd0wV.js";import"./context-BLHFXQwL.js";import"./utils-C1DNWP44.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-N-Pc0sLJ.js";import"./usePress-Da2cRPrr.js";import"./useFocusRing-Dq2x8hiG.js";import"./useFocusable-AhKszEdS.js";import"./dynamic-6fOzfTlj.js";import"./LoadingSpinner-CJNtrFTB.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CSRC_w1a.js";import"./ProgressBar-D8lgnq4k.js";import"./Label-BIhxl5Mj.js";import"./Hidden-lRNITHFC.js";import"./useLabel-DJNpTGh1.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-Up8UMddv.js";import"./EmulatedBoldText-BeUk81Jn.js";import"./Text-DmIZo_mX.js";import"./AlertIcon-CPMEIwAr.js";import"./Action-PwkWFif3.js";import"./context-CuLUjLGN.js";import"./useStatic-M0CnbsK2.js";import"./getActionGroupSlot-B6ptHBUs.js";import"./Popover-fZyy-KqV.js";import"./useOverlayController-B6-IGISv.js";import"./OverlayContextProvider-C66rhlmO.js";import"./Dialog-DqwEKDxA.js";import"./RSPContexts-Ci8ojbfD.js";import"./OverlayArrow-D5uKmzPJ.js";import"./useControlledState-Cc_BEFH0.js";import"./Collection-B0ADhrnF.js";import"./CollectionBuilder-DAn9FB1h.js";import"./SelectionIndicator-Ds2JAiCA.js";import"./Separator-CEf8TdmS.js";import"./SelectionManager-CRpdvIdx.js";import"./useEvent-D8j21rfZ.js";import"./useCollator-BzRay_B5.js";import"./FocusScope-Cm3IhtBV.js";import"./VisuallyHidden-D1Q1E2fL.js";import"./Switch-BbnIx2y4.js";import"./useFieldComponent-CPjzSNK0.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DPR2q04O.js";import"./useFormReset-C6F9Oqzr.js";import"./OverlayTrigger-Bu3GFQ-B.js";import"./DialogTriggerView-BE2kVzJ4.js";import"./Overlay-B31wJGmZ.js";import"./ButtonView-I97CEkNt.js";import"./Flex-CdQtZ6D_.js";import"./Heading-BKLVTPfM.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
