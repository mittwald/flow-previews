import{j as r}from"./iframe-BV_gLY1W.js";import{u as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-BvnX4fSp.js";import{L as m}from"./Link-Bo-tE7zs.js";import{H as s}from"./HeaderNavigation-BpkbZI6p.js";import{B as o}from"./Button-SSCEZ0RO.js";import{T as p}from"./Text-B1ZcDWdT.js";import{I as h}from"./Image-DUaZMfYQ.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-Dc0rTh7G.js";import{C as M,M as c}from"./MenuItem-ZXKQknjO.js";import{C as I}from"./ContextMenuTrigger-DER3e-kg.js";import"./ContextMenuSection-uCRJ4fX1.js";import{a as T,M as k}from"./Modal-cTNuNu_b.js";import{H}from"./Heading-DoDWvzJr.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DjNrJ_Te.js";import"./index-D8dVI0GG.js";import"./index-iDKz2btu.js";import"./remote-DzXnO2Bt.js";import"./useLocalizedStringFormatter-DG58vGXD.js";import"./context-D0kYsfYD.js";import"./utils-pcZMLEVF.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-BhZlDk36.js";import"./usePress-Cpaxayx2.js";import"./useFocusRing-DHBFiW-v.js";import"./useFocusable-CF0VfUE0.js";import"./dynamic-D0Gso-mt.js";import"./LoadingSpinner-DwHnxPWs.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BTyL1bMd.js";import"./ProgressBar-d-6uKhr8.js";import"./Label-TEYoBhWb.js";import"./Hidden-DpRhW0r1.js";import"./useLabel-BcIwqyBf.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-RRcj6Eel.js";import"./EmulatedBoldText-U0Mbqk2D.js";import"./Text-x_iEgbKh.js";import"./AlertIcon-CdR_G7Yx.js";import"./Action-B44IIYnD.js";import"./context-DsGc8Cs0.js";import"./useStatic-Bro5j9qe.js";import"./getActionGroupSlot-CKRbyaMP.js";import"./Popover-DRPWLktf.js";import"./useOverlayController-CyEqSVnM.js";import"./OverlayContextProvider-Umj4RmK7.js";import"./Dialog-DuYLlPOJ.js";import"./RSPContexts-C37Ie1k0.js";import"./OverlayArrow-BxTjv8xX.js";import"./useControlledState-D8GCi_t3.js";import"./Collection-B2K0MU6U.js";import"./CollectionBuilder-k5dkf4C0.js";import"./SelectionIndicator-Bw1WJJhz.js";import"./Separator-C5PKpWVh.js";import"./SelectionManager-DIHL1TL9.js";import"./useEvent-B4HwFCuu.js";import"./useCollator-DxbGnjFN.js";import"./FocusScope-Cdk-yaL2.js";import"./VisuallyHidden-282mV7GD.js";import"./Switch-nUY0rhJa.js";import"./useFieldComponent-Ciy1vkCA.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DcNS1W1w.js";import"./useFormReset-Ba41Oqje.js";import"./OverlayTrigger-DnOAVCO5.js";import"./DialogTriggerView-Cgqt0eur.js";import"./Overlay-oELGWcQ4.js";import"./ButtonView-ByOlINbI.js";import"./Flex-CQQ8IIeX.js";import"./Heading-CTg1mIVh.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
