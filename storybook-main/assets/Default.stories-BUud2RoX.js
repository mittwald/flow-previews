import{j as r}from"./iframe-BLisfkW1.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-Chxh05Fa.js";import{L as m}from"./Link-34msnoEh.js";import{H as s}from"./HeaderNavigation-CfCpefod.js";import{B as o}from"./Button-BfYq4-Jl.js";import{T as p}from"./Text-BzdTXRF7.js";import{I as h}from"./Image-B3LhoJRk.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-Cs3MsV-X.js";import{C as M,M as c}from"./MenuItem-DRz9rpZo.js";import{C as I}from"./ContextMenuTrigger-BY25kSqR.js";import"./ContextMenuSection-bY8Y-pvV.js";import{M as T}from"./ModalTrigger-Cns4vlEf.js";import{M as k}from"./Modal-C3_EO7YW.js";import{H}from"./Heading-D7iYFS4a.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DivMJame.js";import"./index-DOES4bKx.js";import"./index-CURFR8tK.js";import"./remote-fMZF2a4s.js";import"./useLocalizedStringFormatter-vseb4VB2.js";import"./context-B09EtTwC.js";import"./utils-B2KexK2G.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-CasiJiIj.js";import"./usePress-Bt2uh0Mh.js";import"./useFocusRing-whNl8W73.js";import"./useFocusable-2bJXkpaN.js";import"./dynamic-B3kpKjwM.js";import"./LoadingSpinner-Bv9Y6jEa.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BryrJTx5.js";import"./ProgressBar-DldYxOmc.js";import"./Label-BayswAfQ.js";import"./Hidden-DTcX35LP.js";import"./useLabel-DktisoZ5.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-1YnzmFhG.js";import"./EmulatedBoldText-w1zEViUr.js";import"./Text-CMQTkDl6.js";import"./AlertIcon-BH2ywHIc.js";import"./ActionBatch-Ba3fo7J6.js";import"./useOverlayController-UaqgI9Sz.js";import"./useStatic-Cf1wupkY.js";import"./getActionGroupSlot-JAeF61ot.js";import"./Popover-CG9tv1E3.js";import"./OverlayContextProvider-DGMJcgiT.js";import"./Dialog-YGNnE7N8.js";import"./RSPContexts-C6v4G0P9.js";import"./OverlayArrow-CazCWSIw.js";import"./useControlledState-BzKS6zrg.js";import"./Collection-B29ecyfu.js";import"./CollectionBuilder-CkN2XN_g.js";import"./SelectionIndicator-DkROylNb.js";import"./Separator-DUCS1p3N.js";import"./SelectionManager-CZqcsdfY.js";import"./useEvent-DXG1g0h1.js";import"./useCollator-BipIKgaT.js";import"./FocusScope-CH3eRbFP.js";import"./VisuallyHidden-y8IU71vp.js";import"./Switch-cT8WhVip.js";import"./useFieldComponent-DG2srt-t.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DrUVyNcG.js";import"./useFormReset-fweVV-SC.js";import"./OverlayTrigger-47H3bobw.js";import"./DialogTriggerView-DSjjCQKo.js";import"./Overlay-3FwDNFry.js";import"./ButtonView-DQ0cot0U.js";import"./Flex-CtHT3-Wb.js";import"./Heading-BRGk0Lny.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
