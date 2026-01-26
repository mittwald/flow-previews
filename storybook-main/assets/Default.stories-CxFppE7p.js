import{j as r}from"./iframe-B-_izELn.js";import{q as d,a1 as l,_ as g,u,a2 as x}from"./IconWarning-DXXSRvhn.js";import{L as m}from"./Link-bJ7V2ojH.js";import{H as s}from"./HeaderNavigation-D00SoUC8.js";import{B as o}from"./Button-rB1lHab_.js";import{T as p}from"./Text-B9UK706u.js";import{I as h}from"./Image-S3SsvS4A.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-Bs5eRb-P.js";import{C as M,M as c}from"./ContextMenu-PvF5Gfl6.js";import{C as I}from"./ContextMenuTrigger-DTXkuttU.js";import"./ContextMenuSection-Cd3ymo9B.js";import{a as T,M as k}from"./Modal-D5RnYTrC.js";import{H}from"./Heading-BAMsaaGA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CP4SCJWM.js";import"./index-CcQr3Ju_.js";import"./index-C24wTi9Q.js";import"./remote-DY2XWwFP.js";import"./useLocalizedStringFormatter-BEnL5M6A.js";import"./context-CP_ivtNk.js";import"./utils-CTzaLK4l.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-CDCEcfQ2.js";import"./useFocus-BKzgn786.js";import"./useFocusRing-DHjGYA3Q.js";import"./useFocusable-I-aSrCr_.js";import"./dynamic-bdsqC1kS.js";import"./LoadingSpinner-BCeR-IPA.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-RawUYYof.js";import"./ProgressBar-CGHlOl5l.js";import"./Label-DUJ6ba3Y.js";import"./Hidden-Ud3q5koP.js";import"./useLabel-DZiDffWU.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-C9rDHpHO.js";import"./EmulatedBoldText-DO19SLv9.js";import"./Text-Cbq-V_qs.js";import"./AlertIcon-DHh3kTXL.js";import"./Switch-BVcAR7hN.js";import"./useFieldComponent-Kyt2SdHG.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-C7JUTu28.js";import"./useFormReset-BUoUtOhQ.js";import"./useControlledState-tdUQVzVH.js";import"./VisuallyHidden-DwaExAJM.js";import"./Dialog-C6Hf8kgU.js";import"./RSPContexts-k_uvwm8O.js";import"./OverlayArrow-C1kYwcM3.js";import"./Collection-BlKc58PT.js";import"./CollectionBuilder-C9MyseWf.js";import"./SelectionIndicator-ey4emqqq.js";import"./Separator-xctm41Qr.js";import"./SelectionManager-Bstf7-gd.js";import"./useEvent-DwiqP_vq.js";import"./useCollator-Sj9w00om.js";import"./FocusScope-BQUCV4aX.js";import"./Action-CmZvSofW.js";import"./context--GYGv0Su.js";import"./useStatic-k4uG0_kr.js";import"./getActionGroupSlot-DlereTwl.js";import"./Popover-BgKMlpHY.js";import"./useOverlayController-DRATrlGn.js";import"./OverlayContextProvider-CZWz1i-_.js";import"./OverlayTrigger-DaYOrCfk.js";import"./DialogTriggerView-C1LY7RiB.js";import"./Overlay-Du0ni3rj.js";import"./ButtonView-BKoxVURF.js";import"./Flex-DfUqAA4Y.js";import"./Heading-DVKq7Ots.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const zr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,zr as __namedExportsOrder,wr as default};
