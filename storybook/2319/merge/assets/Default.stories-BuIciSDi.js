import{j as r}from"./iframe-lFICOVMG.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-4K-DqIQK.js";import{L as m}from"./Link-CbinGVB-.js";import{H as s}from"./HeaderNavigation-1TYe694y.js";import{B as o}from"./Button-Cf-KBW4_.js";import{T as p}from"./Text-BQwiR71m.js";import{I as h}from"./Image-B0RfXP0C.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-B-1Wx_JH.js";import{C as M,M as c}from"./MenuItem-BV0ScNQ7.js";import{C as I}from"./ContextMenuTrigger-CrQy7955.js";import"./ContextMenuSection-CljVwRlE.js";import{a as T,M as k}from"./Modal-DTjsGLsK.js";import{H}from"./Heading-DcmPVh6J.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C618gI1l.js";import"./index-C8_VRp74.js";import"./index-DUpWbeKv.js";import"./remote-CRPYY61Z.js";import"./useLocalizedStringFormatter-D7SPmL6j.js";import"./context-Sy7BhgRt.js";import"./utils-DhhSlmx9.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-fqIQg8qR.js";import"./usePress-BW_bFHXv.js";import"./useFocusRing-DeOtkCiq.js";import"./useFocusable-ByJ0NNOg.js";import"./dynamic-0KpQiqy3.js";import"./LoadingSpinner-DqvYatLg.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dv_7IODh.js";import"./ProgressBar-CyrV5_rh.js";import"./Label-nxHLTLm-.js";import"./Hidden--bJJbaK3.js";import"./useLabel-A9ok_7_u.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CN95VINd.js";import"./EmulatedBoldText-BsTUWTNh.js";import"./Text-CinvLCxd.js";import"./AlertIcon-BTBT69bo.js";import"./Action-Dv_Htl--.js";import"./context-ClWR88NP.js";import"./useStatic-DBynbgAg.js";import"./getActionGroupSlot-Q4yoFQDr.js";import"./Popover-kZVVNzAg.js";import"./useOverlayController-BG5Eyx3V.js";import"./OverlayContextProvider-DLiN4Bef.js";import"./Dialog-XpC0gjG5.js";import"./RSPContexts-BmMWqIzn.js";import"./OverlayArrow-B2p7lzkF.js";import"./useControlledState-BZJPMeD2.js";import"./Collection-CzN4wOJ8.js";import"./CollectionBuilder-B2841q0A.js";import"./SelectionIndicator-CW-bKP1t.js";import"./Separator-h54hNRT-.js";import"./SelectionManager-DOL2yaSe.js";import"./useEvent-DrI0uKrr.js";import"./useCollator-DxqbkDwo.js";import"./FocusScope-CyJq-kGM.js";import"./VisuallyHidden-BALX4uV5.js";import"./Switch-DBYqspz0.js";import"./useFieldComponent-70N6l4jn.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-YhfkRB4R.js";import"./useFormReset-CPUmIViP.js";import"./OverlayTrigger-NL0Si4MJ.js";import"./DialogTriggerView-B1AVkrcG.js";import"./Overlay-B6B9qh1v.js";import"./ButtonView-CpDocYTn.js";import"./Flex-D3jpNFTE.js";import"./Heading-BZr6A1TW.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
